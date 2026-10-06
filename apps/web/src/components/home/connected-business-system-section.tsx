'use client';

import React, { useRef, useEffect } from 'react';
import { Container, Heading1 } from '@itx/ui';
import { gsap, ScrollTrigger } from '@/lib/motion/gsap';
import { shouldAnimate } from '@/lib/motion/reduced-motion';
import { motionConfig } from '@/lib/motion/config';

const businessNodes = [
  { name: 'Website', position: { x: 50, y: 50 }, isCenter: true },
  { name: 'CRM', position: { x: 25, y: 30 } },
  { name: 'ERP', position: { x: 75, y: 30 } },
  { name: 'Payments', position: { x: 15, y: 50 } },
  { name: 'WhatsApp', position: { x: 85, y: 50 } },
  { name: 'Email', position: { x: 25, y: 70 } },
  { name: 'Analytics', position: { x: 75, y: 70 } },
  { name: 'Automation', position: { x: 15, y: 30 } },
  { name: 'Database', position: { x: 85, y: 30 } },
  { name: 'Internal Tools', position: { x: 15, y: 70 } },
  { name: 'Mobile Apps', position: { x: 85, y: 70 } },
];

export function ConnectedBusinessSystemSection({ 'data-navbar-theme': navbarTheme }: { 'data-navbar-theme'?: string } = {}) {
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
        stagger: 0.05,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'top 40%',
          scrub: 1,
        },
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
            Your website
            <br />
            <span className="text-[#1687E8]">is only one part</span>
            <br />
            of the system.
          </Heading1>
        </div>

        {/* Business System Visualization - Desktop */}
        <div className="hidden lg:block relative h-[600px] w-full max-w-4xl mx-auto">
          {/* SVG Connector Layer */}
          <svg
            ref={svgRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
          >
            {/* Central website connections */}
            <line x1="50%" y1="50%" x2="25%" y2="30%" stroke="#1687E8" strokeWidth="2" opacity="0.4" />
            <line x1="50%" y1="50%" x2="75%" y2="30%" stroke="#1687E8" strokeWidth="2" opacity="0.4" />
            <line x1="50%" y1="50%" x2="15%" y2="50%" stroke="#1687E8" strokeWidth="2" opacity="0.4" />
            <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="#1687E8" strokeWidth="2" opacity="0.4" />
            <line x1="50%" y1="50%" x2="25%" y2="70%" stroke="#1687E8" strokeWidth="2" opacity="0.4" />
            <line x1="50%" y1="50%" x2="75%" y2="70%" stroke="#1687E8" strokeWidth="2" opacity="0.4" />
            <line x1="50%" y1="50%" x2="15%" y2="30%" stroke="#45B8FF" strokeWidth="2" opacity="0.3" />
            <line x1="50%" y1="50%" x2="85%" y2="30%" stroke="#45B8FF" strokeWidth="2" opacity="0.3" />
            <line x1="50%" y1="50%" x2="15%" y2="70%" stroke="#45B8FF" strokeWidth="2" opacity="0.3" />
            <line x1="50%" y1="50%" x2="85%" y2="70%" stroke="#45B8FF" strokeWidth="2" opacity="0.3" />
          </svg>

          {/* Central Website Node */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-2xl bg-[#1687E8] shadow-2xl shadow-[#1687E8]/50 flex items-center justify-center z-10"
            style={{ zIndex: 10 }}
          >
            <span className="text-white font-bold text-lg">Website</span>
          </div>

          {/* Business Nodes */}
          {businessNodes.map((node, index) => {
            if (node.isCenter) return null;
            return (
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
            );
          })}
        </div>

        {/* Mobile - Vertical Architecture */}
        <div className="lg:hidden space-y-4">
          <div className="bg-[#1687E8] rounded-xl p-6 text-center">
            <span className="text-white font-bold text-lg">Website</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {businessNodes.filter(n => !n.isCenter).map((node) => (
              <div
                key={node.name}
                className="bg-white rounded-xl p-4 text-center shadow-lg border border-[#DCE6EE]"
              >
                <span className="text-xs font-bold text-[#091118]">{node.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
