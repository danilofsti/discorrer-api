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
      'is_imported',
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
    console.log(runInfo)
    return ok(runInfo)
  }
}