import { Express } from 'express'
import { bodyParser, cor, contentType } from '../middlewares'

export default (app: Express): void => {
  app.use(bodyParser)
  app.use(cor)
  app.use(contentType)
}
