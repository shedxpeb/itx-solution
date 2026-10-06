'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Container, Heading1, BodyLarge } from '@itx/ui';
import { gsap, ScrollTrigger } from '@/lib/motion/gsap';
import { shouldAnimate } from '@/lib/motion/reduced-motion';
import { motionConfig } from '@/lib/motion/config';

const processSteps = [
  { title: 'Discover', description: 'Understand your business and goals' },
  { title: 'Plan', description: 'Design the architecture and roadmap' },
  { title: 'Design', description: 'Create intuitive user experiences' },
  { title: 'Build', description: 'Develop with modern technologies' },
  { title: 'Test', description: 'Ensure quality and performance' },
  { title: 'Launch', description: 'Deploy and go live' },
  { title: 'Improve', description: 'Iterate based on feedback' },
];

export function ProcessSectionNew(props: any) {
  const { 'data-navbar-theme': navbarTheme } = props;
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || !shouldAnimate()) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const stepIndex = Math.floor(progress * processSteps.length);
          const clampedIndex = Math.min(stepIndex, processSteps.length - 1);
          setActiveStep(clampedIndex);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      data-navbar-theme={navbarTheme}
      className="relative py-24 lg:py-32 bg-[#F5F8FC] overflow-hidden w-full"
    >
      <Container className="relative z-10 w-full px-6 md:px-8">
        <div className="mb-12 lg:mb-16">
          <Heading1 className="text-[clamp(42px,5vw,76px)] font-bold tracking-tight leading-[1.1] text-[#091118] mb-6">
            From idea to a
            <br />
            <span className="text-[#1687E8]">working system.</span>
          </Heading1>
          <BodyLarge className="text-[#5F7080] text-lg max-w-2xl">
            Our proven process turns concepts into production-ready solutions.
          </BodyLarge>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Process Steps */}
          <div ref={stepsRef} className="space-y-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className={`relative pl-8 py-4 transition-all ${
                  index === activeStep ? 'opacity-100' : 'opacity-40'
                }`}
              >
                <div
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    index === activeStep
                      ? 'bg-[#1687E8] text-white'
                      : 'bg-[#DCE6EE] text-[#5F7080]'
                  }`}
                >
                  <span className="text-sm font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#091118] mb-1">{step.title}</h3>
                  <p className="text-sm text-[#5F7080]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Process Visualization */}
          <div
            ref={visualRef}
            className="relative h-[500px] bg-white rounded-xl shadow-2xl border border-[#DCE6EE] overflow-hidden"
          >
            <div className="h-10 bg-[#091118] flex items-center px-4">
              <span className="text-xs text-white font-medium">Process Visualization</span>
            </div>
            <div className="p-6 bg-[#F5F8FC] h-full">
              {/* Discover */}
              {activeStep === 0 && (
                <div className="space-y-4">
                  <div className="h-32 bg-white rounded-lg border border-[#DCE6EE] p-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-[#1687E8]/30" />
                      <div className="h-2 flex-1 bg-[#5F7080]/30 rounded" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-3/4 bg-[#5F7080]/30 rounded" />
                      <div className="h-2 w-1/2 bg-[#5F7080]/30 rounded" />
                    </div>
                  </div>
                  <div className="text-center text-sm text-[#5F7080]">
                    Requirements gathering and analysis
                  </div>
                </div>
              )}

              {/* Plan */}
              {activeStep === 1 && (
                <div className="space-y-4">
                  <div className="h-40 bg-white rounded-lg border border-[#DCE6EE] p-4">
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="h-12 bg-[#1687E8]/30 rounded" />
                      <div className="h-12 bg-[#45B8FF]/30 rounded" />
                      <div className="h-12 bg-[#A7DFFF]/30 rounded" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-[#5F7080]/30 rounded" />
                      <div className="h-2 w-5/6 bg-[#5F7080]/30 rounded" />
                    </div>
                  </div>
                  <div className="text-center text-sm text-[#5F7080]">
                    System architecture and roadmap
                  </div>
                </div>
              )}

              {/* Design */}
              {activeStep === 2 && (
                <div className="space-y-4">
                  <div className="h-32 bg-white rounded-lg border border-[#DCE6EE] p-4">
                    <div className="h-20 bg-[#F5F8FC] rounded border border-[#DCE6EE] mb-3" />
                    <div className="flex gap-2">
                      <div className="h-8 flex-1 bg-[#1687E8]/30 rounded" />
                      <div className="h-8 flex-1 bg-[#45B8FF]/30 rounded" />
                    </div>
                  </div>
                  <div className="text-center text-sm text-[#5F7080]">
                    UI/UX design and wireframes
                  </div>
                </div>
              )}

              {/* Build */}
              {activeStep === 3 && (
                <div className="space-y-4">
                  <div className="h-40 bg-white rounded-lg border border-[#DCE6EE] p-4 font-mono text-xs">
                    <div className="space-y-1">
                      <div className="text-[#1687E8]">import { Component } from 'react'</div>
                      <div className="text-[#5F7080]">export function App() {</div>
                      <div className="text-[#5F7080] pl-4">return (</div>
                      <div className="text-[#5F7080] pl-8">&lt;div&gt;System&lt;/div&gt;</div>
                      <div className="text-[#5F7080] pl-4">)</div>
                      <div className="text-[#5F7080]">}</div>
                    </div>
                  </div>
                  <div className="text-center text-sm text-[#5F7080]">
                    Development and implementation
                  </div>
                </div>
              )}

              {/* Test */}
              {activeStep === 4 && (
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#DCE6EE]">
                      <div className="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-white" />
                      </div>
                      <div className="h-2 flex-1 bg-[#5F7080]/30 rounded" />
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#DCE6EE]">
                      <div className="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-white" />
                      </div>
                      <div className="h-2 flex-1 bg-[#5F7080]/30 rounded" />
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#DCE6EE]">
                      <div className="w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-white" />
                      </div>
                      <div className="h-2 flex-1 bg-[#5F7080]/30 rounded" />
                    </div>
                  </div>
                  <div className="text-center text-sm text-[#5F7080]">
                    Quality assurance and testing
                  </div>
                </div>
              )}

              {/* Launch */}
              {activeStep === 5 && (
                <div className="space-y-4">
                  <div className="h-32 bg-white rounded-lg border border-[#DCE6EE] p-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-[#1687E8]/20 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-[#1687E8]" />
                      </div>
                      <div className="h-2 w-24 bg-[#1687E8]/40 rounded mx-auto" />
                    </div>
                  </div>
                  <div className="text-center text-sm text-[#5F7080]">
                    Deployment and launch
                  </div>
                </div>
              )}

              {/* Improve */}
              {activeStep === 6 && (
                <div className="space-y-4">
                  <div className="h-32 bg-white rounded-lg border border-[#DCE6EE] p-4">
                    <div className="flex items-end gap-2 h-20">
                      <div className="flex-1 bg-[#1687E8]/40 rounded" style={{ height: '40%' }} />
                      <div className="flex-1 bg-[#45B8FF]/40 rounded" style={{ height: '60%' }} />
                      <div className="flex-1 bg-[#A7DFFF]/40 rounded" style={{ height: '50%' }} />
                      <div className="flex-1 bg-[#1687E8]/40 rounded" style={{ height: '80%' }} />
                      <div className="flex-1 bg-[#45B8FF]/40 rounded" style={{ height: '70%' }} />
                    </div>
                  </div>
                  <div className="text-center text-sm text-[#5F7080]">
                    Analytics and continuous improvement
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
