import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { method, url } = request;
    const requestId = request.headers['x-request-id'] as string;

    const now = Date.now();

    return next.handle().pipe(
      tap({
        next: () => {
          const response = context.switchToHttp().getResponse();
          const statusCode = response.statusCode;
          const duration = Date.now() - now;

          this.logger.log(
            `${method} ${url} - ${statusCode} - ${duration}ms${requestId ? ` - ${requestId}` : ''}`,
          );
        },
        error: () => {
          const duration = Date.now() - now;
          this.logger.error(
            `${method} ${url} - ERROR - ${duration}ms${requestId ? ` - ${requestId}` : ''}`,
          );
        },
      }),
    );
  }
}
