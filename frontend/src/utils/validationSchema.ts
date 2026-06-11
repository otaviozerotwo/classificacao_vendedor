import * as Yup from 'yup'

export const classificationSchema = (step: string) => Yup.object({
  fullName: Yup.string()
    .min(3, 'O nome precisa ter pelo menos 3 caracteres')
    .required('O campo é obrigatório'),
  role: Yup.string().required('O campo é obrigatório'),
  sex: Yup.string().required('O campo é obrigatório'),
  city: Yup.string().required('O campo é obrigatório'),
  year: Yup.string().required('O campo é obrigatório'),
  month: Yup.string().required('O campo é obrigatório'),
  daysWorked: Yup.string().required('O campo é obrigatório'),

  salesTarget: Yup.string().when((_values, schema) =>
    step === 'performanceMetrics'
      ? schema.required('O campo é obrigatório')
      : schema
  ),
  salesCompleted: Yup.string().when((_values, schema) =>
    step === 'performanceMetrics'
      ? schema.required('O campo é obrigatório')
      : schema
  ),
  grossMargin: Yup.string().when((_values, schema) =>
    step === 'performanceMetrics'
      ? schema.required('O campo é obrigatório')
      : schema
  ),
  salesReturned: Yup.string().when((_values, schema) =>
    step === 'performanceMetrics'
      ? schema.required('O campo é obrigatório')
      : schema
  ),
  totalDiscountTarget: Yup.string().when((_values, schema) =>
    step === 'performanceMetrics'
      ? schema.required('O campo é obrigatório')
      : schema
  ),
  totalDiscountCompleted: Yup.string().when((_values, schema) =>
    step === 'performanceMetrics'
      ? schema.required('O campo é obrigatório')
      : schema
  ),
  budgetDiscountTarget: Yup.string().when((_values, schema) =>
    step === 'performanceMetrics'
      ? schema.required('O campo é obrigatório')
      : schema
  ),
  budgetDiscountCompleted: Yup.string().when((_values, schema) =>
    step === 'performanceMetrics'
      ? schema.required('O campo é obrigatório')
      : schema
  ),
  customersTarget: Yup.string().when((_values, schema) =>
    step === 'performanceMetrics'
      ? schema.required('O campo é obrigatório')
      : schema
  ),
  customersServed: Yup.string().when((_values, schema) =>
    step === 'performanceMetrics'
      ? schema.required('O campo é obrigatório')
      : schema
  ),
  itemTarget: Yup.string().when((_values, schema) =>
    step === 'performanceMetrics'
      ? schema.required('O campo é obrigatório')
      : schema
  ),
  itemsSold: Yup.string().when((_values, schema) =>
    step === 'performanceMetrics'
      ? schema.required('O campo é obrigatório')
      : schema
  )
})
