/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nest.navaxcollege.com',
      },
    ],
  },
};

export default nextConfig;
