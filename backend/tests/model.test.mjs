import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { predict, classify, features, InputError } from '../dist/services/classificationService.js'
import { buildApp } from '../dist/app.js'
// CSV produzido pelo KNIME: campos simples, sem vírgulas ou quebras internas.
const lines = readFileSync(new URL('./previsoes_teste.csv', import.meta.url), 'utf8').trim().split(/\r?\n/)
const split = line => line.split(',').map(value => value.replace(/^"|"$/g, ''))
const headers = split(lines.shift())
const rows = lines.map(line => Object.fromEntries(split(line).map((v, i) => [headers[i], v])))
const payload = { referenceMonth: '2025-06', history: [{ target: 50000, sales: 54000 }, { target: 50000, sales: 52000 }, { target: 50000, sales: 55000 }], daysWorked: 22, customers: 600, items: 1500 }
test('600 previsões idênticas ao KNIME e matriz de confusão esperada', () => {
  assert.equal(rows.length, 600)
  const matrix = [[0,0],[0,0]]
  for (const row of rows) {
    const data = Object.fromEntries(features.map(f => [f, Number(row[f])]))
    const actual = predict(data).prediction
    assert.equal(actual, row['Prediction (atingiu_meta_mes_seguinte)'])
    matrix[row.atingiu_meta_mes_seguinte === 'Atingiu' ? 0 : 1][actual === 'Atingiu' ? 0 : 1]++
  }
  assert.deepEqual(matrix, [[121,94],[105,280]])
})
test('limite exato da raiz e entrada ausente', () => {
  const data = Object.fromEntries(features.map(f => [f, 1]))
  data.media_atingimento_3m = 1.0130836897874627
  assert.equal(predict(data).prediction, 'Nao_atingiu')
  data.media_atingimento_3m += 1e-12
  assert.equal(predict(data).prediction, 'Atingiu')
  delete data.atingimento_meta
  assert.throws(() => predict(data), InputError)
})
test('cálculo dos indicadores e virada do ano', () => {
  const result = classify({ ...payload, referenceMonth: '2025-12' })
  assert.equal(result.targetMonth, '2026-01')
  assert.equal(result.indicators.media_atingimento_3m, (1.08 + 1.04 + 1.1) / 3)
  assert.equal(result.indicators.vendas_por_dia, 2500)
  assert.equal(result.indicators.itens_por_atendimento, 2.5)
  assert.equal(result.prediction, 'Atingiu')
})
test('rejeita denominadores zero, meses inválidos e contagens fracionadas', () => {
  for (const patch of [{ daysWorked: 0 }, { customers: 0 }, { items: -1 }, { daysWorked: 2.5 }, { referenceMonth: '2025-13' }, { history: [{target:0,sales:1},...payload.history.slice(1)] }, { referenceMonth: '2025-02', daysWorked: 30 }]) assert.throws(() => classify({ ...payload, ...patch }), InputError)
})
test('API responde previsão e rejeita dados inválidos sem travar', async () => {
  const server = buildApp().listen(0, '127.0.0.1')
  await new Promise(resolve => server.once('listening', resolve))
  try {
    const url = `http://127.0.0.1:${server.address().port}/api/v1`
    const send = body => fetch(url, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(body) })
    const ok = await send(payload)
    assert.equal(ok.status, 200)
    assert.equal((await ok.json()).prediction, 'Atingiu')
    const bad = await send({})
    assert.equal(bad.status, 400)
    assert.ok((await bad.json()).message)
  } finally { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)) }
})
