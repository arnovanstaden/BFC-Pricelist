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
  modularizeImports: {
    "@mui/material": {
      transform: "@mui/material/{{member}}"
    },
    "@mui/icons-material": {
      transform: "@mui/material/{{member}}"
    },
  }
}

module.exports = nextConfig
