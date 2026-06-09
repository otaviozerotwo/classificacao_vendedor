import type { Request, Response } from 'express'
import { classify } from '~/services/classificationService.js'

export const ClassificationController = (req: Request, res: Response) => {
  const result = classify(req.body)

  return res.json({
    result
  })
}