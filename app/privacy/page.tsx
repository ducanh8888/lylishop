import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
  openGraph: {
    url: `${SITE.url}/privacy`,
    title: "Privacy Policy | LyliShop",
    description: "How LyliShop handles messages, order information, and privacy.",
  },
};

export default function PrivacyPage() {
  return (
    <section className="bg-background py-14 sm:py-20">
      <Container>
        <article className="mx-auto max-w-3xl rounded-xl border border-border/70 bg-white/60 p-8 shadow-sm backdrop-blur-md">
          <h1 className="font-display text-3xl font-semibold tracking-tight">Privacy Policy</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Effective date: {new Date().getFullYear()}.
          </p>

          <div className="prose prose-sm mt-8 max-w-none prose-p:text-muted-foreground prose-li:text-muted-foreground">
            <p>
              LyliShop is a handmade product showcase website. Orders are placed through social
              media chats (Instagram, TikTok, Facebook, or Zalo). We only use the information you
              share to confirm your order, arrange delivery, and provide support.
            </p>
            <h2>What we collect</h2>
            <ul>
              <li>Messages you send to us (product, color, quantity).</li>
              <li>Delivery details you provide (name, phone, address).</li>
            </ul>
            <h2>How we use information</h2>
            <ul>
              <li>To craft your handmade item and confirm customization.</li>
              <li>To arrange shipping and share tracking updates.</li>
              <li>To respond to questions and support requests.</li>
            </ul>
            <h2>Third‑party services</h2>
            <p>
              Messaging and delivery services are provided by third parties. Their privacy policies
              may apply when you use their platforms.
            </p>
            <h2>Contact</h2>
            <p>
              For privacy requests, contact us via the same social channel you used to order.
            </p>
          </div>
        </article>
      </Container>
    </section>
  );
}

