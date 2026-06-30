import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BLOG_INDEX_STRATEGY, BLOG_POSTS, getBlogCoverProduct } from "@/lib/blog";
import { SITE } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/schema";

const PAGE_PATH = "/blog";
const PAGE_URL = `${SITE.url}${PAGE_PATH}`;

export const metadata: Metadata = {
  title: "Cẩm nang móc khóa len handmade & quà tặng cute",
  description:
    "Đọc cẩm nang chọn móc khóa len handmade, quà handmade dễ thương, cách bảo quản phụ kiện len và gợi ý quà sinh nhật handmade từ LyliShop.",
  keywords: [
    "móc khóa len handmade",
    "móc khóa handmade",
    "quà handmade dễ thương",
    "quà tặng handmade",
    "phụ kiện len handmade",
    "móc khóa len làm quà sinh nhật",
  ],
  alternates: { canonical: PAGE_PATH },
  robots: {
    index: BLOG_INDEX_STRATEGY.index,
    follow: BLOG_INDEX_STRATEGY.follow,
  },
  openGraph: {
    url: PAGE_URL,
    title: "Cẩm nang móc khóa len handmade & quà tặng cute | LyliShop",
    description:
      "Bài viết hướng dẫn chọn móc khóa len handmade, quà handmade và cách bảo quản phụ kiện len.",
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: "Cẩm nang LyliShop" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cẩm nang móc khóa len handmade & quà tặng cute | LyliShop",
    description:
      "Gợi ý chọn quà handmade, móc khóa len mini và cách bảo quản phụ kiện len.",
    images: [SITE.twitterImage],
  },
};

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Trang chủ", url: SITE.url },
          { name: "Cẩm nang", url: PAGE_URL },
        ])}
      />

      <section className="bg-gradient-to-b from-white to-rose-50 py-10 sm:py-14">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Cẩm nang" },
            ]}
            className="mb-6"
          />

          <SectionHeading
            as="h1"
            eyebrow="Cẩm nang LyliShop"
            title="Bài viết về móc khóa len handmade và quà tặng nhỏ xinh"
            description="Tổng hợp kiến thức giúp bạn chọn móc khóa len, quà handmade dễ thương và cách bảo quản phụ kiện len để dùng lâu hơn."
          />
        </Container>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-border/70 bg-white/70 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative block aspect-[4/3] overflow-hidden bg-gradient-to-b from-white to-rose-50"
                  aria-label={`Đọc bài viết ${post.title}`}
                >
                  <Image
                    src={getBlogCoverProduct(post).image.src}
                    alt={getBlogCoverProduct(post).image.alt}
                    width={getBlogCoverProduct(post).image.width}
                    height={getBlogCoverProduct(post).image.height}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    quality={58}
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur">
                    {post.readingTime}
                  </div>
                </Link>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span>Cẩm nang handmade</span>
                  </div>
                  <h2 className="mt-3 font-display text-xl font-semibold leading-tight tracking-tight">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.keywords.slice(0, 3).map((keyword) => (
                      <Badge key={keyword} variant="secondary">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-auto pt-5">
                    <Button asChild variant="outline">
                      <Link href={`/blog/${post.slug}`}>
                        Đọc bài viết
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
