/**
 * ITX Solution Design Tokens
 *
 * Centralized design system tokens for colors, typography, spacing,
 * and other visual foundations.
 */

// ============================================================================
// COLOR TOKENS
// ============================================================================

/**
 * Semantic color tokens
 * Components should use these semantic names, not raw hex values
 */
export const colors = {
  // Backgrounds
  background: '#FFFFFF',
  backgroundAlt: '#F8F9FA',
  backgroundDark: '#1B1B19',
  backgroundDarkAlt: '#252523',

  // Foregrounds
  foreground: '#1B1B19',
  foregroundAlt: '#404040',
  foregroundMuted: '#6B7280',
  foregroundOnDark: '#FFFFFF',
  foregroundOnDarkAlt: '#E5E5E5',

  // Surfaces
  surface: '#FFFFFF',
  surfaceAlt: '#F8F9FA',
  surfaceElevated: '#FFFFFF',
  surfaceDark: '#252523',
  surfaceDarkAlt: '#2D2D2B',

  // Borders
  border: '#E5E7EB',
  borderAlt: '#D1D5DB',
  borderDark: '#3D3D3B',
  borderDarkAlt: '#4D4D4B',

  // Primary brand (based on ITX blue)
  primary: '#4099D5',
  primaryDark: '#3080B5',
  primaryLight: '#5AA8DD',
  primaryForeground: '#FFFFFF',

  // Secondary
  secondary: '#303D50',
  secondaryDark: '#252F3E',
  secondaryLight: '#4A5B75',
  secondaryForeground: '#FFFFFF',

  // Accent
  accent: '#4099D5',
  accentForeground: '#FFFFFF',

  // Muted
  muted: '#F3F4F6',
  mutedForeground: '#6B7280',

  // Semantic states
  success: '#10B981',
  successForeground: '#FFFFFF',
  warning: '#F59E0B',
  warningForeground: '#FFFFFF',
  error: '#EF4444',
  errorForeground: '#FFFFFF',
  info: '#3B82F6',
  infoForeground: '#FFFFFF',
} as const;

// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================

/**
 * Font families
 */
export const fonts = {
  sans: [
    'Inter',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ],
  mono: [
    'JetBrains Mono',
    'Menlo',
    'Monaco',
    'Consolas',
    'Liberation Mono',
    'Courier New',
    'monospace',
  ],
} as const;

/**
 * Font sizes (responsive using clamp where appropriate)
 */
export const fontSizes = {
  // Display
  display: {
    large: 'clamp(2.5rem, 5vw, 4rem)',
    medium: 'clamp(2rem, 4vw, 3rem)',
    small: 'clamp(1.5rem, 3vw, 2.25rem)',
  },

  // Headings
  heading: {
    h1: 'clamp(2rem, 4vw, 3rem)',
    h2: 'clamp(1.75rem, 3.5vw, 2.5rem)',
    h3: 'clamp(1.5rem, 3vw, 2rem)',
    h4: '1.5rem',
    h5: '1.25rem',
    h6: '1.125rem',
  },

  // Body
  body: {
    large: '1.125rem',
    medium: '1rem',
    small: '0.875rem',
  },

  // Labels
  label: {
    medium: '0.875rem',
    small: '0.75rem',
  },

  // Captions
  caption: '0.75rem',

  // Overline
  overline: '0.6875rem',
} as const;

/**
 * Line heights
 */
export const lineHeights = {
  tight: 1.1,
  snug: 1.25,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
} as const;

/**
 * Letter spacing
 */
export const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const;

/**
 * Font weights
 */
export const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

// ============================================================================
// SPACING TOKENS
// ============================================================================

/**
 * Consistent spacing scale (4px base unit)
 */
export const spacing = {
  0: '0',
  1: '0.25rem', // 4px
  2: '0.5rem',  // 8px
  3: '0.75rem', // 12px
  4: '1rem',    // 16px
  5: '1.25rem', // 20px
  6: '1.5rem',  // 24px
  8: '2rem',    // 32px
  10: '2.5rem', // 40px
  12: '3rem',   // 48px
  16: '4rem',   // 64px
  20: '5rem',   // 80px
  24: '6rem',   // 96px
  32: '8rem',   // 128px
} as const;

// ============================================================================
// BORDER RADIUS TOKENS
// ============================================================================

/**
 * Restrained radius scale
 */
export const radii = {
  none: '0',
  small: '0.25rem',  // 4px
  medium: '0.375rem', // 6px
  large: '0.5rem',   // 8px
  xl: '0.75rem',     // 12px
  '2xl': '1rem',     // 16px
  pill: '9999px',
} as const;

// ============================================================================
// SHADOW TOKENS
// ============================================================================

/**
 * Limited shadow scale - prefer borders and contrast over shadows
 */
export const shadows = {
  none: 'none',
  small: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  medium: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  large: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
} as const;

// ============================================================================
// Z-INDEX TOKENS
// ============================================================================

/**
 * Controlled layering system
 */
export const zIndex = {
  base: 0,
  content: 10,
  sticky: 20,
  header: 30,
  dropdown: 40,
  modal: 50,
  toast: 60,
  tooltip: 70,
} as const;

// ============================================================================
// BREAKPOINT TOKENS
// ============================================================================

/**
 * Responsive breakpoints
 */
export const breakpoints = {
  mobile: '375px',
  mobileLarge: '430px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px',
  desktopLarge: '1440px',
} as const;

// ============================================================================
// CONTAINER TOKENS
// ============================================================================

/**
 * Container widths
 */
export const containers = {
  standard: '1200px',
  wide: '1400px',
  narrow: '800px',
} as const;

// ============================================================================
// MOTION TOKENS (Foundation for future animation)
// ============================================================================

/**
 * Durations for future animation system
 */
export const durations = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
} as const;

/**
 * Easing functions for future animation system
 */
export const easings = {
  standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
  emphasized: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  enter: 'cubic-bezier(0, 0, 0.2, 1)',
  exit: 'cubic-bezier(0.4, 0, 1, 1)',
} as const;

// ============================================================================
// TRANSITION TOKENS
// ============================================================================

/**
 * Standard transitions for interactive states
 */
export const transitions = {
  fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
  normal: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

// ============================================================================
// ACCESSIBILITY TOKENS
// ============================================================================

/**
 * Minimum touch target size
 */
export const touchTarget = '44px';

/**
 * Focus ring options
 */
export const focusRing = {
  width: '2px',
  offset: '2px',
  color: colors.primary,
  colorDark: colors.primaryLight,
} as const;
