# ITX Solution Design System

## Overview
The ITX Solution design system provides a unified visual language for the entire application. It is built on semantic tokens, reusable components, and accessibility-first principles.

## Design Philosophy
The ITX Solution website communicates:
- Technology
- Trust
- Precision
- Engineering
- Business capability
- Modernity
- Confidence
- Professionalism

Visual quality comes from:
- Generous whitespace
- Controlled typography
- Strong headlines
- Clear content hierarchy
- Deliberate grids
- Restrained colors
- Strong contrast
- Consistent spacing
- Purposeful borders
- Subtle depth

## Color System

### Semantic Colors
Components use semantic color names, not raw hex values:

**Backgrounds**
- `background` - #FFFFFF (primary background)
- `background-alt` - #F8F9FA (secondary background)
- `background-dark` - #1B1B19 (dark sections)
- `background-dark-alt` - #252523 (dark secondary)

**Foregrounds**
- `foreground` - #1B1B19 (primary text)
- `foreground-alt` - #404040 (secondary text)
- `foreground-muted` - #6B7280 (muted text)
- `foreground-on-dark` - #FFFFFF (text on dark)
- `foreground-on-dark-alt` - #E5E5E5 (secondary on dark)

**Surfaces**
- `surface` - #FFFFFF (card backgrounds)
- `surface-alt` - #F8F9FA (secondary surfaces)
- `surface-elevated` - #FFFFFF (elevated surfaces)
- `surface-dark` - #252523 (dark surfaces)
- `surface-dark-alt` - #2D2D2B (dark secondary)

**Borders**
- `border` - #E5E7EB (primary border)
- `border-alt` - #D1D5DB (secondary border)
- `border-dark` - #3D3D3B (dark border)
- `border-dark-alt` - #4D4D4B (dark secondary)

**Brand Colors**
- `primary` - #4099D5 (ITX blue)
- `primary-dark` - #3080B5 (primary hover)
- `primary-light` - #5AA8DD (primary light)
- `primary-foreground` - #FFFFFF (text on primary)

- `secondary` - #303D50 (ITX dark blue)
- `secondary-dark` - #252F3E (secondary hover)
- `secondary-light` - #4A5B75 (secondary light)
- `secondary-foreground` - #FFFFFF (text on secondary)

**Semantic States**
- `success` - #10B981
- `warning` - #F59E0B
- `error` - #EF4444
- `info` - #3B82F6

## Typography

### Font Families
- **Sans**: Inter (variable font, optimized for web)
- **Mono**: JetBrains Mono (for code/technical content)

### Type Scale

**Display**
- `display-large`: clamp(2.5rem, 5vw, 4rem)
- `display-medium`: clamp(2rem, 4vw, 3rem)
- `display-small`: clamp(1.5rem, 3vw, 2.25rem)

**Headings**
- `h1`: clamp(2rem, 4vw, 3rem)
- `h2`: clamp(1.75rem, 3.5vw, 2.5rem)
- `h3`: clamp(1.5rem, 3vw, 2rem)
- `h4`: 1.5rem
- `h5`: 1.25rem
- `h6`: 1.125rem

**Body**
- `body-large`: 1.125rem
- `body-medium`: 1rem
- `body-small`: 0.875rem

**Labels**
- `label-medium`: 0.875rem
- `label-small`: 0.75rem

**Other**
- `caption`: 0.75rem
- `overline`: 0.6875rem (uppercase, tracking-wider)

### Line Heights
- `tight`: 1.1 (headings)
- `snug`: 1.25 (tight spacing)
- `normal`: 1.5 (body text)
- `relaxed`: 1.625 (comfortable reading)
- `loose`: 2 (extra spacing)

### Letter Spacing
- `tighter`: -0.05em
- `tight`: -0.025em
- `normal`: 0
- `wide`: 0.025em
- `wider`: 0.05em
- `widest`: 0.1em

### Font Weights
- `light`: 300
- `normal`: 400
- `medium`: 500
- `semibold`: 600
- `bold`: 700
- `extrabold`: 800

## Spacing System

Consistent spacing scale based on 4px base unit:
- `0`: 0
- `1`: 0.25rem (4px)
- `2`: 0.5rem (8px)
- `3`: 0.75rem (12px)
- `4`: 1rem (16px)
- `5`: 1.25rem (20px)
- `6`: 1.5rem (24px)
- `8`: 2rem (32px)
- `10`: 2.5rem (40px)
- `12`: 3rem (48px)
- `16`: 4rem (64px)
- `20`: 5rem (80px)
- `24`: 6rem (96px)
- `32`: 8rem (128px)

## Border Radius

Restrained radius scale:
- `none`: 0
- `small`: 0.25rem (4px)
- `medium`: 0.375rem (6px)
- `large`: 0.5rem (8px)
- `xl`: 0.75rem (12px)
- `2xl`: 1rem (16px)
- `pill`: 9999px

## Shadows

Limited shadow scale - prefer borders and contrast:
- `none`: none
- `small`: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
- `medium`: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
- `large`: 0 10px 15px -3px rgba(0, 0, 0, 0.1)

## Z-Index

Controlled layering system:
- `base`: 0
- `content`: 10
- `sticky`: 20
- `header`: 30
- `dropdown`: 40
- `modal`: 50
- `toast`: 60
- `tooltip`: 70

## Breakpoints

