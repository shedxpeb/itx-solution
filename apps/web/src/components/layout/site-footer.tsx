import { Heading4, BodyMedium, NavLink, Caption, Container } from '@itx/ui';
import { footerNavigation, siteConfig } from '@itx/config';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#071017] text-white">
      <Container className="py-20 md:py-24 px-6 md:px-12 lg:px-16 max-w-[1360px] mx-auto w-full min-w-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-16">
          {/* Brand - Large */}
          <div className="md:col-span-2 space-y-6">
            <Heading4 className="text-2xl md:text-3xl font-bold text-white mb-4">ITX Solution</Heading4>
            <BodyMedium className="text-white/70 text-base leading-[1.7] max-w-md">
              Technology that works for your business.
            </BodyMedium>
            <BodyMedium className="text-white/50 text-sm leading-[1.6] max-w-md">
              We design and build websites, custom software, CRM, ERP, mobile applications, automation and AI-powered systems around the way your business actually works.
            </BodyMedium>
          </div>

          {/* Company */}
          <div>
            <Caption className="tracking-[0.25em] text-[#1687E8] font-semibold mb-6 text-xs uppercase">
              COMPANY
            </Caption>
            <ul className="space-y-4">
              {footerNavigation.company.map((item) => (
                <li key={item.href}>
                  <NavLink href={item.href} className="text-white/70 hover:text-white hover:translate-x-1 transition-all text-sm inline-block">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <Caption className="tracking-[0.25em] text-[#1687E8] font-semibold mb-6 text-xs uppercase">
              SERVICES
            </Caption>
            <ul className="space-y-4">
              {footerNavigation.services.map((item, index) => (
                <li key={`${item.href}-${index}`}>
                  <NavLink href={item.href} className="text-white/70 hover:text-white hover:translate-x-1 transition-all text-sm inline-block">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <Caption className="tracking-[0.25em] text-[#1687E8] font-semibold mb-6 text-xs uppercase">
              RESOURCES
            </Caption>
            <ul className="space-y-4">
              {footerNavigation.resources.map((item) => (
                <li key={item.href}>
                  <NavLink href={item.href} className="text-white/70 hover:text-white hover:translate-x-1 transition-all text-sm inline-block">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="pt-12 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <Caption className="tracking-[0.25em] text-[#1687E8] font-semibold mb-4 text-xs uppercase">
                LOCATION
              </Caption>
              <BodyMedium className="text-white/70 text-sm leading-[1.6]">
                427, Vishala Supreme,<br />
                SP Ring Road, Nikol,<br />
                Ahmedabad
              </BodyMedium>
            </div>
            <div>
              <Caption className="tracking-[0.25em] text-[#1687E8] font-semibold mb-4 text-xs uppercase">
                CONTACT
              </Caption>
              <BodyMedium className="text-white text-sm">
                <NavLink href="tel:9316463947" className="!text-white hover:text-[#45B8FF] transition-colors inline">
                  9316463947
                </NavLink>
                <span className="mx-2"></span>
                <NavLink href="mailto:itxsolution@gmail.com" className="!text-white hover:text-[#45B8FF] transition-colors inline">
                  itxsolution@gmail.com
                </NavLink>
              </BodyMedium>
            </div>
            <div>
              <Caption className="tracking-[0.25em] text-[#1687E8] font-semibold mb-4 text-xs uppercase">
                FOLLOW
              </Caption>
              <BodyMedium className="text-white/70 text-sm">
                LinkedIn • Twitter
              </BodyMedium>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <BodyMedium className="text-white/50 text-sm">
              © {new Date().getFullYear()} ITX Solution. All rights reserved.
            </BodyMedium>
            <div className="flex gap-6">
              <NavLink href="/privacy" className="text-white/50 hover:text-white transition-colors text-sm">
                Privacy
              </NavLink>
              <NavLink href="/terms" className="text-white/50 hover:text-white transition-colors text-sm">
                Terms
              </NavLink>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
