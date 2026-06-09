import * as S from './styles'
import { MdOutlineAutoGraph } from 'react-icons/md'

const Header = () => (
  <S.Container>
    <S.Logo>
      <MdOutlineAutoGraph size={24} color="#FFF" />
    </S.Logo>
    <S.Title>Classificador de Vendedores</S.Title>
  </S.Container>
)

export default Header
