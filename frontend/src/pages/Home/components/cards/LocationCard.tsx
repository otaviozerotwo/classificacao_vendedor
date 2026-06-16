import type { FormProps } from "../../../../interfaces/FormProps";
import { Card, CardTitle, InputGroup } from "../../styles";

const LocationCard = ({ form }: FormProps) => (
  <>
    <Card>
      <CardTitle>
        <h3>Localização</h3>
      </CardTitle>
      <InputGroup>
        <label htmlFor="city">CIDADE</label>
        <select
          name="city"
          id="city"
          value={form.values.city}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
        >
          <option value="">Selecione uma cidade</option>
          <option value="1">Araxá</option>
          <option value="3">Carmo do Paranaíba</option>
          <option value="4">Conceição das Alagoas</option>
          <option value="5">Coromandel</option>
          <option value="6">Ibiá</option>
          <option value="7">João Pinheiro</option>
          <option value="8">Lagoa Formosa</option>
          <option value="9">Monte Carmelo</option>
          <option value="10">Paracatu</option>
          <option value="11">Patos de Minas</option>
          <option value="12">Patrocínio</option>
          <option value="13">Presidente Olegário</option>
          <option value="14">São Gotardo</option>
          <option value="15">Serra do Salitre</option>
          <option value="16">Uberaba</option>
          <option value="17">Unaí</option>
          <option value="18">Vazante</option>
        </select>
      </InputGroup>
    </Card>
  </>
)

export default LocationCard