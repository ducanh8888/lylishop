import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, MessageCircle, ThumbsUp } from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PRODUCTS } from "@/lib/products";
import { createPageMetadata, HOME_OG_IMAGE } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { breadcrumbJsonLd, collectionPageJsonLd } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Móc khóa len handmade giá tốt, đặt số lượng",
  description:
    "Xem móc khóa len handmade giá tốt tại LyliShop. Có mẫu đồng giá từ 45k, nhận chọn màu, đặt số lượng và tư vấn qua Zalo/Facebook trên toàn Việt Nam.",
  canonical: "/products",
  image: HOME_OG_IMAGE,
  ogDescription:
    "Móc khóa len handmade cute, giá từ 45k, có thể chọn màu, đặt theo nhóm và đặt số lượng qua Zalo/Facebook.",
});

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

const SHOP_HERO_IMAGE = {
  src: "/images/homepage/lylishop-hero-handmade-keychains.webp",
  alt: "Nhieu mau moc khoa len handmade cua LyliShop",
  width: 1200,
  height: 960,
} as const;

const PRODUCT_CATEGORY_IMAGES = [
  {
    src: "/images/categories/moc-khoa-mini.webp",
    alt: "Bo moc khoa len mini nhieu mau cua LyliShop",
    width: 900,
    height: 900,
  },
  {
    src: "/images/categories/moc-khoa-size-s.webp",
    alt: "Moc khoa len size S nhieu mau de thuong",
    width: 900,
    height: 900,
  },
  {
    src: "/images/categories/moc-khoa-size-m.webp",
    alt: "Moc khoa len size M handmade tren khay tre",
    width: 900,
    height: 900,
  },
  null,
  {
    src: "/images/categories/hoa-len.webp",
    alt: "Bo hoa len handmade nhieu mau",
    width: 900,
    height: 900,
  },
  {
    src: "/images/categories/thu-bong-len.webp",
    alt: "Thu bong len handmade mau hong",
    width: 900,
    height: 900,
  },
] as const;

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
          { name: "Cửa hàng", url: `${SITE.url}/products` },
        ])}
      />

      <section className="bg-gradient-to-b from-white to-background py-10 sm:py-14 lg:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Cửa hàng" },
            ]}
            className="mb-6"
          />

          <div className="grid gap-8 rounded-2xl border border-border/70 bg-white/70 p-5 shadow-sm backdrop-blur-md sm:p-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
                Cửa hàng LyliShop
              </p>
              <h1 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Móc khóa len handmade nhỏ xinh, dễ chọn làm quà.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                Xem nhanh các mẫu móc khóa len, hoa len và thú bông len đang có tại
                LyliShop. Website chỉ giới thiệu sản phẩm; khách chọn mẫu rồi liên hệ
                shop qua kênh phù hợp.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg">
                  <a href={SITE.socials.zalo} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Liên hệ Zalo
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#product-grid">
                    Khám phá sản phẩm
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 text-sm text-muted-foreground">
                <a
                  href={SITE.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1.5 transition hover:text-foreground"
                >
                  <ThumbsUp className="h-4 w-4 text-primary" aria-hidden="true" />
                  Facebook
                </a>
                <a
                  href={SITE.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1.5 transition hover:text-foreground"
                >
                  <Camera className="h-4 w-4 text-primary" aria-hidden="true" />
                  Instagram
                </a>
              </div>
            </div>

            <Card className="overflow-hidden bg-background/70 p-4 shadow-md">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-primary/10 bg-gradient-to-b from-white to-rose-50">
                <Image
                  src={SHOP_HERO_IMAGE.src}
                  alt={SHOP_HERO_IMAGE.alt}
                  width={SHOP_HERO_IMAGE.width}
                  height={SHOP_HERO_IMAGE.height}
                  className="h-full w-full object-cover"
                  priority
                  fetchPriority="high"
                  quality={75}
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>
              <div className="grid gap-3 pt-4 sm:grid-cols-3">
                <div className="rounded-md border border-border/70 bg-white/75 px-3 py-2 text-center shadow-sm">
                  <p className="font-display text-lg font-semibold">6</p>
                  <p className="text-xs text-muted-foreground">Danh mục</p>
                </div>
                <div className="rounded-md border border-border/70 bg-white/75 px-3 py-2 text-center shadow-sm">
                  <p className="font-display text-lg font-semibold">{PRODUCTS.length}</p>
                  <p className="text-xs text-muted-foreground">Mẫu hiển thị</p>
                </div>
                <div className="rounded-md border border-border/70 bg-white/75 px-3 py-2 text-center shadow-sm">
                  <p className="font-display text-lg font-semibold">3</p>
                  <p className="text-xs text-muted-foreground">Kênh liên hệ</p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="bg-background py-14 sm:py-20" aria-labelledby="product-categories-title">
        <Container>
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
            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
              Các nhóm sản phẩm được đặt trước grid để người dùng định hướng trước
              khi xem từng card sản phẩm.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {PRODUCT_CATEGORIES.map((category, index) => {
              const image = PRODUCT_CATEGORY_IMAGES[index];

              return (
              <Card
                key={category.title}
                className="group flex h-full flex-col overflow-hidden bg-white/75 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Link
                  href="#product-grid"
                  className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {image ? (
                    <div className="relative aspect-[4/3] overflow-hidden border-b border-border/70 bg-gradient-to-b from-white to-rose-50 xl:aspect-square">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 16vw"
                        loading="lazy"
                        quality={55}
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[4/3] items-center justify-center border-b border-border/70 bg-gradient-to-b from-white to-rose-50 xl:aspect-square">
                      <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-background/80 font-display text-lg font-semibold text-primary shadow-sm">
                        {category.label}
                      </span>
                    </div>
                  )}
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
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Tất cả sản phẩm"
            title="Danh sách móc khóa len handmade"
            description="Grid sản phẩm giữ card đồng bộ với Homepage: ảnh, danh mục, tên, giá, mô tả ngắn và nút xem chi tiết."
          />
          <div className="mt-8 flex flex-col gap-3 rounded-lg border border-border/70 bg-background/70 p-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>Hiển thị {PRODUCTS.length} mẫu đang có trên LyliShop.</p>
            <Link href="/moc-khoa-len" className="font-medium text-primary hover:underline">
              Xem hướng dẫn chọn móc khóa len
            </Link>
          </div>
          <div
            id="product-grid"
            className="mt-12 grid scroll-mt-24 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {PRODUCTS.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <Container>
          <div className="rounded-2xl border border-border/70 bg-rose-50/80 p-6 shadow-sm sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-2xl">
                <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
                  Cần shop tư vấn mẫu?
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                  Gửi LyliShop mẫu bạn thích qua kênh quen thuộc.
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  LyliShop sẽ tư vấn màu, size, thời gian hoàn thiện và cách nhận hàng
                  qua tin nhắn. Website không có giỏ hàng hay checkout.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Button asChild>
                  <a href={SITE.socials.zalo} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Liên hệ Zalo
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={SITE.socials.facebook} target="_blank" rel="noreferrer">
                    Facebook
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={SITE.socials.instagram} target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
