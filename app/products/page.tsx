import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PRODUCTS } from "@/lib/products";
import { FEATURED_BLOG_POSTS } from "@/lib/blog";
import { SITE } from "@/lib/site";
import { breadcrumbJsonLd, productItemListJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Móc khóa len handmade",
  description:
    "Khám phá các mẫu móc khóa len handmade và phụ kiện len của LyliShop. Xem giá, chi tiết sản phẩm và liên hệ đặt hàng qua Instagram, TikTok, Facebook hoặc Zalo.",
  alternates: { canonical: "/products" },
  openGraph: {
    url: `${SITE.url}/products`,
    title: "Móc khóa len handmade | LyliShop",
    description:
      "Móc khóa len handmade và phụ kiện len với đóng gói quà chỉn chu, có thể tùy chỉnh màu theo yêu cầu.",
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: "LyliShop products" }],
  },
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={productItemListJsonLd(PRODUCTS)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Trang chủ", url: SITE.url },
          { name: "Sản phẩm", url: `${SITE.url}/products` },
        ])}
      />
      <section className="bg-background py-14 sm:py-20">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Sản phẩm" },
            ]}
            className="mb-6"
          />
          <SectionHeading
            as="h1"
            eyebrow="Sản phẩm"
            title="Móc khóa len & phụ kiện handmade"
            description="Nhỏ xinh, dễ tặng và được làm thủ công tỉ mỉ. Chọn sản phẩm để xem chi tiết và cách liên hệ đặt hàng."
          />

          <div className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-muted-foreground">
            <p>
              Nếu bạn đang tìm thông tin đầy đủ về móc khóa len, móc khóa crochet,
              móc khóa thú len và cách chọn quà tặng handmade, xem trang tổng hợp
              móc khóa len của LyliShop.
            </p>
            <div className="mt-4">
              <Button asChild variant="outline">
                <Link href="/moc-khoa-len">Xem hướng dẫn chọn móc khóa len</Link>
              </Button>
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>

          <div className="mt-14 rounded-lg border border-border/70 bg-rose-50 p-6">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <h2 className="font-display text-xl font-semibold tracking-tight">
                  Cẩm nang chọn móc khóa len handmade
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Tìm hiểu cách chọn quà handmade, cách bảo quản móc khóa len và gợi ý mẫu
                  phù hợp trước khi nhắn shop đặt hàng.
                </p>
                <Button asChild variant="outline" className="mt-5">
                  <Link href="/blog">Xem cẩm nang</Link>
                </Button>
              </div>
              <div className="grid gap-3">
                {FEATURED_BLOG_POSTS.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="rounded-md border border-border/70 bg-white/70 p-4 text-sm font-medium transition hover:text-primary hover:shadow-sm"
                  >
                    {post.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
