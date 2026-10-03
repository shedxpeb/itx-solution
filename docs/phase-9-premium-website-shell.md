# Phase 9 — Premium Website Shell

## Overview

Phase 9 established the global website shell for ITX Solution, including header, footer, navigation, and responsive layout foundation. The shell uses the Phase 8 design system components and centralized configuration.

## Files Created

### Layout Components
- `apps/web/src/components/layout/site-header.tsx` — Global header with desktop/mobile navigation
- `apps/web/src/components/layout/site-footer.tsx` — Global footer with navigation groups and CTA

### Configuration
- `packages/config/src/index.ts` — Centralized site configuration, navigation, CTA settings

### Modified Files
- `apps/web/src/app/layout.tsx` — Integrated header and footer into root layout
- `packages/ui/src/components/link/Link.tsx` — Added onClick support to NavLink for mobile menu
- `packages/ui/src/components/button/Button.tsx` — Restored to original state (removed asChild experiment)

## Architecture

### Site Configuration
Configuration is centralized in `packages/config/src/index.ts`:

- `navigation` — Main navigation items with disabled state for future routes
- `footerNavigation` — Footer navigation groups (company, services, resources)
- `siteConfig` — Site name, description, URL, and contact info placeholders
- `ctaConfig` — Header and footer CTA labels and hrefs

### Header
The header is a client component (`'use client'`) to handle mobile menu state:

- Sticky positioning with backdrop blur
- Desktop navigation with active route highlighting
- Mobile menu with accessible button and dialog
- Route-aware active state using `usePathname`
- Keyboard accessible (Escape closes menu, proper ARIA attributes)
- Minimum 44px touch targets for mobile controls

### Footer
The footer is a server component:

- Brand block with site name and description
- Navigation groups (Company, Services, Resources)
- CTA section with button-style link
- Copyright and legal links
- Responsive grid layout

### Active Route Detection
The header uses `usePathname()` to detect active routes:

- `/` matches only home
- `/projects` matches `/projects` and `/projects/[slug]`
- Active routes use `primary` variant for visual distinction

### Disabled Routes
Future routes are marked with `disabled: true` in configuration:

- About, Services, Case Studies, Blog, Contact
- Disabled items render with muted opacity and `cursor-not-allowed`
- CTA buttons are disabled until contact page exists

## Accessibility

### Header
- Semantic `<header>` and `<nav>` elements
- Mobile menu button with `aria-expanded`, `aria-controls`, `aria-label`
- Menu dialog with `role="dialog"` and `aria-modal="true"`
- Keyboard navigation (Tab, Enter, Escape)
- Focus-visible ring styles
- Minimum 44px touch targets

### Footer
- Semantic `<footer>` element
- Proper heading hierarchy
- Accessible link labels
- Focus-visible states

## Responsive Behavior

### Breakpoints
- Mobile: 375px, 390px, 430px (menu button visible)
- Tablet: 768px, 1024px (desktop navigation visible)
- Desktop: 1280px, 1440px+ (full layout)

### Header
- Height: 64px (h-16)
- Container: max-w-[1200px] with responsive padding
- Mobile menu: Full-width drawer below header

### Footer
- 4-column grid on desktop
- Single column on mobile
- Responsive padding (py-16 md:py-24)

## Design System Usage

The shell uses Phase 8 components:

- `NavLink` — All navigation links with variants (default, primary, muted)
- `Heading4` — Footer section headings
- `BodyMedium` — Footer body text
- Design tokens — Spacing, colors, typography from centralized tokens

## Integration

### Root Layout
The root layout (`apps/web/src/app/layout.tsx`) wraps all pages:

```tsx
<SiteHeader />
<main>{children}</main>
<SiteFooter />
```

This ensures header and footer appear on all routes including:
- `/` (home)
- `/projects` (project list)
- `/projects/[slug]` (project detail)
- `/design-system` (design system preview)

## Mobile Navigation Behavior

- Menu button toggles mobile menu open/close
- Clicking any navigation item closes the menu
- CTA click closes the menu
- Menu closes on route navigation
- Overlay/background click could be added for close behavior (not implemented)

## Performance

- Header is client component only for mobile menu state
- Footer is server component
- No animation libraries
- No unnecessary providers
- Minimal client-side JavaScript

## Known Limitations

- Active route detection is basic (prefix matching)
- No backdrop click to close mobile menu
- Escape key closes menu but focus management could be improved
- CTA buttons are disabled until contact page exists
- Social links structure exists but URLs are placeholders

## Future Enhancements

- Add proper focus trap for mobile menu
- Implement backdrop click to close mobile menu
- Add actual social media URLs
- Enable CTAs when contact page exists
- Consider adding a skip-to-content link
- Add proper breadcrumb navigation for project detail pages

## Verification

All applications typecheck and build successfully:
- ✅ Web typecheck
- ✅ Admin typecheck
- ✅ API typecheck
- ✅ Web build
- ✅ Admin build
- ✅ API build

Phase 7 Project API integration remains functional.
