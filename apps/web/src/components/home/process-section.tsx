'use client';

import { Container, Heading2, BodyLarge, Caption } from '@itx/ui';

export function ProcessSection({ 'data-navbar-theme': navbarTheme }: { 'data-navbar-theme'?: string }) {
  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      description: 'We understand your business, users, existing tools and the problem you need to solve.',
      visual: 'research'
    },
    {
      number: '02',
      title: 'PLAN',
      description: 'We define the product, workflows, architecture and priorities before development begins.',
      visual: 'architecture'
    },
    {
      number: '03',
      title: 'DESIGN',
      description: 'We turn requirements into interfaces and experiences that are clear, practical and easy to use.',
      visual: 'interface'
    },
    {
      number: '04',
      title: 'BUILD',
      description: 'We develop the system, integrations and business logic with a focus on reliability and maintainability.',
      visual: 'application'
    },
    {
      number: '05',
      title: 'LAUNCH & IMPROVE',
      description: 'We deploy, measure, refine and continue improving the system as your business evolves.',
      visual: 'production'
    }
  ];

  return (
    <section data-navbar-theme={navbarTheme} className="py-36 md:py-48 bg-[#F5F8FC] w-full relative overflow-hidden">
      <Container className="relative max-w-7xl mx-auto w-full min-w-0">
        
        {/* Section header */}
        <div className="mb-24">
          <Caption className="tracking-[0.35em] text-[#1687E8] mb-8 text-xs uppercase w-full max-w-full font-semibold">
            04 — PROCESS
          </Caption>
          
          <Heading2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-[#091118] mb-8">
            FROM IDEA
            <br />
            TO A WORKING SYSTEM.
          </Heading2>
        </div>

        {/* Process with visual */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* LEFT - Timeline */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex gap-6 group">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1687E8] group-hover:text-[#45B8FF] transition-colors">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#091118] mb-3 group-hover:text-[#1687E8] transition-colors">
                    {step.title}
                  </h3>
                  <BodyLarge className="text-[#5F7080] text-base md:text-lg leading-[1.6]">
                    {step.description}
                  </BodyLarge>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT - Single evolving visual */}
          <div className="relative min-h-[550px] lg:min-h-[620px]">
            <div 
              className="absolute inset-0 rounded-2xl overflow-hidden border"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(247,250,253,0.98))',
                borderColor: 'rgba(22,135,232,0.12)',
                boxShadow: '0 24px 55px rgba(10,42,65,0.10)',
              }}
            >
              {/* Background grid */}
              <div className="absolute inset-0" style={{
                opacity: '0.035',
                backgroundImage: `
                  linear-gradient(rgba(22, 135, 232, 0.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(22, 135, 232, 0.5) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }} />
              
              {/* Process flow visualization */}
              <div className="h-full p-8 flex flex-col">
                
                {/* Main flow diagram - using grid for equal spacing */}
                <div className="grid grid-rows-[repeat(5,minmax(64px,1fr))] gap-3 items-center">
                  
                  {/* Discovery node */}
                  <div className="grid grid-cols-[72px_minmax(0,1fr)_24px] items-center gap-4">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-[20px] flex-shrink-0"
                      style={{
                        background: 'linear-gradient(145deg, #1687E8, #45B8FF)',
                        boxShadow: '0 10px 22px rgba(22,135,232,0.18)',
                      }}
                    >
                      01
                    </div>
                    <div 
                      className="h-2 rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, rgba(22,135,232,0.25), rgba(69,184,255,0.12))',
                      }}
                    />
                    <div 
                      className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                      style={{
                        background: '#45B8FF',
                        boxShadow: '0 0 0 5px rgba(69,184,255,0.08)',
                      }}
                    />
                  </div>
                  
                  {/* Plan node */}
                  <div className="grid grid-cols-[72px_minmax(0,1fr)_24px] items-center gap-4">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-[20px] flex-shrink-0"
                      style={{
                        background: 'linear-gradient(145deg, #45B8FF, #A7DFFF)',
                        boxShadow: '0 8px 18px rgba(69,184,255,0.15)',
                      }}
                    >
                      02
                    </div>
                    <div 
                      className="h-2 rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, rgba(69,184,255,0.20), rgba(167,223,255,0.10))',
                      }}
                    />
                    <div 
                      className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                      style={{
                        background: '#A7DFFF',
                        boxShadow: '0 0 0 5px rgba(167,223,255,0.06)',
                      }}
                    />
                  </div>
                  
                  {/* Design node */}
                  <div className="grid grid-cols-[72px_minmax(0,1fr)_24px] items-center gap-4">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-[20px] flex-shrink-0"
                      style={{
                        background: 'linear-gradient(145deg, #A7DFFF, #D1E9FF)',
                        boxShadow: '0 6px 14px rgba(167,223,255,0.12)',
                      }}
                    >
                      03
                    </div>
                    <div 
                      className="h-2 rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, rgba(167,223,255,0.18), rgba(209,233,255,0.08))',
                      }}
                    />
                    <div 
                      className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                      style={{
                        background: '#D1E9FF',
                        boxShadow: '0 0 0 5px rgba(209,233,255,0.05)',
                      }}
                    />
                  </div>
                  
                  {/* Build node */}
                  <div className="grid grid-cols-[72px_minmax(0,1fr)_24px] items-center gap-4">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-[20px] flex-shrink-0"
                      style={{
                        background: 'linear-gradient(145deg, #1687E8, #45B8FF)',
                        boxShadow: '0 10px 22px rgba(22,135,232,0.18)',
                      }}
                    >
                      04
                    </div>
                    <div 
                      className="h-2 rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, rgba(22,135,232,0.25), rgba(69,184,255,0.12))',
                      }}
                    />
                    <div 
                      className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                      style={{
                        background: '#45B8FF',
                        boxShadow: '0 0 0 5px rgba(69,184,255,0.08)',
                      }}
                    />
                  </div>
                  
                  {/* Launch node */}
                  <div className="grid grid-cols-[72px_minmax(0,1fr)_24px] items-center gap-4">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-[20px] flex-shrink-0"
                      style={{
                        background: 'linear-gradient(145deg, #45B8FF, #A7DFFF)',
                        boxShadow: '0 8px 18px rgba(69,184,255,0.15)',
                      }}
                    >
                      05
                    </div>
                    <div 
                      className="h-2 rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, rgba(69,184,255,0.20), rgba(167,223,255,0.10))',
                      }}
                    />
                    <div 
                      className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                      style={{
                        background: '#A7DFFF',
                        boxShadow: '0 0 0 5px rgba(167,223,255,0.06)',
                      }}
                    />
                  </div>
                </div>

                {/* Supporting detail cards */}
                <div className="grid grid-cols-3 gap-4 mt-6 pb-8">
                  <div 
                    className="rounded-lg p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                    style={{
                      minHeight: '76px',
                      background: 'rgba(248,251,254,0.92)',
                      borderColor: 'rgba(22,135,232,0.12)',
                      border: '1px solid',
                    }}
                  >
                    <div 
                      className="h-1.5 w-16 rounded-full mb-3"
                      style={{ background: '#45B8FF' }}
                    />
                    <div 
                      className="h-1.5 w-full rounded"
                      style={{ background: 'rgba(100,118,136,0.22)' }}
                    />
                  </div>
                  <div 
                    className="rounded-lg p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                    style={{
                      minHeight: '76px',
                      background: 'rgba(248,251,254,0.92)',
                      borderColor: 'rgba(22,135,232,0.12)',
                      border: '1px solid',
                    }}
                  >
                    <div 
                      className="h-1.5 w-16 rounded-full mb-3"
                      style={{ background: '#A7DFFF' }}
                    />
                    <div 
                      className="h-1.5 w-full rounded"
                      style={{ background: 'rgba(100,118,136,0.22)' }}
                    />
                  </div>
                  <div 
                    className="rounded-lg p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                    style={{
                      minHeight: '76px',
                      background: 'rgba(248,251,254,0.92)',
                      borderColor: 'rgba(22,135,232,0.12)',
                      border: '1px solid',
                    }}
                  >
                    <div 
                      className="h-1.5 w-16 rounded-full mb-3"
                      style={{ background: '#1687E8' }}
                    />
                    <div 
                      className="h-1.5 w-full rounded"
                      style={{ background: 'rgba(100,118,136,0.22)' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
}
