'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Container, Heading1 } from '@itx/ui';
import { gsap } from '@/lib/motion/gsap';
import { shouldAnimate } from '@/lib/motion/reduced-motion';
import { motionConfig } from '@/lib/motion/config';

const faqs = [
  {
    question: 'What types of projects do you work on?',
    answer: 'We work on a wide range of projects including websites, web applications, CRM & ERP systems, mobile applications, automation solutions, and AI-powered systems. Each project is tailored to the specific needs of the business.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex CRM or ERP system could take 3-6 months. We provide detailed timelines during the planning phase.',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer ongoing support and maintenance packages to ensure your systems continue to perform optimally. This includes updates, security patches, and feature improvements as your business evolves.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern, proven technologies that fit each project&apos;s needs. This typically includes React, Next.js, Node.js, PostgreSQL, and various cloud services. We choose tools based on performance, scalability, and long-term viability.',
  },
  {
    question: 'How do you handle project communication?',
    answer: 'We maintain clear, regular communication throughout projects. This includes scheduled updates, milestone reviews, and direct access to the team. We believe transparency is essential for successful collaborations.',
  },
];

export function FAQSection({ 'data-navbar-theme': navbarTheme }: { 'data-navbar-theme'?: string } = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (!sectionRef.current || !shouldAnimate()) return;

    const ctx = gsap.context(() => {
      gsap.from('.faq-item', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: motionConfig.duration.medium,
        ease: motionConfig.easing.standard,
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
        <div className="mb-12 lg:mb-16 text-center">
          <Heading1 className="text-[clamp(42px,5vw,76px)] font-bold tracking-tight leading-[1.1] text-[#091118] mb-6">
            Questions,
            <br />
            <span className="text-[#1687E8]">answered.</span>
          </Heading1>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="faq-item bg-white rounded-xl border border-[#DCE6EE] overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-lg font-medium text-[#091118]">{faq.question}</span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    openIndex === index ? 'bg-[#1687E8] text-white' : 'bg-[#F5F8FC] text-[#5F7080]'
                  }`}
                >
                  <svg
                    className={`w-4 h-4 transition-transform ${openIndex === index ? 'rotate-45' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 pt-0">
                  <p className="text-[#5F7080] leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
