import { useClassificationForm } from './hooks/useClassificationForm'
import BasicInfosStep from './components/BasicInfosStep'
import PerformanceMetricsStep from './components/PerformanceMetricsStep'
import ResultStep from './components/ResultStep'
import Footer from './components/Footer'
import { Container, LoaderContainer } from './styles'
import { BeatLoader } from 'react-spinners'

const Home = () => {
  const { form, step, classificationResult, loading, handleContinue, handleBack, handleReset, handleSendForm, handleFinish } = useClassificationForm()

  const isBackButtonDisabled = step === 'basicInfos'

  return (
    <Container>
      <div>
        <form onSubmit={form.handleSubmit}>
          {step === 'basicInfos' && (
            <BasicInfosStep form={form} />
          )}

          {step === 'performanceMetrics' && (
            <PerformanceMetricsStep form={form} />
          )}

          {step === 'resultClassification' && (
            loading ? (
              <LoaderContainer>
                <BeatLoader />
              </LoaderContainer>
            ) : (
              <ResultStep form={form} classificationResult={classificationResult} loading={loading}/>
            )
          )}

          <Footer
            step={step}
            form={!form.dirty}
            isBackButtonDisabled={isBackButtonDisabled}
            onReset={handleReset}
            onBack={handleBack}
            onContinue={handleContinue}
            onSubmit={handleSendForm}
            onFinish={handleFinish}
          />
        </form>
      </div>
    </Container>
  )
}

export default Home
