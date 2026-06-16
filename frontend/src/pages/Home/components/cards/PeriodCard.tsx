import { IMaskInput } from "react-imask";
import { Card, CardTitle, InputGroup, Row } from "../../styles";
import type { FormProps } from "../../../../interfaces/FormProps";

const PeriodCard = ({ form }: FormProps) => (
  <>
    <Card>
      <CardTitle>
        <h3>Período</h3>
      </CardTitle>
      <Row>
        <InputGroup>
          <label htmlFor="year">ANO</label>
          <IMaskInput
            type="text"
            id="year"
            name="year"
            placeholder="Ex: 2026"
            style={{ width: '88px' }}
            value={form.values.year}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            mask="0000"
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor="month">MÊS</label>
          <IMaskInput
            type="text"
            id="month"
            name="month"
            min={1}
            max={12}
            placeholder="Ex: 01"
            style={{ width: '88px' }}
            value={form.values.month}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            mask="00"
          />
        </InputGroup>
      </Row>
      <InputGroup>
        <label htmlFor="daysWorked">DIAS TRABALHADOS</label>
        <IMaskInput
          type="text"
          id="daysWorked"
          name="daysWorked"
          max={31}
          placeholder="Ex: 15"
          style={{ width: '200px' }}
          value={form.values.daysWorked}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          mask="00"
        />
      </InputGroup>
    </Card>
  </>
)

export default PeriodCard