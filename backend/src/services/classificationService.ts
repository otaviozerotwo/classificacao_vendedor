import { model } from '~/model/model.js';

export const features = [
  'atingimento_meta',
  'vendas_por_dia',
  'atendimentos_por_dia',
  'itens_por_atendimento',
  'media_atingimento_3m'
] as const

export type Indicators = Record<typeof features[number], number>

export class InputError extends Error {}

type TreeNode = { 
  readonly id: string; 
  readonly score: string; 
  readonly count: number; 
  readonly children: readonly TreeNode[]; 
  readonly predicate?: { readonly field: string; 
  readonly operator: string; 
  readonly value: number } 
}

export function predict(data: Indicators) {
  for (const key of features) {
    if (typeof data[key] !== 'number' || !Number.isFinite(data[key]) || data[key] < 0) {
      throw new InputError(`Indicador inválido: ${key}`)
    }
  }

  let node: TreeNode = model
  const path = [node.id]
  
  while (node.children.length) {
    const next = node.children.find(child => {
      const p = child.predicate!
      const value = data[p.field as keyof Indicators]
      
      return p.operator === 'lessOrEqual' ? value <= p.value : value > p.value
    })

    if (!next) {
      throw new InputError('Não foi possível percorrer a árvore.')
    }

    node = next
    path.push(node.id)
  }
  
  return { prediction: node.score, leafId: node.id, path }
}

function positive(value: unknown, label: string, allowZero = false, integer = false): number {
  if (typeof value !== 'number' || !Number.isFinite(value) || (allowZero ? value < 0 : value <= 0) || (integer && !Number.isInteger(value))) {
    throw new InputError(`Valor inválido: ${label}.`)
  }
  
  return value
}

export function classify(input: unknown) {
  if (!input || typeof input !== 'object') {
    throw new InputError('Informe os dados dos três meses.')
  }

  const body = input as Record<string, unknown>

  if (
    typeof body.referenceMonth !== 'string' || 
    !/^[0-9]{4}-(0[1-9]|1[0-2])$/.test(body.referenceMonth) || 
    Number(body.referenceMonth.slice(0,4)) < 1900 || 
    Number(body.referenceMonth.slice(0,4)) > 9998
  ) {
    throw new InputError('Informe um mês válido entre 1900 e 9998.')
  }

  if (!Array.isArray(body.history) || body.history.length !== 3) {
    throw new InputError('Informe exatamente três meses, do mais antigo ao atual.')
  }

  const ratios = body.history.map((entry: unknown) => {
    if (!entry || typeof entry !== 'object') {
      throw new InputError('Histórico inválido.');
    }

    const m = entry as Record<string, unknown>

    return positive(m.sales, 'vendas', true) / positive(m.target, 'meta')
  })

  const current = body.history[2] as Record<string, unknown>
  const days = positive(body.daysWorked, 'dias trabalhados', false, true)
  const [year, month] = body.referenceMonth.split('-').map(Number) as [number, number]

  if (days > new Date(Date.UTC(year, month, 0)).getUTCDate()) {
    throw new InputError('Dias trabalhados excedem os dias do mês.')
  }

  const customers = positive(body.customers, 'atendimentos', false, true)
  const items = positive(body.items, 'itens vendidos', true, true)
  const indicators: Indicators = {
    atingimento_meta: ratios[2]!,
    vendas_por_dia: (current.sales as number) / days,
    atendimentos_por_dia: customers / days,
    itens_por_atendimento: items / customers,
    media_atingimento_3m: (ratios[0]! + ratios[1]! + ratios[2]!) / 3,
  }

  const targetMonth = `${month === 12 ? year + 1 : year}-${String(month === 12 ? 1 : month + 1).padStart(2, '0')}`

  return {
    ...predict(indicators),
    indicators,
    targetMonth,
    modelVersion: 'modelo_final_120',
    synthetic: true
  }
}