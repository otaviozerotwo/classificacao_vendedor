import { useState } from 'react'
import type { FormEvent } from 'react'
import './styles/index.css'

type Result = {
  prediction: string
  targetMonth: string
  indicators: Record<string, number>
}

const names: Record<string, string> = {
  atingimento_meta: 'Atingimento no mês atual',
  media_atingimento_3m: 'Média de atingimento em 3 meses',
  vendas_por_dia: 'Vendas por dia',
  atendimentos_por_dia: 'Atendimentos por dia',
  itens_por_atendimento: 'Itens por atendimento'
}

function monthLabel(value: string | undefined, offset = 0) {
  if (!value) return 'Mês'
  const [y, m] = value.split('-').map(Number)
  if (!y || !m) return 'Mês'
  return new Intl.DateTimeFormat('pt-BR', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC'
  }).format(new Date(Date.UTC(y, m - 1 + offset, 1)))
}

export default function App() {
  const [month, setMonth] = useState('2025-06')
  const [history, setHistory] = useState([
    { target: '', sales: '' },
    { target: '', sales: '' },
    { target: '', sales: '' }
  ])
  const [days, setDays] = useState('')
  const [customers, setCustomers] = useState('')
  const [items, setItems] = useState('')
  const [result, setResult] = useState<Result | null>(null)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  function update(i: number, field: 'target' | 'sales', value: string) {
    setHistory((old) =>
      old.map((row, j) => (i === j ? { ...row, [field]: value } : row))
    )
  }

  async function submit(event: FormEvent) {
    event.preventDefault()
    setError('')
    setResult(null)
    setBusy(true)

    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL ?? '/api/v1',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          signal: AbortSignal.timeout(15000),
          body: JSON.stringify({
            referenceMonth: month,
            history: history.map((row) => ({
              target: Number(row.target),
              sales: Number(row.sales)
            })),
            daysWorked: Number(days),
            customers: Number(customers),
            items: Number(items)
          })
        }
      )

      const data = await response.json()

      if (!response.ok)
        throw new Error(data.message || 'Erro ao gerar a previsão.')

      if (!data.prediction || !data.targetMonth || !data.indicators)
        throw new Error('Resposta inesperada da API.')

      setResult(data)
    } catch (e) {
      setError(
        e instanceof Error && e.name !== 'TypeError'
          ? e.message
          : 'Não foi possível acessar a API. Verifique se o backend está em execução.'
      )
    } finally {
      setBusy(false)
    }
  }

  function example() {
    setMonth('2025-06')
    setHistory([
      { target: '50000', sales: '54000' },
      { target: '50000', sales: '52000' },
      { target: '50000', sales: '55000' }
    ])
    setDays('22')
    setCustomers('600')
    setItems('1500')
    setResult(null)
    setError('')
  }

  return (
    <>
      <header>
        <span className="brand">Classificador de Vendedores</span>
      </header>
      <main>
        <div className="intro">
          <p className="eyebrow">APOIO À TOMADA DE DECISÃO</p>
          <h1>Previsão de atingimento da meta</h1>
          <p>
            Use o histórico dos três últimos meses completos para estimar se a
            meta será atingida no mês seguinte.
          </p>
        </div>
        <aside className="notice">
          <strong>Demonstração acadêmica com dados sintéticos.</strong> O modelo
          não foi validado com dados reais de farmácias. A previsão pode estar
          incorreta.
        </aside>
        <form
          onSubmit={submit}
          onChange={() => {
            setResult(null)
            setError('')
          }}
        >
          <fieldset disabled={busy}>
            <section className="card">
              <div className="section-head">
                <h2>1. Período de referência</h2>
                <button className="secondary" type="button" onClick={example}>
                  Preencher exemplo fictício
                </button>
              </div>
              <label className="month">
                Último mês completo
                <input
                  type="month"
                  required
                  min="1900-03"
                  max="9998-12"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                />
              </label>
              <p className="hint">
                Previsão para <strong>{monthLabel(month, 1)}</strong>. Informe
                valores do mesmo vendedor nos três meses.
              </p>
            </section>
            <section className="card">
              <h2>2. Histórico de vendas</h2>
              <div className="months">
                {history.map((row, i) => (
                  <div className="month-card" key={i}>
                    <h3>{monthLabel(month, i - 2)}</h3>
                    <label>
                      Meta de vendas (R$)
                      <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        required
                        value={row.target}
                        onChange={(e) => update(i, 'target', e.target.value)}
                      />
                    </label>
                    <label>
                      Vendas realizadas (R$)
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        required
                        value={row.sales}
                        onChange={(e) => update(i, 'sales', e.target.value)}
                      />
                    </label>
                  </div>
                ))}
              </div>
            </section>
            <section className="card">
              <h2>3. Atividade em {monthLabel(month)}</h2>
              <div className="activity">
                <label>
                  Dias trabalhados
                  <input
                    type="number"
                    min="1"
                    max="31"
                    step="1"
                    required
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                  />
                </label>
                <label>
                  Atendimentos realizados
                  <input
                    type="number"
                    min="1"
                    step="1"
                    required
                    value={customers}
                    onChange={(e) => setCustomers(e.target.value)}
                  />
                </label>
                <label>
                  Itens vendidos
                  <input
                    type="number"
                    min="0"
                    step="1"
                    required
                    value={items}
                    onChange={(e) => setItems(e.target.value)}
                  />
                </label>
              </div>
              <p className="hint">
                Atendimentos representam ocorrências de atendimento, não
                necessariamente clientes únicos.
              </p>
            </section>
            <button className="primary" type="submit">
              {busy ? 'Calculando previsão…' : 'Prever próximo mês'}
            </button>
          </fieldset>
        </form>
        {error && (
          <p role="alert" className="error">
            {error}
          </p>
        )}
        <div aria-live="polite">
          {result && (
            <section className="card result">
              <p className="eyebrow">
                PREVISÃO PARA {monthLabel(result.targetMonth).toUpperCase()}
              </p>
              <h2>
                {result.prediction === 'Atingiu'
                  ? 'Atingirá a meta'
                  : 'Não atingirá a meta'}
              </h2>
              <p>
                Estimativa do modelo, sujeita a erro. Considere o contexto antes
                de tomar uma decisão.
              </p>
              <h3>Indicadores calculados</h3>
              <dl>
                {Object.entries(result.indicators).map(([key, value]) => (
                  <div key={key}>
                    <dt>{names[key]}</dt>
                    <dd>
                      {key.includes('atingimento')
                        ? (value * 100).toLocaleString('pt-BR', {
                            maximumFractionDigits: 2
                          }) + '%'
                        : value.toLocaleString('pt-BR', {
                            maximumFractionDigits: 2
                          })}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          )}
        </div>
        <footer>
          Experimento sintético · Teste temporal: 600 registros · Acurácia:
          66,83%
          <br />
          Referência simples (repetir o mês atual): 67,33%. A árvore não superou
          essa referência no teste.
        </footer>
      </main>
    </>
  )
}
