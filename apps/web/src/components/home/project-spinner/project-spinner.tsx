'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/motion/gsap';
import { shouldAnimate } from '@/lib/motion/reduced-motion';
import Link from 'next/link';
import Image from 'next/image';

// Configuration
const CONFIG = {
  // Animation
  ROTATION_DURATION: 22, // seconds per full revolution
  HOVER_SPEED_MULTIPLIER: 0.35,
  QA_SPEED_MULTIPLIER: 1, // Normal speed
  MAX_DELTA: 0.1, // max delta time in seconds (GSAP ticker uses seconds)
  
  // Card dimensions
  CARD: {
    desktop: { width: 270, height: 169 },
    tablet: { width: 225, height: 141 },
    mobile: { width: 180, height: 113 },
  },
  
  // 3D cylinder parameters
  CYLINDER: {
    desktop: { radius: 300, depth: 800, verticalCurve: 12 },
    tablet: { radius: 240, depth: 640, verticalCurve: 10 },
    mobile: { radius: 100, depth: 480, verticalCurve: 6 },
  },

  // Perspective
  PERSPECTIVE: 2000,

  // Rotation range
  ROTATE_Y_RANGE: 35, // degrees
} as const;

interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  slug: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    id: 'shedxpeb',
    name: 'ShedX PEB',
    category: 'Web Platform',
    description: 'Industrial manufacturing platform for pre-engineered buildings.',
    slug: 'shedxpeb',
    image: '/projects/shedxpeb/SHEDX.jpg',
  },
  {
    id: 'proxsteelhub',
    name: 'ProxSteelHub',
    category: 'Business System',
    description: 'Steel trading and inventory management system.',
    slug: 'proxsteelhub',
    image: '/projects/proxsteelhub/PROX.png',
  },
  {
    id: 'buildxcrm',
    name: 'BuildX CRM',
    category: 'CRM Software',
    description: 'Construction project management and CRM solution.',
    slug: 'buildxcrm',
    image: '/projects/buildxcrm/buildx.png',
  },
  {
    id: 'purchase',
    name: 'Purchase',
    category: 'E-commerce',
    description: 'Modern e-commerce platform for retail operations.',
    slug: 'purchase',
    image: '/projects/purchasee/prchase.png',
  },
  {
    id: 'task-management',
    name: 'Task Management',
    category: 'Productivity',
    description: 'Team task and project management application.',
    slug: 'task-management',
    image: '/projects/task-management/task.png',
  },
];

const getProjectInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 3);
};

// Helper: linear interpolation
const lerp = (value: number, min: number, max: number): number => {
  return min + (max - min) * value;
};

// Helper: get responsive config
const getResponsiveConfig = (width: number) => {
  // Calculate responsive radius based on available viewport width
  const availableWidth = width;
  const safePadding = 32; // 16px on each side
  const usableWidth = availableWidth - safePadding;
  
  // Calculate radius as percentage of usable width (approx 38-40%)
  const calculatedRadius = Math.max(100, Math.min(320, usableWidth * 0.38));
  
  // Calculate depth proportionally (1.2-1.4x radius)
  const calculatedDepth = calculatedRadius * 1.3;
  
  // Calculate vertical curve (3-4% of radius)
  const calculatedVerticalCurve = calculatedRadius * 0.04;

  if (width < 768) {
    return {
      card: CONFIG.CARD.mobile,
      cylinder: {
        radius: calculatedRadius,
        depth: calculatedDepth,
        verticalCurve: calculatedVerticalCurve,
      },
    };
  } else if (width < 1024) {
    return {
      card: CONFIG.CARD.tablet,
      cylinder: {
        radius: calculatedRadius,
        depth: calculatedDepth,
        verticalCurve: calculatedVerticalCurve,
      },
    };
  }
  return {
    card: CONFIG.CARD.desktop,
    cylinder: {
      radius: calculatedRadius,
      depth: calculatedDepth,
      verticalCurve: calculatedVerticalCurve,
    },
  };
};

