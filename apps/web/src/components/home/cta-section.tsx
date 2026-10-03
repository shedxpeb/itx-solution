'use client';

import { Container, Heading2, BodyLarge, Caption } from '@itx/ui';

export function CTASection({ 'data-navbar-theme': navbarTheme }: { 'data-navbar-theme'?: string }) {
  return (
    <section data-navbar-theme={navbarTheme} className="py-36 md:py-48 bg-[#071017] text-white w-full relative overflow-hidden">
      {/* Ambient background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#1687E8] rounded-full blur-[200px] opacity-[0.15]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#45B8FF] rounded-full blur-[200px] opacity-[0.10]" />
      </div>

      <Container className="relative max-w-7xl mx-auto w-full min-w-0">
        
        {/* Section header */}
        <div className="mb-20">
          <Caption className="tracking-[0.35em] text-[#1687E8] mb-8 text-xs uppercase w-full max-w-full font-semibold">
            07 — LET&apos;S TALK
          </Caption>
          
          <Heading2 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold tracking-tight text-white mb-10">
            HAVE A BUSINESS
            <br />
            PROBLEM WORTH
            <br />
            SOLVING?
          </Heading2>
        </div>

        {/* Main CTA content */}
        <div className="max-w-3xl">
          <BodyLarge className="text-[#617282] text-lg md:text-xl leading-[1.7] mb-10">
            Let&apos;s turn the challenge into a connected digital system built around the way your business actually works.
          </BodyLarge>

          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-14 py-6 rounded-xl font-bold text-lg transition-all bg-[#1687E8] text-white hover:bg-[#0F5CB8] hover:shadow-2xl hover:-translate-y-0.5 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071017]"
            >
              START A CONVERSATION
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-3 px-14 py-6 rounded-xl font-bold text-lg transition-all border-2 border-[#1687E8]/30 bg-transparent hover:bg-[#1687E8]/15 hover:border-[#1687E8]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071017] text-white"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Bottom info */}
        <div className="mt-20 pt-12 border-t border-[#1687E8]/20">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="text-4xl font-bold text-[#1687E8] mb-3">100+</div>
              <div className="text-sm text-[#617282]">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#45B8FF] mb-3">50+</div>
              <div className="text-sm text-[#617282]">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#A7DFFF] mb-3">5+</div>
              <div className="text-sm text-[#617282]">Years Experience</div>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
