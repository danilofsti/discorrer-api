import { HttpResponse } from '../protocols/http'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const internalServerError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: error
})

export const unauthorized = (error: Error): HttpResponse => ({
  statusCode: 401,
  body: error
})

export const notFound = (error: Error): HttpResponse => ({
  statusCode: 404,
  body: error
})
