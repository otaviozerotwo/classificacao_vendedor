import type { ClassificationRequest } from '~/interfaces/classification.interface.js';

export function classify(data: ClassificationRequest): string {
  let isTargetSuccess = 'Aingiu a Meta :)'

  const city = data.city
  const role = data.role
  const sex = data.sex
  const salesTarget = data.salesTarget
  const salesCompleted = data.salesCompleted
  const grossMargin = data.grossMargin
  const salesReturned = data.salesReturned
  const totalDiscountTarget = data.totalDiscountTarget
  const totalDiscountCompleted = data.budgetDiscountCompleted
  const budgetDiscountTarget = data.budgetDiscountTarget
  const budgetDiscountCompleted = data.budgetDiscountCompleted
  const customersTarget = data.customersTarget
  const itemTarget = data.itemTarget
  const itemsSold = data.itemsSold
  const daysWorked = data.daysWorked

  return isTargetSuccess
}