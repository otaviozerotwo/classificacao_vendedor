import Header from './components/Header'
import ProgressPanel from './components/ProgressPanel'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <ProgressPanel />
      </Container>
    </>
  )
}

export default App
