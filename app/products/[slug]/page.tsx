import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Camera, Sparkles } from "lucide-react";

import { PRODUCTS, getProductBySlug } from "@/lib/products";
import { SITE } from "@/lib/site";
import { formatVnd } from "@/lib/format";
import { breadcrumbJsonLd, productJsonLd } from "@/lib/schema";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/StarRating";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";

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

  const title = product.name;
  const description = product.metaDescription;
  const url = `${SITE.url}/products/${product.slug}`;

  return {
    title,
    description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      type: "website",
      url,
      title: `${title} | LyliShop`,
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
      title: `${title} | LyliShop`,
      description,
      images: [product.image.src],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const relatedProducts = PRODUCTS.filter((item) => item.slug !== product.slug).slice(0, 3);
  const productImages = product.images ?? [product.image];

  return (
    <>
      <JsonLd data={productJsonLd(product)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Trang chủ", url: SITE.url },
          { name: "Móc khóa len", url: `${SITE.url}/moc-khoa-len` },
          { name: product.name, url: `${SITE.url}/products/${product.slug}` },
        ])}
      />
      <section className="bg-background py-10 sm:py-14">
        <Container>
          <Breadcrumbs
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Móc khóa len", href: "/moc-khoa-len" },
              { label: product.name },
            ]}
            className="mb-5"
          />
          <div className="flex items-center justify-between gap-3">
            <Button asChild variant="ghost">
              <Link href="/moc-khoa-len" aria-label="Quay lại bộ sưu tập móc khóa len">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Móc khóa len
              </Link>
            </Button>
            <div className="hidden items-center gap-2 sm:flex">
              <Badge variant="pink">handmade</Badge>
              <Badge variant="secondary">Đóng gói làm quà</Badge>
            </div>
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="grid gap-4">
              <div className="overflow-hidden rounded-xl border border-border/70 bg-white/60 shadow-sm backdrop-blur-md">
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

              {productImages.length > 1 ? (
                <div className="grid grid-cols-2 gap-3">
                  {productImages.slice(0, 2).map((image, index) => (
                    <div
                      key={image.src}
                      className="overflow-hidden rounded-lg border border-border/70 bg-white/60 shadow-sm"
                    >
                      <div className="relative aspect-square bg-gradient-to-b from-white to-rose-50">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          className="h-full w-full object-cover"
                          loading={index === 0 ? "eager" : "lazy"}
                          quality={55}
                          sizes="(max-width: 1024px) 50vw, 250px"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>

            <div>
              <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {product.name}
              </h1>
              <div className="mt-3 whitespace-pre-line text-base leading-7 text-muted-foreground">
                {product.longDescription}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <div className="rounded-full bg-primary/10 px-4 py-2 font-display text-base font-semibold">
                  {formatVnd(product.priceVnd)}
                </div>
                <StarRating rating={product.rating} />
                <span className="text-sm text-muted-foreground">{product.reviewCount} đánh giá</span>
              </div>

              <div className="mt-6 rounded-xl border border-border/70 bg-white/60 p-5 shadow-sm backdrop-blur-md">
                <h2 className="font-display text-base font-semibold">Điểm nổi bật</h2>
                <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg">
                  <Link href="/#order" aria-label="Đến phần liên hệ đặt hàng">
                    Liên hệ đặt hàng
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                  </Link>
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

          <section className="mt-14">
            <div className="mx-auto max-w-2xl text-center">
              <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
                Có thể bạn cũng thích
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Mẫu móc khóa len liên quan
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
                Xem thêm các mẫu móc khóa len handmade khác để dễ chọn quà hoặc phối theo
                màu bạn thích.
              </p>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((item) => (
                <Link
                  key={item.slug}
                  href={`/products/${item.slug}`}
                  className="rounded-lg border border-border/70 bg-white/70 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="font-display text-base font-semibold">{item.name}</span>
                  <span className="mt-2 block text-sm leading-6 text-muted-foreground">
                    {item.shortDescription}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </Container>
      </section>
    </>
  );
}
