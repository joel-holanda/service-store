/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sgnh.com.br',
      },
      {
        protocol: 'https',
        hostname: 'media-cdn.tripadvisor.com',
      },
    ],
  },
}

export default nextConfig
