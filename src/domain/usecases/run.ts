export interface RunRepository {
  createRun: (runInfo: any) => Promise<any>
  updateRun: (runInfo: any) => Promise<any>
  getAllRuns: () => Promise<any>
  getRun: (id: any) => Promise<any>
}