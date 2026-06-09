import express from 'express'
import cors from 'cors'
import type { Express } from 'express'
import apiV1Router from './routes/router.js'

export function buildApp(): Express {
  const app = express()

  app.use(express.json())

  app.use(cors())

  app.use('/api/v1', apiV1Router)

  return app
}