import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BLOG_POSTS } from "@/lib/blog";
import { BLOG_OG_IMAGE, createPageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { blogJsonLd, breadcrumbJsonLd } from "@/lib/schema";

const PAGE_PATH = "/blog";
const PAGE_URL = `${SITE.url}${PAGE_PATH}`;
const FEATURED_BLOG_SLUG = "qua-handmade-tang-ban-gai";

const BLOG_TOPICS = [
  {
    id: "qua-handmade",
    title: "Quà tặng handmade",
    description: "Gợi ý chọn món quà handmade có cảm xúc riêng.",
    postSlugs: ["qua-handmade-tang-ban-gai", "qua-sinh-nhat-handmade", "y-nghia-qua-handmade"],
  },
  {
    id: "moc-khoa-len",
    title: "Móc khóa len",
    description: "Cách hiểu và chọn phụ kiện len dùng hằng ngày.",
    postSlugs: ["phu-kien-len-handmade-la-gi", "y-nghia-qua-handmade"],
  },
  {
    id: "hoa-len",
    title: "Hoa len",
    description: "Gợi ý chọn hoa len và quà handmade nhẹ nhàng.",
    postSlugs: ["qua-handmade-tang-ban-gai"],
  },
  {
    id: "bao-quan",
    title: "Bảo quản",
    description: "Mẹo giữ phụ kiện len sạch, bền form và dùng lâu hơn.",
    postSlugs: ["cach-bao-quan-phu-kien-len"],
  },
];

const BLOG_HERO_IMAGE = {
  src: "/images/og/lylishop-blog-og.webp",
  alt: "Cẩm nang quà handmade và phụ kiện len của LyliShop",
  width: 1200,
  height: 630,
} as const;

function getBlogPost(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

function getTopicPosts(postSlugs: string[]) {
  return postSlugs.map(getBlogPost).filter((post): post is NonNullable<typeof post> => Boolean(post));
}

function getBlogImageAlt(title: string) {
  return `Ảnh minh họa cho bài viết ${title} của LyliShop`;
}

export const metadata: Metadata = createPageMetadata({
  title: "Cảm hứng quà handmade nhỏ xinh",
  description:
    "Cảm hứng chọn quà handmade nhỏ xinh, cách giữ phụ kiện len bền đẹp và những gợi ý tặng quà dễ thương từ LyliShop.",
  keywords: [
    "cảm hứng quà handmade",
    "quà handmade dễ thương",
    "quà tặng handmade",
    "phụ kiện len handmade",
    "quà sinh nhật handmade",
  ],
  canonical: PAGE_PATH,
  robots: {
    index: true,
    follow: true,
  },
  image: BLOG_OG_IMAGE,
  ogDescription:
    "Các bài viết cảm hứng về quà handmade, phụ kiện len và cách giữ món quà nhỏ luôn xinh.",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={blogJsonLd({
          name: "Cảm hứng quà handmade nhỏ xinh",
          description:
            "Các bài viết cảm hứng về quà handmade, phụ kiện len và cách giữ món quà nhỏ luôn xinh.",
          url: PAGE_URL,
          posts: BLOG_POSTS,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Trang chủ", url: SITE.url },
          { name: "Tin tức", url: PAGE_URL },
        ])}
      />

      <section className="bg-gradient-to-b from-white to-background py-10 sm:py-14 lg:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Tin tức" },
            ]}
            className="mb-6"
          />

          <BlogHero
            eyebrow="Cẩm nang LyliShop"
            title="Cảm hứng quà handmade nhỏ xinh"
            description="Những gợi ý nhẹ nhàng về quà handmade, phụ kiện len và cách chọn món quà có cảm xúc riêng."
            primaryHref="#featured-article"
            primaryLabel="Đọc bài nổi bật"
            secondaryHref="#blog-topics"
            secondaryLabel="Xem chủ đề"
            image={BLOG_HERO_IMAGE}
            priority
          />
        </Container>
      </section>

      <section id="featured-article" className="bg-background py-14 sm:py-20">
        <Container>
          {(() => {
            const featuredPost = getBlogPost(FEATURED_BLOG_SLUG) ?? BLOG_POSTS[0];

            return (
              <div className="grid gap-8 rounded-2xl border border-border/70 bg-white/75 p-5 shadow-sm sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-primary/10 bg-gradient-to-b from-white to-rose-50">
                  <Image
                    src={featuredPost.image.src}
                    alt={getBlogImageAlt(featuredPost.title)}
                    width={featuredPost.image.width}
                    height={featuredPost.image.height}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 520px"
                    loading="lazy"
                    quality={70}
                  />
                </div>

                <div>
                  <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
                    Bài viết nổi bật
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                    {featuredPost.excerpt}
                  </p>
                  <Button asChild className="mt-6">
                    <Link href={`/blog/${featuredPost.slug}`} aria-label={`Đọc bài viết ${featuredPost.title}`}>
                      Đọc bài viết
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })()}
        </Container>
      </section>

      <section className="bg-background py-14 sm:py-20" aria-labelledby="blog-intro-title">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
                Blog LyliShop
              </p>
              <h2
                id="blog-intro-title"
                className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                Một góc nhỏ để chọn quà handmade dễ hơn.
              </h2>
            </div>
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              Blog tập trung vào{" "}
              <Link href="/moc-khoa-len" className="font-medium text-primary hover:underline">
                cách chọn móc khóa len
              </Link>
              , quà handmade, phụ kiện len và những mẹo giữ món quà nhỏ luôn xinh. Nội dung được viết ngắn, dễ đọc
              và dẫn người mua về kênh liên hệ phù hợp khi cần tư vấn mẫu.
            </p>
          </div>
        </Container>
      </section>

      <section id="blog-topics" className="bg-white py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
              Danh mục bài viết
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Chọn chủ đề bạn đang quan tâm
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {BLOG_TOPICS.map((topic) => (
              <Card key={topic.title} className="h-full bg-background/70 p-5 shadow-sm">
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {topic.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {topic.description}
                </p>
                <Link
                  href={`#${topic.id}`}
                  className="mt-4 inline-flex text-sm font-medium text-primary hover:underline"
                >
                  Xem chủ đề
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section id="blog-posts" className="bg-background py-14 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
            <div>
              <div className="mb-8">
                <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
                  Danh sách bài viết
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  Bài viết theo chủ đề
                </h2>
              </div>

              <div className="space-y-12">
                {BLOG_TOPICS.map((topic) => {
                  const posts = getTopicPosts(topic.postSlugs);

                  return (
                    <section
                      key={topic.id}
                      id={topic.id}
                      className="scroll-mt-24"
                      aria-labelledby={`${topic.id}-title`}
                    >
                      <div className="mb-6 border-b border-border/70 pb-5">
                        <h2
                          id={`${topic.id}-title`}
                          className="font-display text-2xl font-semibold tracking-tight sm:text-3xl"
                        >
                          {topic.title}
                        </h2>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                          {topic.description}
                        </p>
                      </div>

                      <div className="grid gap-5 md:grid-cols-2">
                        {posts.map((post) => (
                          <BlogCard key={post.slug} post={post} headingLevel="h3" reduceDuplicateLinks />
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            </div>

            <BlogSidebar
              posts={BLOG_POSTS}
              topics={BLOG_TOPICS.map((topic) => ({
                title: topic.title,
                href: `#${topic.id}`,
                description: topic.description,
              }))}
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="rounded-2xl border border-border/70 bg-rose-50/80 p-6 text-center shadow-sm sm:p-8">
            <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
              Cần gợi ý quà?
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Xem sản phẩm rồi nhắn LyliShop tư vấn mẫu phù hợp.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              Nếu một bài viết giúp bạn chọn được hướng quà tặng, hãy xem các mẫu đang có
              rồi nhắn Zalo để LyliShop tư vấn màu, size và thời gian hoàn thiện.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/products">Xem sản phẩm</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={SITE.socials.zalo} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Nhắn Zalo tư vấn
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
