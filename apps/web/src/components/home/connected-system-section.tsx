'use client';

import { Container, Heading2, BodyLarge, Caption } from '@itx/ui';

export function ConnectedSystemSection({ 'data-navbar-theme': navbarTheme }: { 'data-navbar-theme'?: string }) {
  return (
    <section data-navbar-theme={navbarTheme} className="py-32 md:py-40 bg-white w-full relative overflow-hidden">
      <Container className="relative max-w-[1280px] mx-auto w-full min-w-0 px-6 md:px-8">
        
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <Caption className="tracking-[0.3em] text-[#1687E8] mb-6 text-xs uppercase w-full max-w-full">
            06 — CONNECTED SYSTEM
          </Caption>
          
          <Heading2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#091118] mb-6">
            YOUR WEBSITE
            <br />
            IS ONLY ONE PART
            <br />
            OF THE SYSTEM.
          </Heading2>
          
          <BodyLarge className="text-[#5F7080] text-base md:text-lg max-w-2xl leading-[1.7]">
            Your website, CRM, ERP, mobile apps, automation, AI, database and integrations work together as one unified digital business system.
          </BodyLarge>
        </div>

        {/* Network visualization - Desktop: Radial layout with deterministic anchors */}
        <div className="hidden lg:block relative" style={{ height: 'clamp(500px, 46vw, 620px)' }}>
          
          {/* Visual canvas */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5F8FC] to-[#FFFFFF] rounded-2xl overflow-hidden border border-[#DCE6EE]">
            
            {/* Very subtle technical grid */}
            <div className="absolute inset-0 opacity-[0.005]" style={{
              backgroundImage: `
                linear-gradient(rgba(22, 135, 232, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(22, 135, 232, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
            }} />
            
            {/* Centered ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-[#45B8FF] rounded-full blur-[90px] opacity-[0.05]" />

            {/* SVG connectors - behind all nodes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-5">
              <defs>
                <linearGradient id="connPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1687E8" stopOpacity="0.32" />
                  <stop offset="100%" stopColor="#45B8FF" stopOpacity="0.24" />
                </linearGradient>
                <linearGradient id="connSecondary" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#45B8FF" stopOpacity="0.24" />
                  <stop offset="100%" stopColor="#A7DFFF" stopOpacity="0.16" />
                </linearGradient>
              </defs>
              
              {/* Center to primary nodes */}
              <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="url(#connPrimary)" strokeWidth="1.5" />
              <line x1="50%" y1="50%" x2="22%" y2="30%" stroke="url(#connPrimary)" strokeWidth="1.5" />
              <line x1="50%" y1="50%" x2="78%" y2="30%" stroke="url(#connPrimary)" strokeWidth="1.5" />
              <line x1="50%" y1="50%" x2="22%" y2="72%" stroke="url(#connPrimary)" strokeWidth="1.5" />
              
              {/* Center to secondary nodes */}
              <line x1="50%" y1="50%" x2="14%" y2="50%" stroke="url(#connSecondary)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="86%" y2="50%" stroke="url(#connSecondary)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="82%" y2="72%" stroke="url(#connSecondary)" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="50%" y2="87%" stroke="url(#connSecondary)" strokeWidth="1" />
            </svg>

            {/* Center Core - Mathematically centered */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              {/* Outer ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full border border-[#1687E8]/15" />
              {/* Inner ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[255px] h-[255px] rounded-full border border-[#1687E8]/10" />
              
              {/* Main core */}
              <div 
                className="relative w-[180px] h-[180px] rounded-full flex items-center justify-center"
                style={{
                  background: 'radial-gradient(circle at 35% 30%, #ffffff 0%, #eef7ff 55%, #dceeff 100%)',
                  border: '2px solid #1687E8',
                  boxShadow: '0 18px 45px rgba(12, 67, 110, 0.14)',
                }}
              >
                <div className="flex flex-col items-center justify-center gap-1">
                  <div className="text-[22px] font-bold text-[#091118] leading-none">YOUR</div>
                  <div className="text-[23px] font-bold text-[#1687E8] leading-none">SYSTEM</div>
                </div>
              </div>
            </div>

            {/* Primary Nodes - Using deterministic anchors */}
            {/* Website: 50% X, 13% Y */}
            <div 
              className="absolute z-10 hover:z-15 transition-all duration-300"
              style={{ left: '50%', top: '13%', transform: 'translate(-50%, -50%)' }}
            >
              <div 
                className="rounded-lg flex flex-col items-center justify-center overflow-hidden hover:-translate-y-1 transition-transform duration-300"
                style={{
                  width: '170px',
                  height: '112px',
                  background: 'rgba(255,255,255,0.96)',
                  border: '1.5px solid #1687E8',
                  boxShadow: '0 8px 24px rgba(13,53,82,0.10)',
                  padding: '14px 16px',
                }}
              >
                {/* Preview */}
                <div 
                  className="mb-2 flex-shrink-0"
                  style={{
                    width: '90px',
                    height: '28px',
                    border: '1px solid rgba(22,135,232,0.14)',
                    background: 'rgba(240,248,255,0.8)',
                    borderRadius: '7px',
                  }}
                >
                  <div className="h-1 w-3 bg-[#1687E8]/40 rounded mb-1.5 mt-1 ml-1" />
                  <div className="space-y-1 px-1">
                    <div className="h-1 w-full bg-[#1687E8]/25 rounded" />
                    <div className="h-1 w-3/4 bg-[#1687E8]/25 rounded" />
                  </div>
                </div>
                {/* Title */}
                <div className="text-[18px] font-bold text-[#091118] leading-tight text-center whitespace-nowrap">WEBSITE</div>
                {/* Subtitle */}
                <div className="text-[12px] text-[#64758A] leading-tight text-center mt-1">Customer Experience</div>
              </div>
            </div>

            {/* CRM: 22% X, 30% Y - Moved inward for better balance */}
            <div 
              className="absolute z-10 hover:z-15 transition-all duration-300"
              style={{ left: '22%', top: '30%', transform: 'translate(-50%, -50%)' }}
            >
              <div 
                className="rounded-lg flex flex-col items-center justify-center overflow-hidden hover:-translate-y-1 transition-transform duration-300"
                style={{
                  width: '160px',
                  height: '100px',
                  background: 'rgba(255,255,255,0.96)',
                  border: '1.5px solid #1687E8',
                  boxShadow: '0 8px 24px rgba(13,53,82,0.10)',
                  padding: '14px 16px',
                }}
              >
                <div 
                  className="mb-2 flex-shrink-0"
                  style={{
                    width: '85px',
                    height: '26px',
                    border: '1px solid rgba(22,135,232,0.14)',
                    background: 'rgba(240,248,255,0.8)',
                    borderRadius: '7px',
                  }}
                >
                  <div className="space-y-1 p-1">
                    <div className="flex gap-1">
                      <div className="h-1 w-1.5 bg-[#1687E8]/40 rounded-full" />
                      <div className="h-1 flex-1 bg-[#1687E8]/25 rounded" />
                    </div>
                    <div className="flex gap-1">
                      <div className="h-1 w-1.5 bg-[#1687E8]/40 rounded-full" />
                      <div className="h-1 flex-1 bg-[#1687E8]/25 rounded" />
                    </div>
                  </div>
                </div>
                <div className="text-[18px] font-bold text-[#091118] leading-tight text-center whitespace-nowrap">CRM</div>
                <div className="text-[12px] text-[#64758A] leading-tight text-center mt-1">Customer Relations</div>
              </div>
            </div>

            {/* ERP: 78% X, 30% Y - Moved inward for symmetry with CRM */}
            <div 
              className="absolute z-10 hover:z-15 transition-all duration-300"
              style={{ left: '78%', top: '30%', transform: 'translate(-50%, -50%)' }}
            >
              <div 
                className="rounded-lg flex flex-col items-center justify-center overflow-hidden hover:-translate-y-1 transition-transform duration-300"
                style={{
                  width: '160px',
                  height: '100px',
                  background: 'rgba(255,255,255,0.96)',
                  border: '1.5px solid #1687E8',
                  boxShadow: '0 8px 24px rgba(13,53,82,0.10)',
                  padding: '14px 16px',
                }}
              >
                <div 
                  className="mb-2 flex-shrink-0"
                  style={{
                    width: '85px',
                    height: '26px',
                    border: '1px solid rgba(22,135,232,0.14)',
                    background: 'rgba(240,248,255,0.8)',
                    borderRadius: '7px',
                  }}
                >
                  <div className="grid grid-cols-3 gap-1 p-1">
                    <div className="h-2 bg-[#1687E8]/30 rounded" />
                    <div className="h-2 bg-[#1687E8]/30 rounded" />
                    <div className="h-2 bg-[#1687E8]/30 rounded" />
                  </div>
                </div>
                <div className="text-[18px] font-bold text-[#091118] leading-tight text-center whitespace-nowrap">ERP</div>
                <div className="text-[12px] text-[#64758A] leading-tight text-center mt-1">Business Operations</div>
              </div>
            </div>

            {/* Mobile: 22% X, 72% Y - Moved inward for better balance */}
            <div 
              className="absolute z-10 hover:z-15 transition-all duration-300"
              style={{ left: '22%', top: '72%', transform: 'translate(-50%, -50%)' }}
            >
              <div 
                className="rounded-lg flex flex-col items-center justify-center overflow-hidden hover:-translate-y-1 transition-transform duration-300"
                style={{
                  width: '160px',
                  height: '104px',
                  background: 'rgba(255,255,255,0.96)',
                  border: '1.5px solid #1687E8',
                  boxShadow: '0 8px 24px rgba(13,53,82,0.10)',
                  padding: '14px 16px',
                }}
              >
                <div 
                  className="mb-2 flex-shrink-0"
                  style={{
                    width: '85px',
                    height: '28px',
                    border: '1px solid rgba(22,135,232,0.14)',
                    background: 'rgba(240,248,255,0.8)',
                    borderRadius: '7px',
                  }}
                >
                  <div className="flex items-center justify-center h-full">
                    <div className="w-5 h-8 border-2 border-[#1687E8]/30 rounded" />
                  </div>
                </div>
                <div className="text-[18px] font-bold text-[#091118] leading-tight text-center whitespace-nowrap">MOBILE</div>
                <div className="text-[12px] text-[#64758A] leading-tight text-center mt-1">On-the-Go Access</div>
              </div>
            </div>

            {/* Secondary Nodes */}
            {/* AI: 14% X, 50% Y - Moved inward for better balance */}
            <div 
              className="absolute z-10 hover:z-15 transition-all duration-300"
              style={{ left: '14%', top: '50%', transform: 'translate(-50%, -50%)' }}
            >
              <div 
                className="rounded-lg flex flex-col items-center justify-center overflow-hidden hover:-translate-y-1 transition-transform duration-300"
                style={{
                  width: '145px',
                  height: '88px',
                  background: 'rgba(250,253,255,0.95)',
                  border: '1px solid #B9DEF8',
                  boxShadow: '0 6px 18px rgba(13,53,82,0.07)',
                  padding: '14px 16px',
                }}
              >
                <div 
                  className="mb-2 flex-shrink-0"
                  style={{
                    width: '80px',
                    height: '26px',
                    border: '1px solid rgba(22,135,232,0.14)',
                    background: 'rgba(240,248,255,0.8)',
                    borderRadius: '7px',
                  }}
                >
                  <div className="flex items-center justify-center h-full">
                    <div className="w-2 h-2 bg-[#B9DEF8]/50 rounded-full" />
                  </div>
                </div>
                <div className="text-[16px] font-bold text-[#091118] leading-tight text-center whitespace-nowrap">AI</div>
                <div className="text-[12px] text-[#64758A] leading-tight text-center mt-1">Intelligence</div>
              </div>
            </div>

            {/* Database: 86% X, 50% Y - Moved inward for better balance */}
            <div 
              className="absolute z-10 hover:z-15 transition-all duration-300"
              style={{ left: '86%', top: '50%', transform: 'translate(-50%, -50%)' }}
            >
              <div 
                className="rounded-lg flex flex-col items-center justify-center overflow-hidden hover:-translate-y-1 transition-transform duration-300"
                style={{
                  width: '150px',
                  height: '88px',
                  background: 'rgba(250,253,255,0.95)',
                  border: '1px solid #B9DEF8',
                  boxShadow: '0 6px 18px rgba(13,53,82,0.07)',
                  padding: '14px 16px',
                }}
              >
                <div 
                  className="mb-2 flex-shrink-0"
                  style={{
                    width: '80px',
                    height: '26px',
                    border: '1px solid rgba(22,135,232,0.14)',
                    background: 'rgba(240,248,255,0.8)',
                    borderRadius: '7px',
                  }}
                >
                  <div className="flex items-center justify-center h-full gap-0.5">
                    <div className="w-1.5 h-3 bg-[#B9DEF8]/40 rounded-sm" />
                    <div className="w-1.5 h-3 bg-[#B9DEF8]/40 rounded-sm" />
                  </div>
                </div>
                <div className="text-[16px] font-bold text-[#091118] leading-tight text-center whitespace-nowrap">DATABASE</div>
                <div className="text-[12px] text-[#64758A] leading-tight text-center mt-1">Business Data</div>
              </div>
            </div>

            {/* Automation: 78% X, 72% Y - Moved inward for symmetry with Mobile */}
            <div 
              className="absolute z-10 hover:z-15 transition-all duration-300"
              style={{ left: '78%', top: '72%', transform: 'translate(-50%, -50%)' }}
            >
              <div 
                className="rounded-lg flex flex-col items-center justify-center overflow-hidden hover:-translate-y-1 transition-transform duration-300"
                style={{
                  width: '155px',
                  height: '88px',
                  background: 'rgba(250,253,255,0.95)',
                  border: '1px solid #B9DEF8',
                  boxShadow: '0 6px 18px rgba(13,53,82,0.07)',
                  padding: '14px 16px',
                }}
              >
                <div 
                  className="mb-2 flex-shrink-0"
                  style={{
                    width: '80px',
                    height: '26px',
                    border: '1px solid rgba(22,135,232,0.14)',
                    background: 'rgba(240,248,255,0.8)',
                    borderRadius: '7px',
                  }}
                >
                  <div className="flex items-center justify-center h-full gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B9DEF8]/40" />
                    <div className="w-1 h-1 rounded-full bg-[#B9DEF8]/30" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B9DEF8]/40" />
                  </div>
                </div>
                <div className="text-[16px] font-bold text-[#091118] leading-tight text-center whitespace-nowrap">AUTOMATION</div>
                <div className="text-[12px] text-[#64758A] leading-tight text-center mt-1">Workflows</div>
              </div>
            </div>

            {/* Integrations: 50% X, 87% Y */}
            <div 
              className="absolute z-10 hover:z-15 transition-all duration-300"
              style={{ left: '50%', top: '87%', transform: 'translate(-50%, -50%)' }}
            >
              <div 
                className="rounded-lg flex flex-col items-center justify-center overflow-hidden hover:-translate-y-1 transition-transform duration-300"
                style={{
                  width: '170px',
                  height: '92px',
                  background: 'rgba(250,253,255,0.95)',
                  border: '1px solid #B9DEF8',
                  boxShadow: '0 6px 18px rgba(13,53,82,0.07)',
                  padding: '14px 16px',
                }}
              >
                <div 
                  className="mb-2 flex-shrink-0"
                  style={{
                    width: '90px',
                    height: '26px',
                    border: '1px solid rgba(22,135,232,0.14)',
                    background: 'rgba(240,248,255,0.8)',
                    borderRadius: '7px',
                  }}
                >
                  <div className="flex items-center justify-center h-full gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B9DEF8]/40" />
                    <div className="w-1 h-1 rounded-full bg-[#B9DEF8]/30" />
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B9DEF8]/40" />
                  </div>
                </div>
                <div className="text-[16px] font-bold text-[#091118] leading-tight text-center whitespace-nowrap">INTEGRATIONS</div>
                <div className="text-[12px] text-[#64758A] leading-tight text-center mt-1">Connected Services</div>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile/Tablet Layout - Compact branching architecture */}
        <div className="lg:hidden relative py-12 bg-gradient-to-br from-[#F5F8FC] to-[#FFFFFF] rounded-2xl overflow-hidden border border-[#DCE6EE]">
          
          {/* Subtle grid */}
          <div className="absolute inset-0 opacity-[0.004]" style={{
            backgroundImage: `
              linear-gradient(rgba(22, 135, 232, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(22, 135, 232, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }} />

          {/* Centered glow */}
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[280px] h-[280px] bg-[#45B8FF] rounded-full blur-[70px] opacity-[0.04]" />

          {/* SVG connectors for mobile architecture */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-5">
            <defs>
              <linearGradient id="mobileConn" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1687E8" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#45B8FF" stopOpacity="0.20" />
              </linearGradient>
            </defs>
            
            {/* Core to Website/CRM */}
            <line x1="50%" y1="25%" x2="50%" y2="32%" stroke="url(#mobileConn)" strokeWidth="1.5" />
            <line x1="50%" y1="32%" x2="30%" y2="32%" stroke="url(#mobileConn)" strokeWidth="1.5" />
            <line x1="50%" y1="32%" x2="70%" y2="32%" stroke="url(#mobileConn)" strokeWidth="1.5" />
            
            {/* Website/CRM to ERP */}
            <line x1="30%" y1="38%" x2="50%" y2="46%" stroke="url(#mobileConn)" strokeWidth="1.5" />
            <line x1="70%" y1="38%" x2="50%" y2="46%" stroke="url(#mobileConn)" strokeWidth="1.5" />
            
            {/* ERP to Mobile/Automation */}
            <line x1="50%" y1="54%" x2="50%" y2="58%" stroke="url(#mobileConn)" strokeWidth="1.5" />
            <line x1="50%" y1="58%" x2="30%" y2="58%" stroke="url(#mobileConn)" strokeWidth="1.5" />
            <line x1="50%" y1="58%" x2="70%" y2="58%" stroke="url(#mobileConn)" strokeWidth="1.5" />
            
            {/* Mobile/Automation to AI/Data */}
            <line x1="30%" y1="64%" x2="50%" y2="70%" stroke="url(#mobileConn)" strokeWidth="1.5" />
            <line x1="70%" y1="64%" x2="50%" y2="70%" stroke="url(#mobileConn)" strokeWidth="1.5" />
            
            {/* AI/Data to Integrations */}
            <line x1="50%" y1="78%" x2="50%" y2="82%" stroke="url(#mobileConn)" strokeWidth="1.5" />
          </svg>

          {/* Mobile layout container */}
          <div className="relative max-w-[360px] mx-auto px-4">
            
            {/* Center Core */}
            <div className="flex justify-center mb-6">
              <div 
                className="relative w-[112px] h-[112px] rounded-full flex items-center justify-center"
                style={{
                  background: 'radial-gradient(circle at 35% 30%, #ffffff 0%, #eef7ff 55%, #dceeff 100%)',
                  border: '2px solid #1687E8',
                  boxShadow: '0 10px 28px rgba(12, 67, 110, 0.12)',
                }}
              >
                <div className="absolute inset-0 rounded-full bg-[#1687E8] opacity-[0.02]" />
                <div className="flex flex-col items-center justify-center gap-0.5">
                  <div className="text-[19px] font-bold text-[#091118] leading-none">YOUR</div>
                  <div className="text-[19px] font-bold text-[#1687E8] leading-none">SYSTEM</div>
                </div>
              </div>
            </div>

            {/* First branch: Website + CRM */}
            <div className="flex gap-3 mb-4">
              <div 
                className="flex-1 rounded-lg flex flex-col items-center justify-center overflow-hidden"
                style={{
                  minHeight: '72px',
                  background: 'rgba(255,255,255,0.96)',
                  border: '1.5px solid #1687E8',
                  boxShadow: '0 5px 16px rgba(13,53,82,0.08)',
                  padding: '12px',
                }}
              >
                <div className="text-center">
                  <div className="text-[15px] font-bold text-[#091118] leading-tight">WEBSITE</div>
                  <div className="text-[11px] text-[#64758A] mt-1">Customer Experience</div>
                </div>
              </div>
              <div 
                className="flex-1 rounded-lg flex flex-col items-center justify-center overflow-hidden"
                style={{
                  minHeight: '72px',
                  background: 'rgba(255,255,255,0.96)',
                  border: '1.5px solid #1687E8',
                  boxShadow: '0 5px 16px rgba(13,53,82,0.08)',
                  padding: '12px',
                }}
              >
                <div className="text-center">
                  <div className="text-[15px] font-bold text-[#091118] leading-tight">CRM</div>
                  <div className="text-[11px] text-[#64758A] mt-1">Customer Relations</div>
                </div>
              </div>
            </div>

            {/* ERP - Central supporting node */}
            <div className="flex justify-center mb-4">
              <div 
                className="rounded-lg flex flex-col items-center justify-center overflow-hidden"
                style={{
                  width: '150px',
                  minHeight: '68px',
                  background: 'rgba(255,255,255,0.96)',
                  border: '1.5px solid #1687E8',
                  boxShadow: '0 5px 16px rgba(13,53,82,0.08)',
                  padding: '12px',
                }}
              >
                <div className="text-center">
                  <div className="text-[15px] font-bold text-[#091118] leading-tight">ERP</div>
                  <div className="text-[11px] text-[#64758A] mt-1">Business Operations</div>
                </div>
              </div>
            </div>

            {/* Second branch: Mobile + Automation */}
            <div className="flex gap-3 mb-4">
              <div 
                className="flex-1 rounded-lg flex flex-col items-center justify-center overflow-hidden"
                style={{
                  minHeight: '72px',
                  background: 'rgba(255,255,255,0.96)',
                  border: '1.5px solid #1687E8',
                  boxShadow: '0 5px 16px rgba(13,53,82,0.08)',
                  padding: '12px',
                }}
              >
                <div className="text-center">
                  <div className="text-[15px] font-bold text-[#091118] leading-tight">MOBILE</div>
                  <div className="text-[11px] text-[#64758A] mt-1">On-the-Go Access</div>
                </div>
              </div>
              <div 
                className="flex-1 rounded-lg flex flex-col items-center justify-center overflow-hidden"
                style={{
                  minHeight: '72px',
                  background: 'rgba(250,253,255,0.95)',
                  border: '1px solid #B9DEF8',
                  boxShadow: '0 4px 12px rgba(13,53,82,0.06)',
                  padding: '12px',
                }}
              >
                <div className="text-center">
                  <div className="text-[15px] font-bold text-[#091118] leading-tight">AUTOMATION</div>
                  <div className="text-[11px] text-[#64758A] mt-1">Workflows</div>
                </div>
              </div>
            </div>

            {/* AI + Database - Compact secondary row */}
            <div className="flex gap-3 mb-4">
              <div 
                className="flex-1 rounded-lg flex flex-col items-center justify-center overflow-hidden"
                style={{
                  minHeight: '64px',
                  background: 'rgba(250,253,255,0.95)',
                  border: '1px solid #B9DEF8',
                  boxShadow: '0 4px 12px rgba(13,53,82,0.06)',
                  padding: '10px',
                }}
              >
                <div className="text-center">
                  <div className="text-[14px] font-bold text-[#091118] leading-tight">AI</div>
                  <div className="text-[10px] text-[#64758A] mt-0.5">Intelligence</div>
                </div>
              </div>
              <div 
                className="flex-1 rounded-lg flex flex-col items-center justify-center overflow-hidden"
                style={{
                  minHeight: '64px',
                  background: 'rgba(250,253,255,0.95)',
                  border: '1px solid #B9DEF8',
                  boxShadow: '0 4px 12px rgba(13,53,82,0.06)',
                  padding: '10px',
                }}
              >
                <div className="text-center">
                  <div className="text-[14px] font-bold text-[#091118] leading-tight">DATABASE</div>
                  <div className="text-[10px] text-[#64758A] mt-0.5">Business Data</div>
                </div>
              </div>
            </div>

            {/* Integrations - Final supporting layer */}
            <div className="flex justify-center">
              <div 
                className="rounded-lg flex flex-col items-center justify-center overflow-hidden"
                style={{
                  width: '160px',
                  minHeight: '64px',
                  background: 'rgba(250,253,255,0.95)',
                  border: '1px solid #B9DEF8',
                  boxShadow: '0 4px 12px rgba(13,53,82,0.06)',
                  padding: '10px',
                }}
              >
                <div className="text-center">
                  <div className="text-[14px] font-bold text-[#091118] leading-tight">INTEGRATIONS</div>
                  <div className="text-[10px] text-[#64758A] mt-0.5">Connected Services</div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* System Legend */}
        <div className="mt-8 flex flex-wrap gap-6 md:gap-10 items-center justify-center text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#1687E8]" />
            <span className="text-[#5F7080]">Core System</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#45B8FF]" />
            <span className="text-[#5F7080]">Business Systems</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#A7DFFF]" />
            <span className="text-[#5F7080]">Intelligence & Data</span>
          </div>
        </div>

      </Container>
    </section>
  );
}
