import { createContext, useState, useContext } from 'react'

export type Step = 'basicInfos' | 'performanceMetrics' | 'resultClassification'

interface StepContextData {
  step: Step
  setStep: React.Dispatch<React.SetStateAction<Step>>
}

const StepContext = createContext<StepContextData | null>(null)

export const StepProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [step, setStep] = useState<Step>('basicInfos')

  return (
    <StepContext.Provider value={{ step, setStep }}>{children}</StepContext.Provider>
  )
}

export const useStep = () => {
  const context = useContext(StepContext)

  if (!context) {
    throw new Error('useStep deve ser usado dentro de StepProvider')
  }

  return context
}