/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@itx/ui', '@itx/config', '@itx/contracts', '@itx/validation', '@itx/types'],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config) => {
    // Suppress React hydration warnings from browser extensions
    config.stats = 'errors-only';
    return config;
  },
};

module.exports = nextConfig;
