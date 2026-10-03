# Migration Guide

## Current State

The database schema was applied using `prisma db push` due to a non-interactive environment. This means:

- ✅ Database schema is correctly applied to PostgreSQL
- ✅ All 17 business tables exist with proper structure
- ✅ Seed data (roles) has been applied
- ❌ No `prisma/migrations/` directory exists
- ❌ No migration history tracking

## For Production

To properly prepare for production deployment, you need to create migration files in an **interactive environment**:

### Step 1: Create Migration Files

In an interactive terminal (local machine with GUI):

```bash
cd itx-solution
pnpm prisma:migrate dev --name initial_business_schema
```

This will:
- Create `prisma/migrations/` directory
- Generate migration SQL file with timestamp
- Record migration in `_prisma_migrations` table

### Step 2: Verify Migration

```bash
pnpm prisma:migrate status
```

### Step 3: Production Deployment

On production VPS:

```bash
# Build application
pnpm build

# Backup database (IMPORTANT!)
pg_dump itx_solution > backup.sql

# Apply migrations
pnpm prisma:migrate deploy

# Seed (only if needed)
pnpm prisma:seed
```

## Development Workflow

### Current (Non-Interactive)

```bash
DATABASE_URL="postgresql://..." pnpm prisma db push
DATABASE_URL="postgresql://..." pnpm prisma:seed
```

### Recommended (Interactive)

```bash
pnpm prisma:migrate dev --name <migration_name>
pnpm prisma:seed
```

## Important Notes

- **Never use `prisma db push` in production**
- **Always backup database before production migrations**
- **Migration files must be created in interactive environment**
- **Seed is idempotent - safe to run multiple times**
- **Seed only creates reference data (roles), no fake content**

## Reset Development Database (Local Only)

```bash
# WARNING: This deletes all data
DATABASE_URL="postgresql://..." pnpm prisma migrate reset
```

Never run `migrate reset` in production.
