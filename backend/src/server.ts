import 'dotenv/config'
import { buildApp } from './app.js'

const PORT = process.env.PORT || 3001
const app = buildApp()

const server = app.listen(PORT, () => {
  console.log(`Server is running at http:localhost:${PORT}`)
})

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    console.log('HTTP server closed')
  })
})