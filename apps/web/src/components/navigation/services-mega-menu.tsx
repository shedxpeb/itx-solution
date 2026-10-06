'use client';

import { useState, useRef, useEffect } from 'react';
import { NavLink } from '@itx/ui';
import { gsap } from '@/lib/motion/gsap';
import { motionConfig } from '@/lib/motion/config';
import { shouldAnimate } from '@/lib/motion/reduced-motion';

interface ServiceCategory {
  title: string;
  items: {
    label: string;
    href: string;
  }[];
}

const serviceCategories: ServiceCategory[] = [
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

interface ServicesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navbarTheme: 'light' | 'dark';
}

export function ServicesMegaMenu({ isOpen, onClose, navbarTheme }: ServicesMegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Animation on open/close
  useEffect(() => {
    if (!menuRef.current || !shouldAnimate()) return;

    const ctx = gsap.context(() => {
      const menu = menuRef.current;
      const items = itemRefs.current.filter(Boolean);

      if (isOpen) {
        // Open animation
        gsap.fromTo(
          menu,
          { opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' },
          {
            opacity: 1,
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: motionConfig.duration.medium,
            ease: motionConfig.easing.standard,
          }
        );

        gsap.fromTo(
          items,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: motionConfig.duration.short,
            ease: motionConfig.easing.standard,
            stagger: motionConfig.stagger.fast,
            delay: motionConfig.duration.short * 0.5,
          }
        );
      } else {
        // Close animation
        gsap.to(menu, {
          opacity: 0,
          clipPath: 'inset(0% 0% 100% 0%)',
          duration: motionConfig.duration.short,
          ease: motionConfig.easing.exit,
        });
      }
    }, menuRef);

    return () => ctx.revert();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="fixed top-16 left-0 right-0 z-[999] px-6 lg:px-8"
      style={{
        pointerEvents: isOpen ? 'auto' : 'none',
      }}
    >
      <div
        className="mx-auto max-w-[1400px] w-full min-w-0 bg-white rounded-2xl shadow-2xl border border-[#DCE6EE] overflow-hidden"
        style={{
          paddingTop: '32px',
          paddingBottom: '32px',
          paddingLeft: '40px',
          paddingRight: '40px',
        }}
      >
        <div className="grid grid-cols-4 gap-8 lg:gap-12">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-4">
              <h3
                className="text-xs font-bold tracking-[0.2em] text-[#5F7080] uppercase"
                style={{
                  marginBottom: '16px',
                }}
              >
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => {
                  const globalIndex = categoryIndex * 3 + itemIndex;
                  return (
                    <li key={item.label}>
                      <NavLink
                        ref={(el) => { itemRefs.current[globalIndex] = el; }}
                        href={item.href}
                        className="block text-sm font-medium text-[#091118] hover:text-[#1687E8] transition-colors py-1"
                        onClick={onClose}
                        style={{
                          position: 'relative',
                        }}
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
