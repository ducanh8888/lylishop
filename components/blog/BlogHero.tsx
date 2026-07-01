import Link from "next/link";
import { BookOpen, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function BlogHero({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <div className="grid gap-8 rounded-2xl border border-border/70 bg-white/70 p-5 shadow-sm backdrop-blur-md sm:p-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm font-medium text-foreground shadow-sm">
          <BookOpen className="h-4 w-4 text-primary" aria-hidden="true" />
          {eyebrow}
        </div>
        <h1 className="mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>

        {(primaryHref && primaryLabel) || (secondaryHref && secondaryLabel) ? (
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            {primaryHref && primaryLabel ? (
              <Button asChild size="lg">
                <Link href={primaryHref}>{primaryLabel}</Link>
              </Button>
            ) : null}
            {secondaryHref && secondaryLabel ? (
              <Button asChild size="lg" variant="outline">
                <Link href={secondaryHref}>{secondaryLabel}</Link>
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>

      <Card className="overflow-hidden bg-background/70 p-4 shadow-md">
        <div
          role="img"
          aria-label="Khung ảnh chủ đề Blog LyliShop"
          className="flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-primary/25 bg-gradient-to-b from-white to-rose-50"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-white/80 text-primary shadow-sm">
            <Sparkles className="h-6 w-6" aria-hidden="true" />
          </div>
        </div>
        <div className="grid gap-3 pt-4 sm:grid-cols-3">
          {["Quà tặng", "Đồ len", "Cảm hứng"].map((item) => (
            <div
              key={item}
              className="rounded-md border border-border/70 bg-white/75 px-3 py-2 text-center text-sm font-medium shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
