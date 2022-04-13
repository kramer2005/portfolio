/** @type {import('next').NextConfig} */
const path = require('path')
const withPWA = require('next-pwa')

const nextConfig = withPWA({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'pt-BR',
  },
  pwa: {
    dest: 'public',
  },
})

module.exports = nextConfig
