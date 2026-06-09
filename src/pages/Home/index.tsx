import { useState } from 'react'
import {
  Button,
  Card,
  CardTitle,
  Container,
  Footer,
  GridContainer,
  InputGroup,
  Row
} from './styles'
import { RiResetLeftLine } from 'react-icons/ri'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

type Step = 'basicInfos' | 'performanceMetrics' | 'resultClassification'

const Home = () => {
  const [step, setStep] = useState<Step>('basicInfos')
  const isBackButtonDisabled = step === 'basicInfos'

  const handleContinue = () => {
    setStep('performanceMetrics')
  }

  const handleBack = () => {
    setStep('basicInfos')
  }

  return (
    <Container>
      <div>
        <form>
          {step === 'basicInfos' ? (
            <>
              <h2>Informações Básicas do Vendedor</h2>
              <p>
                Preencha os dados de identificação e contexto do vendedor para
                iniciar a avaliação.
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
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="role">CARGO</label>
                    <select name="role" id="role">
                      <option value="" disabled selected hidden>
                        Selecione um cargo
                      </option>
                      <option value="atendenteFarmacia">
                        Atendente de Farmácia
                      </option>
                      <option value="atendenteTelevendas">
                        Atendente de Televendas
                      </option>
                      <option value="atendenteManipulacao">
                        Atendente de Manipulação
                      </option>
                      <option value="auxiliarFarmacia">
                        Auxiliar de Farmácia
                      </option>
                      <option value="operadorVendas">Operador de Vendas</option>
                      <option value="operadorCaixa">Operador de Caixa</option>
                      <option value="coordenadorEquipe">
                        Coordenador de Equipe
                      </option>
                      <option value="farmaceutico">Farmacêutico</option>
                      <option value="gerente">Gerente</option>
                    </select>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="sex">SEXO</label>
                    <select name="sex" id="sex">
                      <option value="" disabled selected hidden>
                        Selecione o sexo
                      </option>
                      <option value="male">Masculino</option>
                      <option value="female">Feminino</option>
                    </select>
                  </InputGroup>
                </Card>
                <Card>
                  <CardTitle>
                    <h3>Localização</h3>
                  </CardTitle>
                  <InputGroup>
                    <label htmlFor="city">CIDADE</label>
                    <select name="city" id="city">
                      <option value="" disabled selected hidden>
                        Selecione uma cidade
                      </option>
                      <option value="araxa">Araxá</option>
                      <option value="carmoParanaiba">Carmo do Paranaíba</option>
                      <option value="conceicaoAlagoas">
                        Conceição das Alagoas
                      </option>
                      <option value="coromandel">Coromandel</option>
                      <option value="ibia">Ibiá</option>
                      <option value="joaoPinheiro">João Pinheiro</option>
                      <option value="lagoaFormosa">Lagoa Formosa</option>
                      <option value="monteCarmelo">Monte Carmelo</option>
                      <option value="paracatu">Paracatu</option>
                      <option value="patosDeMinas">Patos de Minas</option>
                      <option value="patrocinio">Patrocínio</option>
                      <option value="presidenteOlegario">
                        Presidente Olegário
                      </option>
                      <option value="saoGotardo">São Gotardo</option>
                      <option value="serraDoSalitre">Serra do Salitre</option>
                      <option value="uberaba">Uberaba</option>
                      <option value="unai">Unaí</option>
                      <option value="vazante">Vazante</option>
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
                      <input
                        type="number"
                        id="year"
                        name="year"
                        min={2014}
                        placeholder="2026"
                        style={{ width: '84px' }}
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="month">MÊS</label>
                      <input
                        type="number"
                        id="month"
                        name="month"
                        min={1}
                        max={12}
                        placeholder="01"
                        style={{ width: '84px' }}
                      />
                    </InputGroup>
                  </Row>
                  <InputGroup>
                    <label htmlFor="daysWorked">DIAS TRABALHADOS</label>
                    <input
                      type="number"
                      id="daysWorked"
                      name="daysWorked"
                      max={31}
                      min={1}
                      placeholder="Ex: 15"
                      style={{ width: '192px' }}
                    />
                  </InputGroup>
                </Card>
              </GridContainer>
            </>
          ) : step === 'performanceMetrics' ? (
            <>
              <h2>Métricas de Desempenho</h2>
              <p>
                Preencha os dados de metas definidas e os resultados reais por
                categoria de indicador.
              </p>
              <GridContainer>
                <Card>
                  <CardTitle>
                    <h3>Desempenho de Vendas</h3>
                  </CardTitle>
                  <Row>
                    <InputGroup>
                      <label htmlFor="salesTarget">META DE VENDA</label>
                      <input
                        type="number"
                        id="salesTarget"
                        name="salesTarget"
                        min={1}
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="salesCompleted">VENDA REALIZADA</label>
                      <input
                        type="number"
                        id="salesCompleted"
                        name="salesCompleted"
                        min={1}
                      />
                    </InputGroup>
                  </Row>
                  <InputGroup>
                    <label htmlFor="grossMargin">MARGEM BRUTA</label>
                    <input
                      type="number"
                      id="grossMargin"
                      name="grossMargin"
                      min={1}
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="salesReturned">DEVOLUÇÃO REALIZADA</label>
                    <input
                      type="number"
                      id="salesReturned"
                      name="salesReturned"
                      min={1}
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
                      <input
                        type="number"
                        id="totalDiscountTarget"
                        name="totalDiscountTarget"
                        min={1}
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="totalDiscountCompleted">
                        DESCONTO TOTAL REALIZADO
                      </label>
                      <input
                        type="number"
                        id="totalDiscountCompleted"
                        name="totalDiscountCompleted"
                        min={1}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup>
                      <label htmlFor="budgetDiscountTarget">
                        META DESCONTO DE VERBA
                      </label>
                      <input
                        type="number"
                        id="budgetDiscountTarget"
                        name="budgetDiscountTarget"
                        min={1}
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="budgetDiscountCompleted">
                        DESCONTO DE VERBA REALIZADO
                      </label>
                      <input
                        type="number"
                        id="budgetDiscountCompleted"
                        name="budgetDiscountCompleted"
                        min={1}
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
                      <input
                        type="number"
                        id="customersTarget"
                        name="customersTarget"
                        min={1}
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="customersServed">
                        CLIENTES ATENDIDOS
                      </label>
                      <input
                        type="number"
                        id="customersServed"
                        name="customersServed"
                        min={1}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup>
                      <label htmlFor="itemTarget">META DE ITENS</label>
                      <input
                        type="number"
                        id="itemTarget"
                        name="itemTarget"
                        min={1}
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="itemsSold">ITENS VENDIDOS</label>
                      <input
                        type="number"
                        id="itemsSold"
                        name="itemsSold"
                        min={1}
                      />
                    </InputGroup>
                  </Row>
                </Card>
              </GridContainer>
            </>
          ) : null}
        </form>
      </div>
      <Footer>
        <Button disabled>
          <RiResetLeftLine />
          Limpar Formulário
        </Button>
        <div>
          <Button disabled={isBackButtonDisabled} onClick={handleBack}>
            <FaArrowLeft />
            Voltar
          </Button>
          <Button onClick={handleContinue}>
            Avançar
            <FaArrowRight />
          </Button>
        </div>
      </Footer>
    </Container>
  )
}

export default Home
