import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
          eyebrow="Nổi bật"
          title="Móc khóa len được yêu thích"
          description="Những mẫu nhỏ xinh, dễ tặng và dễ dùng. Vì là hàng handmade nên từng chi tiết có thể khác nhau đôi chút, tạo nên nét riêng cho mỗi sản phẩm."
        />

        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PRODUCTS.map((p) => (
            <StaggerItem key={p.slug}>
              <ProductCard product={p} />
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/products" aria-label="Xem tất cả sản phẩm">
              Xem tất cả sản phẩm
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
