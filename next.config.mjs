/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['api.timbu.cloud'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.timbu.cloud',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
