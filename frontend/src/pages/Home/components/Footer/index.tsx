import { Button, Container } from "./styles"
import { RiResetLeftLine } from 'react-icons/ri'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { FaCircleCheck } from "react-icons/fa6"

type Props = {
  step: string
  form: boolean
  isBackButtonDisabled: boolean
  onBack: () => void
  onContinue: () => void
  onReset: () => void
  onSubmit: () => void
  onFinish: () => void
}

const Footer = ({ step, form, isBackButtonDisabled, onBack, onContinue, onReset, onFinish, onSubmit }: Props) => (
  <Container>
    {step !== 'resultClassification' ? (
      <Button type="button" disabled={form} onClick={onReset}>
        <RiResetLeftLine />
        Limpar Formulário
      </Button>
    ) : (
      <Button type="button" disabled>
        <RiResetLeftLine />
        Limpar Formulário
      </Button>
    )}
    <div>
      <Button
        type="button"
        disabled={isBackButtonDisabled}
        onClick={onBack}
      >
        <FaArrowLeft />
        Voltar
      </Button>
      {step === 'basicInfos' && (
        <Button type="button" onClick={onContinue} className="nextButton">
          Avançar
          <FaArrowRight />
        </Button>
      )}
      {step === 'performanceMetrics' && (
        <Button type="submit" onClick={onSubmit} className="nextButton">
          Enviar
          <FaArrowRight />
        </Button>
      )}
      {step === 'resultClassification' && (
        <Button type="button" onClick={onFinish} className="nextButton">
          <FaCircleCheck />
          Concluir
        </Button>
      )}
    </div>
  </Container>
)

export default Footer