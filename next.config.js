/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/treatments',
        permanent: true,
      },
    ]
  },
  sassOptions: {
    prependData: '@import "@styles/_variables.scss";',
  },
}

module.exports = nextConfig
