import Image from "next/image";
import Link from "next/link";
import { HeartHandshake, Package, Palette, Sparkles } from "lucide-react";

import { SITE } from "@/lib/site";
import { FEATURED_PRODUCTS } from "@/lib/products";
import { formatVnd } from "@/lib/format";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroDecor } from "@/components/sections/HeroSectionDecor";

export function HeroSection() {
  const heroProduct = FEATURED_PRODUCTS[0];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-rose-50">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(236,72,153,0.18),transparent_60%)]" />

      <Container className="relative py-14 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="max-w-xl">
            <>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="pink">Len handmade</Badge>
                <Badge variant="secondary">Đóng gói làm quà</Badge>
                <Badge>Tùy chỉnh màu</Badge>
              </div>
            </>

            <>
              <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Món quà handmade nhỏ xinh{" "}
                <span className="text-primary">đầy ấm áp</span>.
              </h1>
            </>

            <>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                Móc khóa len và phụ kiện len nhỏ xinh cho niềm vui mỗi ngày: mềm tay,
                mũi len gọn đẹp và đóng gói chỉn chu như một món quà.
              </p>
            </>

            <>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="shadow-sm">
                  <Link href="#order" aria-label="Đến phần liên hệ đặt hàng">
                    Liên hệ đặt hàng
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={SITE.socials.instagram} target="_blank" rel="noreferrer">
                    Nhắn Instagram
                  </a>
                </Button>
                <Button asChild size="lg" variant="ghost">
                  <Link href="#featured" aria-label="Xem sản phẩm nổi bật">
                    Xem sản phẩm
                  </Link>
                </Button>
              </div>
            </>

            <>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="flex items-start gap-3 rounded-lg border border-border/70 bg-white/60 p-4 shadow-sm backdrop-blur-md">
                  <HeartHandshake className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium">Làm thủ công tỉ mỉ</p>
                    <p className="text-xs text-muted-foreground">Từng mũi len đều được móc tay.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border/70 bg-white/60 p-4 shadow-sm backdrop-blur-md">
                  <Palette className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium">Tùy chỉnh màu sắc</p>
                    <p className="text-xs text-muted-foreground">Phối theo túi hoặc phong cách bạn thích.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border border-border/70 bg-white/60 p-4 shadow-sm backdrop-blur-md">
                  <Package className="mt-0.5 h-5 w-5 text-primary" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-medium">Đóng gói quà chỉn chu</p>
                    <p className="text-xs text-muted-foreground">Gọn gàng, sạch đẹp, sẵn sàng để tặng.</p>
                  </div>
                </div>
              </div>
            </>
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
                  fetchPriority="high"
                  quality={60}
                  sizes="(max-width: 1024px) 90vw, 520px"
                />
                <div className="flex items-center justify-between gap-3 p-4">
                  <div>
                    <p className="font-display text-sm font-semibold">{heroProduct.name}</p>
                    <p className="text-xs text-muted-foreground">{heroProduct.shortDescription}</p>
                  </div>
                  <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-foreground">
                    {formatVnd(heroProduct.priceVnd)}
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
