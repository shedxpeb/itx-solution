'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/motion/gsap';
import { shouldAnimate } from '@/lib/motion/reduced-motion';
import Image from 'next/image';

interface ITXLogoOrbitProps {
  size?: number;
  className?: string;
  interactive?: boolean;
}

export function ITXLogoOrbit({ size = 160, className = '', interactive = true }: ITXLogoOrbitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!shouldAnimate()) return;

    const container = containerRef.current;
    const glow = glowRef.current;
    const particles = particlesRef.current;

    if (!container) return;

    // Particles floating animation (very subtle)
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        y: -5 - index * 2,
        opacity: 0.4,
        duration: 3 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: index * 0.4,
      });
    });

    // Glow breathing (very subtle)
    if (glow) {
      gsap.to(glow, {
        opacity: 0.12,
        scale: 1.05,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    // Mouse interaction (very subtle)
    if (interactive) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        const maxMove = 2;
        const moveX = (mouseX / rect.width) * maxMove;
        const moveY = (mouseY / rect.height) * maxMove;

        // Glow parallax
        if (glow) {
          gsap.to(glow, { x: moveX * 0.3, y: moveY * 0.3, duration: 0.5 });
        }

        // Logo parallax (very subtle)
        const logoImg = container.querySelector('img');
        if (logoImg) {
          gsap.to(logoImg, { x: moveX * 0.1, y: moveY * 0.1, duration: 0.5 });
        }
      };

      const handleMouseEnter = () => {
        if (glow) {
          gsap.to(glow, { opacity: 0.18, scale: 1.08, duration: 0.3 });
        }
      };

      const handleMouseLeave = () => {
        if (glow) {
          gsap.to(glow, { opacity: 0.08, scale: 1, duration: 0.5 });
        }
      };

      window.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }

    return () => {
      gsap.killTweensOf(glow);
      particles.forEach(p => gsap.killTweensOf(p));
    };
  }, [interactive]);

  const scale = size / 160;

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Subtle ambient glow */}
      <div
        ref={glowRef}
        className="absolute rounded-full bg-primary/8 blur-2xl opacity-0"
        style={{
          width: size * 1.15,
          height: size * 1.15,
        }}
      />

      {/* Tiny particles - very subtle */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`particle-${i}`}
          ref={(el) => {
            if (el) particlesRef.current[i] = el;
          }}
          className="absolute rounded-full bg-primary/20 opacity-0"
          style={{
            width: `${3 * scale}px`,
            height: `${3 * scale}px`,
            transform: `rotate(${i * 120}deg) translateX(${size * 0.52}px)`,
          }}
        />
      ))}

      {/* Actual ITX Logo - Stable center */}
      <div className="relative z-10 flex items-center justify-center" style={{ width: size * 0.85, height: size * 0.85 }}>
        <Image
          src="/brand/itx-logo.png"
          alt="ITX Solution - Technology Beyond Limits"
          width={size * 0.85}
          height={size * 0.85}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
