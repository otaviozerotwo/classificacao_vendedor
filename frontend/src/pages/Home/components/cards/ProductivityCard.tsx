import { IMaskInput } from "react-imask"
import { Card, CardTitle, InputGroup, Row } from "../../styles"

const ProductivityCard = ({ form }) => (
  <>
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
  </>
)

export default ProductivityCard