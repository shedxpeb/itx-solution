/**
 * Utility function to merge Tailwind CSS classes
 * Simple implementation to avoid additional dependencies
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
