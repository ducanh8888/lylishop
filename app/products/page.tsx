import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Móc khóa crochet handmade",
  description:
    "Khám phá các mẫu móc khóa crochet handmade và phụ kiện len của LyliShop. Xem giá, chi tiết sản phẩm và liên hệ đặt hàng qua Instagram, TikTok, Facebook hoặc Zalo.",
  alternates: { canonical: "/products" },
  openGraph: {
    url: `${SITE.url}/products`,
    title: "Móc khóa crochet handmade | LyliShop",
    description:
      "Móc khóa crochet handmade và phụ kiện len với đóng gói quà chỉn chu, có thể tùy chỉnh màu theo yêu cầu.",
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: "LyliShop products" }],
  },
};

export default function ProductsPage() {
  return (
    <section className="bg-background py-14 sm:py-20">
      <Container>
        <SectionHeading
          as="h1"
          eyebrow="Products"
          title="Móc khóa crochet & phụ kiện len"
          description="Nhỏ xinh, dễ tặng và được làm thủ công tỉ mỉ. Chọn sản phẩm để xem chi tiết và cách liên hệ đặt hàng."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
