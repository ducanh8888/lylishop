import type { MetadataRoute } from "next";

import { SITE } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";
import { BLOG_INDEX_STRATEGY, BLOG_POSTS } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const blogRoutes: MetadataRoute.Sitemap = BLOG_INDEX_STRATEGY.index
    ? [
        {
          url: `${SITE.url}/blog`,
          lastModified: now,
          changeFrequency: BLOG_INDEX_STRATEGY.changeFrequency,
          priority: BLOG_INDEX_STRATEGY.collectionPriority,
        },
        ...BLOG_POSTS.map((post) => ({
          url: `${SITE.url}/blog/${post.slug}`,
          lastModified: now,
          changeFrequency: BLOG_INDEX_STRATEGY.changeFrequency,
          priority: BLOG_INDEX_STRATEGY.postPriority,
        })),
      ]
    : [];

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${SITE.url}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE.url}/products`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/moc-khoa-len`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE.url}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE.url}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...PRODUCTS.map((p) => ({
      url: `${SITE.url}/products/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogRoutes,
  ];

  return routes;
}