export function ProjectSpinner3D() {
  const stageRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Animation state (all in refs, no React state in loop)
  const masterAngleRef = useRef(0);
  const speedMultiplierRef = useRef(1);
  const rotationSpeedRef = useRef(0);
  const previousTimeRef = useRef(0);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const [windowWidth, setWindowWidth] = useState(1920);



  // Apply card transform (center card on its position)
  const applyCardTransform = (
    card: HTMLDivElement,
    x: number,
    y: number,
    z: number,
    rotateY: number,
    scale: number,
    opacity: number,
    blur: number,
    zIndex: number,
    cardWidth: number,
    cardHeight: number
  ) => {
    card.style.transform = `translate3d(${x - cardWidth / 2}px, ${y - cardHeight / 2}px, ${z}px) rotateY(${rotateY}deg) scale(${scale})`;
    card.style.opacity = opacity.toString();
    card.style.zIndex = zIndex.toString();
    card.style.backfaceVisibility = 'visible';
    card.style.filter = `blur(${blur}px)`;
  };

  // Calculate card position from angle using 3D cylinder model
  const calculateCardPosition = (
    angle: number,
    cardWidth: number,
    cardHeight: number,
    width: number
  ) => {
    const config = getResponsiveConfig(width);
    const { radius, depth, verticalCurve } = config.cylinder;

    // 3D cylinder geometry
    const x = Math.sin(angle) * radius;
    const y = Math.sin(angle) * verticalCurve;
    const z = Math.cos(angle) * depth;

    // Card rotation based on angle (faces toward center)
    const rotateY = -Math.sin(angle) * CONFIG.ROTATE_Y_RANGE;

    // Depth factor (0 = back, 1 = front)
    const depthFactor = (z + depth) / (2 * depth);

    // Scale based on depth - stronger depth hierarchy
    const scale = lerp(depthFactor, 0.82, 1.0);

    // Opacity based on depth - rear cards more visible
    const opacity = lerp(depthFactor, 0.75, 1.0);

    // z-index based on depth - continuous mapping from Z to z-index range
    // Map depthFactor (0-1) to z-index (1-100) smoothly
    const zIndex = Math.floor(depthFactor * 99) + 1;

    // Blur based on depth - rear cards slightly blurred
    const blur = (1 - depthFactor) * 1.5;

    return { x, y, z, rotateY, scale, opacity, zIndex, blur };
  };

  // GSAP ticker - single animation loop
  const handleTicker = (time: number) => {
    const speed = rotationSpeedRef.current;
    if (speed === 0) return;

    // Ensure cards are initialized
    if (cardRefs.current.length === 0 || cardRefs.current.every(c => c === null)) {
      return;
    }

    // Initialize previous time
    if (previousTimeRef.current === 0) {
      previousTimeRef.current = time;
      return;
    }

    // Calculate delta time (GSAP ticker time is in seconds)
    let deltaTime = time - previousTimeRef.current;
    if (deltaTime > CONFIG.MAX_DELTA) deltaTime = CONFIG.MAX_DELTA;
    if (deltaTime < 0) deltaTime = 0.016; // ~60fps

    previousTimeRef.current = time;

    // Update master angle (GSAP ticker time is in seconds, not milliseconds)
    const angleDelta = speed * speedMultiplierRef.current * deltaTime;
    masterAngleRef.current -= angleDelta; // Reverse rotation direction

    // Keep angle bounded
    if (masterAngleRef.current > Math.PI * 2) {
      masterAngleRef.current -= Math.PI * 2;
    }

    // Update all cards
    const width = window.innerWidth;
    const config = getResponsiveConfig(width);
    const { width: cardWidth, height: cardHeight } = config.card;
    const angleStep = (Math.PI * 2) / PROJECTS.length;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const angle = masterAngleRef.current + index * angleStep;
      const pos = calculateCardPosition(angle, cardWidth, cardHeight, width);

      applyCardTransform(
        card,
        pos.x,
        pos.y,
        pos.z,
        pos.rotateY,
        pos.scale,
        pos.opacity,
        pos.blur,
        pos.zIndex,
        cardWidth,
        cardHeight
      );
    });
  };

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    // Handle visibility change
    const handleVisibilityChange = () => {
      if (document.hidden) {
        previousTimeRef.current = 0;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Wait for DOM to be ready
    const timeoutId = setTimeout(() => {
      // Collect card refs from DOM
      const cards = scene.querySelectorAll('.project-card');
      cardRefs.current = Array.from(cards) as HTMLDivElement[];

      const width = window.innerWidth;
      const config = getResponsiveConfig(width);
      const { width: cardWidth, height: cardHeight } = config.card;
      const angleStep = (Math.PI * 2) / PROJECTS.length;

      // Static layout for reduced motion
      if (!shouldAnimate()) {
        cardRefs.current.forEach((card, index) => {
          if (!card) return;

          const angle = index * angleStep;
          const pos = calculateCardPosition(angle, cardWidth, cardHeight, width);

          applyCardTransform(
            card,
            pos.x,
            pos.y,
            pos.z,
            pos.rotateY,
            pos.scale,
            pos.opacity,
            pos.blur,
            pos.zIndex,
            cardWidth,
            cardHeight
          );
        });
        return;
      }

      // Initialize rotation speed
      rotationSpeedRef.current = ((Math.PI * 2) / CONFIG.ROTATION_DURATION) * CONFIG.QA_SPEED_MULTIPLIER;

      // Apply initial transforms
      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const angle = masterAngleRef.current + index * angleStep;
        const pos = calculateCardPosition(angle, cardWidth, cardHeight, width);

        applyCardTransform(
          card,
          pos.x,
          pos.y,
          pos.z,
          pos.rotateY,
          pos.scale,
          pos.opacity,
          pos.blur,
          pos.zIndex,
          cardWidth,
          cardHeight
        );
      });

      // Add GSAP ticker after refs are ready
      gsap.ticker.add(handleTicker);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      gsap.ticker.remove(handleTicker);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCardHover = () => {
    speedMultiplierRef.current = CONFIG.HOVER_SPEED_MULTIPLIER;
  };

  const handleCardLeave = () => {
    speedMultiplierRef.current = 1;
  };

  const handleImageError = (projectId: string) => {
    setImageErrors(prev => new Set([...prev, projectId]));
  };

  const getCardDimensions = () => {
    const config = getResponsiveConfig(windowWidth);
    return config.card;
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative w-full py-10 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 overflow-hidden">
      {/* Full viewport width gradient background */}
      <div className="absolute inset-0 -left-1/2 right-1/2 w-[200vw] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900"></div>
      
      {/* Section Heading */}
      <div className="text-center mb-8 md:mb-16 px-2 md:px-4 w-full min-w-0 relative z-10">
        <h2 className="text-xs md:text-sm font-semibold text-primary mb-2 md:mb-3 tracking-wider uppercase normal-case w-full max-w-full">Selected Work</h2>
        <h3 className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3 md:mb-4 normal-case w-full max-w-full">
          Software built for real operational problems
        </h3>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-4 md:mb-6 px-2 normal-case w-full max-w-full">
          A selection of digital products, business systems and platforms built around real workflows.
        </p>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-primary hover:text-primary-dark transition-colors"
        >
          View all projects →
        </Link>
      </div>

      {/* Stage - camera/viewport */}
      <div
        ref={stageRef}
        className="relative mx-auto w-full max-w-none px-4 md:px-8 h-[220px] md:h-[320px] lg:h-[400px] overflow-hidden min-w-0"
        style={{
          perspective: `${CONFIG.PERSPECTIVE}px`,
        }}
      >
        {/* Scene - coordinate origin at center */}
        <div
          ref={sceneRef}
          className="absolute"
          style={{
            width: '0',
            height: '0',
            left: '50%',
            top: '50%',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Project Cards */}
          {PROJECTS.map((project, index) => {
            const hasImageError = imageErrors.has(project.id);
            const cardDims = getCardDimensions();
            
            return (
              <div
                key={project.id}
                ref={(el) => {
                  if (el) cardRefs.current[index] = el;
                }}
                className="project-card absolute"
                style={{
                  left: '0',
                  top: '0',
                  width: `${cardDims.width}px`,
                  height: `${cardDims.height}px`,
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'visible',
                }}
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
                data-cursor="project"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="relative w-full h-full block"
                >
                  <div
                    className="relative w-full h-full bg-white/95 dark:bg-slate-800/95 rounded-[20px] shadow-lg overflow-hidden border"
                    style={{
                      transformStyle: 'preserve-3d',
                      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
                      borderColor: 'rgba(64, 153, 213, 0.18)',
                      filter: 'none',
                    }}
                  >
                    {!hasImageError ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          sizes="(min-width: 1024px) 270px, (min-width: 768px) 225px, 180px"
                          className="object-cover"
                          onError={() => handleImageError(project.id)}
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark">
                        <span className="text-xl font-bold text-white">
                          {getProjectInitials(project.name)}
                        </span>
                      </div>
                    )}
                    
                    {/* Label */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-800/95 border-t border-slate-200 dark:border-slate-700 p-2">
                      <p className="text-[10px] font-semibold text-slate-900 dark:text-slate-100 truncate leading-tight">
                        {project.name}
                      </p>
                      <p className="text-[9px] text-slate-500 dark:text-slate-400 truncate leading-tight">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
