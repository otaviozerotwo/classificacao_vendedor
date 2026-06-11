import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import ProgressPanel from './components/ProgressPanel'
import GlobalStyle, { Container } from './styles'
import Router from './routes'
import { StepProvider } from './contexts/StepContext'

function App() {
  return (
    <StepProvider>
      <GlobalStyle />
      <Header />
      <ProgressPanel />
      <Container>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Container>
    </StepProvider>
  )
}

export default App
