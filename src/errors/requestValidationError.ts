import { ValidationError } from 'express-validator';

import { CustomError } from './customError';

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super('Invalid request parameters');

    // Only for extending built-in classes
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((error) => ({
      message: error.msg,
      field: error.param,
    }));
  }
}
