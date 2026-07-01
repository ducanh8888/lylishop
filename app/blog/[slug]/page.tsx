import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Camera,
  Clock3,
  MessageCircle,
  Sparkles,
  ThumbsUp,
} from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { formatBlogDate } from "@/components/blog/BlogCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  BLOG_POSTS,
  getBlogPostBySlug,
} from "@/lib/blog";
import { SITE } from "@/lib/site";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/schema";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

function sectionId(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  const url = `${SITE.url}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "article",
      url,
      title: `${post.title} | LyliShop`,
      description: post.description,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | LyliShop`,
      description: post.description,
      images: [SITE.twitterImage],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const url = `${SITE.url}/blog/${post.slug}`;
  const relatedPosts = BLOG_POSTS.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.description,
          url,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
          keywords: post.keywords,
        })}
      />
      <JsonLd data={faqJsonLd(post.faqs.map((item, index) => ({ id: `${post.slug}-${index}`, ...item })))} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Trang chủ", url: SITE.url },
          { name: "Cẩm nang", url: `${SITE.url}/blog` },
          { name: post.title, url },
        ])}
      />

      <article className="bg-gradient-to-b from-white to-background py-10 sm:py-14 lg:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Tin tức", href: "/blog" },
              { label: post.title },
            ]}
            className="mb-6"
          />

          <Button asChild variant="ghost">
            <Link href="/blog" aria-label="Quay lại tin tức LyliShop">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Tin tức
            </Link>
          </Button>

          <div className="mt-6 grid gap-8 rounded-2xl border border-border/70 bg-white/70 p-5 shadow-sm backdrop-blur-md sm:p-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                {post.keywords.slice(0, 4).map((keyword) => (
                  <Badge key={keyword} variant="pink">
                    {keyword}
                  </Badge>
                ))}
              </div>
              <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                {post.excerpt}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" />
                  Cập nhật {formatBlogDate(post.dateModified)}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-primary" aria-hidden="true" />
                  {post.readingTime}
                </span>
              </div>
            </div>

            <Card className="overflow-hidden bg-background/70 p-4 shadow-md">
              <div
                role="img"
                aria-label={`Banner bài viết ${post.title}`}
                className="flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-primary/25 bg-gradient-to-b from-white to-rose-50"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-white/80 text-primary shadow-sm">
                  <Sparkles className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </article>

      <section className="bg-background py-14 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
            <div className="space-y-9">
              <nav
                aria-label="Mục lục bài viết"
                className="rounded-lg border border-border/70 bg-white/70 p-5 shadow-sm"
              >
                <p className="font-display text-sm font-semibold uppercase tracking-wider text-primary/90">
                  Mục lục bài viết
                </p>
                <div className="mt-4 grid gap-2">
                  {post.sections.map((section) => (
                    <Link
                      key={section.heading}
                      href={`#${sectionId(section.heading)}`}
                      className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-rose-50 hover:text-primary"
                    >
                      {section.heading}
                    </Link>
                  ))}
                </div>
              </nav>

              {post.sections.map((section) => (
                <section key={section.heading} id={sectionId(section.heading)} className="scroll-mt-24">
                  <h2 className="font-display text-2xl font-semibold tracking-tight">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-8 text-muted-foreground">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}

              <section className="rounded-lg border border-border/70 bg-rose-50/80 p-6 shadow-sm">
                <h2 className="font-display text-xl font-semibold">Câu hỏi thường gặp</h2>
                <div className="mt-4 divide-y divide-border/70">
                  {post.faqs.map((item) => (
                    <details key={item.question} className="group py-4 first:pt-0 last:pb-0">
                      <summary className="cursor-pointer list-none font-medium marker:hidden [&::-webkit-details-marker]:hidden">
                        {item.question}
                      </summary>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            </div>

            <BlogSidebar posts={BLOG_POSTS} currentSlug={post.slug} />
          </div>
        </Container>
      </section>

      <RelatedPosts posts={relatedPosts} />

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="rounded-2xl border border-border/70 bg-rose-50/80 p-6 text-center shadow-sm sm:p-8">
            <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
              Liên hệ LyliShop
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Muốn xem mẫu handmade phù hợp với bài viết này?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              Nhắn LyliShop qua kênh bạn tiện nhất để được gợi ý mẫu, màu và cách
              chọn quà handmade theo nhu cầu.
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
