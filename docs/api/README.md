# API Documentation

## Current Status: Phase 5 Complete

Production-grade NestJS + Fastify backend foundation has been implemented.

## Architecture

```
HTTP Request
    ↓
Fastify
    ↓
NestJS
    ↓
Global middleware / guards / interceptors / filters
    ↓
Controller
    ↓
DTO validation
    ↓
Service
    ↓
Repository / Prisma
    ↓
PostgreSQL
```

## Backend Structure

```
apps/api/src/
├── main.ts
├── app.module.ts
├── config/
│   └── env.ts
├── common/
│   ├── errors/
│   │   └── app-error.ts
│   ├── filters/
│   │   └── http-exception.filter.ts
│   ├── guards/
│   ├── interceptors/
│   │   ├── request-id.interceptor.ts
│   │   └── logging.interceptor.ts
│   ├── logging/
│   └── pagination/
│       └── pagination.dto.ts
├── database/
│   ├── prisma.module.ts
│   └── prisma.service.ts
├── health/
│   ├── health.controller.ts
│   └── health.module.ts
└── modules/
    ├── auth/
    ├── users/
    ├── projects/
    ├── services/
    ├── blogs/
    ├── case-studies/
    ├── testimonials/
    ├── enquiries/
    ├── media/
    ├── settings/
    └── audit/
```

## Configuration

### Environment Variables

- `API_PORT`: API server port (default: 4000)
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment (development/production)
- `CORS_ORIGINS`: Comma-separated allowed origins

### Validation

Environment configuration is validated at startup. The application fails fast if:
- `DATABASE_URL` is missing
- Production configuration is insecure

## API Prefix

Global API prefix: `/api/v1`

## Global Features

### Validation

- Whitelist enabled (rejects unknown properties)
- Forbid non-whitelisted properties
- Automatic type transformation

### Error Handling

Standardized error response format:
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message",
    "requestId": "uuid"
  }
}
```

Error codes:
- `BAD_REQUEST` (400)
- `UNAUTHORIZED` (401)
- `FORBIDDEN` (403)
- `NOT_FOUND` (404)
- `CONFLICT` (409)
- `VALIDATION_ERROR` (422)
- `INTERNAL_SERVER_ERROR` (500)

### Request ID

Every request has a unique request ID:
- Generated automatically via `crypto.randomUUID()`
- Client can supply via `X-Request-ID` header
- Included in error responses
- Logged with all requests

### Logging

Structured logging includes:
- Timestamp
- Method
- URL
- Status code
- Duration
- Request ID

### Graceful Shutdown

Application properly closes:
- HTTP server
- Prisma connection

## Health Endpoint

`GET /api/v1/health`

Response:
```json
{
  "success": true,
  "data": {
    "status": "ok",
    "timestamp": "2026-09-29T17:23:00.000Z"
  }
}
```

## Pagination

Reusable pagination DTO with safe limits:
- Default page: 1
- Default limit: 12
- Maximum limit: 100

## Database Integration

- PrismaService reused from Phase 2
- Global module for Prisma access
- Lifecycle hooks for connection management
- Graceful shutdown

## Known Limitations

### CORS, Security Headers, Rate Limiting

Due to Fastify version compatibility issues with `@nestjs/platform-fastify@10.3.0`:
- CORS configuration not yet implemented
- Security headers (helmet) not yet implemented
- Rate limiting not yet implemented

These will be added in a future phase when:
- Fastify is upgraded to a compatible version, OR
- Compatible plugin versions are identified

## Dependencies

### Core
- `@nestjs/common` ^10.3.0
- `@nestjs/core` ^10.3.0
- `@nestjs/platform-fastify` ^10.3.0
- `@prisma/client` 5.22.0
- `class-validator` 0.15.1
- `class-transformer` 0.5.1
- `dotenv` 18.0.4

### Dev
- `@nestjs/cli` ^10.3.0
- `@types/node` ^20.14.0
- `typescript` ^5.5.0

## Security Principles

- Backend is authoritative
- Never trust client-supplied role/permission
- Validate all input
- Never expose passwords
- Never log secrets
- Never expose stack traces in production
- Use parameterized Prisma queries
- Avoid raw SQL unless necessary

## Not Implemented Yet

- Authentication (login, logout, JWT, password hashing)
- Authorization (role guards, permissions)
- Business API endpoints (projects, services, blogs, etc.)
- CORS configuration
- Security headers
- Rate limiting
- API documentation (Swagger/OpenAPI)

## Next Steps

Phase 6 will implement:
- Project module
- CRUD operations
- API endpoints
- DTOs
- Business logic
