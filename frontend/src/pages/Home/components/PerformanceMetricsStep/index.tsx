import { NumericFormat } from "react-number-format"
import { Card, CardTitle, GridContainer, InputGroup, Row } from "../../styles"
import { IMaskInput } from "react-imask"

const PerformanceMetricsStep = ({ form }) => {
  return (
    <>
      <h2>Métricas de Desempenho</h2>
      <p>
        Preencha os dados de metas definidas e os resultados reais por categoria
        de indicador.
      </p>
      <GridContainer>
        <Card>
          <CardTitle>
            <h3>Desempenho de Vendas</h3>
          </CardTitle>
          <Row>
            <InputGroup>
              <label htmlFor="salesTarget">META DE VENDA</label>
              <NumericFormat
                type="text"
                id="salesTarget"
                name="salesTarget"
                value={form.values.salesTarget}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder="0.00"
                decimalSeparator="."
                decimalScale={2}
                allowNegative={false}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="salesCompleted">VENDA REALIZADA</label>
              <NumericFormat
                type="text"
                id="salesCompleted"
                name="salesCompleted"
                value={form.values.salesCompleted}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder="0.00"
                decimalSeparator="."
                decimalScale={2}
                allowNegative={false}
              />
            </InputGroup>
          </Row>
          <InputGroup>
            <label htmlFor="grossMargin">MARGEM BRUTA</label>
            <NumericFormat
              type="text"
              id="grossMargin"
              name="grossMargin"
              value={form.values.grossMargin}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              placeholder="0.00"
              decimalSeparator="."
              decimalScale={2}
              allowNegative={false}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="salesReturned">DEVOLUÇÃO REALIZADA</label>
            <NumericFormat
              type="text"
              id="salesReturned"
              name="salesReturned"
              value={form.values.salesReturned}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              placeholder="0.00"
              decimalSeparator="."
              decimalScale={2}
              allowNegative={false}
            />
          </InputGroup>
        </Card>
        <Card>
          <CardTitle>
            <h3>Descontos</h3>
          </CardTitle>
          <Row>
            <InputGroup>
              <label htmlFor="totalDiscountTarget">
                META DE DESCONTO TOTAL
              </label>
              <NumericFormat
                type="text"
                id="totalDiscountTarget"
                name="totalDiscountTarget"
                value={form.values.totalDiscountTarget}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder="0.00"
                decimalSeparator="."
                decimalScale={2}
                allowNegative={false}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="totalDiscountCompleted">
                DESCONTO TOTAL REALIZADO
              </label>
              <NumericFormat
                type="text"
                id="totalDiscountCompleted"
                name="totalDiscountCompleted"
                value={form.values.totalDiscountCompleted}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder="0.00"
                decimalSeparator="."
                decimalScale={2}
                allowNegative={false}
              />
            </InputGroup>
          </Row>
          <Row>
            <InputGroup>
              <label htmlFor="budgetDiscountTarget">
                META DESCONTO DE VERBA
              </label>
              <NumericFormat
                type="text"
                id="budgetDiscountTarget"
                name="budgetDiscountTarget"
                value={form.values.budgetDiscountTarget}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder="0.00"
                decimalSeparator="."
                decimalScale={2}
                allowNegative={false}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="budgetDiscountCompleted">
                DESCONTO DE VERBA REALIZADO
              </label>
              <NumericFormat
                type="text"
                id="budgetDiscountCompleted"
                name="budgetDiscountCompleted"
                value={form.values.budgetDiscountCompleted}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder="0.00"
                decimalSeparator="."
                decimalScale={2}
                allowNegative={false}
              />
            </InputGroup>
          </Row>
        </Card>
        <Card>
          <CardTitle>
            <h3>Produtividade</h3>
          </CardTitle>
          <Row>
            <InputGroup>
              <label htmlFor="customersTarget">META DE CLIENTES</label>
              <IMaskInput
                type="text"
                id="customersTarget"
                name="customersTarget"
                value={form.values.customersTarget}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder="0"
                mask="000000"
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="customersServed">CLIENTES ATENDIDOS</label>
              <IMaskInput
                type="text"
                id="customersServed"
                name="customersServed"
                value={form.values.customersServed}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder="0"
                mask="000000"
              />
            </InputGroup>
          </Row>
          <Row>
            <InputGroup>
              <label htmlFor="itemTarget">META DE ITENS</label>
              <IMaskInput
                type="text"
                id="itemTarget"
                name="itemTarget"
                value={form.values.itemTarget}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder="0"
                mask="000000"
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="itemsSold">ITENS VENDIDOS</label>
              <IMaskInput
                type="text"
                id="itemsSold"
                name="itemsSold"
                value={form.values.itemsSold}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                placeholder="0"
                mask="000000"
              />
            </InputGroup>
          </Row>
        </Card>
      </GridContainer>
    </>
  )
}

export default PerformanceMetricsStep