import { Sparkles } from "lucide-react";

import { SITE } from "@/lib/site";
import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/motion/Reveal";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-rose-50 py-14 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_35%_at_50%_0%,rgba(244,114,182,0.24),transparent_60%)]" />
      <Container>
        <div className="mx-auto max-w-3xl rounded-xl border border-border/70 bg-white/60 p-8 text-center shadow-sm backdrop-blur-md sm:p-10">
          <FadeUp>
            <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
              LyliShop
            </p>
          </FadeUp>
          <FadeUp delay={0.06}>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Thấy mẫu nào xinh? Nhắn LyliShop để chọn màu và đặt làm riêng cho bạn nhé.
            </h2>
          </FadeUp>
          <FadeUp delay={0.12}>
            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
              Shop sẽ tư vấn mẫu, xác nhận giá, thời gian làm và phí giao hàng trước khi chốt đơn.
              Bạn chỉ cần gửi mẫu thích và màu mong muốn.
            </p>
          </FadeUp>
          <FadeUp delay={0.18}>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <a href={SITE.socials.zalo} target="_blank" rel="noreferrer">
                  Nhắn Zalo để đặt
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={SITE.socials.facebook} target="_blank" rel="noreferrer">
                  Inbox Facebook
                </a>
              </Button>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
