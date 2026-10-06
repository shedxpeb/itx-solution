'use client';

import React, { useRef, useEffect } from 'react';
import { Container, Heading1 } from '@itx/ui';
import { gsap, ScrollTrigger } from '@/lib/motion/gsap';
import { shouldAnimate } from '@/lib/motion/reduced-motion';
import { motionConfig } from '@/lib/motion/config';

const techNodes = [
  { name: 'Frontend', position: { x: 50, y: 20 } },
  { name: 'Backend', position: { x: 50, y: 80 } },
  { name: 'Database', position: { x: 20, y: 50 } },
  { name: 'APIs', position: { x: 80, y: 50 } },
  { name: 'Automation', position: { x: 30, y: 30 } },
  { name: 'AI', position: { x: 70, y: 30 } },
  { name: 'Mobile', position: { x: 30, y: 70 } },
  { name: 'Cloud', position: { x: 70, y: 70 } },
  { name: 'Integrations', position: { x: 85, y: 85 } },
];

export function TechnologyCoreSection({ 'data-navbar-theme': navbarTheme }: { 'data-navbar-theme'?: string } = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !shouldAnimate()) return;

    const ctx = gsap.context(() => {
      // Animate SVG paths
      const paths = svgRef.current?.querySelectorAll('path');
      if (paths) {
        gsap.from(paths, {
          strokeDasharray: 1000,
          strokeDashoffset: 1000,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'top 40%',
            scrub: 1,
          },
        });
      }

      // Animate nodes
      const nodes = nodeRefs.current.filter(Boolean);
      gsap.from(nodes, {
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'top 40%',
          scrub: 1,
        },
      });

      // Pulse animation for nodes
      nodes.forEach((node) => {
        if (node) {
          gsap.to(node, {
            scale: 1.05,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-navbar-theme={navbarTheme}
      className="relative py-24 lg:py-32 bg-[#071017] overflow-hidden w-full"
    >
      <Container className="relative z-10 w-full px-6 md:px-8">
        <div className="mb-12 lg:mb-16 text-center">
          <Heading1 className="text-[clamp(42px,5vw,76px)] font-bold tracking-tight leading-[1.1] text-[#FFFFFF] mb-6">
            A connected
            <br />
            <span className="text-[#1687E8]">technology core.</span>
          </Heading1>
        </div>

        {/* Technology Architecture Visualization */}
        <div className="relative h-[600px] w-full max-w-4xl mx-auto">
          {/* SVG Connector Layer */}
          <svg
            ref={svgRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
          >
            {/* Central ITX node connections */}
            <line x1="50%" y1="50%" x2="50%" y2="20%" stroke="#1687E8" strokeWidth="2" opacity="0.4" />
            <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="#1687E8" strokeWidth="2" opacity="0.4" />
            <line x1="50%" y1="50%" x2="20%" y2="50%" stroke="#1687E8" strokeWidth="2" opacity="0.4" />
            <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="#1687E8" strokeWidth="2" opacity="0.4" />
            <line x1="50%" y1="50%" x2="30%" y2="30%" stroke="#45B8FF" strokeWidth="2" opacity="0.3" />
            <line x1="50%" y1="50%" x2="70%" y2="30%" stroke="#45B8FF" strokeWidth="2" opacity="0.3" />
            <line x1="50%" y1="50%" x2="30%" y2="70%" stroke="#45B8FF" strokeWidth="2" opacity="0.3" />
            <line x1="50%" y1="50%" x2="70%" y2="70%" stroke="#45B8FF" strokeWidth="2" opacity="0.3" />
            <line x1="50%" y1="50%" x2="85%" y2="85%" stroke="#A7DFFF" strokeWidth="2" opacity="0.2" />
          </svg>

          {/* Central ITX Node */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-[#1687E8] shadow-2xl shadow-[#1687E8]/50 flex items-center justify-center z-10"
            style={{ zIndex: 10 }}
          >
            <span className="text-white font-bold text-lg">ITX</span>
          </div>

          {/* Technology Nodes */}
          {techNodes.map((node, index) => (
            <div
              key={node.name}
              ref={(el) => { nodeRefs.current[index] = el; }}
              className="absolute w-20 h-20 rounded-xl bg-white shadow-xl border border-[#DCE6EE] flex items-center justify-center z-10"
              style={{
                left: `${node.position.x}%`,
                top: `${node.position.y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
              }}
            >
              <span className="text-xs font-bold text-[#091118] text-center">{node.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
