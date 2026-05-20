import { Camera, MessageCircle, Music2, Send, ThumbsUp } from "lucide-react";

import { SITE } from "@/lib/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CopyToClipboard } from "@/components/CopyToClipboard";
import { FadeUp } from "@/components/motion/Reveal";

const ORDER_TEMPLATE = `Hi LyliShop 👋

I’d like to order:
- Product:
- Color:
- Quantity:

Delivery info:
- Name:
- Phone:
- Address:

Thank you!`;

export function ContactSection() {
  return (
    <section id="order" className="bg-gradient-to-b from-rose-50 to-background py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Contact / Order"
          title="Order Through Social Media"
          description="No checkout needed. Message us on your favorite app and we’ll confirm details, customization, and shipping."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <FadeUp>
            <Card className="h-full border-border/70 bg-white/60 p-6 shadow-sm backdrop-blur-md">
              <h3 className="font-display text-lg font-semibold">Choose a channel</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Fast replies and friendly help with customization.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Button asChild size="lg">
                  <a href={SITE.socials.instagram} target="_blank" rel="noreferrer">
                    <Camera className="h-4 w-4" />
                    Instagram
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={SITE.socials.tiktok} target="_blank" rel="noreferrer">
                    <Music2 className="h-4 w-4" />
                    TikTok
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={SITE.socials.facebook} target="_blank" rel="noreferrer">
                    <ThumbsUp className="h-4 w-4" />
                    Facebook
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={SITE.socials.zalo} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    Zalo
                  </a>
                </Button>
              </div>

              <div className="mt-6 rounded-lg border border-border/70 bg-background/60 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium">Tip</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Send a screenshot of the product you like for the fastest order.
                    </p>
                  </div>
                  <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Send className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Card>
          </FadeUp>

          <FadeUp delay={0.06}>
            <Card className="h-full border-border/70 bg-white/60 p-6 shadow-sm backdrop-blur-md">
              <h3 className="font-display text-lg font-semibold">Message template</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Copy this template and paste it into your chat. Edit the product name and colors.
              </p>

              <pre className="mt-4 whitespace-pre-wrap rounded-lg border border-border/70 bg-background/60 p-4 text-sm leading-6 text-foreground/90">
                {ORDER_TEMPLATE}
              </pre>

              <div className="mt-4">
                <CopyToClipboard text={ORDER_TEMPLATE} label="Copy template" />
              </div>
            </Card>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
