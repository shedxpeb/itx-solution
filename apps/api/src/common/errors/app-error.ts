export class AppError extends Error {
  constructor(
    public readonly code: string,
    public readonly message: string,
    public readonly statusCode: number = 500,
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export class BadRequestError extends AppError {
  constructor(message: string = 'Bad request') {
    super('BAD_REQUEST', message, 400);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = 'Unauthorized') {
    super('UNAUTHORIZED', message, 401);
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string = 'Forbidden') {
    super('FORBIDDEN', message, 403);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = 'Resource not found') {
    super('NOT_FOUND', message, 404);
  }
}

export class ConflictError extends AppError {
  constructor(message: string = 'Conflict') {
    super('CONFLICT', message, 409);
  }
}

export class ValidationError extends AppError {
  constructor(message: string = 'Validation failed') {
    super('VALIDATION_ERROR', message, 422);
  }
}

export class InternalServerError extends AppError {
  constructor(message: string = 'Internal server error') {
    super('INTERNAL_SERVER_ERROR', message, 500);
  }
}

export class ProjectNotFoundError extends AppError {
  constructor(message: string = 'Project not found') {
    super('PROJECT_NOT_FOUND', message, 404);
  }
}

export class ProjectSlugAlreadyExistsError extends AppError {
  constructor(message: string = 'Project slug already exists') {
    super('PROJECT_SLUG_ALREADY_EXISTS', message, 409);
  }
}

export class ProjectInvalidStatusError extends AppError {
  constructor(message: string = 'Invalid project status') {
    super('PROJECT_INVALID_STATUS', message, 422);
  }
}

export class ProjectInvalidUrlError extends AppError {
  constructor(message: string = 'Invalid project URL') {
    super('PROJECT_INVALID_URL', message, 422);
  }
}
