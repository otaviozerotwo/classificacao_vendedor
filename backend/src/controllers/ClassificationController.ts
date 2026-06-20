import type { Request, Response } from 'express'
import { classify } from '../services/classificationService.js'

export const ClassificationController = (req: Request, res: Response) => {
  try {
    const result = classify(req.body)
  
    if (result) {
      return res.json({ result })
    } else {
      return res.status(400).json()
    }
  } catch (error) {
    
  }
}