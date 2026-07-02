import type { Metadata } from "next";

import { SITE } from "@/lib/site";

const googleSiteVerification = SITE.google.searchConsoleVerification;

export type SeoImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

export const HOME_OG_IMAGE: SeoImage = {
  url: "/images/og/lylishop-homepage-og.webp",
  width: 1200,
  height: 630,
  alt: "LyliShop móc khóa len handmade và phụ kiện len",
};

export const BLOG_OG_IMAGE: SeoImage = {
  url: "/images/og/lylishop-blog-og.webp",
  width: 1200,
  height: 630,
  alt: "Cẩm nang quà handmade và phụ kiện len LyliShop",
};

type CreatePageMetadataOptions = {
  title: string;
  description: string;
  canonical: string;
  absoluteTitle?: boolean;
  keywords?: string[];
  image?: SeoImage;
  ogTitle?: string;
  ogDescription?: string;
  type?: "website" | "article";
  robots?: Metadata["robots"];
  publishedTime?: string;
  modifiedTime?: string;
};

function getAbsoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return path === "/" ? SITE.url : new URL(path, SITE.url).toString();
}

export function createPageMetadata({
  title,
  description,
  canonical,
  absoluteTitle = false,
  keywords,
  image = HOME_OG_IMAGE,
  ogTitle,
  ogDescription,
  type = "website",
  robots,
  publishedTime,
  modifiedTime,
}: CreatePageMetadataOptions): Metadata {
  const brandedTitle = ogTitle ?? (title.includes(SITE.name) ? title : `${title} | ${SITE.name}`);
  const socialDescription = ogDescription ?? description;
  const url = getAbsoluteUrl(canonical);
  const openGraphBase = {
    url,
    siteName: SITE.name,
    title: brandedTitle,
    description: socialDescription,
    locale: SITE.locale,
    images: [image],
  };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical },
    robots,
    openGraph:
      type === "article"
        ? {
            ...openGraphBase,
            type: "article",
            publishedTime,
            modifiedTime,
          }
        : {
            ...openGraphBase,
            type: "website",
          },
    twitter: {
      card: "summary_large_image",
      title: brandedTitle,
      description: socialDescription,
      images: [image.url],
    },
  };
}

export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  creator: SITE.name,
  publisher: SITE.name,
  category: "handmade crochet keychains",
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
    images: [HOME_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [HOME_OG_IMAGE.url],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-lylishop-v3-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-lylishop-v3-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-lylishop-v3.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon-lylishop-v3.png", sizes: "180x180", type: "image/png" }],
  },
  ...(googleSiteVerification
    ? {
        verification: {
          google: googleSiteVerification,
        },
      }
    : {}),
};
