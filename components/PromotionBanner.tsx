import Link from "next/link";
import { ArrowRight, Gift } from "lucide-react";

import { JUNE_PROMOTION } from "@/lib/promotions";

export function PromotionBanner() {
  return (
    <section
      className="border-b border-primary/15 bg-rose-50/90"
      aria-label={JUNE_PROMOTION.title}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Gift className="h-4 w-4" aria-hidden="true" />
          </span>
          <div>
            <p className="font-display text-sm font-semibold text-foreground">
              {JUNE_PROMOTION.title}: Mua 3 móc khóa 45k tặng 1 túi mù size S
            </p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">
              Móc khóa len handmade đồng giá từ 45k, quà tặng số lượng giới hạn.
              Mỗi khách dùng 1 ưu đãi, không cộng dồn.
            </p>
          </div>
        </div>

        <Link
          href={JUNE_PROMOTION.href}
          className="inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-md border border-primary/20 bg-white/80 px-3 text-sm font-medium text-foreground shadow-sm transition hover:bg-white hover:text-primary"
        >
          {JUNE_PROMOTION.ctaLabel}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
