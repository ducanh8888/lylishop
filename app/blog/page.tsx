import type { Metadata } from "next";
import Link from "next/link";
import { Camera, MessageCircle, ThumbsUp } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BLOG_POSTS } from "@/lib/blog";
import { SITE } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/schema";

const PAGE_PATH = "/blog";
const PAGE_URL = `${SITE.url}${PAGE_PATH}`;

const BLOG_TOPICS = [
  {
    title: "Quà tặng handmade",
    description: "Gợi ý chọn món quà nhỏ, dễ thương và có cảm xúc riêng.",
  },
  {
    title: "Phụ kiện len",
    description: "Cách hiểu và chọn phụ kiện len phù hợp với người dùng hằng ngày.",
  },
  {
    title: "Chăm sóc đồ len",
    description: "Mẹo giữ phụ kiện handmade sạch, bền form và dùng lâu hơn.",
  },
  {
    title: "Câu chuyện sản phẩm",
    description: "Những góc nhìn nhẹ nhàng về ý nghĩa món quà thủ công.",
  },
];

export const metadata: Metadata = {
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
  alternates: { canonical: PAGE_PATH },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    url: PAGE_URL,
    title: "Cảm hứng quà handmade nhỏ xinh | LyliShop",
    description:
      "Các bài viết cảm hứng về quà handmade, phụ kiện len và cách giữ món quà nhỏ luôn xinh.",
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: "Cẩm nang LyliShop" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cảm hứng quà handmade nhỏ xinh | LyliShop",
    description:
      "Gợi ý chọn quà handmade, phụ kiện len nhỏ xinh và cách giữ món quà bền đẹp.",
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
            primaryHref="#blog-posts"
            primaryLabel="Đọc bài mới"
            secondaryHref="#blog-topics"
            secondaryLabel="Xem chủ đề"
          />
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
              Blog tập trung vào cách chọn móc khóa len, quà handmade, phụ kiện len
              và những mẹo giữ món quà nhỏ luôn xinh. Nội dung được viết ngắn, dễ đọc
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
                  href="#blog-posts"
                  className="mt-4 inline-flex text-sm font-medium text-primary hover:underline"
                >
                  Xem bài viết
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
                  Bài viết mới từ LyliShop
                </h2>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {BLOG_POSTS.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </div>

            <BlogSidebar posts={BLOG_POSTS} />
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
              Nhắn LyliShop qua kênh bạn tiện nhất.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              Gửi shop dịp tặng, người nhận và màu bạn thích. LyliShop sẽ gợi ý mẫu
              handmade phù hợp qua Facebook, Instagram hoặc Zalo.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild>
                <a href={SITE.socials.zalo} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Zalo
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={SITE.socials.facebook} target="_blank" rel="noreferrer">
                  <ThumbsUp className="h-4 w-4" aria-hidden="true" />
                  Facebook
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={SITE.socials.instagram} target="_blank" rel="noreferrer">
                  <Camera className="h-4 w-4" aria-hidden="true" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
