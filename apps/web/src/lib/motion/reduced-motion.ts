/**
 * Reduced motion detection
 * Respects user's motion preferences
 */

let prefersReducedMotion = false;
let isInitialized = false;

function initializeReducedMotion() {
  if (isInitialized) return;
  
  if (typeof window !== 'undefined') {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion = mediaQuery.matches;

    // Listen for changes
    mediaQuery.addEventListener('change', (event) => {
      prefersReducedMotion = event.matches;
    });
    
    isInitialized = true;
  }
}

export function getPrefersReducedMotion(): boolean {
  initializeReducedMotion();
  return prefersReducedMotion;
}

export function shouldAnimate(): boolean {
  initializeReducedMotion();
  return !prefersReducedMotion;
}
