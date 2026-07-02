import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Camera,
  Clock3,
  MessageCircle,
  ThumbsUp,
} from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { BlogAuthorBox } from "@/components/blog/BlogAuthorBox";
import { BlogContent, getBlogSectionId } from "@/components/blog/BlogContent";
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
import { PRODUCTS } from "@/lib/products";
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

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
    .toLowerCase();
}

function getPillarAnchor(post: { title: string; keywords: string[] }) {
  const text = normalizeText(`${post.title} ${post.keywords.join(" ")}`);

  if (text.includes("bao quan") || text.includes("ben")) {
    return "xem thêm cách chọn móc khóa len dùng lâu hơn";
  }

  if (text.includes("sinh nhat") || text.includes("tang") || text.includes("qua")) {
    return "tham khảo thêm các gợi ý móc khóa len làm quà";
  }

  if (text.includes("handmade")) {
    return "tìm hiểu thêm về móc khóa len handmade";
  }

  return "xem thêm cẩm nang móc khóa len";
}

function getRelevantProduct(post: { title: string; excerpt: string; keywords: string[] }) {
  const text = normalizeText(`${post.title} ${post.excerpt} ${post.keywords.join(" ")}`);

  const scoredProducts = PRODUCTS.map((product, index) => {
    const productText = normalizeText(
      [product.name, product.category, product.shortDescription, ...product.tags].join(" ")
    );
    let score = 0;

    if (text.includes("qua") && productText.includes("qua")) score += 5;
    if (text.includes("sinh nhat") && productText.includes("qua")) score += 4;
    if (text.includes("ban gai") && productText.includes("cute")) score += 3;
    if (text.includes("hoa") && productText.includes("hoa")) score += 4;
    if (text.includes("dau") && productText.includes("dau")) score += 4;
    if (text.includes("tho") && productText.includes("tho")) score += 4;
    if (text.includes("phu kien") && productText.includes("phu kien")) score += 3;
    if (text.includes("bao quan") || text.includes("ben")) score += product.benefits.length;

    return { product, score, index };
  })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.index - b.index);

  return scoredProducts[0]?.product;
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
  const relevantProduct = getRelevantProduct(post);
  const pillarAnchor = getPillarAnchor(post);

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
          { name: "Tin tức", url: `${SITE.url}/blog` },
          { name: post.title, url },
        ])}
      />

      <section
        aria-labelledby="blog-post-title"
        className="bg-gradient-to-b from-white to-background py-10 sm:py-14 lg:py-16"
      >
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
              <h1
                id="blog-post-title"
                className="mt-5 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
              >
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
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-primary/10 bg-gradient-to-b from-white to-rose-50">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  width={post.image.width}
                  height={post.image.height}
                  className="h-full w-full object-cover"
                  priority
                  fetchPriority="high"
                  quality={75}
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
            <div className="space-y-10">
              <BlogAuthorBox dateModified={post.dateModified} readingTime={post.readingTime} />

              <Card className="bg-white/75 p-5 shadow-sm">
                <p className="font-display text-sm font-semibold uppercase tracking-wider text-primary/90">
                  Kinh nghiệm từ LyliShop
                </p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Các gợi ý trong bài được đặt trong bối cảnh tư vấn sản phẩm handmade: chọn màu theo người nhận,
                  kiểm tra độ chắc của khoen, giữ form len khi sử dụng và chuẩn bị quà gọn gàng trước khi gửi.
                  Với trường hợp cần mẫu riêng, LyliShop luôn khuyên khách trao đổi trước qua tin nhắn để xác nhận
                  chi tiết thay vì đặt hàng vội.
                </p>
              </Card>

              <nav
                aria-label="Mục lục bài viết"
                className="rounded-xl border border-border/70 bg-white/75 p-5 shadow-sm"
              >
                <p className="font-display text-sm font-semibold uppercase tracking-wider text-primary/90">
                  Mục lục bài viết
                </p>
                <div className="mt-4 grid gap-2">
                  {post.sections.map((section) => (
                    <Link
                      key={section.heading}
                      href={`#${getBlogSectionId(section.heading)}`}
                      className="rounded-md px-3 py-2 text-sm font-medium leading-6 text-muted-foreground transition hover:bg-rose-50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {section.heading}
                    </Link>
                  ))}
                </div>
              </nav>

              <BlogContent sections={post.sections} />

              <section
                aria-labelledby="blog-context-links-title"
                className="rounded-xl border border-border/70 bg-white/75 p-5 shadow-sm"
              >
                <h2
                  id="blog-context-links-title"
                  className="font-display text-sm font-semibold uppercase tracking-wider text-primary/90"
                >
                  Gợi ý đọc tiếp
                </h2>
                <div className="mt-3 grid gap-3 text-sm leading-7 text-muted-foreground">
                  <p>
                    Nếu bạn muốn đối chiếu bài viết với sản phẩm thực tế, hãy{" "}
                    <Link href="/moc-khoa-len" className="font-medium text-primary hover:underline">
                      {pillarAnchor}
                    </Link>
                    {" "}trước khi chọn mẫu.
                  </p>
                  {relevantProduct ? (
                    <p>
                      Với nhu cầu gần với nội dung này, bạn cũng có thể xem mẫu{" "}
                      <Link
                        href={`/products/${relevantProduct.slug}`}
                        className="font-medium text-primary hover:underline"
                      >
                        {relevantProduct.name}
                      </Link>
                      {" "}để hình dung kiểu dáng, chất liệu và cách liên hệ đặt hàng.
                    </p>
                  ) : null}
                </div>
              </section>

              <section className="rounded-xl border border-border/70 bg-rose-50/80 p-6 shadow-sm sm:p-7">
                <h2 className="font-display text-xl font-semibold">Câu hỏi thường gặp</h2>
                <div className="mt-5 divide-y divide-border/70">
                  {post.faqs.map((item) => (
                    <details key={item.question} className="group py-5 first:pt-0 last:pb-0">
                      <summary className="cursor-pointer list-none rounded-md font-display text-base font-semibold leading-7 marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&::-webkit-details-marker]:hidden">
                        {item.question}
                      </summary>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.answer}</p>
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
          <div className="rounded-2xl border border-border/70 bg-rose-50/80 p-6 shadow-sm sm:p-8">
            <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
              Liên hệ LyliShop
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Muốn xem mẫu handmade phù hợp với bài viết này?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              Nhắn LyliShop qua kênh bạn tiện nhất để được gợi ý mẫu, màu và cách
              chọn quà handmade theo nhu cầu.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild variant="outline">
                <Link href="/products">Xem móc khóa len handmade</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/moc-khoa-len">Cẩm nang móc khóa len</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/#contact">Liên hệ tư vấn</Link>
              </Button>
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
