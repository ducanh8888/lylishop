import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Camera, Sparkles } from "lucide-react";

import { PRODUCTS, getProductBySlug } from "@/lib/products";
import { SITE } from "@/lib/site";
import { productJsonLd } from "@/lib/schema";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/StarRating";
import { JsonLd } from "@/components/JsonLd";

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

  const title = `${product.name}`;
  const description = `${product.shortDescription} Handmade crochet keychain by LyliShop.`;
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

  return (
    <>
      <JsonLd data={productJsonLd(product)} />
      <section className="bg-background py-10 sm:py-14">
        <Container>
          <div className="flex items-center justify-between gap-3">
            <Button asChild variant="ghost">
              <Link href="/products" aria-label="Back to products">
                <ArrowLeft className="h-4 w-4" />
                Products
              </Link>
            </Button>
            <div className="hidden sm:flex items-center gap-2">
              <Badge variant="pink">Handmade</Badge>
              <Badge variant="secondary">Gift-ready</Badge>
            </div>
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="overflow-hidden rounded-xl border border-border/70 bg-white/60 shadow-sm backdrop-blur-md">
              <div className="relative aspect-square bg-gradient-to-b from-white to-rose-50">
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  width={product.image.width}
                  height={product.image.height}
                  className="h-full w-full object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>
            </div>

            <div>
              <h1 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                {product.longDescription}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <div className="rounded-full bg-primary/10 px-4 py-2 font-display text-base font-semibold">
                  ${product.priceUsd}
                </div>
                <StarRating rating={product.rating} />
                <span className="text-sm text-muted-foreground">
                  {product.reviewCount} reviews
                </span>
              </div>

              <div className="mt-6 rounded-xl border border-border/70 bg-white/60 p-5 shadow-sm backdrop-blur-md">
                <h2 className="font-display text-base font-semibold">Highlights</h2>
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
                  <Link href="/#order" aria-label="Go to order section on homepage">
                    Order Now
                    <Sparkles className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={SITE.socials.instagram} target="_blank" rel="noreferrer">
                    <Camera className="h-4 w-4" />
                    Message on Instagram
                  </a>
                </Button>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                Want a custom color? Send us a message with your preferred palette and we’ll confirm
                availability before crocheting.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
