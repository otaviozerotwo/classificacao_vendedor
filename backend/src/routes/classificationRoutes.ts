import { Router } from 'express'
import { ClassificationController } from '~/controllers/ClassificationController.js'

const router = Router()

router.post('/', ClassificationController)

export { router as classificationRoutes }