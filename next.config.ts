import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false, // "X-Powered-By" header'ını kaldırır
  swcMinify: true,
  compress: true,
  reactStrictMode: true,
  images: {
    domains: ['busrakocarslan.com'], // Eğer resimler için harici bir domain kullanırsanız buraya ekleyin
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;