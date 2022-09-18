export class NotFoundError extends Error {
  constructor () {
    super('Not Found')
    this.name = this.message
  }
}
