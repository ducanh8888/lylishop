import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProductsSection } from "@/components/sections/FeaturedProductsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import { FAQ_ITEMS } from "@/lib/faq";
import { FEATURED_BLOG_POSTS } from "@/lib/blog";
import { FEATURED_PRODUCTS } from "@/lib/products";
import {
  faqJsonLd,
  homePageJsonLd,
  organizationJsonLd,
  productItemListJsonLd,
  websiteJsonLd,
} from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={homePageJsonLd()} />
      <JsonLd data={productItemListJsonLd(FEATURED_PRODUCTS)} />
      <JsonLd data={faqJsonLd(FAQ_ITEMS)} />

      <HeroSection />
      <FeaturedProductsSection />
      <WhyChooseUsSection />
      <GallerySection />
      <TestimonialsSection />
      <FaqSection />
      <section className="bg-background py-14 sm:py-20">
        <Container>
          <div className="grid gap-8 rounded-lg border border-border/70 bg-rose-50 p-6 shadow-sm lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
                Cẩm nang
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Cách chọn móc khóa len handmade làm quà
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                Đọc thêm các gợi ý chọn quà handmade, cách bảo quản móc khóa len và cách chọn
                mẫu phù hợp trước khi nhắn LyliShop đặt hàng.
              </p>
              <Button asChild className="mt-5">
                <Link href="/blog">
                  Xem cẩm nang
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-3">
              {FEATURED_BLOG_POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="rounded-md border border-border/70 bg-white/70 p-4 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:text-primary hover:shadow-md"
                >
                  {post.title}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <ContactSection />
      <FinalCtaSection />
    </>
  );
}

