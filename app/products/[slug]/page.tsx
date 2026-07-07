import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Camera,
  CheckCircle2,
  Gift,
  MessageCircle,
  PackageCheck,
  Palette,
  ThumbsUp,
} from "lucide-react";

import type { ProductGroup } from "@/lib/products";
import {
  PRODUCTS,
  getProductBySlug,
  getProductGroup,
  getProductInformation,
  getRelatedProducts,
} from "@/lib/products";
import { BLOG_POSTS } from "@/lib/blog";
import { createPageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
import { formatVnd } from "@/lib/format";
import { breadcrumbJsonLd, faqJsonLd, productJsonLd } from "@/lib/schema";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductCard } from "@/components/ProductCard";
import { ProductImageGallery } from "@/components/products/ProductImageGallery";
import { ProductOrderPanel } from "@/components/products/ProductOrderPanel";

const CARE_TIPS = [
  "Cầm vào khoen kim loại khi tháo khỏi túi hoặc balo, hạn chế kéo mạnh phần thân len.",
  "Nếu bám bụi nhẹ, dùng khăn khô mềm hoặc chổi lông mềm để làm sạch bề mặt.",
  "Tránh ngâm nước lâu, vắt mạnh hoặc để sản phẩm bị đè nặng trong balo quá lâu.",
  "Khi không sử dụng, nên treo ở nơi khô thoáng để sản phẩm giữ form tốt hơn.",
];

const PRODUCT_DETAIL_HIGHLIGHTS = [
  { label: "Handmade 100%", icon: PackageCheck },
  { label: "Len Milk Cotton", icon: CheckCircle2 },
  { label: "Có thể chọn màu", icon: Palette },
  { label: "Nhận làm theo yêu cầu", icon: MessageCircle },
  { label: "Phù hợp làm quà tặng", icon: Gift },
];

const PRODUCT_ORDER_FLOW = [
  "Chọn mẫu",
  "Chọn màu",
  "Gửi ghi chú nếu cần",
  "Nhắn Zalo để xác nhận",
];

const PRODUCT_PREPARE_CHECKLIST = [
  "Muốn giống mẫu",
  "Muốn đổi màu",
  "Muốn làm theo ảnh",
  "Muốn có thiệp",
  "Muốn gói quà",
];

const LYLISHOP_COMMITMENTS = [
  "Handmade 100%",
  "Sử dụng len Milk Cotton",
  "Có thể chọn màu",
  "Có thể đặt theo yêu cầu",
  "Kiểm tra sản phẩm trước khi giao",
  "Hỗ trợ tư vấn trước khi đặt",
];

const PRODUCT_GROUP_CONTEXT: Record<
  ProductGroup,
  {
    label: string;
    href: string;
    relatedTitle: string;
    relatedDescription: string;
    decisionItems: string[];
  }
