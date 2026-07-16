import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, CheckCircle2, MessageCircle, ThumbsUp } from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getProductGroup, PRODUCTS, type Product, type ProductGroup } from "@/lib/products";
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
    id: "mini",
    title: "Móc khóa Mini",
    label: "Mini",
    description: "Nhỏ gọn, nhẹ tay, hợp treo chìa khóa hoặc túi mini.",
    ctaLabel: "Xem combo",
  },
  {
    id: "size-s",
    title: "Móc khóa Size S",
    label: "S",
    description: "Dễ chọn làm quà nhỏ, phù hợp dùng hằng ngày.",
    ctaLabel: "Chọn mẫu",
  },
  {
    id: "size-m",
    title: "Móc khóa Size M",
    label: "M",
    description: "Kích thước vừa đủ nổi bật trên balo hoặc túi tote.",
    ctaLabel: "Xem mẫu",
  },
  {
    id: "size-l",
    title: "Móc khóa Size L",
    label: "L",
    description: "Phù hợp mẫu nhiều chi tiết hoặc muốn tạo điểm nhấn.",
    ctaLabel: "Khám phá",
  },
  {
    id: "flower",
    title: "Hoa len",
    label: "Hoa",
    description: "Nhẹ nhàng, tinh tế, hợp tặng bạn bè hoặc tự thưởng.",
    ctaLabel: "Xem hoa",
  },
  {
    id: "plush",
    title: "Thú bông len",
    label: "Thú",
    description: "Dáng mềm, dễ thương, hợp người thích phụ kiện handmade.",
    ctaLabel: "Xem thú bông",
  },
] satisfies Array<{
  id: ProductGroup;
  title: string;
  label: string;
  description: string;
  ctaLabel: string;
}>;

const PRODUCT_GROUP_DESCRIPTIONS: Record<ProductGroup, string> = {
  mini: "Nhóm mini phù hợp khi cần món quà nhỏ, dễ đặt theo combo và dễ phối màu theo sở thích.",
  "size-s": "Size S là nhóm dễ dùng hằng ngày, hợp treo chìa khóa, balo hoặc tặng bạn bè.",
  "size-m": "Size M nổi bật hơn khi treo balo hoặc túi tote, phù hợp làm quà tặng có dấu ấn riêng.",
  "size-l": "Size L dành cho mẫu nhiều chi tiết, cần tạo điểm nhấn rõ hơn khi treo balo hoặc túi lớn.",
  flower: "Hoa len phù hợp làm quà tặng giữ được lâu, có thể trao đổi màu hoa và cách gói.",
  plush: "Thú bông len hợp làm quà handmade mềm mại, có thể chọn màu và trao đổi chi tiết trước khi làm.",
};

const MINI_MAIN_PRODUCT_SLUG = "set-moc-khoa-len-6-mau-qua-tang";

const MINI_COMBO_GUIDE = {
  title: "Sản phẩm chính: Combo 3 móc khóa len Mini",
  description:
    "Phù hợp khi bạn muốn chọn một set quà nhỏ, dễ chia cho bạn bè hoặc dùng làm phụ kiện treo chìa khóa, balo, túi mini.",
  suggestions: ["Cún con", "Mèo", "Thỏ", "Cừu"],
  colors: ["Xanh lá", "Đỏ", "Hồng"],
};

const PRODUCT_TRUST_ITEMS = [
  "Handmade theo từng đơn",
  "Có thể chọn màu",
  "Nhận làm theo ảnh",
  "Shop xác nhận mẫu trước khi thực hiện",
];

const SHOP_HERO_IMAGE = {
  src: "/images/homepage/lylishop-hero-handmade-keychains.webp",
  alt: "Nhiều mẫu móc khóa len handmade của LyliShop",
  width: 1200,
  height: 960,
} as const;

type CategoryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const PRODUCT_CATEGORY_IMAGES: Record<ProductGroup, CategoryImage | null> = {
  mini: {
    src: "/images/categories/moc-khoa-mini.webp",
    alt: "Bộ móc khóa len mini nhiều màu của LyliShop",
    width: 900,
    height: 900,
  },
  "size-s": {
    src: "/images/categories/moc-khoa-size-s.webp",
    alt: "Móc khóa len size S nhiều mẫu của LyliShop",
    width: 900,
    height: 900,
  },
  "size-m": {
    src: "/images/categories/moc-khoa-size-m.webp",
    alt: "Móc khóa len size M handmade trên khay tre",
    width: 900,
    height: 900,
  },
  "size-l": {
    src: "/images/products/moc-khoa-size-l/moc-khoa-size-l-12cm-cover.jpg",
    alt: "Móc khóa len Size L handmade cao 12 cm của LyliShop",
    width: 1280,
    height: 853,
  },
  flower: {
    src: "/images/categories/hoa-len.webp",
    alt: "Bó hoa len handmade nhiều màu của LyliShop",
    width: 900,
    height: 900,
  },
  plush: {
    src: "/images/categories/thu-bong-len.webp",
    alt: "Thú bông len handmade màu hồng của LyliShop",
    width: 900,
    height: 900,
  },
};

function getGroupSectionId(group: ProductGroup) {
  return `nhom-${group}`;
}

function getProductsByGroup(group: ProductGroup) {
  if (group === "mini") {
    return PRODUCTS.filter((product) => product.slug === MINI_MAIN_PRODUCT_SLUG);
  }

  return PRODUCTS.filter((product) => getProductGroup(product) === group);
}

