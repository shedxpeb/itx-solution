/**
 * Motion configuration constants
 * Centralized timing, easing, and distance values
 */

export const motionConfig = {
  // Durations (in seconds)
  duration: {
    micro: 0.15,
    short: 0.3,
    medium: 0.5,
    long: 0.8,
    xlong: 1.2,
  },

  // Easing functions (GSAP format)
  easing: {
    standard: 'power2.out',
    emphasized: 'power3.out',
    enter: 'power3.inOut',
    exit: 'power2.in',
    elastic: 'elastic.out(1, 0.5)',
    smooth: 'sine.inOut',
    bouncy: 'back.out(1.7)',
  },

  // Distances (in pixels)
  distance: {
    small: 20,
    medium: 40,
    large: 80,
    xlarge: 120,
  },

  // Stagger delays (in seconds)
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
    xslow: 0.2,
  },

  // Scroll trigger thresholds
  scroll: {
    triggerStart: 'top 80%',
    triggerCenter: 'top 60%',
    triggerEnd: 'bottom 20%',
    triggerViewport: 'top bottom',
  },

  // Parallax intensity
  parallax: {
    subtle: 0.1,
    normal: 0.2,
    strong: 0.3,
    xstrong: 0.5,
  },

  // Magnetic button strength
  magnetic: {
    subtle: 0.3,
    normal: 0.5,
    strong: 0.7,
  },
} as const;
