import ErrorMessage from '../ErrorMessage'
import { cityMap } from '../../../../constants/cityMap'
import { roleMap } from '../../../../constants/roleMap'
import { sexMap } from '../../../../constants/sexMap'
import colors from '../../../../styles/colors'
import {
  Card,
  CardResult,
  CardResume,
  CardTitle,
  GridContainer
} from '../../styles'
import { FaCircleCheck, FaTrophy, FaUser } from 'react-icons/fa6'
import { TbMoodEmptyFilled } from 'react-icons/tb'
import { PiEmptyBold } from 'react-icons/pi'
import {
  FiUser,
  FiBriefcase,
  FiMapPin,
  FiCalendar,
  FiTarget,
  FiShoppingCart,
  FiPercent,
  FiCornerUpLeft,
  FiTag,
  FiDollarSign,
  FiUsers,
  FiUserCheck,
  FiPackage,
  FiShoppingBag
} from 'react-icons/fi'
import {
  IconContainer,
  Item,
  ItemContainer,
  Label,
  NameBadge,
  SpanContainer
} from './styles'

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
            <Card style={{ alignSelf: 'start', minHeight: '420px' }}>
              <CardTitle>
                <h3>Resumo dos Indicadores e Métricas</h3>
                <NameBadge>
                  <FaUser size={14} />
                  <span>{form.values.fullName}</span>
                </NameBadge>
              </CardTitle>
              <CardResume>
                <div className="gridResume">
                  <ItemContainer>
                    <IconContainer>
                      <FiBriefcase size={20} />
                    </IconContainer>
                    <SpanContainer>
                      <Label>Cargo</Label>
                      <Item>{roleMap[form.values.role]}</Item>
                    </SpanContainer>
                  </ItemContainer>
                  <ItemContainer>
                    <IconContainer>
                      <FiUser size={20} />
                    </IconContainer>
                    <SpanContainer>
                      <Label>Sexo</Label>
                      <Item>{sexMap[form.values.sex]}</Item>
                    </SpanContainer>
                  </ItemContainer>
                  <ItemContainer>
                    <IconContainer>
                      <FiMapPin size={20} />
                    </IconContainer>
                    <SpanContainer>
                      <Label>Cidade</Label>
                      <Item>{cityMap[form.values.city]}</Item>
                    </SpanContainer>
                  </ItemContainer>
                  <ItemContainer>
                    <IconContainer>
                      <FiCalendar size={20} />
                    </IconContainer>
                    <SpanContainer>
                      <Label>Ano</Label>
                      <Item>{form.values.year}</Item>
                    </SpanContainer>
                  </ItemContainer>
                  <ItemContainer>
                    <IconContainer>
                      <FiCalendar size={20} />
                    </IconContainer>
                    <SpanContainer>
                      <Label>Mês</Label>
                      <Item>{form.values.month}</Item>
                    </SpanContainer>
                  </ItemContainer>
                  <ItemContainer>
                    <IconContainer>
                      <FiCalendar size={20} />
                    </IconContainer>
                    <SpanContainer>
                      <Label>Dias Trabalhados</Label>
                      <Item>{form.values.daysWorked}</Item>
                    </SpanContainer>
                  </ItemContainer>
                </div>
                <div className="gridResume">
                  <ItemContainer>
                    <IconContainer>
                      <FiTarget size={20} />
                    </IconContainer>
                    <SpanContainer>
                      <Label>Meta de Venda</Label>
                      <Item>{form.values.salesTarget}</Item>
                    </SpanContainer>
                  </ItemContainer>
                  <ItemContainer>
                    <IconContainer>
                      <FiShoppingCart size={20} />
                    </IconContainer>
                    <SpanContainer>
                      <Label>Venda Realizada</Label>
                      <Item>{form.values.salesCompleted}</Item>
                    </SpanContainer>
                  </ItemContainer>
                  <ItemContainer>
                    <IconContainer>
                      <FiPercent size={20} />
                    </IconContainer>
                    <SpanContainer>
                      <Label>Margem Bruta</Label>
                      <Item>{form.values.grossMargin}</Item>
                    </SpanContainer>
                  </ItemContainer>
                  <ItemContainer>
                    <IconContainer>
                      <FiCornerUpLeft size={20} />
                    </IconContainer>
                    <SpanContainer>
                      <Label>Devolução Realizada</Label>
                      <Item>{form.values.salesReturned}</Item>
                    </SpanContainer>
                  </ItemContainer>
                  <ItemContainer>
                    <IconContainer>
                      <FiTag size={20} />
                    </IconContainer>
                    <SpanContainer>
                      <Label>Meta de Desconto Total</Label>
                      <Item>{form.values.totalDiscountTarget}</Item>
                    </SpanContainer>
                  </ItemContainer>
                  <ItemContainer>
                    <IconContainer>
                      <FiTag size={20} />
                    </IconContainer>
                    <SpanContainer>
                      <Label>Desconto Total Realizado</Label>
                      <Item>{form.values.totalDiscountCompleted}</Item>
                    </SpanContainer>
                  </ItemContainer>
                </div>
                <div className="gridResume">
                  <ItemContainer>
                    <IconContainer>
                      <FiDollarSign size={20} />
                    </IconContainer>
                    <SpanContainer>
                      <Label>Meta Desconto de Verba</Label>
                      <Item>{form.values.budgetDiscountTarget}</Item>
                    </SpanContainer>
                  </ItemContainer>
                  <ItemContainer>
                    <IconContainer>
                      <FiDollarSign size={20} />
                    </IconContainer>
                    <SpanContainer>
                      <Label>Desconto de Verba Realizado</Label>
                      <Item>{form.values.budgetDiscountCompleted}</Item>
                    </SpanContainer>
                  </ItemContainer>
                  <ItemContainer>
                    <IconContainer>
                      <FiUsers size={20} />
                    </IconContainer>
                    <SpanContainer>
                      <Label>Meta de Clientes</Label>
                      <Item>{form.values.customersTarget}</Item>
                    </SpanContainer>
                  </ItemContainer>
                  <ItemContainer>
                    <IconContainer>
                      <FiUserCheck size={20} />
                    </IconContainer>
                    <SpanContainer>
                      <Label>Clientes Atendido</Label>
                      <Item>{form.values.customersServed}</Item>
                    </SpanContainer>
                  </ItemContainer>
                  <ItemContainer>
                    <IconContainer>
                      <FiPackage size={20} />
                    </IconContainer>
                    <SpanContainer>
                      <Label>Meta de Itens</Label>
                      <Item>{form.values.itemTarget}</Item>
                    </SpanContainer>
                  </ItemContainer>
                  <ItemContainer>
                    <IconContainer>
                      <FiShoppingBag size={20} />
                    </IconContainer>
                    <SpanContainer>
                      <Label>Itens Vendidos</Label>
                      <Item>{form.values.itemsSold}</Item>
                    </SpanContainer>
                  </ItemContainer>
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