Responsive breakpoints:
- `mobile`: 375px
- `mobile-large`: 430px
- `tablet`: 768px
- `laptop`: 1024px
- `desktop`: 1280px
- `desktop-large`: 1440px

## Container Widths

- `standard`: 1200px
- `wide`: 1400px
- `narrow`: 800px

## Motion Tokens (Foundation)

Durations for future animation system:
- `fast`: 150ms
- `normal`: 300ms
- `slow`: 500ms

Easing functions:
- `standard`: cubic-bezier(0.4, 0, 0.2, 1)
- `emphasized`: cubic-bezier(0.25, 0.1, 0.25, 1)
- `enter`: cubic-bezier(0, 0, 0.2, 1)
- `exit`: cubic-bezier(0.4, 0, 1, 1)

## Transitions

Standard transitions for interactive states:
- `fast`: 150ms cubic-bezier(0.4, 0, 0.2, 1)
- `normal`: 300ms cubic-bezier(0.4, 0, 0.2, 1)
- `slow`: 500ms cubic-bezier(0.4, 0, 0.2, 1)

## Accessibility

### Touch Targets
Minimum touch target size: 44px

### Focus Ring
- Width: 2px
- Offset: 2px
- Color: primary (#4099D5)

### Reduced Motion
All motion should respect `prefers-reduced-motion` media query.

## Components

### Button
Variants:
- `primary` - Brand color, prominent
- `secondary` - Secondary brand color
- `outline` - Border only
- `ghost` - Transparent with hover
- `link` - Text link style
- `destructive` - Error/action color

Sizes:
- `small` - Compact
- `medium` - Standard
- `large` - Prominent

States:
- Default, hover, active, focus-visible, disabled, loading

### Typography
Components:
- `Typography` - Base component with variant prop
- `DisplayLarge/Medium/Small` - Display headings
- `Heading1/2/3/4/5/6` - Semantic headings
- `BodyLarge/Medium/Small` - Body text
- `Label` - Form labels
- `Caption` - Small captions
- `Eyebrow` - Overline text

### Card
Variants:
- `default` - Standard card
- `elevated` - With shadow
- `outlined` - Thick border
- `interactive` - Hover state

Composition:
- `Card` - Container
- `CardHeader` - Header section
- `CardContent` - Content section
- `CardFooter` - Footer/actions

### Badge
Variants:
- `default` - Muted
- `primary` - Brand color
- `success` - Green
- `warning` - Orange
- `error` - Red
- `outline` - Border only

Sizes:
- `small` - Compact
- `medium` - Standard

### Container
Variants:
- `standard` - 1200px max-width
- `wide` - 1400px max-width
- `narrow` - 800px max-width
- `full` - Full width

### Section
Variants:
- `default` - Light background
- `dark` - Dark background
- `muted` - Alt background

Composition:
- `Section` - Container with padding
- `SectionHeader` - Header wrapper
- `SectionTitle` - Heading
- `SectionDescription` - Description
- `SectionActions` - CTA area

### Media
Variants:
- `default` - No radius
- `rounded` - Rounded corners
- `circle` - Circular

Aspect Ratios:
- `square` - 1:1
- `portrait` - 3:4
- `landscape` - 16:9
- `auto` - Natural

### Form
Components:
- `Input` - Text input with error state
- `Textarea` - Multi-line input with error state

Features:
- Focus-visible ring
- Error state styling
- Disabled state
- Placeholder styling

### Feedback
Components:
- `Skeleton` - Loading placeholder
- `EmptyState` - Empty data state

### Link
Components:
- `CustomLink` - Regular anchor with variants
- `NavLink` - Next.js link with variants

Variants:
- `default` - Standard color
- `primary` - Brand color
- `muted` - Muted color

## Usage Examples

### Button
```tsx
import { Button } from '@itx/ui';

<Button variant="primary" size="medium">
  Click me
</Button>
```

### Typography
```tsx
import { Heading2, BodyMedium } from '@itx/ui';

<Heading2>Section Title</Heading2>
<BodyMedium>Description text</BodyMedium>
```

### Card
```tsx
import { Card, CardHeader, CardContent } from '@itx/ui';

<Card variant="elevated">
  <CardHeader>
    <h3>Card Title</h3>
  </CardHeader>
  <CardContent>
    <p>Card content</p>
  </CardContent>
</Card>
```

### Section
```tsx
import { Section, SectionHeader, SectionTitle, SectionDescription } from '@itx/ui';

<Section variant="dark">
  <SectionHeader>
    <SectionTitle>Section Title</SectionTitle>
    <SectionDescription>Description</SectionDescription>
  </SectionHeader>
</Section>
```

## Responsive Design

The design system is mobile-first. All components are designed to work on:
- Mobile (375px-430px)
- Tablet (768px)
- Desktop (1280px+)

Typography uses `clamp()` for smooth scaling across breakpoints.

## Guidelines

### Do
- Use semantic color tokens
- Follow the spacing scale
- Use appropriate typography hierarchy
- Ensure keyboard navigation works
- Provide sufficient contrast
- Test on mobile, tablet, and desktop

### Don't
- Use raw hex colors
- Create arbitrary spacing values
- Skip accessibility states
- Depend only on hover interactions
- Make every element pill-shaped
- Use excessive shadows

## Future Enhancements

The design system foundation is ready for:
- Advanced animations (Phase 11)
- Interactive components
- Theme switching
- Component variants
- Pattern library
