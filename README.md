# ITX Solution

A production-grade business website platform built with a modern monorepo architecture.

## Architecture Overview

This is a pnpm monorepo using Turborepo for efficient builds and development.

### Applications

- **apps/web** - Public company website (Next.js App Router)
- **apps/admin** - Admin panel (Next.js App Router)
- **apps/api** - Backend API (NestJS + Fastify)

### Shared Packages

- **packages/ui** - Reusable UI components
- **packages/config** - Application configuration and design constants
- **packages/contracts** - Shared API contracts
- **packages/validation** - Shared validation schemas
- **packages/types** - Shared TypeScript types

## Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

## Installation

```bash
pnpm install
```

## Development

Start all applications in development mode:

```bash
pnpm dev
```

Individual applications:
- Web: `cd apps/web && pnpm dev` (http://localhost:3000)
- Admin: `cd apps/admin && pnpm dev` (http://localhost:3000)
- API: `cd apps/api && pnpm dev` (http://localhost:3001)

## Build

Build all applications for production:

```bash
pnpm build
```

## Lint

Run ESLint across the workspace:

```bash
pnpm lint
```

## Type Check

Run TypeScript type checking:

```bash
pnpm typecheck
```

## Workspace Structure

```
itx-solution/
├── apps/
│   ├── web/          # Public website
│   ├── admin/        # Admin panel
│   └── api/          # Backend API
├── packages/
│   ├── ui/           # Shared UI components
│   ├── config/       # Configuration
│   ├── contracts/    # API contracts
│   ├── validation/   # Validation schemas
│   └── types/        # Shared types
├── prisma/           # Database schema (future)
├── infrastructure/   # Docker, nginx (future)
└── docs/             # Documentation
```

## Architecture Rules

1. Public website and admin must not access PostgreSQL directly
2. Database access belongs to the API/backend layer
3. Frontend components must not contain business logic
4. Server Components should be the default in Next.js
5. Client Components only when browser interactivity is required
6. No secrets in `NEXT_PUBLIC_*` environment variables
7. No hardcoded production URLs

## Future Phases

This is Phase 1: Project Foundation. Subsequent phases will implement:
- Database schema and Prisma
- API business modules
- Authentication
- Admin dashboard
- Project/Service/Case Study/Blog CRUD
- Contact form
- Media management
- SEO
- Advanced animations
- Production deployment

See [docs/architecture/README.md](docs/architecture/README.md) for detailed architecture decisions.
