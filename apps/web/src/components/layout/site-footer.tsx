import { Heading4, BodyMedium, NavLink, Caption, Container } from '@itx/ui';
import { siteConfig } from '@itx/config';

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

          {/* Navigation */}
          <div>
            <Caption className="tracking-[0.25em] text-[#1687E8] font-semibold mb-6 text-xs uppercase">
              NAVIGATION
            </Caption>
            <ul className="space-y-4">
              <li><NavLink href="/" className="text-white/70 hover:text-white hover:translate-x-1 transition-all text-sm inline-block">Home</NavLink></li>
              <li><NavLink href="/about" className="text-white/70 hover:text-white hover:translate-x-1 transition-all text-sm inline-block">About</NavLink></li>
              <li><NavLink href="/services" className="text-white/70 hover:text-white hover:translate-x-1 transition-all text-sm inline-block">Services</NavLink></li>
              <li><NavLink href="/projects" className="text-white/70 hover:text-white hover:translate-x-1 transition-all text-sm inline-block">Projects</NavLink></li>
              <li><NavLink href="/case-studies" className="text-white/70 hover:text-white hover:translate-x-1 transition-all text-sm inline-block">Case Studies</NavLink></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <Caption className="tracking-[0.25em] text-[#1687E8] font-semibold mb-6 text-xs uppercase">
              SERVICES
            </Caption>
            <ul className="space-y-4">
              <li><NavLink href="/services" className="text-white/70 hover:text-white hover:translate-x-1 transition-all text-sm inline-block">Web Development</NavLink></li>
              <li><NavLink href="/services" className="text-white/70 hover:text-white hover:translate-x-1 transition-all text-sm inline-block">CRM & ERP</NavLink></li>
              <li><NavLink href="/services" className="text-white/70 hover:text-white hover:translate-x-1 transition-all text-sm inline-block">Custom Software</NavLink></li>
              <li><NavLink href="/services" className="text-white/70 hover:text-white hover:translate-x-1 transition-all text-sm inline-block">Mobile Applications</NavLink></li>
              <li><NavLink href="/services" className="text-white/70 hover:text-white hover:translate-x-1 transition-all text-sm inline-block">Automation</NavLink></li>
            </ul>
          </div>

          {/* Technology & Industries */}
          <div>
            <Caption className="tracking-[0.25em] text-[#1687E8] font-semibold mb-6 text-xs uppercase">
              MORE
            </Caption>
            <ul className="space-y-4">
              <li><NavLink href="/technology" className="text-white/70 hover:text-white hover:translate-x-1 transition-all text-sm inline-block">Technology</NavLink></li>
              <li><NavLink href="/industries" className="text-white/70 hover:text-white hover:translate-x-1 transition-all text-sm inline-block">Industries</NavLink></li>
              <li><NavLink href="/blog" className="text-white/70 hover:text-white hover:translate-x-1 transition-all text-sm inline-block">Blog</NavLink></li>
              <li><NavLink href="/contact" className="text-white/70 hover:text-white hover:translate-x-1 transition-all text-sm inline-block">Contact</NavLink></li>
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
                Ahmedabad, Gujarat, India
              </BodyMedium>
            </div>
            <div>
              <Caption className="tracking-[0.25em] text-[#1687E8] font-semibold mb-4 text-xs uppercase">
                CONTACT
              </Caption>
              <BodyMedium className="text-white text-sm leading-[1.6]">
                <NavLink href="tel:9316463947" className="!text-white hover:text-[#45B8FF] transition-colors inline">
                  Phone: 9316463947
                </NavLink>
                <br />
                <NavLink href="https://wa.me/9316463947" className="!text-white hover:text-[#45B8FF] transition-colors inline">
                  WhatsApp: 9316463947
                </NavLink>
                <br />
                <NavLink href="mailto:itxsolution@gmail.com" className="!text-white hover:text-[#45B8FF] transition-colors inline">
                  Email: itxsolution@gmail.com
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
      </Container>
    </footer>
  );
}
