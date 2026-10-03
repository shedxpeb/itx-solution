/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@itx/ui', '@itx/config', '@itx/contracts', '@itx/validation', '@itx/types'],
};

module.exports = nextConfig;
