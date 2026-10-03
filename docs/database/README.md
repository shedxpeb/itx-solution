# Database Documentation

## Current Status: Phase 4 Complete

Complete production database schema has been implemented with migration and seed successfully applied to PostgreSQL.

## Migration Status

- **Migration Applied**: Database schema successfully applied via `prisma db push`
- **Database Verified**: All 17 business tables confirmed in PostgreSQL
- **Seed Executed**: Reference data (roles) successfully seeded
- **Seed Idempotent**: Confirmed - multiple runs do not create duplicates
- **No Migration Files**: Since `prisma db push` was used (due to non-interactive environment), no `prisma/migrations/` directory exists
- **Production Note**: For production, use `prisma migrate deploy` with proper migration files created in an interactive environment

## Database Stack

- **Database**: PostgreSQL (installed directly on local dev machine and production VPS)
- **ORM**: Prisma 5.22.0
- **Architecture**: API only communicates with PostgreSQL

## Connection

- Local development: PostgreSQL running on localhost
- Production: PostgreSQL running on VPS (not publicly exposed)
- Connection via: `DATABASE_URL` environment variable

## ID Strategy

- **Type**: UUID (v4)
- **Consistency**: All models use UUID-based IDs
- **Rationale**: Distributed-friendly, no sequential ID exposure, future-proof

## Naming Convention

See [naming-convention.md](./naming-convention.md) for database naming rules.

## Entities

### Core Entities
- **User**: Admin users with role-based access
- **Role**: SUPER_ADMIN, ADMIN
- **Media**: Media metadata (storage agnostic, no binary storage)
- **SiteSetting**: Key-value configuration
- **AuditLog**: System activity tracking

### Content Entities
- **Project**: Portfolio projects with status management
- **ProjectMedia**: Many-to-many Project ↔ Media
- **Technology**: Technology tags
- **ProjectTechnology**: Many-to-many Project ↔ Technology
- **CaseStudy**: Detailed case studies linked to projects
- **Service**: Service offerings
- **BlogCategory**: Blog categorization
- **Tag**: Blog tags
- **BlogPost**: Blog posts with author, category, media, tags
- **BlogPostTag**: Many-to-many BlogPost ↔ Tag
- **Testimonial**: Client testimonials

### Business Entities
- **Enquiry**: Contact/business enquiries with lead tracking

## Enums

- **ProjectStatus**: DRAFT, PUBLISHED, ARCHIVED
- **ServiceStatus**: DRAFT, PUBLISHED, ARCHIVED
- **BlogPostStatus**: DRAFT, PUBLISHED, ARCHIVED
- **EnquiryStatus**: NEW, CONTACTED, QUALIFIED, CONVERTED, CLOSED, SPAM
- **TestimonialStatus**: DRAFT, PUBLISHED, ARCHIVED
- **RoleName**: SUPER_ADMIN, ADMIN

## Relationships

### User Relations
- User → Role (many-to-one)
- User → BlogPost (one-to-many, as author)
- User → Enquiry (one-to-many, as assignedTo)
- User → AuditLog (one-to-many, as actor)

### Project Relations
- Project → ProjectMedia (one-to-many)
- Project → ProjectTechnology (one-to-many)
- Project → CaseStudy (one-to-one)

### Blog Relations
- BlogPost → User (many-to-one, author)
- BlogPost → BlogCategory (many-to-one, optional)
- BlogPost → Media (many-to-one, cover image, optional)
- BlogPost → BlogPostTag (one-to-many)
- BlogCategory → BlogPost (one-to-many)
- Tag → BlogPostTag (one-to-many)

### Enquiry Relations
- Enquiry → Service (many-to-one, optional)
- Enquiry → User (many-to-one, assignedTo, optional)

### Media Relations
- Media → ProjectMedia (one-to-many)
- Media → BlogPost (one-to-many, cover image)
- Media → Testimonial (one-to-many, image)

## Referential Actions

- **Cascade**: Used for dependent child records (ProjectMedia, ProjectTechnology, BlogPostTag)
- **SetNull**: Used where historical data should be preserved (BlogPost category/cover, Enquiry assignments, Testimonial image, AuditLog actor)
- **Restrict**: Used where integrity must be maintained (Role, foreign keys)

## Indexing Strategy

### Performance Indexes
- **Public content**: status, featured, publishedAt, slug
- **Admin queries**: status, createdAt, assignedTo, categoryId, authorId
- **Foreign keys**: All foreign key fields indexed
- **Unique constraints**: Email, slugs, role names, storage keys

### Query Pattern Support
- Published project listings
- Featured content discovery
- Slug-based routing
- Status-based filtering
- Date-range queries
- Category/tag filtering
- User assignment tracking

## Financial Values

- **Budget field**: Uses `Decimal(10, 2)` for Enquiry.budget
- **No Float**: Never use Float for financial amounts
- **Precision**: 10 total digits, 2 decimal places

## Media Storage Strategy

- **No binary storage**: Media table stores metadata only
- **Storage agnostic**: Actual storage provider to be implemented later
- **Fields**: storageKey (unique), url, filename, mimeType, size, dimensions
- **Rationale**: Allows S3, R2, or local storage without schema changes

## Migration Strategy

- **Development**: `pnpm prisma:migrate dev` (interactive environment) or `prisma db push` (non-interactive)
- **Production**: `pnpm prisma:migrate deploy` with proper migration files
- **Initial migration**: `initial_business_schema`
- **Current State**: Schema applied via `prisma db push` (non-interactive environment)
- **Production Note**: For production, create migration files in interactive environment using `prisma migrate dev`
- **Do NOT use**: `prisma db push` in production
- **Seed Command**: `pnpm prisma:seed`

## Status Management

Content entities use status enums instead of soft deletes:
- DRAFT: Content in progress
- PUBLISHED: Publicly visible
- ARCHIVED: Hidden but preserved

## Security

- **Password hashing**: User.passwordHash (never plaintext)
- **No secrets in DB**: Database credentials not stored
- **Environment-based**: DATABASE_URL from environment only
- **Frontend isolation**: No direct PostgreSQL access from frontend

## Next Steps

Phase 5 will implement:
- NestJS backend foundation
- Repository layer
- Service layer
- API controllers
- DTOs
- Authentication foundation


