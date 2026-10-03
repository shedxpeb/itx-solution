/**
 * GSAP and ScrollTrigger initialization
 * Single instance management
 */

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  // Make gsap available globally for other modules
  (window as any).gsap = gsap;
  (window as any).ScrollTrigger = ScrollTrigger;
}

export { gsap, ScrollTrigger };

export function refreshScrollTrigger(): void {
  if (typeof window !== 'undefined') {
    ScrollTrigger.refresh();
  }
}

export function scrollTriggerClear(): void {
  if (typeof window !== 'undefined') {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }
}
