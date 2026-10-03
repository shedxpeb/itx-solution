'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/motion/gsap';
import { shouldAnimate } from '@/lib/motion/reduced-motion';

export function CustomCursor() {
  const cursorGroupRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const xToRef = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const yToRef = useRef<ReturnType<typeof gsap.quickTo> | null>(null);

  useEffect(() => {
    // Check for fine pointer and hover capability
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const hasHover = window.matchMedia('(hover: hover)').matches;

    if (!hasFinePointer || !hasHover || !shouldAnimate()) {
      return;
    }

    const cursorGroup = cursorGroupRef.current;
    const ring = ringRef.current;

    if (!cursorGroup) return;

    // Set up GSAP quick tweens for smooth following
    const xTo = gsap.quickTo(cursorGroup, 'x', { duration: 0.15, ease: 'power2' });
    const yTo = gsap.quickTo(cursorGroup, 'y', { duration: 0.15, ease: 'power2' });
    xToRef.current = xTo;
    yToRef.current = yTo;

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    // Mouse enter handler - scale up on links/buttons
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorType = target.closest('[data-cursor]')?.getAttribute('data-cursor') || 'default';

      if (cursorType === 'link' || cursorType === 'button') {
        if (ring) gsap.to(ring, { scale: 1.15, duration: 0.2 });
      } else {
        if (ring) gsap.to(ring, { scale: 1, duration: 0.2 });
      }
    };

    // Mouse down handler
    const handleMouseDown = () => {
      if (ring) gsap.to(ring, { scale: 0.9, duration: 0.1 });
    };

    // Mouse up handler
    const handleMouseUp = () => {
      if (ring) gsap.to(ring, { scale: 1, duration: 0.2 });
    };

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Initialize cursor position
    const handleFirstMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      window.removeEventListener('mousemove', handleFirstMove);
    };
    window.addEventListener('mousemove', handleFirstMove);

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleFirstMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      if (ring) gsap.killTweensOf(ring);
      if (cursorGroup) gsap.killTweensOf(cursorGroup);
    };
  }, []);

  return (
    <>
      {/* Simple rounded cursor */}
      <div
        ref={cursorGroupRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          transform: 'translate(-50%, -50%)',
          transformOrigin: 'center',
        }}
        suppressHydrationWarning
      >
        {/* Main cursor ring */}
        <div
          ref={ringRef}
          className="absolute rounded-full border-2 border-primary bg-primary/10"
          style={{
            left: '50%',
            top: '50%',
            width: '32px',
            height: '32px',
            marginLeft: '-16px',
            marginTop: '-16px',
            transformOrigin: 'center',
          }}
          suppressHydrationWarning
        />
      </div>
    </>
  );
}