> = {
  mini: {
    label: "Mini",
    href: "/products#nhom-mini",
    relatedTitle: "Sản phẩm cùng nhóm Mini",
    relatedDescription:
      "Xem thêm các mẫu mini nhỏ gọn, dễ đặt theo combo hoặc làm quà tặng nhẹ nhàng.",
    decisionItems: ["Quà nhỏ cho bạn thân", "Móc khóa chìa khóa nhẹ", "Combo quà nhóm"],
  },
  "size-s": {
    label: "Size S",
    href: "/products#nhom-size-s",
    relatedTitle: "Sản phẩm cùng nhóm Size S",
    relatedDescription:
      "Xem thêm các mẫu size S dễ treo hằng ngày, phù hợp chìa khóa, balo hoặc túi nhỏ.",
    decisionItems: ["Móc khóa balo hoặc túi nhỏ", "Quà handmade dễ chọn", "Phụ kiện dùng hằng ngày"],
  },
  "size-m": {
    label: "Size M",
    href: "/products#nhom-size-m",
    relatedTitle: "Sản phẩm cùng nhóm Size M",
    relatedDescription:
      "Xem thêm các mẫu size M nổi bật hơn khi treo balo, túi tote hoặc làm quà tặng.",
    decisionItems: ["Quà sinh nhật", "Móc khóa balo nổi bật", "Quà nhóm hoặc quà couple"],
  },
  "size-l": {
    label: "Size L",
    href: "/products#nhom-size-l",
    relatedTitle: "Sản phẩm cùng nhóm Size L",
    relatedDescription:
      "Xem thêm nhóm size L dành cho mẫu nhiều chi tiết hoặc phụ kiện cần điểm nhấn rõ.",
    decisionItems: ["Phụ kiện treo balo lớn", "Mẫu nhiều chi tiết", "Quà cần điểm nhấn"],
  },
  flower: {
    label: "Hoa len",
    href: "/products#nhom-flower",
    relatedTitle: "Sản phẩm cùng nhóm Hoa len",
    relatedDescription:
      "Xem thêm hoa len handmade phù hợp làm quà lưu giữ lâu hoặc trang trí góc nhỏ.",
    decisionItems: ["Quà sinh nhật", "Quà tặng lưu giữ lâu", "Hoa len không héo"],
  },
  plush: {
    label: "Thú bông len",
    href: "/products#nhom-plush",
    relatedTitle: "Sản phẩm cùng nhóm Thú bông len",
    relatedDescription:
      "Xem thêm thú bông len mềm mại, hợp làm quà tặng hoặc phụ kiện trang trí.",
    decisionItems: ["Quà handmade mềm mại", "Trang trí bàn học", "Móc khóa túi hoặc balo"],
  },
};

const TRUST_CONFIRMATION_ITEMS = [
  "Xác nhận mẫu, màu và số lượng qua tin nhắn trước khi làm.",
  "Báo lại thời gian hoàn thiện dự kiến theo từng mẫu.",
  "Tư vấn phần nào có thể làm giống ảnh và phần nào cần điều chỉnh.",
  "Website không xử lý checkout; khách chốt đơn trực tiếp qua kênh liên hệ.",
];

const RELATED_BLOG_TERMS_BY_GROUP: Record<ProductGroup, string[]> = {
  mini: ["móc khóa mini", "quà handmade nhỏ", "quà tặng cá nhân", "phụ kiện len handmade"],
  "size-s": ["móc khóa handmade", "móc khóa len", "phụ kiện len handmade", "quà handmade nhỏ"],
  "size-m": ["móc khóa len", "quà handmade", "đặt móc khóa len số lượng", "phụ kiện len handmade"],
  "size-l": ["móc khóa len", "treo balo", "quà handmade", "phụ kiện len handmade"],
  flower: ["hoa len", "hoa tulip", "bó hoa", "quà handmade"],
  plush: ["thú bông len", "móc khóa thú len", "quà handmade", "phụ kiện len handmade"],
};

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
    .toLowerCase();
}

function getSearchTerms(value: string) {
  const ignored = new Set([
    "cho",
    "cua",
    "cac",
    "voi",
    "the",
    "hang",
    "handmade",
    "lylishop",
  ]);

  return normalizeText(value)
    .split(/[^a-z0-9]+/)
    .filter((term) => term.length > 2 && !ignored.has(term));
}

function getRelatedBlogPosts(product: NonNullable<ReturnType<typeof getProductBySlug>>, limit = 2) {
  const productGroup = getProductGroup(product);
  const groupTerms = RELATED_BLOG_TERMS_BY_GROUP[productGroup].map(normalizeText);
  const productTerms = getSearchTerms(
    [product.name, product.category, product.shortDescription, ...product.tags, ...product.benefits].join(" ")
  ).slice(0, 8);

  return BLOG_POSTS.map((post, index) => {
    const postText = normalizeText(
      [
        post.title,
        post.excerpt,
        post.description,
        ...post.keywords,
        ...post.sections.flatMap((section) => [
          section.heading,
          ...(section.body ?? []),
          ...(section.blocks ?? []).flatMap((block) => {
            if (block.type === "table") return [block.caption, ...block.headers, ...block.rows.flat()];
            if (block.type === "list") return block.items;
            if (block.type === "quote") return [block.quote, block.cite];
            if (block.type === "callout") return [block.title, block.body];
            if (block.type === "image") return [block.alt, block.caption];
            return [block.text];
          }),
        ]),
      ]
        .filter(Boolean)
        .join(" ")
    );
    const groupScore = groupTerms.reduce(
      (total, term) => total + (postText.includes(term) ? 3 : 0),
      0
    );
    const productScore = productTerms.reduce(
      (total, term) => total + (postText.includes(term) ? 1 : 0),
      0
    );

    return { post, score: groupScore + productScore, index };
  })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit)
    .map((item) => item.post);
}

