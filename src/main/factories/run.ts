import { RunRepositoryAdapter } from '../../domain/repositories/run'
import { InsertRunController } from '../../presentation/controllers/run'

export const MakeInsertRunController = (): InsertRunController => {
  const runRepository = new RunRepositoryAdapter()
  const runController = new InsertRunController(runRepository)
  return runController
}
