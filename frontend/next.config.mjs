/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    FLASK_API_URL: process.env.FLASK_API_URL || "http://localhost:10000",
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.FLASK_API_URL || "http://localhost:10000"}/:path*`,
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
