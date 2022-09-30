import { Router } from 'express'
import { MakeGetRunController, MakeGetRunsController, MakeInsertRunController, MakeUpdateRunController } from '../factories/run'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router): void => {
  router.post('/run', adaptRoute(MakeInsertRunController()))
  router.get('/run', adaptRoute(MakeGetRunsController()));
  router.get('/run/:id', adaptRoute(MakeGetRunController()));
  router.put('/run', adaptRoute(MakeUpdateRunController()))
}
