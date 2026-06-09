import * as S from './styles'
import { FaUser, FaTrophy } from 'react-icons/fa6'
import { GrDocumentPerformance } from 'react-icons/gr'

const ProgressPanel = () => (
  <S.Container>
    <div>
      <S.CardStep>
        <S.Icon>
          <FaUser color="#FFF" size={16} />
        </S.Icon>
        <div>
          <S.Step>Passo 1 de 3</S.Step>
          <S.Description>Informações Básicas</S.Description>
        </div>
      </S.CardStep>

      <S.ProgressBar />

      <S.CardStep>
        <S.Icon>
          <GrDocumentPerformance color="#FFF" size={16} />
        </S.Icon>
        <div>
          <S.Step>Passo 2 de 3</S.Step>
          <S.Description>Métricas de Desempenho</S.Description>
        </div>
      </S.CardStep>

      <S.ProgressBar />

      <S.CardStep>
        <S.Icon>
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

export default ProgressPanel
