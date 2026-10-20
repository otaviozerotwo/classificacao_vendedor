import type { Request, Response } from 'express'
import { classify, InputError } from '~/services/classificationService.js'

export const ClassificationController = (req: Request, res: Response) => {
  try {
    const result = classify(req.body)
  
    return res.json({
      result
    })
  } catch (error) {
    if (error instanceof InputError) {
      return res.status(400).json({ message: error.message })
    }

    console.error(error)
    
    return res.status(500).json({ message: 'Não foi possível gerar a previsão.' })
  }
}