function getProductMetadataTitle(product: NonNullable<ReturnType<typeof getProductBySlug>>) {
  if (product.slug === "set-moc-khoa-len-10-mau-mix") {
    return "Móc khóa len từ 45k, 10 mẫu mix | LyliShop";
  }

  return product.name.length <= 30
    ? `${product.name} | Móc khóa len handmade LyliShop`
    : `${product.name} | LyliShop`;
}

function getProductHeading(product: NonNullable<ReturnType<typeof getProductBySlug>>) {
  if (product.detailHeading) return product.detailHeading;

  return normalizeText(product.name).startsWith("moc khoa")
    ? product.name
    : `Móc khóa len handmade ${product.name}`;
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const title = getProductMetadataTitle(product);
  const description = product.metaDescription;

  return createPageMetadata({
    title,
    absoluteTitle: true,
    description,
    canonical: `/products/${product.slug}`,
    image: {
      url: product.image.src,
      width: product.image.width,
      height: product.image.height,
      alt: product.image.alt,
    },
  });
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const productGroup = getProductGroup(product);
  const productGroupContext = PRODUCT_GROUP_CONTEXT[productGroup];
  const relatedProducts = getRelatedProducts(product);
  const relatedBlogPosts = getRelatedBlogPosts(product);
  const productHeading = getProductHeading(product);
  const productInformation = getProductInformation(product);
  const productInformationRows = [
    { label: "Chất liệu", value: productInformation.material },
    { label: "Kích thước", value: productInformation.size },
    { label: "Màu sắc", value: productInformation.colors },
    { label: "Gia công", value: productInformation.production },
    { label: "Bảo quản", value: productInformation.care },
  ];
  const productFaqs = product.faqs;

  return (
    <>
      <JsonLd data={productJsonLd(product)} />
      <JsonLd data={faqJsonLd(productFaqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Trang chủ", url: SITE.url },
          { name: "Sản phẩm", url: `${SITE.url}/products` },
          { name: product.name, url: `${SITE.url}/products/${product.slug}` },
        ])}
      />
      <section className="bg-gradient-to-b from-white to-background py-10 sm:py-14 lg:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Sản phẩm", href: "/products" },
              { label: product.name },
            ]}
            className="mb-5"
          />

          <div className="flex items-center justify-between gap-3">
            <Button asChild variant="ghost">
              <Link href="/products" aria-label="Quay lại trang sản phẩm LyliShop">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Sản phẩm
              </Link>
            </Button>
            <div className="hidden items-center gap-2 sm:flex">
              <Badge variant="pink">{product.category}</Badge>
              <Badge variant="secondary">Đóng gói làm quà</Badge>
            </div>
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-start">
            <ProductImageGallery product={product} />

            <div>
              <div className="mb-4 flex flex-wrap gap-2 sm:hidden">
                <Badge variant="pink">{product.category}</Badge>
                <Badge variant="secondary">Đóng gói làm quà</Badge>
              </div>
              <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {productHeading}
              </h1>
              <p className="mt-3 text-base leading-7 text-muted-foreground sm:text-lg">
                {product.shortDescription}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <div className="rounded-full bg-primary/10 px-4 py-2 font-display text-base font-semibold">
                  {formatVnd(product.priceVnd)}
                </div>
                <span className="text-sm text-muted-foreground">
                  Giá có thể thay đổi theo kích thước và độ chi tiết của mẫu đặt riêng.
                </span>
              </div>

              <Card className="mt-4 bg-white/70 p-5 shadow-sm backdrop-blur-md">
                <p className="font-display text-base font-semibold">Điểm nổi bật</p>
                <ul className="mt-3 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                  {PRODUCT_DETAIL_HIGHLIGHTS.map((item) => {
                    const Icon = item.icon;

                    return (
                      <li key={item.label} className="flex items-center gap-2">
                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span>{item.label}</span>
                      </li>
                    );
                  })}
                </ul>
              </Card>

              <Card className="mt-4 bg-white/70 p-5 shadow-sm backdrop-blur-md">
                <p className="font-display text-base font-semibold">Quy trình đặt hàng</p>
                <ol className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
                  {PRODUCT_ORDER_FLOW.map((step, index) => (
                    <li key={step} className="rounded-md border border-border/70 bg-background/60 p-3">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-sm font-semibold text-primary">
                        {index + 1}
                      </span>
                      <span className="mt-2 block font-medium leading-snug text-foreground">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>
              </Card>

              <ProductOrderPanel product={product} />

              <Card className="mt-4 bg-white/70 p-5 shadow-sm backdrop-blur-md">
                <p className="font-display text-base font-semibold">Gợi ý nhanh</p>
                <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="mt-4 bg-white/70 p-5 shadow-sm backdrop-blur-md">
                <p className="font-display text-base font-semibold">Phù hợp nếu bạn đang tìm</p>
                <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                  {productGroupContext.decisionItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={productGroupContext.href}
                  className="mt-4 inline-flex text-sm font-medium text-primary hover:underline"
                >
                  Xem nhóm {productGroupContext.label}
                </Link>
              </Card>

              <div className="mt-4 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              {product.promotion ? (
                <div className="mt-4 rounded-xl border border-primary/20 bg-rose-50 p-5 shadow-sm">
                  <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
                    {product.promotion.eyebrow}
                  </p>
                  <h2 className="mt-1 font-display text-lg font-semibold text-foreground">
                    {product.promotion.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {product.promotion.summary}
                  </p>
                  <ul className="mt-4 grid gap-2 text-sm text-foreground/85">
                    {product.promotion.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 rounded-md border border-border/70 bg-white/75 px-3 py-2 text-xs leading-5 text-muted-foreground">
                    Ghi chú: {product.promotion.notes.join(" ")}
                  </p>
                </div>
              ) : null}

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <Button asChild size="lg">
                  <a href={SITE.socials.zalo} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Nhắn Zalo đặt hàng
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/products">Xem tất cả sản phẩm</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/moc-khoa-len">Cẩm nang móc khóa len</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.78fr]">
            <div>
              <Card className="mb-5 bg-white/70 p-5 shadow-sm sm:p-6">
                <p className="font-display text-lg font-semibold">Bạn cần chuẩn bị gì?</p>
                <ul className="mt-4 grid gap-2 text-sm leading-6 text-muted-foreground sm:grid-cols-2">
                  {PRODUCT_PREPARE_CHECKLIST.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
                Mô tả sản phẩm
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Chi tiết về {product.name}
              </h2>
              <Card className="mt-5 whitespace-pre-line bg-white/70 p-5 text-base leading-8 text-muted-foreground shadow-sm sm:p-6">
                {product.longDescription}
              </Card>

              <Card className="mt-5 bg-white/70 p-5 shadow-sm sm:p-6">
                <h2 className="font-display text-2xl font-semibold tracking-tight">
                  Thông tin sản phẩm
                </h2>
                <div className="mt-5 overflow-hidden rounded-lg border border-border/70">
                  <table className="w-full border-collapse text-left text-sm">
                    <tbody className="divide-y divide-border/70">
                      {productInformationRows.map((row) => (
                        <tr key={row.label} className="bg-white/60">
                          <th
                            scope="row"
                            className="w-36 bg-rose-50/70 px-4 py-3 font-medium text-foreground sm:w-44"
                          >
                            {row.label}
                          </th>
                          <td className="px-4 py-3 leading-6 text-muted-foreground">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>

              <Card className="mt-5 bg-white/70 p-5 shadow-sm sm:p-6">
                <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
                  Đánh giá
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                  Phản hồi khách hàng
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  Tính năng đánh giá đang được phát triển. LyliShop chỉ hiển thị phản hồi thật sau
                  khi được khách hàng đồng ý.
                </p>
              </Card>
            </div>

            <div className="grid gap-5">
              <Card className="bg-white/70 p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <PackageCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold">Phù hợp sử dụng</h3>
                </div>
                <ul className="mt-4 grid gap-2 text-sm leading-6 text-muted-foreground">
                  {product.benefits.slice(0, 3).map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="bg-white/70 p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <PackageCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold">Lưu ý sử dụng & bảo quản</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Móc khóa len handmade bền hơn khi được dùng nhẹ tay và giữ khô thoáng. LyliShop khuyên bạn lưu ý:
                </p>
                <ul className="mt-4 grid gap-2 text-sm leading-6 text-muted-foreground">
                  {CARE_TIPS.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="bg-white/70 p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <PackageCheck className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold">
                    LyliShop xác nhận trước khi làm
                  </h3>
                </div>
                <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted-foreground">
                  {TRUST_CONFIRMATION_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {relatedBlogPosts.length > 0 ? (
                <Card
                  aria-labelledby="product-related-posts-title"
                  className="bg-white/70 p-5 shadow-sm"
                >
                  <h3 id="product-related-posts-title" className="font-display text-lg font-semibold">
                    Đọc thêm về móc khóa len handmade
                  </h3>
                  <div className="mt-4 grid gap-3">
                    {relatedBlogPosts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="rounded-md border border-border/70 bg-background/60 p-3 text-sm font-medium leading-6 transition hover:border-primary/30 hover:bg-rose-50 hover:text-primary"
                      >
                        {post.title}
                      </Link>
                    ))}
                  </div>
                </Card>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
              FAQ
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Câu hỏi thường gặp về {product.name}
            </h2>
          </div>
          <div className="mx-auto mt-8 max-w-3xl divide-y divide-border/70 rounded-2xl border border-border/70 bg-background/70 p-5 shadow-sm">
            {productFaqs.map((item) => (
              <details key={item.id} className="group py-4 first:pt-0 last:pb-0">
                <summary className="cursor-pointer list-none rounded-md font-display text-base font-semibold marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&::-webkit-details-marker]:hidden">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
          <Card className="mx-auto mt-6 max-w-3xl bg-rose-50/70 p-5 shadow-sm sm:p-6">
            <h3 className="font-display text-lg font-semibold">Cam kết từ LyliShop</h3>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-muted-foreground sm:grid-cols-2">
              {LYLISHOP_COMMITMENTS.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </Container>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
              Cùng nhóm sản phẩm
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {productGroupContext.relatedTitle}
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
              {productGroupContext.relatedDescription}
            </p>
            <Button asChild variant="outline" className="mt-5">
              <Link href={productGroupContext.href}>
                Xem tất cả mẫu {productGroupContext.label}
              </Link>
            </Button>
          </div>

          {relatedProducts.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-dashed border-primary/25 bg-white/70 p-5 text-center text-sm leading-6 text-muted-foreground shadow-sm">
              LyliShop đang cập nhật thêm mẫu trong nhóm {productGroupContext.label}. Bạn có
              thể xem toàn bộ nhóm sản phẩm hoặc gửi ảnh tham khảo để shop tư vấn mẫu phù hợp.
            </div>
          )}
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <Card className="mb-5 bg-white/80 p-5 text-center shadow-sm sm:p-6">
            <p className="mx-auto max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              LyliShop luôn khuyến khích khách hàng trao đổi mẫu, màu sắc và yêu cầu riêng trước
              khi đặt để sản phẩm phù hợp nhất với mong muốn.
            </p>
          </Card>
          <div className="rounded-2xl border border-border/70 bg-rose-50/80 p-6 text-center shadow-sm sm:p-8">
            <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
              Liên hệ LyliShop
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Muốn chọn màu hoặc hỏi thêm về mẫu này?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              Gửi LyliShop tên sản phẩm hoặc ảnh mẫu bạn thích. Shop sẽ phản hồi qua
              kênh bạn chọn, không xử lý thanh toán trực tiếp trên website.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild>
                <a href={SITE.socials.zalo} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Liên hệ Zalo
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
