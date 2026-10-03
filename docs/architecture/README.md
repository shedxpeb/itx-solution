# ITX Solution Architecture

## Current Status: Phase 1 Complete

This document describes the architecture decisions made for ITX Solution.

## Technology Stack

### Core
- **Package Manager**: pnpm (monorepo workspace)
- **Build System**: Turborepo
- **Language**: TypeScript (strict mode)

### Applications
- **Public Website**: Next.js 14 (App Router) + Tailwind CSS
- **Admin Panel**: Next.js 14 (App Router) + Tailwind CSS
- **Backend API**: NestJS + Fastify adapter

### Database (PLANNED)
- PostgreSQL (to be configured in later phases)
- Prisma ORM (to be configured in later phases)

## Monorepo Structure

```
itx-solution/
├── apps/
│   ├── web/          # Public company website
│   ├── admin/        # Admin panel
│   └── api/          # Backend API (NestJS + Fastify)
├── packages/
│   ├── ui/           # Reusable UI components
│   ├── config/       # Application configuration
│   ├── contracts/    # Shared API contracts
│   ├── validation/   # Validation schemas
│   └── types/        # Shared TypeScript types
├── prisma/           # Database schema (PLANNED)
├── infrastructure/   # Docker, nginx (PLANNED)
└── docs/             # Documentation
```

## Architecture Rules

### Data Access
1. **Public website** must not access PostgreSQL directly
2. **Admin** must not access PostgreSQL directly
3. **Database access** belongs exclusively to the API/backend layer
4. Frontend applications communicate with the API via HTTP

### Frontend Development
5. **Server Components** should be the default in Next.js
6. **Client Components** only when browser interactivity/state is required
7. Frontend components must not contain business logic
8. Avoid unnecessary API calls - fetch only required data

### API Design
9. **Future APIs** must return only the data required for the specific operation
10. **Future list APIs** must support pagination where collections can grow
11. **Future detail APIs** should fetch by ID/slug, not entire datasets

### Security
12. Do not put secrets into `NEXT_PUBLIC_*` environment variables
13. Do not hardcode production URLs
14. Local secrets live in `.env.local` (gitignored)

### Performance Philosophy
The website will feature advanced animations, but performance remains first-class:
- Mouse interaction
- Custom cursor
- Magnetic buttons
- Smooth scrolling
- Scroll-triggered animation
- Parallax
- Horizontal scroll
- Text reveals
- Image reveals
- Page transitions

Animation libraries (GSAP, Motion, Lenis) will be added in a dedicated later phase.

## Import Aliases

Each application uses `@/*` as an import alias for its `src/` directory:
- `apps/web/src/*` → `@/*`
- `apps/admin/src/*` → `@/*`
- `apps/api/src/*` → `@/*`

## Shared Packages

### packages/ui
Reusable UI components. To be populated in later phases.

### packages/config
Application configuration and design constants. To be populated in later phases.

### packages/contracts
Shared API contracts between frontend and backend. To be populated in later phases.

### packages/validation
Shared validation schemas. To be populated in later phases.

### packages/types
Shared TypeScript types. To be populated in later phases.

## PLANNED Modules

### Phase 2: Database & API Foundation
- Prisma setup
- PostgreSQL connection
- Base API structure
- Authentication foundation

### Phase 3: Admin Panel
- Dashboard
- CRUD operations
- Authentication
- User management

### Phase 4: Public Website Content
- Homepage
- Projects
- Services
- Case studies
- Blog
- Testimonials
- Contact form

### Phase 5: Advanced Features
- Media management
- SEO optimization
- Analytics integration
- Advanced animations
- Custom cursor
- Smooth scrolling

### Phase 6: Production Deployment
- Docker configuration
- Nginx configuration
- VPS deployment
- CI/CD pipelines

## Development Commands

From repository root:
- `pnpm dev` - Start all applications
- `pnpm build` - Build all applications
- `pnpm lint` - Lint all applications
- `pnpm typecheck` - Type check all applications

## Environment Variables

Current minimal `.env.example`:
```env
PORT=3001
# DATABASE_URL= (PLANNED)
# NEXT_PUBLIC_API_URL= (PLANNED)
```

Additional environment variables will be added as features are implemented.
