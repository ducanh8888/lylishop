import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Camera, MessageCircle, PackageCheck, Ruler, ThumbsUp } from "lucide-react";

import { PRODUCTS, getProductBySlug, getRelatedProducts } from "@/lib/products";
import { BLOG_POSTS } from "@/lib/blog";
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

const ORDER_STEPS = [
  {
    title: "Chọn mẫu, màu và số lượng",
    description:
      "Bạn gửi mẫu đang xem, màu mong muốn, size và số lượng cần đặt để shop kiểm tra nhanh.",
  },
  {
    title: "Shop xác nhận trước khi làm",
    description:
      "LyliShop báo lại giá theo kích thước, thời gian hoàn thiện và phí giao hàng dự kiến.",
  },
  {
    title: "Chốt đơn qua tin nhắn",
    description:
      "Sau khi thống nhất mẫu, shop mới bắt đầu làm và cập nhật thông tin giao hàng cho bạn.",
  },
];

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
  const productTerms = getSearchTerms(
    [product.name, product.category, product.shortDescription, ...product.tags, ...product.benefits].join(" ")
  );

  return BLOG_POSTS.map((post, index) => {
    const postText = normalizeText(
      [post.title, post.excerpt, post.description, ...post.keywords].join(" ")
    );
    const score = productTerms.reduce(
      (total, term) => total + (postText.includes(term) ? 1 : 0),
      0
    );

    return { post, score, index };
  })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit)
    .map((item) => item.post);
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

  const title =
    product.name.length <= 30
      ? `${product.name} | Móc khóa len handmade LyliShop`
      : `${product.name} | LyliShop`;
  const description = product.metaDescription;
  const url = `${SITE.url}/products/${product.slug}`;

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: [
        {
          url: product.image.src,
          width: product.image.width,
          height: product.image.height,
          alt: product.image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [product.image.src],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const relatedProducts = getRelatedProducts(product);
  const relatedBlogPosts = getRelatedBlogPosts(product);
  const productImages = product.images ?? [product.image];
  const thumbnailImages = productImages.slice(1);
  const productFaqs = [
    {
      id: `${product.slug}-custom-color`,
      question: `Có thể đặt ${product.name} theo màu riêng không?`,
      answer:
        "Có. Bạn có thể nhắn LyliShop màu mong muốn, tone màu yêu thích hoặc ảnh mẫu tham khảo để shop tư vấn trước khi làm.",
    },
    {
      id: `${product.slug}-gift`,
      question: `${product.name} có phù hợp làm quà tặng handmade không?`,
      answer:
        "Có. Sản phẩm nhỏ gọn, dễ treo balo hoặc túi xách, phù hợp làm quà sinh nhật, quà cảm ơn hoặc món quà nhỏ cho người thích đồ handmade.",
    },
    {
      id: `${product.slug}-order`,
      question: `Đặt ${product.name} tại LyliShop như thế nào?`,
      answer:
        "Bạn chọn mẫu trên website rồi nhắn Zalo hoặc Facebook. Shop sẽ xác nhận màu, số lượng, giá theo kích thước và thời gian hoàn thiện trước khi chốt đơn.",
    },
  ];

  return (
    <>
      <JsonLd data={productJsonLd(product)} />
      <JsonLd data={faqJsonLd(productFaqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Trang chủ", url: SITE.url },
          { name: "Cửa hàng", url: `${SITE.url}/products` },
          { name: product.name, url: `${SITE.url}/products/${product.slug}` },
        ])}
      />
      <section className="bg-gradient-to-b from-white to-background py-10 sm:py-14 lg:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Cửa hàng", href: "/products" },
              { label: product.name },
            ]}
            className="mb-5"
          />

          <div className="flex items-center justify-between gap-3">
            <Button asChild variant="ghost">
              <Link href="/products" aria-label="Quay lại cửa hàng LyliShop">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Cửa hàng
              </Link>
            </Button>
            <div className="hidden items-center gap-2 sm:flex">
              <Badge variant="pink">{product.category}</Badge>
              <Badge variant="secondary">Đóng gói làm quà</Badge>
            </div>
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-2xl border border-border/70 bg-white/70 shadow-sm backdrop-blur-md">
                <div className="relative aspect-square bg-gradient-to-b from-white to-rose-50">
                  <Image
                    src={productImages[0].src}
                    alt={productImages[0].alt}
                    width={productImages[0].width}
                    height={productImages[0].height}
                    className="h-full w-full object-cover"
                    priority
                    fetchPriority="high"
                    quality={60}
                    sizes="(max-width: 1024px) 100vw, 520px"
                  />
                </div>
              </div>

              {thumbnailImages.length > 0 ? (
                <div className="grid grid-cols-3 gap-3">
                  {thumbnailImages.map((image) => (
                    <div
                      key={image.src}
                      className="overflow-hidden rounded-lg border border-border/70 bg-white/70 shadow-sm"
                    >
                      <div className="relative aspect-square bg-gradient-to-b from-white to-rose-50">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          className="h-full w-full object-cover"
                          loading="lazy"
                          quality={55}
                          sizes="(max-width: 1024px) 50vw, 250px"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  role="img"
                  aria-label={`Khung ảnh bổ sung của ${product.name}`}
                  className="flex aspect-[4/1] items-center justify-center rounded-lg border border-dashed border-primary/25 bg-white/70 text-sm text-muted-foreground shadow-sm"
                >
                  Ảnh bổ sung sẽ được cập nhật khi có hình thật.
                </div>
              )}
            </div>

            <div>
              <div className="mb-4 flex flex-wrap gap-2 sm:hidden">
                <Badge variant="pink">{product.category}</Badge>
                <Badge variant="secondary">Đóng gói làm quà</Badge>
              </div>
              <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {product.name}
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

              <Card className="mt-6 bg-white/70 p-5 shadow-sm backdrop-blur-md">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Danh mục
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">{product.category}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Chất liệu
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">{product.material}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Kích thước
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      Xác nhận theo mẫu/size khi liên hệ
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="mt-4 bg-white/70 p-5 shadow-sm backdrop-blur-md">
                <h2 className="font-display text-base font-semibold">Điểm nổi bật</h2>
                <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
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

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg">
                  <a href={SITE.socials.zalo} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Liên hệ Zalo
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/products">Xem thêm sản phẩm</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/moc-khoa-len">Cách chọn móc khóa len</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/blog">Tin tức quà handmade</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={SITE.socials.instagram} target="_blank" rel="noreferrer">
                    <Camera className="h-4 w-4" aria-hidden="true" />
                    Nhắn Instagram
                  </a>
                </Button>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                Muốn đổi màu? Nhắn shop bảng màu bạn thích, shop sẽ xác nhận mẫu trước khi bắt đầu làm.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.78fr]">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
                Mô tả
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Chi tiết về {product.name}
              </h2>
              <div className="mt-5 whitespace-pre-line rounded-2xl border border-border/70 bg-white/70 p-5 text-base leading-8 text-muted-foreground shadow-sm sm:p-6">
                {product.longDescription}
              </div>
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
                  <Ruler className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold">Quy trình liên hệ</h3>
                </div>
                <ol className="mt-4 grid gap-4">
                  {ORDER_STEPS.map((step, index) => (
                    <li key={step.title} className="flex gap-3">
                      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-sm font-semibold text-primary">
                        {index + 1}
                      </span>
                      <span>
                        <span className="block text-sm font-medium text-foreground">{step.title}</span>
                        <span className="mt-1 block text-sm leading-6 text-muted-foreground">
                          {step.description}
                        </span>
                      </span>
                    </li>
                  ))}
                </ol>
              </Card>

              {relatedBlogPosts.length > 0 ? (
                <Card className="bg-white/70 p-5 shadow-sm">
                  <h3 className="font-display text-lg font-semibold">Đọc thêm</h3>
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
        </Container>
      </section>

      <section className="bg-background py-14 sm:py-20">
        <Container>
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
                Có thể bạn cũng thích
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Móc khóa len liên quan
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
                Xem thêm các mẫu móc khóa len handmade khác để dễ chọn quà hoặc phối theo
                màu bạn thích.
              </p>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((item) => (
                <ProductCard key={item.slug} product={item} />
              ))}
            </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container>
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
