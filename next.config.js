/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'images.microcms-assets.io'],
  },
  reactStrictMode: true,
  swcMinify: false,
}

module.exports = nextConfig
