import { NumericFormat } from "react-number-format"
import { Card, CardTitle, InputGroup, Row } from "../../styles"
import type { FormProps } from "../../../../interfaces/FormProps"

const SalesPermanceCard = ({ form }: FormProps) => (
  <>
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
  </>
)

export default SalesPermanceCard