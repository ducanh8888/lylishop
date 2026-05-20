import type { Metadata } from "next";

import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProductsSection } from "@/components/sections/FeaturedProductsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { JsonLd } from "@/components/JsonLd";
import { FAQ_ITEMS } from "@/lib/faq";
import { FEATURED_PRODUCTS } from "@/lib/products";
import {
  faqJsonLd,
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
      <JsonLd data={productItemListJsonLd(FEATURED_PRODUCTS)} />
      <JsonLd data={faqJsonLd(FAQ_ITEMS)} />

      <HeroSection />
      <FeaturedProductsSection />
      <WhyChooseUsSection />
      <GallerySection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <FinalCtaSection />
    </>
  );
}

