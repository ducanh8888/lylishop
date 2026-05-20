import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse LyliShop’s handmade crochet keychains and cute yarn accessories. See prices, details, and order through Instagram, TikTok, Facebook, or Zalo.",
  alternates: { canonical: "/products" },
  openGraph: {
    url: `${SITE.url}/products`,
    title: "Products | LyliShop",
    description:
      "Handmade crochet keychains and cute yarn accessories. Gift-ready packaging and customizable designs.",
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: "LyliShop products" }],
  },
};

export default function ProductsPage() {
  return (
    <section className="bg-background py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="Crochet Keychains & Yarn Accessories"
          description="Simple, giftable, and handmade with premium yarn. Click a product to view details and ordering info."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}

