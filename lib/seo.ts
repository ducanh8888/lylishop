import type { Metadata } from "next";

import { SITE } from "@/lib/site";

const googleSiteVerification = SITE.google.searchConsoleVerification;

export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: "%s | LyliShop",
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    locale: SITE.locale,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "LyliShop móc khóa len handmade và phụ kiện len",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [SITE.twitterImage],
  },
  icons: {
    icon: [
      {
        url: "/favicon-lyli-tab-dark-48.png",
        sizes: "48x48",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon-lyli-tab-light-48.png",
        sizes: "48x48",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      { url: "/favicon-lyli-tab-dark.ico", sizes: "any", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon-lyli-tab-light.ico", sizes: "any", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-lyli-tab-light-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-lyli-tab-light-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon-lyli-tab.png", sizes: "180x180", type: "image/png" }],
  },
  ...(googleSiteVerification
    ? {
        verification: {
          google: googleSiteVerification,
        },
      }
    : {}),
};
