import Image from "next/image";

import { TESTIMONIALS } from "@/lib/testimonials";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import { StarRating } from "@/components/StarRating";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

export function TestimonialsSection() {
  return (
    <section id="reviews" className="bg-gradient-to-b from-rose-50 to-background py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by Gift Buyers"
          description="Customers love the neat stitching, cute packaging, and quick support through social chat."
        />

        <Stagger className="mt-10 grid gap-4 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.handle}>
              <Card className="h-full border-border/70 bg-white/60 p-6 shadow-sm backdrop-blur-md">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={t.avatar}
                      alt={`${t.name} avatar`}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full border border-border/70 object-cover"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.handle}</p>
                    </div>
                  </div>
                  <StarRating rating={t.rating} label={`${t.name} rating ${t.rating} out of 5`} />
                </div>
                <p className="mt-4 text-sm leading-6 text-foreground/90">{t.quote}</p>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
