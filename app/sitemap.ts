import type { MetadataRoute } from "next";

import { SITE } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";
import { BLOG_INDEX_STRATEGY, BLOG_POSTS } from "@/lib/blog";

const SITE_LAST_MODIFIED = new Date("2026-06-30T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const blogRoutes: MetadataRoute.Sitemap = BLOG_INDEX_STRATEGY.index
    ? [
        {
          url: `${SITE.url}/blog`,
          lastModified: SITE_LAST_MODIFIED,
          changeFrequency: BLOG_INDEX_STRATEGY.changeFrequency,
          priority: BLOG_INDEX_STRATEGY.collectionPriority,
        },
        ...BLOG_POSTS.map((post) => ({
          url: `${SITE.url}/blog/${post.slug}`,
          lastModified: new Date(`${post.dateModified}T00:00:00.000Z`),
          changeFrequency: BLOG_INDEX_STRATEGY.changeFrequency,
          priority: BLOG_INDEX_STRATEGY.postPriority,
        })),
      ]
    : [];

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${SITE.url}/`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE.url}/products`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/moc-khoa-len`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/privacy`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE.url}/terms`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...PRODUCTS.map((p) => ({
      url: `${SITE.url}/products/${p.slug}`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.72,
    })),
    ...blogRoutes,
  ];

  return routes;
}
