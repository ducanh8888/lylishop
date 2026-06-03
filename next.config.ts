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
    const revalidateIconCache = [
      {
        key: "Cache-Control",
        value: "public, max-age=0, must-revalidate",
      },
    ];

    return [
      {
        source: "/_next/image",
        headers: longTermImageCache,
      },
      {
        source: "/product-assets/:path*",
        headers: longTermImageCache,
      },
      {
        source: "/gallery/:path*",
        headers: longTermImageCache,
      },
      {
        source: "/logo-lylishop-v3.svg",
        headers: longTermImageCache,
      },
      {
        source: "/logo-lylishop-v2.svg",
        headers: longTermImageCache,
      },
      {
        source: "/logo-lylishop.svg",
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
        source: "/favicon-lylishop-v3.svg",
        headers: longTermImageCache,
      },
      {
        source: "/favicon-lylishop-v3-48.png",
        headers: longTermImageCache,
      },
      {
        source: "/favicon-lylishop-v3-32.png",
        headers: longTermImageCache,
      },
      {
        source: "/favicon-lylishop-v3.ico",
        headers: longTermImageCache,
      },
      {
        source: "/apple-touch-icon-lylishop-v3.png",
        headers: longTermImageCache,
      },
      {
        source: "/favicon.svg",
        headers: longTermImageCache,
      },
      {
        source: "/favicon-48x48.png",
        headers: longTermImageCache,
      },
      {
        source: "/favicon-32x32.png",
        headers: longTermImageCache,
      },
      {
        source: "/apple-touch-icon.png",
        headers: longTermImageCache,
      },
      {
        source: "/favicon.ico",
        headers: revalidateIconCache,
      },
    ];
  },
};

export default nextConfig;

