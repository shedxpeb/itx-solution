/**
 * Lenis smooth scroll configuration
 * Single instance management
 */

import Lenis from 'lenis';
import { getPrefersReducedMotion } from './reduced-motion';

let lenisInstance: Lenis | null = null;

export function initLenis(): Lenis | null {
  // Don't initialize if reduced motion is preferred
  if (getPrefersReducedMotion()) {
    return null;
  }

  // Don't initialize if already exists
  if (lenisInstance) {
    return lenisInstance;
  }

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  });

  return lenisInstance;
}

export function getLenis(): Lenis | null {
  return lenisInstance;
}

export function destroyLenis(): void {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}

export function startLenis(): void {
  lenisInstance?.start();
}

export function stopLenis(): void {
  lenisInstance?.stop();
}
