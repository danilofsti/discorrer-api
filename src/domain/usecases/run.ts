export interface RunRepository {
  createRun: (runInfo: any) => Promise<any>
  updateRun: (runInfo: any) => Promise<any>
  getAllAthleteRuns: (runInfo: any) => Promise<any>
}