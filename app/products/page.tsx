import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";
import { breadcrumbJsonLd, collectionPageJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Móc khóa len handmade giá tốt, đặt số lượng",
  description:
    "Xem móc khóa len handmade giá tốt tại LyliShop. Có mẫu đồng giá từ 45k, nhận chọn màu, đặt số lượng và tư vấn qua Zalo/Facebook trên toàn Việt Nam.",
  alternates: { canonical: "/products" },
  openGraph: {
    url: `${SITE.url}/products`,
    title: "Móc khóa len handmade giá tốt, đặt số lượng | LyliShop",
    description:
      "Móc khóa len handmade cute, giá từ 45k, có thể chọn màu, đặt theo nhóm và đặt số lượng qua Zalo/Facebook.",
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: "LyliShop products" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Móc khóa len handmade giá tốt | LyliShop",
    description:
      "Xem các mẫu móc khóa len handmade cute, đồng giá từ 45k và cách đặt hàng qua Zalo/Facebook tại LyliShop.",
    images: [SITE.twitterImage],
  },
};

const PRODUCT_CATEGORIES = [
  {
    title: "Móc khóa Mini",
    label: "Mini",
    description: "Nhỏ gọn, nhẹ tay, hợp treo chìa khóa hoặc túi mini.",
  },
  {
    title: "Móc khóa Size S",
    label: "S",
    description: "Dễ chọn làm quà nhỏ, phù hợp dùng hằng ngày.",
  },
  {
    title: "Móc khóa Size M",
    label: "M",
    description: "Kích thước vừa đủ nổi bật trên balo hoặc túi tote.",
  },
  {
    title: "Móc khóa Size L",
    label: "L",
    description: "Phù hợp mẫu nhiều chi tiết hoặc muốn tạo điểm nhấn.",
  },
  {
    title: "Hoa len",
    label: "Hoa",
    description: "Nhẹ nhàng, tinh tế, hợp tặng bạn bè hoặc tự thưởng.",
  },
  {
    title: "Thú bông len",
    label: "Thú",
    description: "Dáng mềm, dễ thương, hợp người thích phụ kiện handmade.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={collectionPageJsonLd({
          name: "Móc khóa len handmade giá tốt",
          description:
            "Danh sách sản phẩm móc khóa len handmade, mẫu đồng giá từ 45k, móc khóa thú mini và phụ kiện len cute tại LyliShop.",
          url: `${SITE.url}/products`,
          products: PRODUCTS,
        })}
      />
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
            eyebrow="Móc khóa len"
            title="Móc khóa len handmade giá tốt, đặt số lượng"
            description="Nhỏ xinh, dễ tặng và được làm thủ công tỉ mỉ. Chọn mẫu móc khóa len để xem giá, mô tả và cách liên hệ đặt hàng."
          />

          <div className="mx-auto mt-6 max-w-2xl text-center text-sm leading-6 text-muted-foreground">
            <p>
              Nếu bạn đang tìm móc khóa len giá tốt, móc khóa len đồng giá từ 45k,
              móc khóa thú len hoặc mẫu đặt số lượng, hãy xem từng sản phẩm bên dưới.
              Bạn cũng có thể mở trang tổng hợp móc khóa len để so sánh chất liệu,
              mục đích dùng và cách chọn quà handmade phù hợp.
            </p>
            <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild variant="outline">
                <Link href="/moc-khoa-len">Xem hướng dẫn chọn móc khóa len</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/">Về LyliShop</Link>
              </Button>
            </div>
          </div>

          <section className="mt-12" aria-labelledby="product-categories-title">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
                Danh mục sản phẩm
              </p>
              <h2
                id="product-categories-title"
                className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                Chọn nhanh theo size và kiểu quà tặng
              </h2>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {PRODUCT_CATEGORIES.map((category) => (
                <Card
                  key={category.title}
                  className="group flex h-full flex-col overflow-hidden bg-white/75 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <Link href="#product-grid" className="flex h-full flex-col focus-visible:outline-none">
                    <div className="flex aspect-[4/3] items-center justify-center border-b border-border/70 bg-gradient-to-b from-white to-rose-50 xl:aspect-square">
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-background/80 font-display text-lg font-semibold text-primary shadow-sm">
                        {category.label}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <h3 className="font-display text-base font-semibold leading-snug tracking-tight">
                        {category.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
                        {category.description}
                      </p>
                      <span className="mt-4 inline-flex items-center justify-center gap-2 rounded-md border border-border/70 bg-background/80 px-3 py-2 text-sm font-medium transition group-hover:border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground">
                        Xem sản phẩm
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          </section>

          <div
            id="product-grid"
            className="mt-12 grid scroll-mt-24 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {PRODUCTS.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>

          <div className="mt-14 rounded-lg border border-border/70 bg-rose-50 p-6">
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <h2 className="font-display text-xl font-semibold tracking-tight">
                  Cần chọn móc khóa len đồng giá hoặc đặt số lượng?
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Nếu bạn chưa chắc nên chọn mẫu móc khóa len nào, hãy xem trang hướng dẫn
                  để so sánh chất liệu, mục đích dùng, mức giá và kiểu quà tặng phù hợp.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Button asChild>
                  <Link href="/moc-khoa-len">Xem hướng dẫn chọn mẫu</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/#order">Liên hệ đặt hàng</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
