'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/motion/gsap';
import { shouldAnimate } from '@/lib/motion/reduced-motion';
import Image from 'next/image';

export function ITXLoadingScreen({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const centerLineRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Check if already seen in this session
    const hasSeenIntro = typeof window !== 'undefined' ? sessionStorage.getItem('itx-intro-seen') : null;
    
    // For reduced motion, skip animation
    if (!shouldAnimate()) {
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.15,
          onComplete,
        });
      }
      return;
    }

    // If already seen and we want to skip replay, uncomment:
    // if (hasSeenIntro && onComplete) {
    //   onComplete();
    //   return;
    // }

    const container = containerRef.current;
    const leftPanel = leftPanelRef.current;
    const rightPanel = rightPanelRef.current;
    const centerLine = centerLineRef.current;
    const logo = logoRef.current;

    if (!container) return;

    const ctx = gsap.context(() => {
      // Initial state - panels cover the screen
      if (leftPanel) gsap.set(leftPanel, { x: 0 });
      if (rightPanel) gsap.set(rightPanel, { x: 0 });
      if (centerLine) gsap.set(centerLine, { scaleY: 0, opacity: 0 });
      if (logo) gsap.set(logo, { opacity: 0, scale: 0.9 });

      // Timeline for the entrance sequence
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem('itx-intro-seen', 'true');
          onComplete();
        },
      });

      // 0-250ms: Logo fade in
      tl.to(logo, {
        opacity: 1,
        scale: 1,
        duration: 0.25,
        ease: 'power2.out',
      });

      // 250-550ms: Center light line travels vertically
      tl.to(
        centerLine,
        {
          scaleY: 1,
          opacity: 1,
          duration: 0.3,
          ease: 'power2.inOut',
        },
        '<'
      );

      // 550-900ms: Panels begin separating
      tl.to(
        leftPanel,
        {
          x: '-100%',
          duration: 0.35,
          ease: 'power3.inOut',
        },
        '+=0.05'
      );
      tl.to(
        rightPanel,
        {
          x: '100%',
          duration: 0.35,
          ease: 'power3.inOut',
        },
        '<'
      );

      // 900-1200ms: Container fades out
      tl.to(
        container,
        {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out',
        },
        '+=0.05'
      );
    }, container);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] pointer-events-none overflow-hidden"
      style={{ backgroundColor: '#303D50' }}
      suppressHydrationWarning
    >
      {/* Left Panel */}
      <div
        ref={leftPanelRef}
        className="absolute inset-0 w-1/2 left-0 flex items-center justify-end pr-0.5"
        style={{ backgroundColor: '#303D50' }}
        suppressHydrationWarning
      >
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(rgba(64, 153, 213, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(64, 153, 213, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} suppressHydrationWarning />
      </div>

      {/* Right Panel */}
      <div
        ref={rightPanelRef}
        className="absolute inset-0 w-1/2 right-0 flex items-center justify-start pl-0.5"
        style={{ backgroundColor: '#2A3545' }}
        suppressHydrationWarning
      >
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(rgba(64, 153, 213, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(64, 153, 213, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} suppressHydrationWarning />
      </div>

      {/* Center Light Line */}
      <div
        ref={centerLineRef}
        className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
        style={{
          background: 'linear-gradient(to bottom, transparent, #4099D5, #67D5E8, #4099D5, transparent)',
          boxShadow: '0 0 20px rgba(64, 153, 213, 0.3), 0 0 40px rgba(103, 213, 232, 0.2)',
        }}
        suppressHydrationWarning
      />

      {/* ITX Logo - Center */}
      <div
        ref={logoRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        suppressHydrationWarning
      >
        <div className="relative" suppressHydrationWarning>
          <Image
            src="/brand/itx-logo.png"
            alt="ITX Solution"
            width={120}
            height={120}
            className="h-20 md:h-24 w-auto"
            priority
          />
          {/* Subtle glow behind logo */}
          <div className="absolute inset-0 -m-4 rounded-full opacity-20 blur-2xl" style={{
            background: 'radial-gradient(circle, rgba(64,153,213,0.3) 0%, transparent 70%)'
          }} suppressHydrationWarning />
        </div>
      </div>
    </div>
  );
}
