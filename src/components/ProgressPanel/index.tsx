import { Container, Description, Icon, ProgressBar, Step } from './styles'
import { FaUser, FaTrophy } from 'react-icons/fa6'
import { GrDocumentPerformance } from 'react-icons/gr'

const ProgressPanel = () => (
  <Container>
    <div className="flex">
      <Icon>
        <FaUser color="#FFF" size={20} />
      </Icon>
      <div>
        <Step>Passo 1 de 3</Step>
        <Description>Informações Básicas</Description>
      </div>
    </div>

    <ProgressBar />

    <div className="flex">
      <Icon>
        <GrDocumentPerformance color="#FFF" size={20} />
      </Icon>
      <div>
        <Step>Passo 2 de 3</Step>
        <Description>Métricas de Desempenho</Description>
      </div>
    </div>

    <ProgressBar />

    <div className="flex">
      <Icon>
        <FaTrophy color="#FFF" size={20} />
      </Icon>
      <div>
        <Step>Passo 3 de 3</Step>
        <Description>Resultado</Description>
      </div>
    </div>
  </Container>
)

export default ProgressPanel
