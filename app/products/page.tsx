import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PRODUCTS } from "@/lib/products";
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

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
