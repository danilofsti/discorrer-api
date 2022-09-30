import { Router } from 'express'
import { MakeInsertRunController } from '../factories/run'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.post('/run', adaptRoute(MakeInsertRunController()))
  router.get('/');
}
