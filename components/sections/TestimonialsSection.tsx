import { TESTIMONIALS } from "@/lib/testimonials";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import { StarRating } from "@/components/StarRating";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : "";
  return (first + last).toUpperCase();
}

export function TestimonialsSection() {
  return (
    <section id="reviews" className="bg-gradient-to-b from-rose-50 to-background py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Cảm nhận"
          title="Khách mua quà rất mê"
          description="Nhiều bạn thích mũi len gọn đẹp, đóng gói xinh và hỗ trợ nhanh qua chat."
        />

        <Stagger className="mt-10 grid gap-4 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <StaggerItem key={t.handle}>
              <Card className="h-full border-border/70 bg-white/60 p-6 shadow-sm backdrop-blur-md">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-primary/10 font-display text-sm font-semibold text-primary"
                      aria-hidden="true"
                    >
                      {initials(t.name)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.handle}</p>
                    </div>
                  </div>
                  <StarRating rating={t.rating} label={`${t.name} đánh giá ${t.rating} trên 5`} />
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
