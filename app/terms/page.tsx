import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  alternates: { canonical: "/terms" },
  openGraph: {
    url: `${SITE.url}/terms`,
    title: "Terms | LyliShop",
    description: "Ordering terms for handmade crochet keychains and accessories.",
  },
};

export default function TermsPage() {
  return (
    <section className="bg-background py-14 sm:py-20">
      <Container>
        <article className="mx-auto max-w-3xl rounded-xl border border-border/70 bg-white/60 p-8 shadow-sm backdrop-blur-md">
          <h1 className="font-display text-3xl font-semibold tracking-tight">Terms</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            These terms help set expectations for handmade items and social-media ordering.
          </p>

          <div className="prose prose-sm mt-8 max-w-none prose-p:text-muted-foreground prose-li:text-muted-foreground">
            <h2>Handmade nature</h2>
            <p>
              Each item is crocheted by hand. Small variations in size or stitching are normal and
              part of the handmade character.
            </p>
            <h2>Customization</h2>
            <p>
              Custom colors and small add-ons are available. We confirm details via chat before we
              start making your order.
            </p>
            <h2>Packaging</h2>
            <p>
              We pack items in a clean, gift-ready style. You may request a short gift message.
            </p>
            <h2>Shipping</h2>
            <p>
              Preparation usually takes 1–3 business days. Delivery time varies by location. We
              share tracking details when available.
            </p>
            <h2>Ordering</h2>
            <p>
              Orders are placed through Instagram, TikTok, Facebook, or Zalo messages. Your order is
              confirmed once we agree on the product, price, and delivery details in chat.
            </p>
          </div>
        </article>
      </Container>
    </section>
  );
}

