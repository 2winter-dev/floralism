/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.floralismhk.com',
        pathname: '/**',
      },

    ],
  }
};

module.exports = nextConfig;
