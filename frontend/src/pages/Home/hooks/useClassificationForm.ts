import { useState } from 'react'
import { useStep } from '../../../contexts/StepContext'
import { useFormik } from 'formik'
import { classificationSchema } from '../utils/validationSchema'
import { classificationApi } from '../../../services/api'
import type { ClassificationRequest } from '../../../interfaces/ClassificationRequest'

export const useClassificationForm = () => {
  const [loading, setLoading] = useState(false)
  const [classificationResult, setClassificationResult] = useState<string>('')

  const { step, setStep } = useStep()

  const form = useFormik<ClassificationRequest>({
    initialValues: {
      fullName: '',
      role: '',
      sex: '',
      city: '',
      year: '',
      month: '',
      daysWorked: '',
      salesTarget: '',
      salesCompleted: '',
      grossMargin: '',
      salesReturned: '',
      totalDiscountTarget: '',
      totalDiscountCompleted: '',
      budgetDiscountTarget: '',
      budgetDiscountCompleted: '',
      customersTarget: '',
      customersServed: '',
      itemTarget: '',
      itemsSold: ''
    },
    validationSchema: classificationSchema(step),
    onSubmit: async (values) => {
      setLoading(true)

      try {
        const result = await classificationApi(values)

        setClassificationResult(result?.result ?? '')

        console.log(result)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
  })

  const checkInput = (fieldName: string, mode: 'valid' | 'error' = 'valid') => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (mode === 'valid') {
      return isTouched && !isInvalid
    }

    if (mode === 'error') {
      return isTouched && isInvalid
    }
  }

  const handleContinue = () => {
    if (
      checkInput('fullName') &&
      checkInput('role') &&
      checkInput('sex') &&
      checkInput('city') &&
      checkInput('year') &&
      checkInput('month') &&
      checkInput('daysWorked')
    ) {
      setStep('performanceMetrics')
    } else {
      alert('Preencha todos os campos obrigatórios')
    }
  }

  const handleBack = () => {
    if (step === 'resultClassification') {
      setStep('performanceMetrics')
    } else {
      setStep('basicInfos')
    }
  }

  const handleReset = () => {
    form.resetForm()
  }

  const handleSendForm = () => {
    if (
      checkInput('salesTarget') &&
      checkInput('salesCompleted') &&
      checkInput('grossMargin') &&
      checkInput('salesReturned') &&
      checkInput('totalDiscountTarget') &&
      checkInput('totalDiscountCompleted') &&
      checkInput('budgetDiscountTarget') &&
      checkInput('budgetDiscountCompleted') &&
      checkInput('customersTarget') &&
      checkInput('customersServed') &&
      checkInput('itemTarget') &&
      checkInput('itemsSold')
    ) {
      form.handleSubmit()
      setStep('resultClassification')
    } else {
      alert('Preencha todos os campos obrigatórios')
    }
  }

  const handleFinish = () => {
    handleReset()
    setStep('basicInfos')
  }

  return {
    form,
    step,
    classificationResult,
    loading,
    handleContinue,
    handleBack,
    handleReset,
    handleSendForm,
    handleFinish
  }
}