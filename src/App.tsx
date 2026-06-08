import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import ProgressPanel from './components/ProgressPanel'
import GlobalStyle, { Container } from './styles'
import Router from './routes'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ProgressPanel />
      <Container>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Container>
    </>
  )
}

export default App
