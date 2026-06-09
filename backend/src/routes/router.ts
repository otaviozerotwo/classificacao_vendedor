import { Router } from 'express'
import { classificationRoutes } from './classificationRoutes.js'

const apiV1Router = Router()

apiV1Router.use('/', classificationRoutes)

export default apiV1Router