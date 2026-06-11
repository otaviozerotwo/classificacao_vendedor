import ErrorMessage from "../ErrorMessage"
import { cityMap } from "../../../../constants/cityMap"
import { roleMap } from "../../../../constants/roleMap"
import { sexMap } from "../../../../constants/sexMap"
import colors from "../../../../styles/colors"
import { Card, CardResult, CardResume, CardTitle, GridContainer } from "../../styles"
import { FaCircleCheck, FaTrophy } from "react-icons/fa6"
import { TbMoodEmptyFilled } from "react-icons/tb"
import { PiEmptyBold } from "react-icons/pi"

const ResultStep = ({ form, classificationResult }) => {
  return (
    <>
      {classificationResult !== '' ? (
        <>
          <h2>Resultado da Classificação</h2>
          <p>Análise do desempenho com base nas métricas inseridas.</p>
          <GridContainer className="gridResult">
            {classificationResult === 'Meta Atingida' ? (
              <CardResult backgroundColor={colors.green}>
                <div className="resultIcon">
                  <FaTrophy size={48} color="#FFF" />
                </div>
                <div className="resultClassification">
                  <FaCircleCheck />
                  <div>
                    <span>{classificationResult || '-'}</span>
                  </div>
                </div>
              </CardResult>
            ) : (
              <CardResult backgroundColor={colors.red}>
                <div className="resultIcon">
                  <TbMoodEmptyFilled size={48} color="#FFF" />
                </div>
                <div className="resultClassification">
                  <PiEmptyBold />
                  <div>
                    <span>{classificationResult || '-'}</span>
                  </div>
                </div>
              </CardResult>
            )}
            <Card>
              <CardTitle>
                <h3>Resumo dos Indicadores e Métricas</h3>
              </CardTitle>
              <CardResume>
                <div className="gridResume">
                  <span>Nome: {form.values.fullName}</span>
                  <span>Cargo: {roleMap[form.values.role]}</span>
                  <span>Sexo: {sexMap[form.values.sex]}</span>
                  <span>Cidade: {cityMap[form.values.city]}</span>
                  <span>Ano: {form.values.year}</span>
                  <span>Mês: {form.values.month}</span>
                </div>
                <div className="gridResume">
                  <span>Dias Trabalhados: {form.values.daysWorked}</span>
                  <span>Meta de Venda: {form.values.salesTarget}</span>
                  <span>Venda Realizada: {form.values.salesCompleted}</span>
                  <span>Margem Bruta: {form.values.grossMargin}</span>
                  <span>Devolução Realizada: {form.values.salesReturned}</span>
                  <span>
                    Meta de Desconto Total: {form.values.totalDiscountTarget}
                  </span>
                </div>
                <div className="gridResume">
                  <span>
                    Desconto Total Realizado:{' '}
                    {form.values.totalDiscountCompleted}
                  </span>
                  <span>
                    Meta Desconto de Verba: {form.values.budgetDiscountTarget}
                  </span>
                  <span>
                    Desconto de Verba Realizado:{' '}
                    {form.values.budgetDiscountCompleted}
                  </span>
                  <span>Meta de Clientes: {form.values.customersTarget}</span>
                  <span>Clientes Atendidos: {form.values.customersServed}</span>
                  <span>Meta de Itens: {form.values.itemTarget}</span>
                  <span>Itens Vendidos: {form.values.itemsSold}</span>
                </div>
              </CardResume>
            </Card>
          </GridContainer>
        </>
      ) : (
        <ErrorMessage />
      )}
    </>
  )
}

export default ResultStep