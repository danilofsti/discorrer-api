import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError} from '../errors'
import { badRequest,  ok } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { config } from 'dotenv'
config()

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = [
      'name',
      'email',
      'password',
      'passwordConfirmation'
    ]
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    return ok(httpRequest)
  }
}