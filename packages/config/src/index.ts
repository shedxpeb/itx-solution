// Application configuration and design constants

export interface NavigationItem {
  label: string;
  href: string;
  disabled?: boolean;
}

export interface SocialLink {
  label: string;
  href: string;
  icon?: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  email?: string;
  phone?: string;
  address?: string;
  social?: SocialLink[];
}

export const navigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const footerNavigation = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'Web Development', href: '/services' },
    { label: 'CRM & ERP', href: '/services' },
    { label: 'Custom Software', href: '/services' },
    { label: 'Mobile Applications', href: '/services' },
    { label: 'Automation', href: '/services' },
    { label: 'AI & Intelligent Systems', href: '/services' },
  ],
  resources: [
    { label: 'Projects', href: '/projects' },
    { label: 'Process', href: '/process' },
    { label: 'Technology', href: '/technology' },
    { label: 'Contact', href: '/contact' },
  ],
};

export const siteConfig: SiteConfig = {
  name: 'ITX Solution',
  description: 'Technology that works for your business.',
  url: 'https://itxsolution.com',
  email: 'itxsolution@gmail.com',
  phone: '9316463947',
  address: '427, Vishala Supreme, SP Ring Road, Nikol, Ahmedabad',
  social: [
    { label: 'LinkedIn', href: 'https://linkedin.com/company/itxsolution' },
    { label: 'Twitter', href: 'https://twitter.com/itxsolution' },
  ],
};

export const ctaConfig = {
  header: {
    label: 'Start a Project',
    href: '/contact',
    disabled: false,
  },
  footer: {
    label: 'Start a Project',
    href: '/contact',
    disabled: false,
  },
};
