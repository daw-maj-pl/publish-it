/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        hostname: '**',
        protocol: 'https',
        port: ''
      }
    ]
  }
};

module.exports = nextConfig;
