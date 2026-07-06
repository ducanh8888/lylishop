import Link from "next/link";
import {
  AtSign,
  Camera,
  CheckCircle2,
  Gift,
  MapPin,
  MessageCircle,
  Palette,
  Phone,
  Send,
  Sparkles,
  SquarePen,
  ThumbsUp,
} from "lucide-react";

import { Container } from "@/components/Container";
import { ContactOrderCard } from "@/components/contact/ContactOrderCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HOMEPAGE_CONTACT } from "@/lib/homepage-contact";

const TRUST_ICON = {
  handmade: Sparkles,
  palette: Palette,
  gift: Gift,
  card: SquarePen,
  confirm: CheckCircle2,
} as const;

const CHANNEL_ICON = {
  facebook: ThumbsUp,
  instagram: Camera,
  zalo: MessageCircle,
  phone: Phone,
  email: AtSign,
  maps: MapPin,
} as const;

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-white py-14 sm:py-20 lg:py-24">
      <span id="order" className="sr-only" aria-hidden="true" />
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
            {HOMEPAGE_CONTACT.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {HOMEPAGE_CONTACT.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            {HOMEPAGE_CONTACT.description}
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            {HOMEPAGE_CONTACT.ctas.map((cta) => {
              const isPrimary = cta.variant === "primary";
              const content = (
                <>
                  {isPrimary ? (
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Send className="h-4 w-4" aria-hidden="true" />
                  )}
                  {cta.label}
                </>
              );

              return (
                <Button key={cta.label} asChild variant={isPrimary ? "default" : "outline"}>
                  {cta.external ? (
                    <a
                      href={cta.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={cta.ariaLabel}
                    >
                      {content}
                    </a>
                  ) : (
                    <Link href={cta.href} aria-label={cta.ariaLabel}>
                      {content}
                    </Link>
                  )}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="grid gap-6">
            <Card className="bg-background/70 p-5 shadow-sm sm:p-6">
              <h3 className="font-display text-xl font-semibold tracking-tight">
                Trước khi nhắn LyliShop
              </h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {HOMEPAGE_CONTACT.trustItems.map((item) => {
                  const Icon = TRUST_ICON[item.icon];

                  return (
                    <div
                      key={item.title}
                      className="rounded-lg border border-border/70 bg-white/75 p-4 shadow-sm"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div>
                          <h4 className="font-display text-sm font-semibold leading-tight">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-xs leading-5 text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="bg-background/70 p-5 shadow-sm sm:p-6">
              <h3 className="font-display text-xl font-semibold tracking-tight">
                Câu hỏi nhanh
              </h3>
              <div className="mt-5 grid gap-3">
                {HOMEPAGE_CONTACT.faqs.map((item) => (
                  <article
                    key={item.question}
                    className="rounded-lg border border-border/70 bg-white/75 p-4 shadow-sm"
                  >
                    <h4 className="font-display text-sm font-semibold">{item.question}</h4>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.answer}</p>
                  </article>
                ))}
              </div>
            </Card>

            <Card className="bg-background/70 p-5 shadow-sm sm:p-6">
              <h3 className="font-display text-xl font-semibold tracking-tight">
                Thông tin liên hệ
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {HOMEPAGE_CONTACT.channels.map((item) => {
                  const Icon = CHANNEL_ICON[item.icon];
                  const content = (
                    <>
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="font-display text-sm font-semibold leading-tight">
                          {item.label}
                        </h4>
                        <p className="mt-1 text-xs leading-5 text-muted-foreground">
                          {item.value}
                        </p>
                      </div>
                    </>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      aria-label={item.ariaLabel}
                      className="flex min-h-32 flex-col gap-3 rounded-lg border border-border/70 bg-white/75 p-4 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={item.label}
                      className="flex min-h-32 flex-col gap-3 rounded-lg border border-border/70 bg-white/75 p-4 shadow-sm"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 overflow-hidden rounded-lg border border-border/70 bg-white/75 shadow-sm">
                <div className="border-b border-border/70 px-5 py-4">
                  <h4 className="font-display text-base font-semibold">
                    {HOMEPAGE_CONTACT.map.title}
                  </h4>
                </div>
                <div
                  role="img"
                  aria-label={HOMEPAGE_CONTACT.map.ariaLabel}
                  className="flex min-h-[300px] items-center justify-center bg-gradient-to-b from-white to-rose-50 p-6 text-center"
                >
                  <p className="max-w-xs text-sm leading-6 text-muted-foreground">
                    {HOMEPAGE_CONTACT.map.description}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <ContactOrderCard />
        </div>
      </Container>
    </section>
  );
}
