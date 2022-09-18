export class UnauthorizedError extends Error {
  constructor () {
    super('Unauthorized - User or Password is invalid. After 3 attempts your TSO ID will be blocked.')
    this.name = 'UnauthorizedError'
  }
}
