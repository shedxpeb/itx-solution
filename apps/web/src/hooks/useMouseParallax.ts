'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/motion/gsap';
import { shouldAnimate } from '@/lib/motion/reduced-motion';

interface UseMouseParallaxOptions {
  strength?: number;
  disabled?: boolean;
  enableRotate?: boolean;
}

export function useMouseParallax<T extends HTMLElement = HTMLDivElement>(options: UseMouseParallaxOptions = {}) {
  const {
    strength = 10,
    disabled = false,
    enableRotate = false,
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current || disabled || !shouldAnimate()) return;

    const element = ref.current;

    // Disable on touch devices
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * strength;
      const y = (e.clientY / window.innerHeight - 0.5) * strength;

      if (enableRotate) {
        gsap.to(element, {
          x: x,
          y: y,
          rotateX: -y * 0.5,
          rotateY: x * 0.5,
          duration: 0.5,
          ease: 'power2.out',
        });
      } else {
        gsap.to(element, {
          x: x,
          y: y,
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        duration: 0.8,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      gsap.killTweensOf(element);
    };
  }, [strength, disabled, enableRotate]);

  return ref;
}
