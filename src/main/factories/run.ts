import { RunRepositoryAdapter } from '../../domain/repositories/run'
import { InsertRunController, GetRunsController, GetRunController, UpdateRunController } from '../../presentation/controllers/run'

export const MakeInsertRunController = (): InsertRunController => {
  const runRepository = new RunRepositoryAdapter()
  const runController = new InsertRunController(runRepository)
  return runController
}

export const MakeGetRunsController = (): GetRunsController => {
  const runRepository = new RunRepositoryAdapter()
  const runController = new GetRunsController(runRepository)
  return runController
}

export const MakeGetRunController = (): GetRunController => {
  const runRepository = new RunRepositoryAdapter()
  const runController = new GetRunController(runRepository)
  return runController
}

export const MakeUpdateRunController = (): UpdateRunController => {
  const runRepository = new RunRepositoryAdapter()
  const runController = new UpdateRunController(runRepository)
  return runController
}
