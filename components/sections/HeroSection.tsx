import Image from "next/image";
import Link from "next/link";
import { HeartHandshake, Package, Palette, Sparkles } from "lucide-react";

import { SITE } from "@/lib/site";
import { FEATURED_PRODUCTS } from "@/lib/products";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeUp } from "@/components/motion/Reveal";
import { HeroDecor } from "@/components/sections/HeroSectionDecor";

export function HeroSection() {
  const heroProduct = FEATURED_PRODUCTS[0];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-rose-50">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(236,72,153,0.18),transparent_60%)]" />

      <Container className="relative py-14 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="max-w-xl">
            <FadeUp>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="pink">Handmade crochet</Badge>
                <Badge variant="secondary">Gift-ready</Badge>
                <Badge>Custom colors</Badge>
              </div>
            </FadeUp>

            <FadeUp delay={0.05}>
              <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Tiny Handmade Gifts{" "}
                <span className="text-primary">Full of Warmth</span>.
              </h1>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                Cute crochet keychains and yarn accessories designed for everyday joy: soft
                textures, premium stitching, and boutique-style packaging.
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="shadow-sm">
                  <Link href="#order" aria-label="Go to order section">
                    Order Now
                    <Sparkles className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={SITE.socials.instagram} target="_blank" rel="noreferrer">
                    Order via Instagram
                  </a>
                </Button>
                <Button asChild size="lg" variant="ghost">
                  <Link href="#featured" aria-label="See featured products">
                    Browse Products
                  </Link>
                </Button>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="flex items-start gap-3 rounded-lg border border-border/70 bg-white/60 p-4 shadow-sm backdrop-blur-md">
                  <HeartHandshake className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Handmade with love</p>
                    <p className="text-xs text-muted-foreground">Every stitch is crafted by hand.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border/70 bg-white/60 p-4 shadow-sm backdrop-blur-md">
                  <Palette className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Custom colors</p>
                    <p className="text-xs text-muted-foreground">Match your bag or your vibe.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border/70 bg-white/60 p-4 shadow-sm backdrop-blur-md">
                  <Package className="mt-0.5 h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Gift packaging</p>
                    <p className="text-xs text-muted-foreground">Cute, clean, and ready to gift.</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          <div className="relative">
            <HeroDecor />
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-3 -z-10 rounded-[28px] bg-gradient-to-b from-primary/20 to-transparent blur-xl" />
              <div className="overflow-hidden rounded-[24px] border border-border/70 bg-white/70 shadow-lg backdrop-blur-md">
                <Image
                  src={heroProduct.image.src}
                  alt={heroProduct.image.alt}
                  width={heroProduct.image.width}
                  height={heroProduct.image.height}
                  className="h-auto w-full object-cover"
                  priority
                  sizes="(max-width: 1024px) 90vw, 520px"
                />
                <div className="flex items-center justify-between gap-3 p-4">
                  <div>
                    <p className="font-display text-sm font-semibold">{heroProduct.name}</p>
                    <p className="text-xs text-muted-foreground">{heroProduct.shortDescription}</p>
                  </div>
                  <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-foreground">
                    ${heroProduct.priceUsd}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

