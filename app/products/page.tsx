import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sản phẩm",
  description:
    "Xem các mẫu móc khóa crochet handmade và phụ kiện len cute của LyliShop. Xem giá, chi tiết và đặt hàng qua Instagram, TikTok, Facebook hoặc Zalo.",
  alternates: { canonical: "/products" },
  openGraph: {
    url: `${SITE.url}/products`,
    title: "Sản phẩm | LyliShop",
    description:
      "Móc khóa crochet handmade và phụ kiện len cute. Đóng gói quà xinh và có thể tùy chỉnh màu sắc.",
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: "Sản phẩm LyliShop" }],
  },
};

export default function ProductsPage() {
  return (
    <section className="bg-background py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Sản phẩm"
          title="Móc khóa crochet & phụ kiện len"
          description="Xinh, dễ tặng, handmade tỉ mỉ. Bấm vào sản phẩm để xem chi tiết và cách đặt hàng."
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

