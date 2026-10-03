// Project spinner configuration constants

export const SPINNER_CONFIG = {
  // Rotation duration in seconds
  ROTATION_DURATION: 22,
  
  // Hover speed multiplier (spinner slows but doesn't stop)
  HOVER_SPEED_MULTIPLIER: 0.35,
  
  // Orbit radii in pixels (local coordinate system, centered at origin)
  ORBIT_RADIUS: {
    desktop: { x: 220, y: 50 },
    tablet: { x: 180, y: 40 },
    mobile: { x: 130, y: 30 },
  },
  
  // Card dimensions (balanced for visibility and composition)
  CARD: {
    desktop: { width: 280, height: 175 },
    tablet: { width: 220, height: 140 },
    mobile: { width: 180, height: 115 },
  },
  
  // 3D depth parameters
  DEPTH: {
    zRange: 280, // Z translation range
    rotateYRange: 18, // Maximum Y rotation angle
  },
  
  // Depth-based visual properties
  DEPTH_VISUAL: {
    front: { scale: 1.0, opacity: 1.0, blur: 0 },
    middle: { scale: 0.90, opacity: 0.90, blur: 0.1 },
    back: { scale: 0.80, opacity: 0.80, blur: 0.25 },
  },
  
  // Perspective (tuned for premium depth without exaggeration)
  PERSPECTIVE: 1300,
  
  // Parallax limits
  PARALLAX: {
    rotateX: 2,
    rotateY: 2,
  },
  
  // Max delta time to prevent jumps (ms)
  MAX_DELTA: 100,
} as const;
