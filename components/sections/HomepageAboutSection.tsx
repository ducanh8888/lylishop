import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  CheckCircle2,
  Gift,
  ImageIcon,
  MessageCircle,
  PackageCheck,
  Palette,
  Sparkles,
} from "lucide-react";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HOMEPAGE_ABOUT } from "@/lib/homepage-about";

const ABOUT_ICON = {
  handmade: PackageCheck,
  palette: Palette,
  gift: Gift,
  reference: Camera,
} as const;

function BrandImage() {
  if (HOMEPAGE_ABOUT.image?.src) {
    return (
      <Card className="overflow-hidden bg-white/75 p-3 shadow-sm">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-primary/10 bg-gradient-to-b from-white to-rose-50">
          <Image
            src={HOMEPAGE_ABOUT.image.src}
            alt={HOMEPAGE_ABOUT.image.alt}
            width={HOMEPAGE_ABOUT.image.width}
            height={HOMEPAGE_ABOUT.image.height}
            className="h-full w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 520px"
            loading="lazy"
            quality={75}
          />
        </div>
        {HOMEPAGE_ABOUT.image.caption ? (
          <p className="px-2 pt-3 text-xs leading-5 text-muted-foreground">
            {HOMEPAGE_ABOUT.image.caption}
          </p>
        ) : null}
      </Card>
    );
  }

  return (
    <Card className="bg-white/75 p-5 shadow-sm">
      <div
        role="img"
        aria-label="Khung ảnh thương hiệu LyliShop"
        className="flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-primary/30 bg-[linear-gradient(135deg,rgba(255,252,247,0.95),rgba(255,255,255,0.72))]"
      >
        <div className="text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-white/80 text-primary shadow-sm">
            <ImageIcon className="h-6 w-6" aria-hidden="true" />
          </span>
          <p className="mt-3 font-display text-base font-semibold">Ảnh thương hiệu LyliShop</p>
        </div>
      </div>
      <ul className="mt-5 grid gap-2 text-sm leading-6 text-muted-foreground">
        {HOMEPAGE_ABOUT.imageChecklist.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function HomepageAboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-background py-14 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
              {HOMEPAGE_ABOUT.eyebrow}
            </p>
            <h2 className="mt-2 max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {HOMEPAGE_ABOUT.title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
              {HOMEPAGE_ABOUT.description}
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {HOMEPAGE_ABOUT.highlights.map((item) => {
                const Icon = ABOUT_ICON[item.icon];

                return (
                  <Card key={item.title} className="bg-white/75 p-4 shadow-sm">
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-display text-base font-semibold leading-tight">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {HOMEPAGE_ABOUT.ctas.map((cta) => {
                const isPrimary = cta.variant === "primary";
                const content = (
                  <>
                    {isPrimary ? (
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Sparkles className="h-4 w-4" aria-hidden="true" />
                    )}
                    {cta.label}
                  </>
                );

                return (
                  <Button key={cta.label} asChild variant={isPrimary ? "default" : "outline"}>
                    {cta.external ? (
                      <a href={cta.href} target="_blank" rel="noreferrer">
                        {content}
                      </a>
                    ) : (
                      <Link href={cta.href}>{content}</Link>
                    )}
                  </Button>
                );
              })}
            </div>
          </div>

          <BrandImage />
        </div>

        <Card className="mt-8 bg-white/75 p-5 shadow-sm sm:p-6">
          <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
            Quy trình ngắn gọn
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
            LyliShop làm rõ trước khi khách đặt
          </h3>
          <ol className="mt-5 grid gap-4 md:grid-cols-3">
            {HOMEPAGE_ABOUT.trustSteps.map((step, index) => (
              <li key={step.title} className="rounded-lg border border-border/70 bg-background/70 p-4">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-sm font-semibold text-primary">
                  {index + 1}
                </span>
                <h4 className="mt-3 font-display text-base font-semibold">{step.title}</h4>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
        </Card>
      </Container>
    </section>
  );
}