function getListingImage(product: Product) {
  const productGroup = getProductGroup(product);

  if (productGroup === "size-m") {
    return product.images?.find((image) => image.src.includes("/moc-khoa-size-m/")) ?? product.image;
  }

  return product.image;
}

function getListingImageAlt(product: Product) {
  const productGroup = getProductGroup(product);
  const groupTitle = PRODUCT_CATEGORIES.find((category) => category.id === productGroup)?.title;

  return `${product.name} thuộc nhóm ${groupTitle ?? "sản phẩm handmade"} tại LyliShop`;
}

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

      <section className="bg-gradient-to-b from-white to-background py-10 sm:py-14 lg:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Sản phẩm" },
            ]}
            className="mb-6"
          />

          <div className="grid gap-8 rounded-2xl border border-border/70 bg-white/70 p-5 shadow-sm backdrop-blur-md sm:p-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
                Sản phẩm LyliShop
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
            {PRODUCT_CATEGORIES.map((category) => {
              const image = PRODUCT_CATEGORY_IMAGES[category.id];
              const productCount = getProductsByGroup(category.id).length;

              return (
              <Card
                key={category.title}
                className="group flex h-full flex-col overflow-hidden bg-white/75 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Link
                  href={`#${getGroupSectionId(category.id)}`}
                  className="flex h-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  aria-label={`${category.ctaLabel} ${category.title}`}
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
                    <p className="mt-1 text-xs font-medium text-primary">
                      {productCount > 0 ? `${productCount} mẫu đang hiển thị` : "Đang cập nhật mẫu"}
                    </p>
                    <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
                      {category.description}
                    </p>
                    <span className="mt-4 inline-flex items-center justify-center gap-2 rounded-md border border-border/70 bg-background/80 px-3 py-2 text-sm font-medium transition group-hover:border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground">
                      {category.ctaLabel}
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
            title="Danh sách móc khóa len handmade theo từng nhóm"
            description="Mỗi nhóm sản phẩm được tách riêng để bạn dễ xem mẫu, so sánh size và chọn kênh liên hệ phù hợp trước khi đặt."
          />

          <div className="mt-8 grid gap-3 rounded-xl border border-primary/15 bg-background/80 p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCT_TRUST_ITEMS.map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-3 rounded-lg border border-border/70 bg-background/70 p-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>Hiển thị {PRODUCTS.length} mẫu đang có trên LyliShop, chia theo 6 nhóm sản phẩm chính.</p>
            <Link href="/moc-khoa-len" className="font-medium text-primary hover:underline">
              Xem hướng dẫn chọn móc khóa len
            </Link>
          </div>

          <div
            id="product-grid"
            className="mt-12 scroll-mt-24 space-y-14"
          >
            {PRODUCT_CATEGORIES.map((category) => {
              const products = getProductsByGroup(category.id);

              return (
                <section
                  key={category.id}
                  id={getGroupSectionId(category.id)}
                  className="scroll-mt-24"
                  aria-labelledby={`${getGroupSectionId(category.id)}-title`}
                >
                  <div className="mb-6 flex flex-col gap-3 border-b border-border/70 pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-2xl">
                      <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
                        {category.label}
                      </p>
                      <h2
                        id={`${getGroupSectionId(category.id)}-title`}
                        className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl"
                      >
                        {category.title}
                      </h2>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
                        {PRODUCT_GROUP_DESCRIPTIONS[category.id]}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-primary">
                      {products.length > 0 ? `${products.length} mẫu` : "Đang cập nhật"}
                    </p>
                  </div>

                  {category.id === "mini" ? (
                    <div className="mb-6 rounded-xl border border-primary/15 bg-rose-50/70 p-4 shadow-sm sm:p-5">
                      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:items-start">
                        <div>
                          <p className="font-display text-sm font-semibold text-primary">
                            {MINI_COMBO_GUIDE.title}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            {MINI_COMBO_GUIDE.description}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                            Gợi ý mẫu
                          </p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {MINI_COMBO_GUIDE.suggestions.map((item) => (
                              <span
                                key={item}
                                className="rounded-full border border-border/70 bg-white/80 px-3 py-1 text-sm text-muted-foreground"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                            Màu gợi ý
                          </p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {MINI_COMBO_GUIDE.colors.map((item) => (
                              <span
                                key={item}
                                className="rounded-full border border-border/70 bg-white/80 px-3 py-1 text-sm text-muted-foreground"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {products.length > 0 ? (
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {products.map((product) => (
                        <ProductCard
                          key={product.slug}
                          product={product}
                          ctaLabel={category.ctaLabel}
                          image={getListingImage(product)}
                          imageAlt={getListingImageAlt(product)}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-xl border border-dashed border-primary/25 bg-rose-50/60 p-6 text-sm leading-7 text-muted-foreground">
                      <p className="font-medium text-foreground">
                        LyliShop đang chuẩn bị ảnh và mẫu {category.title.toLowerCase()} phù hợp để hiển thị.
                      </p>
                      <p className="mt-2">
                        Nếu bạn cần mẫu size này, hãy nhắn Zalo để shop kiểm tra khả năng làm theo màu,
                        kích thước và ảnh tham khảo trước khi xác nhận.
                      </p>
                      <Button asChild className="mt-4" variant="outline">
                        <a href={SITE.socials.zalo} target="_blank" rel="noreferrer">
                          <MessageCircle className="h-4 w-4" aria-hidden="true" />
                          Hỏi mẫu {category.label}
                        </a>
                      </Button>
                    </div>
                  )}
                </section>
              );
            })}
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
