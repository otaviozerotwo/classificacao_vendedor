import { useState } from 'react'
import {
  Button,
  Card,
  CardResult,
  CardResume,
  CardTitle,
  Container,
  Footer,
  GridContainer,
  InputGroup,
  Row
} from './styles'
import { RiResetLeftLine } from 'react-icons/ri'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { FaCircleCheck, FaTrophy } from "react-icons/fa6"
import { TbMoodEmptyFilled } from "react-icons/tb"
import { PiEmptyBold } from "react-icons/pi"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import type { ClassificationRequest } from '../../interfaces/ClassificationRequest'
import { classificationApi } from '../../services/api'
import { cityMap } from '../../constants/cityMap'
import { roleMap } from '../../constants/roleMap'
import { sexMap } from '../../constants/sexMap'
import colors from '../../styles/colors'
import { useStep } from '../../contexts/StepContext'

const Home = () => {
  const [classificationResult, setClassificationResult] = useState<string>('')

  const { step, setStep } = useStep()

  const isBackButtonDisabled = step === 'basicInfos'

  const form = useFormik<ClassificationRequest>({
    initialValues: {
      fullName: '',
      role: '',
      sex: '',
      city: '',
      year: '',
      month: '',
      daysWorked: '',
      salesTarget: '',
      salesCompleted: '',
      grossMargin: '',
      salesReturned: '',
      totalDiscountTarget: '',
      totalDiscountCompleted: '',
      budgetDiscountTarget: '',
      budgetDiscountCompleted: '',
      customersTarget: '',
      customersServed: '',
      itemTarget: '',
      itemsSold: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string().min(3, 'O nome precisa ter pelo menos 3 caracteres').required('O campo é obrigatório'),
      role: Yup.string().required('O campo é obrigatório'),
      sex: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      year: Yup.string().required('O campo é obrigatório'),
      month: Yup.string().required('O campo é obrigatório'),
      daysWorked: Yup.string().required('O campo é obrigatório'),

      salesTarget: Yup.string().when((_values, schema) =>
        step === 'performanceMetrics'
          ? schema
              .required('O campo é obrigatório')
          : schema
      ),
      salesCompleted: Yup.string().when((_values, schema) =>
        step === 'performanceMetrics'
          ? schema
              .required('O campo é obrigatório')
          : schema
      ),
      grossMargin: Yup.string().when((_values, schema) =>
        step === 'performanceMetrics'
          ? schema
              .required('O campo é obrigatório')
          : schema
      ),
      salesReturned: Yup.string().when((_values, schema) =>
        step === 'performanceMetrics'
          ? schema
              .required('O campo é obrigatório')
          : schema
      ),
      totalDiscountTarget: Yup.string().when((_values, schema) =>
        step === 'performanceMetrics'
          ? schema
              .required('O campo é obrigatório')
          : schema
      ),
      totalDiscountCompleted: Yup.string().when((_values, schema) =>
        step === 'performanceMetrics'
          ? schema
              .required('O campo é obrigatório')
          : schema
      ),
      budgetDiscountTarget: Yup.string().when((_values, schema) =>
        step === 'performanceMetrics'
          ? schema
              .required('O campo é obrigatório')
          : schema
      ),
      budgetDiscountCompleted: Yup.string().when((_values, schema) =>
        step === 'performanceMetrics'
          ? schema
              .required('O campo é obrigatório')
          : schema
      ),
      customersTarget: Yup.string().when((_values, schema) =>
        step === 'performanceMetrics'
          ? schema
              .required('O campo é obrigatório')
          : schema
      ),
      customersServed: Yup.string().when((_values, schema) =>
        step === 'performanceMetrics'
          ? schema
              .required('O campo é obrigatório')
          : schema
      ),
      itemTarget: Yup.string().when((_values, schema) =>
        step === 'performanceMetrics'
          ? schema
              .required('O campo é obrigatório')
          : schema
      ),
      itemsSold: Yup.string().when((_values, schema) =>
        step === 'performanceMetrics'
          ? schema
              .required('O campo é obrigatório')
          : schema
      )
    }),
    onSubmit: async (values) => {
      try {
        const result = await classificationApi(values)

        setClassificationResult(result?.result ?? '')

        console.log(result)
      } catch (error) {
        console.error(error)
      }
    }
  })

  const checkInput = (fieldName: string, mode: 'valid' | 'error' = 'valid') => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (mode === 'valid') {
      return isTouched && !isInvalid
    }

    if (mode === 'error') {
      return isTouched && isInvalid
    }
  }

  const handleContinue = () => {
    if (
      checkInput('fullName') &&
      checkInput('role') &&
      checkInput('sex') &&
      checkInput('city') &&
      checkInput('year') &&
      checkInput('month') &&
      checkInput('daysWorked')
    ) {
      setStep('performanceMetrics')
    } else {
      alert('Preencha todos os campos obrigatórios')
    }
  }

  const handleBack = () => {
    if (step === 'resultClassification') {
      setStep('performanceMetrics')
    } else {
      setStep('basicInfos')
    }
  }

  const handleReset = () => {
    form.resetForm()
  }

  const handleSendForm = () => {
    if (
      checkInput('salesTarget') &&
      checkInput('salesCompleted') &&
      checkInput('grossMargin') &&
      checkInput('salesReturned') &&
      checkInput('totalDiscountTarget') &&
      checkInput('totalDiscountCompleted') &&
      checkInput('budgetDiscountTarget') &&
      checkInput('budgetDiscountCompleted') &&
      checkInput('customersTarget') &&
      checkInput('customersServed') &&
      checkInput('itemTarget') &&
      checkInput('itemsSold')
    ) {
      form.handleSubmit()
      setStep('resultClassification')
    } else {
      alert('Preencha todos os campos obrigatórios')
    }
  }

  const handleFinish = () => {
    handleReset()
    setStep('basicInfos')
  }

  return (
    <Container>
      <div>
        <form onSubmit={form.handleSubmit}>
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
                      <option value="3">
                        Atendente de Farmácia
                      </option>
                      <option value="2">
                        Atendente de Televendas
                      </option>
                      <option value="4">
                        Atendente de Manipulação
                      </option>
                      <option value="5">
                        Auxiliar de Farmácia
                      </option>
                      <option value="10">Operador de Vendas</option>
                      <option value="9">Operador de Caixa</option>
                      <option value="6">
                        Coordenador de Equipe
                      </option>
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
                      <option value="4">
                        Conceição das Alagoas
                      </option>
                      <option value="5">Coromandel</option>
                      <option value="6">Ibiá</option>
                      <option value="7">João Pinheiro</option>
                      <option value="8">Lagoa Formosa</option>
                      <option value="9">Monte Carmelo</option>
                      <option value="10">Paracatu</option>
                      <option value="11">Patos de Minas</option>
                      <option value="12">Patrocínio</option>
                      <option value="13">
                        Presidente Olegário
                      </option>
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
                      <input
                        type="number"
                        id="year"
                        name="year"
                        placeholder="Ex: 2026"
                        style={{ width: '88px' }}
                        value={form.values.year}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
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
                        placeholder="Ex: 01"
                        style={{ width: '88px' }}
                        value={form.values.month}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
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
                      placeholder="Ex: 15"
                      style={{ width: '200px' }}
                      value={form.values.daysWorked}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
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
                        value={form.values.salesTarget}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        placeholder='0.00'
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="salesCompleted">VENDA REALIZADA</label>
                      <input
                        type="number"
                        id="salesCompleted"
                        name="salesCompleted"
                        value={form.values.salesCompleted}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        placeholder='0.00'
                      />
                    </InputGroup>
                  </Row>
                  <InputGroup>
                    <label htmlFor="grossMargin">MARGEM BRUTA</label>
                    <input
                      type="number"
                      id="grossMargin"
                      name="grossMargin"
                      value={form.values.grossMargin}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      placeholder='0.00'
                    />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="salesReturned">DEVOLUÇÃO REALIZADA</label>
                    <input
                      type="number"
                      id="salesReturned"
                      name="salesReturned"
                      value={form.values.salesReturned}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      placeholder='0.00'
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
                        value={form.values.totalDiscountTarget}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        placeholder='0.00'
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
                        value={form.values.totalDiscountCompleted}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        placeholder='0.00'
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
                        value={form.values.budgetDiscountTarget}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        placeholder='0.00'
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
                        value={form.values.budgetDiscountCompleted}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        placeholder='0.00'
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
                        value={form.values.customersTarget}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        placeholder='0'
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
                        value={form.values.customersServed}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        placeholder='0'
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
                        value={form.values.itemTarget}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        placeholder='0'
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="itemsSold">ITENS VENDIDOS</label>
                      <input
                        type="number"
                        id="itemsSold"
                        name="itemsSold"
                        value={form.values.itemsSold}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        placeholder='0'
                      />
                    </InputGroup>
                  </Row>
                </Card>
              </GridContainer>
            </>
          ) : step === 'resultClassification' ? (
            <>
              <h2>Resultado da Classificação</h2>
              <p>
                Análise do desempenho com base nas métricas inseridas.
              </p>
              <GridContainer className='gridResult'>
                {classificationResult === 'Meta Atingida' ? (
                  <CardResult backgroundColor={colors.green}>
                    <div className='resultIcon'>
                      <FaTrophy size={48} color='#FFF' />
                    </div>
                    <div className='resultClassification'>
                      <FaCircleCheck />
                      <div>
                        <span>{classificationResult || '-'}</span>
                      </div>
                    </div>
                  </CardResult>
                ) : (
                  <CardResult backgroundColor={colors.red}>
                    <div className='resultIcon'>
                      <TbMoodEmptyFilled size={48} color='#FFF' />
                    </div>
                    <div className='resultClassification'>
                      <PiEmptyBold />
                      <div>
                        <span>{classificationResult || '-'}</span>
                      </div>
                    </div>
                  </CardResult>
                )}
                <Card>
                  <CardTitle><h3>Resumo dos Indicadores e Métricas</h3></CardTitle>
                  <CardResume>
                    <div className='gridResume'>
                      <span>Nome: {form.values.fullName}</span>
                      <span>Cargo: {roleMap[form.values.role]}</span>
                      <span>Sexo: {sexMap[form.values.sex]}</span>
                      <span>Cidade: {cityMap[form.values.city]}</span>
                      <span>Ano: {form.values.year}</span>
                      <span>Mês: {form.values.month}</span>
                    </div>
                    <div className='gridResume'>
                      <span>Dias Trabalhados: {form.values.daysWorked}</span>
                      <span>Meta de Venda: {form.values.salesTarget}</span>
                      <span>Venda Realizada: {form.values.salesCompleted}</span>
                      <span>Margem Bruta: {form.values.grossMargin}</span>
                      <span>Devolução Realizada: {form.values.salesReturned}</span>
                      <span>Meta de Desconto Total: {form.values.totalDiscountTarget}</span>
                    </div>
                    <div className='gridResume'>
                      <span>Desconto Total Realizado: {form.values.totalDiscountCompleted}</span>
                      <span>Meta Desconto de Verba: {form.values.budgetDiscountTarget}</span>
                      <span>Desconto de Verba Realizado: {form.values.budgetDiscountCompleted}</span>
                      <span>Meta de Clientes: {form.values.customersTarget}</span>
                      <span>Clientes Atendidos: {form.values.customersServed}</span>
                      <span>Meta de Itens: {form.values.itemTarget}</span>
                      <span>Itens Vendidos: {form.values.itemsSold}</span>
                    </div>
                  </CardResume>
                </Card>
              </GridContainer>
            </>
          ) : null }
          <Footer>
            {step !== 'resultClassification' ? (
              <Button type='button' disabled={!form.dirty} onClick={handleReset}>
                <RiResetLeftLine />
                Limpar Formulário
              </Button>
            ) : (
              <Button type='button' disabled>
                <RiResetLeftLine />
                Limpar Formulário
              </Button>
            )}
            <div>
              <Button type='button' disabled={isBackButtonDisabled} onClick={handleBack}>
                <FaArrowLeft />
                Voltar
              </Button>
              {step === 'basicInfos' && (
                <Button type='button' onClick={handleContinue} className='nextButton'>
                  Avançar
                  <FaArrowRight />
                </Button>
              )}
              {step === 'performanceMetrics' && (
                <Button type='submit' onClick={handleSendForm} className='nextButton'>
                  Enviar
                  <FaArrowRight />
                </Button>
              )}
              {step === 'resultClassification' && (
                <Button type='button' onClick={handleFinish} className='nextButton'>
                  <FaCircleCheck />
                  Concluir
                </Button>
              )}
            </div>
          </Footer>
        </form>
      </div>
    </Container>
  )
}

export default Home
