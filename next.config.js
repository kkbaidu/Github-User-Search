require('dotenv').config();

console.log(process.env.GITHUB_TOKEN)

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  env: {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
  },
}

module.exports = nextConfig
