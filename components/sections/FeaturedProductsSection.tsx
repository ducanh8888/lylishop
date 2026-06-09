import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SITE } from "@/lib/site";
import { FEATURED_PRODUCTS } from "@/lib/products";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

export function FeaturedProductsSection() {
  return (
    <section id="featured" className="bg-background py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Được yêu thích"
          title="Móc khóa len được yêu thích"
          description="Những mẫu móc khóa len handmade cute để treo balo, túi xách hoặc làm quà tặng nhỏ xinh. Thích mẫu nào, bạn có thể nhắn shop để chọn màu theo ý thích."
        />

        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PRODUCTS.map((p) => (
            <StaggerItem key={p.slug}>
              <ProductCard product={p} />
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center">
          <p className="max-w-xl text-sm text-muted-foreground">
            Thích mẫu nào? Nhắn LyliShop để chọn màu, kiểm tra thời gian làm và chốt đơn nhanh nhé.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link href="/moc-khoa-len" aria-label="Xem bộ sưu tập móc khóa len">
              Xem thêm mẫu móc khóa len
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={SITE.socials.zalo} target="_blank" rel="noreferrer">
                Nhắn Zalo để chọn màu
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={SITE.socials.facebook} target="_blank" rel="noreferrer">
                Inbox Facebook
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
