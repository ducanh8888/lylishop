import {
  HeartHandshake,
  Sparkles,
  PackageCheck,
  Palette,
  Truck,
} from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

const REASONS = [
  {
    title: "Handmade with love",
    description: "Carefully crocheted, stitched, and finished by hand.",
    icon: HeartHandshake,
  },
  {
    title: "Premium yarn materials",
    description: "Soft texture, clean shape, and a cozy look that lasts.",
    icon: Sparkles,
  },
  {
    title: "Cute gift packaging",
    description: "Boutique-style packaging that feels instantly special.",
    icon: PackageCheck,
  },
  {
    title: "Customizable designs",
    description: "Pick your colors or request small add-ons for a personal touch.",
    icon: Palette,
  },
  {
    title: "Fast shipping support",
    description: "Quick replies and helpful tracking updates via chat.",
    icon: Truck,
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why" className="bg-gradient-to-b from-rose-50 to-background py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Why LyliShop"
          title="Soft Luxury, Handmade Details"
          description="We focus on premium stitching, consistent finishing, and a smooth ordering experience through the social apps you already use."
        />

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r) => {
            const Icon = r.icon;
            return (
              <StaggerItem key={r.title}>
                <Card className="h-full border-border/70 bg-white/60 p-6 shadow-sm backdrop-blur-md">
                  <div className="flex items-start gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold">{r.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {r.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}

