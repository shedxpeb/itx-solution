'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { NavLink } from '@itx/ui';
import { navigation, ctaConfig, siteConfig } from '@itx/config';
import { gsap } from '@/lib/motion/gsap';
import { shouldAnimate } from '@/lib/motion/reduced-motion';
import { motionConfig } from '@/lib/motion/config';
import { ServicesMegaMenu } from '@/components/navigation/services-mega-menu';

const serviceCategories = [
  {
    title: 'DIGITAL EXPERIENCE',
    items: [
      { label: 'Websites', href: '/services/websites' },
      { label: 'Web Applications', href: '/services/web-applications' },
      { label: 'E-Commerce', href: '/services/e-commerce' },
    ],
  },
  {
    title: 'BUSINESS SYSTEMS',
    items: [
      { label: 'CRM & ERP', href: '/services/crm-erp' },
      { label: 'Custom Software', href: '/services/custom-software' },
      { label: 'Dashboards & Tools', href: '/services/dashboards' },
    ],
  },
  {
    title: 'MOBILE & AUTOMATION',
    items: [
      { label: 'Mobile Applications', href: '/services/mobile-applications' },
      { label: 'Automation & Integrations', href: '/services/automation' },
    ],
  },
  {
    title: 'DESIGN & INTELLIGENCE',
    items: [
      { label: 'AI & Intelligent Systems', href: '/services/ai-systems' },
      { label: 'UI/UX & Product Design', href: '/services/ui-ux-design' },
      { label: 'Support & Improvement', href: '/services/support' },
    ],
  },
];

