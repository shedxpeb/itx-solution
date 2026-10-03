'use client';

import { Container, Heading2, BodyLarge, Caption } from '@itx/ui';

export function ServicesStorySection({ 'data-navbar-theme': navbarTheme }: { 'data-navbar-theme'?: string }) {
  const services = [
    {
      id: '01',
      title: 'WEB DEVELOPMENT',
      description: 'Business websites, web applications and digital platforms built for performance, clarity and growth.',
      visual: 'browser'
    },
    {
      id: '02',
      title: 'CRM & ERP SYSTEMS',
      description: 'Connected business systems that bring customers, sales, operations, inventory and internal workflows into one place.',
      visual: 'dashboard'
    },
    {
      id: '03',
      title: 'CUSTOM SOFTWARE',
      description: 'Purpose-built software for business processes that standard products cannot handle the way your organization works.',
      visual: 'workflow'
    },
    {
      id: '04',
      title: 'MOBILE APPLICATIONS',
      description: 'Mobile experiences that connect your customers, employees and business operations wherever work happens.',
      visual: 'mobile'
    },
    {
      id: '05',
      title: 'AUTOMATION & INTEGRATIONS',
      description: 'Connect the tools you already use and automate repetitive work so your team can focus on higher-value activities.',
      visual: 'automation'
    },
    {
      id: '06',
      title: 'AI & INTELLIGENT SYSTEMS',
      description: 'Practical AI solutions that help businesses search, analyze, automate and work with information more intelligently.',
      visual: 'ai'
    }
  ];

  return (
    <section data-navbar-theme={navbarTheme} className="py-36 md:py-48 bg-[#071017] text-white w-full relative overflow-hidden">
      <Container className="relative max-w-7xl mx-auto w-full min-w-0">
        
        {/* Section header */}
        <div className="mb-24">
          <Caption className="tracking-[0.35em] text-[#1687E8] mb-8 text-xs uppercase w-full max-w-full font-semibold">
            02 — WHAT WE DO
          </Caption>
          
          <Heading2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-8 max-w-4xl">
            From customer-facing experiences
            <br />
            to the systems running behind them.
          </Heading2>
        </div>

        {/* Main experience - Two-part composition */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* LEFT - Service list */}
          <div className="space-y-10">
            {services.map((service, index) => (
              <div key={service.id} className="group">
                <div className="flex items-start gap-6">
                  <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1687E8] group-hover:text-[#45B8FF] transition-colors">
                    {service.id}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#A7DFFF] transition-colors">
                      {service.title}
                    </h3>
                    <BodyLarge className="text-[#617282] text-base md:text-lg leading-[1.6]">
                      {service.description}
                    </BodyLarge>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT - Large visual - Primary service (Web Development) */}
          <div className="relative h-[600px] lg:h-[700px]">
            <div className="absolute inset-0 bg-[#101C26] rounded-2xl overflow-hidden border border-[#1687E8]/30 shadow-2xl">
              
              {/* Browser UI mockup */}
              <div className="h-12 bg-[#091118] flex items-center px-4 gap-3 border-b border-[#1687E8]/20">
                <div className="w-3 h-3 rounded-full bg-[#1687E8]" />
                <div className="w-3 h-3 rounded-full bg-[#45B8FF]" />
                <div className="w-3 h-3 rounded-full bg-[#A7DFFF]" />
                <div className="flex-1 h-2 bg-[#1687E8]/20 rounded ml-4" />
              </div>
              
              <div className="p-6 h-full">
                {/* Navigation mockup */}
                <div className="flex gap-4 mb-8 pb-6 border-b border-[#1687E8]/20">
                  <div className="h-8 w-32 bg-[#1687E8]/30 rounded" />
                  <div className="h-8 w-32 bg-[#45B8FF]/30 rounded" />
                  <div className="h-8 w-32 bg-[#A7DFFF]/30 rounded" />
                  <div className="flex-1 h-8 bg-[#1687E8]/30 rounded" />
                </div>
                
                {/* Hero area mockup */}
                <div className="mb-8 p-12 bg-[#091118] rounded-xl">
                  <div className="h-4 w-1/2 bg-[#1687E8]/40 rounded mb-5" />
                  <div className="h-3 w-3/4 bg-[#45B8FF]/40 rounded mb-4" />
                  <div className="h-2 w-1/2 bg-[#A7DFFF]/40 rounded" />
                </div>
                
                {/* Feature cards mockup */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="bg-[#091118] rounded-xl p-6">
                    <div className="h-3 w-24 bg-[#1687E8]/40 rounded mb-4" />
                    <div className="h-2 w-full bg-[#45B8FF]/30 rounded" />
                  </div>
                  <div className="bg-[#091118] rounded-xl p-6">
                    <div className="h-3 w-24 bg-[#45B8FF]/40 rounded mb-4" />
                    <div className="h-2 w-full bg-[#A7DFFF]/30 rounded" />
                  </div>
                  <div className="bg-[#091118] rounded-xl p-6">
                    <div className="h-3 w-24 bg-[#A7DFFF]/40 rounded mb-4" />
                    <div className="h-2 w-full bg-[#1687E8]/30 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom service indicators */}
        <div className="mt-24 pt-12 border-t border-[#1687E8]/20">
          <div className="flex flex-wrap gap-10">
            {services.map((service) => (
              <div key={service.id} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#1687E8]" />
                <span className="text-sm text-[#617282] uppercase tracking-wider font-medium">
                  {service.title.split(' ')[0]}
                </span>
              </div>
            ))}
          </div>
        </div>

      </Container>
    </section>
  );
}
