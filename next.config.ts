import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    const longTermImageCache = [
      {
        key: "Cache-Control",
        value: "public, max-age=31536000, immutable",
      },
    ];

    return [
      {
        source: "/_next/image",
        headers: longTermImageCache,
      },
      {
        source: "/products/:path*",
        headers: longTermImageCache,
      },
      {
        source: "/gallery/:path*",
        headers: longTermImageCache,
      },
      {
        source: "/logo.svg",
        headers: longTermImageCache,
      },
      {
        source: "/icon.svg",
        headers: longTermImageCache,
      },
      {
        source: "/og.png",
        headers: longTermImageCache,
      },
      {
        source: "/twitter-card.png",
        headers: longTermImageCache,
      },
      {
        source: "/apple-touch-icon.png",
        headers: longTermImageCache,
      },
      {
        source: "/favicon.ico",
        headers: longTermImageCache,
      },
    ];
  },
};

export default nextConfig;

