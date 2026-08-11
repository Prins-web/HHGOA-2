/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ['sharp', 'heic-convert'],
    outputFileTracingIncludes: {
      '/api/generate': ['./fonts/**/*'],
    },
  },
};

module.exports = nextConfig;
