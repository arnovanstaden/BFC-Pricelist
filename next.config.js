/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    prependData: '@import "@styles/_variables.scss";',
  },
  modularizeImports: {
    "@mui/material": {
      transform: "@mui/material/{{member}}"
    },
    "@mui/icons-material": {
      transform: "@mui/material/{{member}}"
    }
  }
}

module.exports = nextConfig
