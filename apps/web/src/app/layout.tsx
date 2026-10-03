import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { MotionWrapper } from '@/components/layout/motion-wrapper';
import { LoadingWrapper } from '@/components/loading/loading-wrapper';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'ITX Solution - Technology for Modern Business',
    template: '%s | ITX Solution',
  },
  description: 'ITX Solution builds robust digital platforms, business systems, and automation solutions that help companies scale with confidence.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
      <body className="bg-background text-foreground flex flex-col min-h-screen max-w-[100vw]" suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                const originalWarn = console.warn;
                console.warn = function(...args) {
                  const message = args[0];
                  if (typeof message === 'string' && (
                    message.includes('Extra attributes from the server') ||
                    message.includes('bis_skin_checked') ||
                    message.includes('__processed_')
                  )) {
                    return;
                  }
                  originalWarn.apply(console, args);
                };
              }
            `,
          }}
        />
        <div className="w-full">
          <LoadingWrapper>
            <MotionWrapper>
              <SiteHeader />
              <main className="flex-1 w-full">{children}</main>
              <SiteFooter />
            </MotionWrapper>
          </LoadingWrapper>
        </div>
      </body>
    </html>
  );
}
