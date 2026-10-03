'use client';

import { Container, Heading2, BodyLarge, Caption } from '@itx/ui';

export function TechnologySection({ 'data-navbar-theme': navbarTheme }: { 'data-navbar-theme'?: string }) {
  return (
    <section data-navbar-theme={navbarTheme} className="py-32 md:py-40 bg-[#071017] text-white w-full relative overflow-hidden">
      <Container className="relative max-w-7xl mx-auto w-full min-w-0">
        
        {/* Section header */}
        <div className="mb-20">
          <Caption className="tracking-[0.3em] text-[#1687E8] mb-6 text-xs uppercase w-full max-w-full">
            05 — TECHNOLOGY
          </Caption>
          
          <Heading2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            BUILT ON TECHNOLOGY
            <br />
            THAT CAN GROW WITH THE PRODUCT.
          </Heading2>
        </div>

        {/* Technology architecture visualization */}
        <div className="relative">
          
          {/* Core with orbit rings */}
          <div className="flex justify-center mb-20">
            <div className="relative w-80 h-80">
              {/* Background glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1687E8] to-[#45B8FF] opacity-25 blur-3xl" />
              
              {/* Outer orbit ring */}
              <div className="absolute inset-0 rounded-full border border-[#1687E8]/20 animate-spin" style={{ animationDuration: '20s' }} />
              
              {/* Middle orbit ring */}
              <div className="absolute inset-12 rounded-full border border-[#45B8FF]/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
              
              {/* Inner orbit ring */}
              <div className="absolute inset-20 rounded-full border border-[#A7DFFF]/40 animate-spin" style={{ animationDuration: '10s' }} />
              
              {/* Center core */}
              <div className="absolute inset-24 rounded-full bg-[#101C26] border-2 border-[#1687E8]/40 flex items-center justify-center shadow-xl shadow-[#1687E8]/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#1687E8] mb-1">CORE</div>
                  <div className="text-xs text-[#617282] uppercase tracking-wider">Technology Stack</div>
                </div>
              </div>

              {/* Orbiting nodes */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-10 h-10 rounded-full bg-[#1687E8] flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-[#1687E8]/40">
                <span>●</span>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3 w-10 h-10 rounded-full bg-[#45B8FF] flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-[#45B8FF]/40">
                <span>●</span>
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-10 h-10 rounded-full bg-[#A7DFFF] flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-[#A7DFFF]/40">
                <span>●</span>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 rounded-full bg-[#1687E8] flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-[#1687E8]/40">
                <span>●</span>
              </div>
            </div>
          </div>

          {/* Technology nodes */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Frontend */}
            <div className="bg-[#101C26] rounded-lg p-5 border border-[#1687E8]/20 hover:border-[#1687E8]/40 transition-colors">
              <div className="text-[10px] text-[#617282] uppercase tracking-wider mb-3">Frontend</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1687E8]" />
                  <span className="text-white text-sm font-medium">Next.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#45B8FF]" />
                  <span className="text-white text-sm font-medium">React</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A7DFFF]" />
                  <span className="text-white text-sm font-medium">TypeScript</span>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="bg-[#101C26] rounded-lg p-5 border border-[#45B8FF]/20 hover:border-[#45B8FF]/40 transition-colors">
              <div className="text-[10px] text-[#617282] uppercase tracking-wider mb-3">Backend</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1687E8]" />
                  <span className="text-white text-sm font-medium">Node.js</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#45B8FF]" />
                  <span className="text-white text-sm font-medium">NestJS</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A7DFFF]" />
                  <span className="text-white text-sm font-medium">FastAPI</span>
                </div>
              </div>
            </div>

            {/* Database */}
            <div className="bg-[#101C26] rounded-lg p-5 border border-[#A7DFFF]/20 hover:border-[#A7DFFF]/40 transition-colors">
              <div className="text-[10px] text-[#617282] uppercase tracking-wider mb-3">Database</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1687E8]" />
                  <span className="text-white text-sm font-medium">PostgreSQL</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#45B8FF]" />
                  <span className="text-white text-sm font-medium">Prisma</span>
                </div>
              </div>
            </div>

            {/* Mobile */}
            <div className="bg-[#101C26] rounded-lg p-5 border border-[#1687E8]/20 hover:border-[#1687E8]/40 transition-colors">
              <div className="text-[10px] text-[#617282] uppercase tracking-wider mb-3">Mobile</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1687E8]" />
                  <span className="text-white text-sm font-medium">React Native</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#45B8FF]" />
                  <span className="text-white text-sm font-medium">Expo</span>
                </div>
              </div>
            </div>

            {/* DevOps */}
            <div className="bg-[#101C26] rounded-lg p-5 border border-[#45B8FF]/20 hover:border-[#45B8FF]/40 transition-colors">
              <div className="text-[10px] text-[#617282] uppercase tracking-wider mb-3">DevOps</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1687E8]" />
                  <span className="text-white text-sm font-medium">Docker</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#45B8FF]" />
                  <span className="text-white text-sm font-medium">Cloud</span>
                </div>
              </div>
            </div>

            {/* AI */}
            <div className="bg-[#101C26] rounded-lg p-5 border border-[#A7DFFF]/20 hover:border-[#A7DFFF]/40 transition-colors">
              <div className="text-[10px] text-[#617282] uppercase tracking-wider mb-3">AI/ML</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1687E8]" />
                  <span className="text-white text-sm font-medium">Intelligence</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#45B8FF]" />
                  <span className="text-white text-sm font-medium">Automation</span>
                </div>
              </div>
            </div>

            {/* Integration */}
            <div className="bg-[#101C26] rounded-lg p-5 border border-[#1687E8]/20 hover:border-[#1687E8]/40 transition-colors">
              <div className="text-[10px] text-[#617282] uppercase tracking-wider mb-3">Integration</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1687E8]" />
                  <span className="text-white text-sm font-medium">APIs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#45B8FF]" />
                  <span className="text-white text-sm font-medium">Webhooks</span>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="bg-[#101C26] rounded-lg p-5 border border-[#A7DFFF]/20 hover:border-[#A7DFFF]/40 transition-colors">
              <div className="text-[10px] text-[#617282] uppercase tracking-wider mb-3">Security</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1687E8]" />
                  <span className="text-white text-sm font-medium">Auth</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#45B8FF]" />
                  <span className="text-white text-sm font-medium">Encryption</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom statement */}
        <div className="mt-20 pt-12 border-t border-[#1687E8]/20">
          <BodyLarge className="text-[#617282] text-lg text-center max-w-3xl mx-auto leading-relaxed">
            We choose technology that scales, integrates well, and has strong community support. This ensures your systems remain maintainable and future-proof.
          </BodyLarge>
        </div>

      </Container>
    </section>
  );
}
