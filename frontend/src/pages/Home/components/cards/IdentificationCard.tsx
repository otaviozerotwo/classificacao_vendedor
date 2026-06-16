import type { FormProps } from "../../../../interfaces/FormProps";
import { Card, CardTitle, InputGroup } from "../../styles";

const IdentificationCard = ({ form }: FormProps) => (
  <Card>
    <CardTitle>
      <h3>Identificação</h3>
    </CardTitle>
    <InputGroup>
      <label htmlFor="fullName">NOME COMPLETO</label>
      <input
        id="fullName"
        type="text"
        name="fullName"
        placeholder="Ex: José da Silva"
        value={form.values.fullName}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      />
    </InputGroup>
    <InputGroup>
      <label htmlFor="role">CARGO</label>
      <select
        name="role"
        id="role"
        value={form.values.role}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      >
        <option value="">Selecione um cargo</option>
        <option value="3">Atendente de Farmácia</option>
        <option value="2">Atendente de Televendas</option>
        <option value="4">Atendente de Manipulação</option>
        <option value="5">Auxiliar de Farmácia</option>
        <option value="10">Operador de Vendas</option>
        <option value="9">Operador de Caixa</option>
        <option value="6">Coordenador de Equipe</option>
        <option value="7">Farmacêutico</option>
        <option value="8">Gerente</option>
      </select>
    </InputGroup>
    <InputGroup>
      <label htmlFor="sex">SEXO</label>
      <select
        name="sex"
        id="sex"
        value={form.values.sex}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
      >
        <option value="">Selecione o sexo</option>
        <option value="1">Masculino</option>
        <option value="0">Feminino</option>
      </select>
    </InputGroup>
  </Card>
)

export default IdentificationCard