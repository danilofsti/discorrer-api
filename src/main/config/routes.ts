import { Express, Router } from 'express'
import runRoute from '../routes/run'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  runRoute(router)
}
