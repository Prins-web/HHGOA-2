/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ['sharp', 'heic-convert', '@resvg/resvg-js'],
    outputFileTracingIncludes: {
      '/api/generate': ['./fonts/**/*'],
    },
  },
};

module.exports = nextConfig;
