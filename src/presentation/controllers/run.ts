import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError} from '../errors'
import { badRequest,  ok } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { config } from 'dotenv'
import { RunRepository } from '../../domain/usecases/run'
config()

export class InsertRunController implements Controller {

  private readonly runRepository: RunRepository;

  constructor (runRepository: RunRepository) {
    this.runRepository = runRepository
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse>  {
    
    const requiredFields = [
      'name' ,
      'distance',
      'elapsed_time' ,
      'start_date_local' ,
      'mood',
      'type',
      'where',
      'jornal'
    ]
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
    let runInfo = httpRequest.body
    runInfo = await this.runRepository.createRun(runInfo)
    return ok(runInfo)
  }
}

export class GetRunsController implements Controller {

  private readonly runRepository: RunRepository;

  constructor (runRepository: RunRepository) {
    this.runRepository = runRepository
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse>  {
    if(httpRequest.body.jornal){
      const runs = await this.runRepository.getAllRunsByJornal(httpRequest.body.jornal)
      return ok(runs)
    }
    const runs = await this.runRepository.getAllRuns()
    return ok(runs)
  }
}

export class GetRunController implements Controller {

  private readonly runRepository: RunRepository;

  constructor (runRepository: RunRepository) {
    this.runRepository = runRepository
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse>  {
    const runs = await this.runRepository.getRun(httpRequest.body.id)
    return ok(runs)
  }
}

export class UpdateRunController implements Controller {

  private readonly runRepository: RunRepository;

  constructor (runRepository: RunRepository) {
    this.runRepository = runRepository
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse>  {
    const runs = await this.runRepository.updateRun(httpRequest.body)
    return ok(runs)
  }
}