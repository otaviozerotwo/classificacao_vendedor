import { NumericFormat } from "react-number-format"
import { Card, CardTitle, InputGroup, Row } from "../../styles"
import type { FormProps } from "../../../../interfaces/FormProps"

const DiscountsCard = ({ form }: FormProps) => (
  <>
    <Card>
      <CardTitle>
        <h3>Descontos</h3>
      </CardTitle>
      <Row>
        <InputGroup>
          <label htmlFor="totalDiscountTarget">META DE DESCONTO TOTAL</label>
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
          <label htmlFor="budgetDiscountTarget">META DESCONTO DE VERBA</label>
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
  </>
)

export default DiscountsCard