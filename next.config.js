/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: '@import "@styles/_variables.scss";',
  },
}

module.exports = nextConfig
