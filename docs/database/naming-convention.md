# Database Naming Convention

## ITX Solution Database Naming Rules

### ID Strategy
- **Type**: UUID (v4) for all entities
- **Rationale**: Distributed-friendly, no sequential ID exposure, future-proof
- **Consistency**: All models use UUID, no mixing with auto-increment integers

### Table and Model Names
- Use PascalCase for Prisma models
- Use snake_case for PostgreSQL table names (Prisma handles this automatically via `@@map`)
- Use singular names for models (e.g., `User`, not `Users`)

### Field Names
- Use camelCase for Prisma field names
- Use snake_case for PostgreSQL column names (Prisma handles this automatically)
- Use descriptive, meaningful names

### Foreign Keys
- Follow the pattern: `{relatedModel}Id` (e.g., `userId`, `projectId`)
- Use singular form of the related model name
- All foreign keys use UUID type matching referenced entity IDs

### Timestamps
- Use `createdAt` and `updatedAt` for automatic timestamp fields
- Use DateTime type for all timestamps
- `updatedAt` uses Prisma's `@updatedAt` for automatic updates
- Optional timestamps like `publishedAt`, `lastLoginAt` are nullable

### Boolean Fields
- Prefix with `is`, `has`, `can`, or `should` where appropriate
- Examples: `isActive`, `hasPublished`, `canEdit`
- Default to `false` where appropriate

### Enums
- Use PascalCase for enum names
- Use SCREAMING_SNAKE_CASE for enum values
- Examples: `ProjectStatus { DRAFT, PUBLISHED, ARCHIVED }`

### Indexes
- Add indexes based on expected query patterns
- Foreign key fields are indexed by default
- Unique constraints provide implicit indexes
- Important query fields: status, featured, publishedAt, slug, createdAt

### Referential Actions
- **Cascade**: Delete child records when parent is deleted (ProjectMedia, ProjectTechnology, BlogPostTag)
- **SetNull**: Nullify foreign key when parent is deleted (preserves historical data)
- **Restrict**: Prevent deletion if child records exist (Role, critical integrity)

## Financial Values

All financial values use PostgreSQL `numeric` type (Prisma `Decimal`).
- **Enquiry.budget**: `Decimal(10, 2)` - 10 total digits, 2 decimal places
- **No Float**: Never use Float for financial amounts
- **Precision**: Chosen based on expected budget ranges (up to ~$99,999,999.99)

## Media Storage

- **No binary storage**: Media table stores metadata only
- **Storage agnostic**: Actual storage provider (S3, R2, local) implemented separately
- **Fields**: storageKey (unique), url, filename, mimeType, size, width, height, altText
- **Rationale**: Allows storage provider changes without schema modifications

## Status Management

Content entities use status enums instead of soft deletes:
- **DRAFT**: Content in progress, not public
- **PUBLISHED**: Publicly visible
- **ARCHIVED**: Hidden but preserved (can be restored)
- **EnquiryStatus**: NEW, CONTACTED, QUALIFIED, CONVERTED, CLOSED, SPAM

## Password Security

- **Never store plaintext**: Use passwordHash field only
- **Hashing**: Password hashing to be implemented in application layer
- **No password tokens**: Session/reset tokens stored separately if needed

