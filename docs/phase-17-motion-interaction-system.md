# Phase 17 — Premium Motion + Interaction System

## Overview

Phase 17 implemented a centralized motion and interaction system using GSAP, ScrollTrigger, and Lenis. The system provides reusable motion components that can be used across all pages while respecting reduced motion preferences and maintaining performance.

## Dependencies Added

- `gsap` (3.15.0) - Core animation library
- `lenis` (1.3.26) - Smooth scrolling library

## Motion Architecture

### Core Modules

**apps/web/src/lib/motion/**

- `config.ts` - Centralized motion configuration (durations, easing, distances, stagger values)
- `reduced-motion.ts` - Reduced motion detection and utilities
- `lenis.ts` - Lenis smooth scroll initialization and management
- `gsap.ts` - GSAP and ScrollTrigger initialization

**apps/web/src/components/motion/**

- `motion-provider.tsx` - React provider for motion system lifecycle
- `reveal.tsx` - Reusable scroll reveal component
- `reveal-group.tsx` - Staggered group reveal component
- `scroll-progress.tsx` - Global scroll progress indicator
- `index.ts` - Barrel export

**apps/web/src/components/layout/**

- `motion-wrapper.tsx` - Wrapper component integrating MotionProvider and ScrollProgress

## Integration

The motion system is integrated into the root layout via `MotionWrapper`:

```tsx
<MotionWrapper>
  <SiteHeader />
  <main>{children}</main>
  <SiteFooter />
</MotionWrapper>
```

This ensures:
- Single Lenis instance
- GSAP ScrollTrigger integration
- Centralized cleanup
- Reduced motion respect

## Motion Components

### Reveal

A scroll-triggered reveal component for individual elements.

Props:
- `direction`: 'up' | 'down' | 'left' | 'right' (default: 'up')
- `delay`: number (default: 0)
- `duration`: number (default: 0.5s)
- `threshold`: string (default: 'top 80%')

Behavior:
- Opacity: 0 → 1
- Transform: translate based on direction
- ScrollTrigger: 'top 80%'

### RevealGroup

Staggered reveal for child elements.

Props:
- `stagger`: number (default: 0.1s)
- `threshold`: string (default: 'top 80%')

Behavior:
- Children animate in sequence
- Each child: opacity 0 → 1, y: small → 0
- Used for grids (services, projects, technology badges)

### ScrollProgress

Global scroll progress indicator at top of page.

Behavior:
- Fixed position at top
- 1px height
- Scales from 0 to 1 based on scroll
- Fades in after 50px scroll
- Hidden when reduced motion is enabled

## Homepage Integration

Applied motion to all homepage sections:

1. **Hero Section** - Staggered reveals (eyebrow, headline, description, CTAs)
2. **Intro Section** - Reveal intro text, staggered capability strip
3. **Services Section** - Reveal section header, staggered service cards
4. **Projects Section** - Reveal section header, staggered project cards, staggered CTA
5. **Process Section** - Reveal section header, staggered process steps
6. **Technology Section** - Reveal section header, staggered tech categories
7. **CTA Section** - Reveal entire CTA block

## Header Animation

Header has a subtle entrance animation on initial load:
- y: -20 → 0
- opacity: 0 → 1
- duration: 0.5s
- ease: power2.out

## Reduced Motion

The system respects `prefers-reduced-motion: reduce`:

- Lenis is not initialized
- All GSAP animations are skipped
- ScrollProgress is hidden
- Content remains fully visible and usable
- No motion-dependent functionality

## Performance Considerations

- GSAP context cleanup on component unmount
- ScrollTrigger cleanup on route change
- Single Lenis instance (no duplicates)
- ScrollTrigger refresh on resize
- No React state updates on scroll
- No React state updates on mousemove
- GPU-friendly transforms (opacity, translateY)

## Configuration

Motion tokens are centralized in `motionConfig`:

```typescript
duration: { micro: 0.15, short: 0.3, medium: 0.5, long: 0.8 }
easing: { standard, emphasized, enter, exit, elastic }
distance: { small: 20, medium: 40, large: 80 }
stagger: { fast: 0.05, normal: 0.1, slow: 0.15 }
parallax: { subtle: 0.1, normal: 0.2, strong: 0.3 }
```

## Not Implemented (Future Phases)

The following advanced features were intentionally not implemented in this phase:

- Custom cursor (can be added later)
- Magnetic buttons (can be added later)
- Horizontal scroll sections (can be added later)
- Advanced parallax (can be added later)
- Page transitions (can be added later)
- Text reveal (clip-path, character-level) (can be added later)
- Project hover animations (can be added later)

## Server/Client Boundaries

Motion system is entirely client-side:

- MotionProvider is a client component
- All motion components are client components
- Root layout remains server component
- Only motion boundary is client
- Pages remain server-rendered where appropriate

## Accessibility

- Reduced motion respected
- Keyboard navigation not affected
- Focus states preserved
- Screen readers receive normal text
- No content hidden permanently due to animation failure

## Files Created

Motion library:
- `apps/web/src/lib/motion/config.ts`
- `apps/web/src/lib/motion/reduced-motion.ts`
- `apps/web/src/lib/motion/lenis.ts`
- `apps/web/src/lib/motion/gsap.ts`

Motion components:
- `apps/web/src/components/motion/motion-provider.tsx`
- `apps/web/src/components/motion/reveal.tsx`
- `apps/web/src/components/motion/reveal-group.tsx`
- `apps/web/src/components/motion/scroll-progress.tsx`
- `apps/web/src/components/motion/index.ts`

Layout integration:
- `apps/web/src/components/layout/motion-wrapper.tsx`

Modified:
- `apps/web/src/app/layout.tsx` (added MotionWrapper)
- `apps/web/src/components/layout/site-header.tsx` (added entrance animation)
- All homepage sections (added Reveal/RevealGroup components)

## Carryover Items

No backend, database, or API changes were made in this phase.
