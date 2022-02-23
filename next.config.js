/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/buying-spaces/channels',
        permanent: true
      },
      {
        source: '/buying-spaces',
        destination: '/buying-spaces/channels',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
