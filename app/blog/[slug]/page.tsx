import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BLOG_INDEX_STRATEGY,
  BLOG_POSTS,
  getBlogPostBySlug,
  getRelatedProductsForPost,
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
      index: BLOG_INDEX_STRATEGY.index,
      follow: BLOG_INDEX_STRATEGY.follow,
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

  const relatedProducts = getRelatedProductsForPost(post);
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

      <article className="bg-gradient-to-b from-white to-rose-50 py-10 sm:py-14">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Cẩm nang", href: "/blog" },
              { label: post.title },
            ]}
            className="mb-6"
          />

          <Button asChild variant="ghost">
            <Link href="/blog" aria-label="Quay lại cẩm nang LyliShop">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Cẩm nang
            </Link>
          </Button>

          <div className="mx-auto mt-6 max-w-3xl text-center">
            <div className="flex flex-wrap justify-center gap-2">
              {post.keywords.slice(0, 4).map((keyword) => (
                <Badge key={keyword} variant="pink">
                  {keyword}
                </Badge>
              ))}
            </div>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              {post.excerpt}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Cập nhật {post.dateModified} · {post.readingTime}
            </p>
          </div>
        </Container>
      </article>

      <section className="bg-background py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl space-y-9">
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

            <section className="rounded-lg border border-border/70 bg-rose-50 p-6">
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

            <section className="rounded-lg border border-border/70 bg-white/70 p-6 shadow-sm">
              <h2 className="font-display text-xl font-semibold">Muốn chọn mẫu phù hợp?</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Bạn có thể xem bộ sưu tập móc khóa len hoặc nhắn LyliShop để được tư vấn màu,
                kích thước và mẫu hợp với người nhận.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <Link href="/moc-khoa-len">
                    Xem móc khóa len
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href={SITE.socials.zalo} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Nhắn Zalo
                  </a>
                </Button>
              </div>
            </section>
          </div>
        </Container>
      </section>

      <section className="bg-rose-50 py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
              Gợi ý liên quan
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Mẫu móc khóa len hợp với chủ đề này
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
              Đọc tiếp
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Bài viết liên quan
            </h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-3">
            {relatedPosts.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="rounded-lg border border-border/70 bg-white/70 p-4 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:text-primary hover:shadow-md"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
