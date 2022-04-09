/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/sell/:organ',
        destination: '/sell/:organ/6',
        permanent: true,
      },
      {
        source: '/sell',
        destination: '/sell-now',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
