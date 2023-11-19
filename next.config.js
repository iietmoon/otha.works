/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // React Strict Mode is off
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['src'],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [];
  },
  env: {
    base_url: process.env.BASE_URL,
    api_url: process.env.API_URL,
    graphql_url: process.env.GRAPHQL_API_URL,
  },
};

module.exports = nextConfig;