type NavbarTheme = 'light' | 'dark';

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [navbarTheme, setNavbarTheme] = useState<NavbarTheme>('light');
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const servicesRef = useRef<HTMLAnchorElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const closeMobileMenu = () => setMobileMenuOpen(false);
  const closeMegaMenu = () => setMegaMenuOpen(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  // Services mega menu handlers
  const handleServicesEnter = () => {
    setMegaMenuOpen(true);
  };

  const handleServicesLeave = () => {
    setMegaMenuOpen(false);
  };

  // Detect section theme using IntersectionObserver
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Find all sections with data-navbar-theme
    const sections = document.querySelectorAll<HTMLElement>('[data-navbar-theme]');
    if (sections.length === 0) return;

    // Create observer to detect which section intersects with navbar
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section that is most visible (highest ratio)
        let bestEntry: IntersectionObserverEntry | null = null;
        let maxRatio = 0;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            bestEntry = entry;
          }
        });

        if (bestEntry) {
          const theme = (bestEntry.target as HTMLElement).getAttribute('data-navbar-theme') as NavbarTheme;
          if (theme === 'light' || theme === 'dark') {
            setNavbarTheme(theme);
          }
        }
      },
      {
        rootMargin: '-50% 0px -50% 0px', // Detect when section is in middle of viewport
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    observerRef.current = observer;

    return () => {
      observer.disconnect();
    };
  }, [pathname]); // Re-run on route change

  // Body scroll lock
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Escape key to close menu
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    closeMobileMenu();
    closeMegaMenu();
  }, [pathname]);

  // Initial entrance
  useEffect(() => {
    if (!headerRef.current || !shouldAnimate()) return;

    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -20,
        duration: motionConfig.duration.medium,
        ease: motionConfig.easing.standard,
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  // Scroll: compact floating
  useEffect(() => {
    if (typeof window === 'undefined') return;

    let lastScrollY = window.scrollY;
    let isCompact = false;

    const handleScroll = () => {
      if (typeof window === 'undefined') return;

      const currentScrollY = window.scrollY;
      const shouldBeCompact = currentScrollY > 100;

      if (shouldBeCompact !== isCompact) {
        isCompact = shouldBeCompact;
        if (headerRef.current) {
          const navLinks = headerRef.current.querySelectorAll('nav a, .cta-btn');
          if (isCompact) {
            gsap.to(headerRef.current, {
              duration: motionConfig.duration.short,
              ease: 'power2.out',
              padding: '8px 6px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            });
            navLinks.forEach(link => {
              gsap.to(link, {
                duration: motionConfig.duration.short,
                fontSize: '0.8rem',
                padding: '6px 4px',
              });
            });
          } else {
            gsap.to(headerRef.current, {
              duration: motionConfig.duration.medium,
              ease: 'power2.out',
              padding: '16px 6px',
              boxShadow: 'none',
            });
            navLinks.forEach(link => {
              gsap.to(link, {
                duration: motionConfig.duration.short,
                fontSize: '',
                padding: '',
              });
            });
          }
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (!mobileMenuRef.current || !shouldAnimate()) return;

    const ctx = gsap.context(() => {
      const menu = mobileMenuRef.current;

      if (mobileMenuOpen) {
        gsap.fromTo(
          menu,
          { opacity: 0 },
          { opacity: 1, duration: motionConfig.duration.medium, ease: motionConfig.easing.standard }
        );
        
        gsap.fromTo(
          mobileItemRefs.current.filter(Boolean),
          { opacity: 0, y: 16 },
          { 
            opacity: 1, 
            y: 0, 
            duration: motionConfig.duration.short, 
            ease: motionConfig.easing.standard,
            stagger: 0.05
          }
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          duration: motionConfig.duration.short,
          ease: motionConfig.easing.exit,
        });
      }
    }, mobileMenuRef);

    return () => ctx.revert();
  }, [mobileMenuOpen]);

  // Theme-specific styles
  const isDark = navbarTheme === 'dark';
  const logoColor = isDark ? '#FFFFFF' : '#0A1117';
  const linkColor = isDark ? 'rgba(255,255,255,0.78)' : '#26333F';
  const linkHoverColor = isDark ? '#FFFFFF' : '#1687E8';
  const activeColor = isDark ? '#45B8FF' : '#1687E8';
  const navbarBg = isDark ? 'rgba(7,16,23,0.90)' : 'rgba(255,255,255,0.88)';
  const navbarBorder = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(10,17,23,0.08)';
  const mobileIconColor = isDark ? '#FFFFFF' : '#0A1117';
  const mobileMenuBg = isDark ? '#071017' : '#F5F8FC';
  const mobileMenuText = isDark ? '#FFFFFF' : '#091118';
  const mobileMenuBorder = isDark ? 'rgba(255,255,255,0.12)' : '#DCE6EE';

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-[1000] w-full transition-all duration-300 backdrop-blur-sm border-b"
      style={{
        backgroundColor: navbarBg,
        borderColor: navbarBorder,
        transition: 'background-color 0.25s ease, border-color 0.25s ease, padding 0.3s ease',
      }}
    >
      <div className="mx-auto px-6 lg:px-8 max-w-[1400px] w-full min-w-0 flex h-16 items-center justify-between">
        {/* Logo */}
        <NavLink href="/" className="flex items-center space-x-2 group">
          <span
            className="text-2xl font-bold tracking-tight transition-colors"
            style={{ color: logoColor }}
          >
            {siteConfig.name}
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center space-x-10">
          {navigation.map((item) => {
            const isServices = item.label === 'Services';
            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={isServices ? handleServicesEnter : undefined}
                onMouseLeave={isServices ? handleServicesLeave : undefined}
              >
                <NavLink
                  ref={isServices ? servicesRef : undefined}
                  href={item.href}
                  variant={item.disabled ? 'muted' : isActive(item.href) ? 'primary' : 'default'}
                  className={`relative text-sm font-medium transition-colors ${
                    item.disabled ? 'cursor-not-allowed opacity-50' : ''
                  }`}
                  style={{
                    color: isActive(item.href) ? activeColor : linkColor,
                  }}
                  onMouseEnter={(e) => {
                    if (!item.disabled && !isActive(item.href) && !isServices) {
                      e.currentTarget.style.color = linkHoverColor;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!item.disabled && !isActive(item.href) && !isServices) {
                      e.currentTarget.style.color = linkColor;
                    }
                  }}
                  data-cursor="link"
                >
                  {item.label}
                  {isActive(item.href) && !item.disabled && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-all duration-200"
                      style={{ backgroundColor: activeColor }}
                    />
                  )}
                </NavLink>
              </div>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {!ctaConfig.header.disabled && (
            <NavLink
              href={ctaConfig.header.href}
              className="inline-flex items-center justify-center rounded-lg font-semibold transition-all bg-[#1687E8] text-white hover:bg-[#0F5CB8] hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 px-6 py-3 text-sm"
              data-cursor="button"
            >
              {ctaConfig.header.label}
            </NavLink>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1687E8] focus:ring-offset-2 transition-colors"
          style={{ color: mobileIconColor }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Services Mega Menu */}
      <ServicesMegaMenu
        isOpen={megaMenuOpen}
        onClose={closeMegaMenu}
        navbarTheme={navbarTheme}
      />

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          id="mobile-menu"
          className="lg:hidden fixed inset-0 top-0 left-0 right-0 bottom-0 w-full h-[100dvh] z-[950]"
          role="dialog"
          aria-modal="true"
          style={{
            backgroundColor: mobileMenuBg,
            paddingTop: 'env(safe-area-inset-top)',
            paddingBottom: 'env(safe-area-inset-bottom)',
          }}
        >
          {/* Nav bar inside menu */}
          <div
            className="mx-auto px-6 lg:px-8 max-w-[1400px] w-full min-w-0 flex h-16 items-center justify-between border-b"
            style={{ borderColor: mobileMenuBorder }}
          >
            <NavLink href="/" className="flex items-center space-x-2 group">
              <span
                className="text-2xl font-bold tracking-tight transition-colors"
                style={{ color: mobileMenuText }}
              >
                {siteConfig.name}
              </span>
            </NavLink>

            <button
              type="button"
              className="inline-flex items-center justify-center w-11 h-11 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1687E8] focus:ring-offset-2 transition-colors"
              style={{ color: mobileMenuText }}
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Menu content */}
          <nav className="px-6 py-12 space-y-2 overflow-y-auto max-h-[calc(100dvh-64px)]">
            {navigation.map((item, index) => {
              const isServices = item.label === 'Services';
              return (
                <div
                  key={item.href}
                  ref={(el) => { mobileItemRefs.current[index] = el; }}
                >
                  {isServices ? (
                    <div>
                      <button
                        className="block w-full text-left py-4 text-3xl font-bold transition-colors"
                        style={{ color: mobileMenuText }}
                        onClick={() => {
                          // Toggle services accordion
                          const servicesSubmenu = document.getElementById('mobile-services-submenu');
                          if (servicesSubmenu) {
                            const isHidden = servicesSubmenu.style.display === 'none';
                            servicesSubmenu.style.display = isHidden ? 'block' : 'none';
                          }
                        }}
                      >
                        {item.label}
                      </button>
                      <div
                        id="mobile-services-submenu"
                        className="hidden pl-6 space-y-2 mt-2"
                      >
                        {serviceCategories.map((category) => (
                          <div key={category.title} className="mb-4">
                            <h4 className="text-xs font-bold tracking-[0.2em] text-[#5F7080] uppercase mb-2">
                              {category.title}
                            </h4>
                            {category.items.map((subItem) => (
                              <NavLink
                                key={subItem.href}
                                href={subItem.href}
                                className="block py-2 text-lg font-medium transition-colors"
                                style={{ color: mobileMenuText }}
                                onClick={closeMobileMenu}
                              >
                                {subItem.label}
                              </NavLink>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      href={item.href}
                      variant={item.disabled ? 'muted' : isActive(item.href) ? 'primary' : 'default'}
                      className={`block py-4 text-3xl font-bold transition-colors ${
                        item.disabled ? 'cursor-not-allowed opacity-50' : ''
                      }`}
                      style={{ color: mobileMenuText }}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </NavLink>
                  )}
                </div>
              );
            })}
            
            {/* CTA Button */}
            {!ctaConfig.header.disabled && (
              <div className="pt-8">
                <NavLink
                  href={ctaConfig.header.href}
                  className="inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all bg-[#1687E8] text-white hover:bg-[#0F5CB8] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 px-8 py-4 text-lg w-full max-w-[320px]"
                  onClick={closeMobileMenu}
                >
                  {ctaConfig.header.label}
                </NavLink>
              </div>
            )}

            {/* Contact info */}
            <div className="pt-8 space-y-2" style={{ color: isDark ? 'rgba(255,255,255,0.6)' : '#5F7080' }}>
              <div className="text-sm">
                <a href="tel:9316463947" className="hover:text-[#1687E8] transition-colors">9316463947</a>
                <span className="mx-2">•</span>
                <a href="mailto:itxsolution@gmail.com" className="hover:text-[#1687E8] transition-colors">itxsolution@gmail.com</a>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
