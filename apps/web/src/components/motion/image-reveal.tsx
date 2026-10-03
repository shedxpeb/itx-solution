'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/motion/gsap';
import { motionConfig } from '@/lib/motion/config';
import { shouldAnimate } from '@/lib/motion/reduced-motion';

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function ImageReveal({
  children,
  className = '',
  delay = 0,
  threshold = motionConfig.scroll.triggerCenter,
  direction = 'up',
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !shouldAnimate()) return;

    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const image = imageRef.current;
      const overlay = overlayRef.current;
      if (!container || !image || !overlay) return;

      const directionConfig = {
        up: { from: 'translateY(-100%)', to: 'translateY(100%)' },
        down: { from: 'translateY(100%)', to: 'translateY(-100%)' },
        left: { from: 'translateX(-100%)', to: 'translateX(100%)' },
        right: { from: 'translateX(100%)', to: 'translateX(-100%)' },
      };

      // Set initial states
      gsap.set(image, { scale: 1.05 });
      gsap.set(overlay, { transform: directionConfig[direction].from });

      // Animate overlay
      gsap.to(overlay, {
        transform: directionConfig[direction].to,
        duration: motionConfig.duration.long,
        delay,
        ease: motionConfig.easing.emphasized,
        scrollTrigger: {
          trigger: container,
          start: threshold,
          toggleActions: 'play none none reverse',
        },
      });

      // Animate image
      gsap.to(image, {
        scale: 1,
        duration: motionConfig.duration.long,
        delay: delay + 0.2,
        ease: motionConfig.easing.standard,
        scrollTrigger: {
          trigger: container,
          start: threshold,
          toggleActions: 'play none none reverse',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [delay, threshold, direction]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={imageRef} className="w-full h-full">
        {children}
      </div>
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-background z-10"
        style={{ willChange: 'transform' }}
      />
    </div>
  );
}
