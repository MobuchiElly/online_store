/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudnary.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
