import * as S from './styles'
import { FaUser, FaTrophy } from 'react-icons/fa6'
import { GrDocumentPerformance } from 'react-icons/gr'
import { useStep } from '../../contexts/StepContext'

type StepStatus = 'pending' | 'active' | 'completed'

const ProgressPanel = () => {
  const { step } = useStep()

  const getStepStatus = (currentStep: 1 | 2 | 3): StepStatus => {
    switch (step) {
      case 'basicInfos':
        return currentStep === 1 ? 'active' : 'pending'

        case 'performanceMetrics':
          if (currentStep === 1) return 'completed'
          if (currentStep === 2) return 'active'
          return 'pending'

        case 'resultClassification':
          if (currentStep === 3) return 'active'
          return 'completed'

        default:
          return 'pending'
    }
  }

  return (
    <S.Container>
      <div>
        <S.CardStep status={getStepStatus(1)}>
          <S.Icon status={getStepStatus(1)}>
            <FaUser color="#FFF" size={16} />
          </S.Icon>
          <div>
            <S.Step>Passo 1 de 3</S.Step>
            <S.Description>Informações Básicas</S.Description>
          </div>
        </S.CardStep>

        <S.ProgressBar status={step === 'basicInfos' ? 'active' : 'completed'} />

        <S.CardStep status={getStepStatus(2)}>
          <S.Icon status={getStepStatus(2)}>
            <GrDocumentPerformance color="#FFF" size={16} />
          </S.Icon>
          <div>
            <S.Step>Passo 2 de 3</S.Step>
            <S.Description>Métricas de Desempenho</S.Description>
          </div>
        </S.CardStep>

        <S.ProgressBar  status={step === 'resultClassification' ? 'completed' : 'pending'} />

        <S.CardStep status={getStepStatus(3)}>
          <S.Icon status={getStepStatus(3)}>
            <FaTrophy color="#FFF" size={16} />
          </S.Icon>
          <div>
            <S.Step>Passo 3 de 3</S.Step>
            <S.Description>Resultado</S.Description>
          </div>
        </S.CardStep>
      </div>
    </S.Container>
  )
}

export default ProgressPanel
