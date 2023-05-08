/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/how-to-videos",
        destination: "/how-to-videos/account",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
