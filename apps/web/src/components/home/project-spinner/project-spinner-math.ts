import { SPINNER_CONFIG } from './project-spinner-config';

export interface SpinnerGeometry {
  radiusX: number;
  radiusY: number;
  centerX: number;
  centerY: number;
}

export interface CardPosition {
  x: number;
  y: number;
  z: number;
  rotateY: number;
  scale: number;
  opacity: number;
  blur: number;
  zIndex: number;
  brightness: number;
}

/**
 * Linear interpolation
 */
function interpolate(value: number, min: number, max: number): number {
  return min + (max - min) * value;
}

/**
 * Calculate card position from master angle with true 3D orbit
 * 
 * Coordinate system:
 * - Scene origin is at stage center (via flexbox centering)
 * - Cards are positioned at left: 0, top: 0 (scene origin)
 * - Transform includes -cardWidth/2, -cardHeight/2 to center card on its position
 */
export function calculateCardPosition(
  masterAngle: number,
  cardIndex: number,
  totalCards: number,
  geometry: SpinnerGeometry,
  cardWidth: number,
  cardHeight: number
): CardPosition {
  // Each card has an angular offset (72 degrees for 5 cards)
  const cardAngle = masterAngle + (cardIndex / totalCards) * Math.PI * 2;
  
  // 3D carousel positioning: sin for X (horizontal), cos for Z (depth)
  // Position relative to scene origin (which is stage center)
  const x = Math.sin(cardAngle) * geometry.radiusX;
  const y = Math.sin(cardAngle * 2) * (geometry.radiusY * 0.25);
  const z = Math.cos(cardAngle) * SPINNER_CONFIG.DEPTH.zRange;
  
  // Calculate rotateY based on horizontal position
  // Left cards rotate one way, right cards the other
  const rotateY = -Math.sin(cardAngle) * SPINNER_CONFIG.DEPTH.rotateYRange;
  
  // Normalize depth for visual properties (0 = back, 1 = front)
  const normalizedDepth = (Math.cos(cardAngle) + 1) / 2;
  
  // Interpolate depth-based properties
  const scale = interpolate(
    normalizedDepth,
    SPINNER_CONFIG.DEPTH_VISUAL.back.scale,
    SPINNER_CONFIG.DEPTH_VISUAL.front.scale
  );
  
  const opacity = interpolate(
    normalizedDepth,
    SPINNER_CONFIG.DEPTH_VISUAL.back.opacity,
    SPINNER_CONFIG.DEPTH_VISUAL.front.opacity
  );
  
  const blur = interpolate(
    normalizedDepth,
    SPINNER_CONFIG.DEPTH_VISUAL.back.blur,
    SPINNER_CONFIG.DEPTH_VISUAL.front.blur
  );
  
  const zIndex = Math.floor(normalizedDepth * 10);
  
  const brightness = 0.85 + normalizedDepth * 0.15;
  
  return { x, y, z, rotateY, scale, opacity, blur, zIndex, brightness };
}

/**
 * Calculate spinner geometry from container dimensions
 */
export function calculateGeometry(
  containerWidth: number,
  containerHeight: number,
  isMobile: boolean
): SpinnerGeometry {
  // Use fixed pixel radii from config (local coordinate system)
  let radiusConfig;
  if (isMobile) {
    radiusConfig = SPINNER_CONFIG.ORBIT_RADIUS.mobile;
  } else if (containerWidth < 1024) {
    radiusConfig = SPINNER_CONFIG.ORBIT_RADIUS.tablet;
  } else {
    radiusConfig = SPINNER_CONFIG.ORBIT_RADIUS.desktop;
  }
  
  // Center point (scene is centered via flexbox, so origin is 0,0)
  const centerX = 0;
  const centerY = 0;
  
  return {
    radiusX: radiusConfig.x,
    radiusY: radiusConfig.y,
    centerX,
    centerY,
  };
}

/**
 * Calculate rotation speed from duration (radians per second)
 */
export function calculateRotationSpeed(duration: number): number {
  return (Math.PI * 2) / duration;
}
