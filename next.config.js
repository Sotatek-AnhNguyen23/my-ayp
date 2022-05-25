/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.ts', 'page.tsx'],
  future: {
    strictPostcssConfiguration: true
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home'
      }
    ];
  },
  experimental: {
    esmExternals: false
  },
}

module.exports = nextConfig
