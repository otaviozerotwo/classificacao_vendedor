import { IMaskInput } from "react-imask"
import { Card, CardTitle, GridContainer, InputGroup, Row } from "../../styles"

const BasicInfosStep = ({ form }) => {
  return (
    <>
      <h2>Informações Básicas do Vendedor</h2>
      <p>
        Preencha os dados de identificação e contexto do vendedor para iniciar a
        avaliação.
      </p>
      <GridContainer>
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
      </GridContainer>
    </>
  )
}

export default BasicInfosStep