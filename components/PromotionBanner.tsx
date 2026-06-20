import Link from "next/link";
import { ChevronDown, Gift, Sparkles, Users } from "lucide-react";

import { JUNE_PROMOTION } from "@/lib/promotions";

export function PromotionBanner() {
  return (
    <section
      className="animate-in fade-in duration-500 border-b border-rose-200/80 bg-gradient-to-r from-rose-50 via-white to-pink-50"
      aria-label={JUNE_PROMOTION.title}
    >
      <details className="group">
        <summary className="mx-auto flex max-w-6xl cursor-pointer list-none flex-col gap-3 px-4 py-3 marker:hidden sm:px-6 lg:flex-row lg:items-center lg:justify-between [&::-webkit-details-marker]:hidden">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary shadow-sm">
              <Gift className="h-4 w-4" aria-hidden="true" />
            </span>

            <div className="min-w-0">
              <p className="font-display text-[15px] font-extrabold leading-5 text-foreground sm:text-base">
                <span className="text-primary">CHỈ 5 SUẤT</span>{" "}
                <span>QUÀ TẶNG</span>{" "}
                <span className="text-primary">45K</span>
              </p>
              <p className="mt-1 text-sm font-medium leading-5 text-muted-foreground">
                Mua 3 tặng 1 <span aria-hidden="true">•</span> Rủ bạn mua cùng nhận quà đôi 45K
              </p>
            </div>
          </div>

          <span className="inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-md border border-primary/20 bg-white/85 px-3 text-sm font-semibold text-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:text-primary group-open:text-primary">
            {JUNE_PROMOTION.ctaLabel}
            <ChevronDown
              className="h-4 w-4 transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </span>
        </summary>

        <div className="border-t border-rose-200/70 bg-white/75">
          <div className="mx-auto grid max-w-6xl gap-4 px-4 py-5 sm:px-6 lg:grid-cols-[1fr_1fr_0.8fr]">
            <article className="rounded-lg border border-rose-200/80 bg-rose-50/70 p-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
                <h2 className="font-display text-sm font-bold">Ưu đãi 1</h2>
              </div>
              <p className="mt-3 text-sm font-medium leading-6 text-foreground">
                Mua 3 móc khóa len handmade bất kỳ
              </p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Tặng 1 Túi Mù Size S trị giá 45.000đ.
              </p>
              <p className="mt-3 text-xs font-medium text-primary">
                Chỉ áp dụng cho 3 khách hàng đầu tiên.
              </p>
            </article>

            <article className="rounded-lg border border-rose-200/80 bg-rose-50/70 p-4">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" aria-hidden="true" />
                <h2 className="font-display text-sm font-bold">Ưu đãi 2</h2>
              </div>
              <p className="mt-3 text-sm font-medium leading-6 text-foreground">
                Rủ bạn mua cùng tại LyliShop
              </p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Mỗi người nhận 1 móc khóa Size S trị giá 45.000đ.
              </p>
              <p className="mt-3 text-xs font-medium text-primary">
                Chỉ áp dụng cho 2 cặp khách hàng đầu tiên.
              </p>
            </article>

            <div className="rounded-lg border border-border/70 bg-background/80 p-4">
              <h2 className="font-display text-sm font-bold">Lưu ý</h2>
              <ul className="mt-3 grid gap-2 text-xs leading-5 text-muted-foreground">
                {JUNE_PROMOTION.notes.map((note) => (
                  <li key={note} className="flex items-start gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={JUNE_PROMOTION.href}
                className="mt-4 inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Xem sản phẩm ưu đãi
              </Link>
            </div>
          </div>
        </div>
      </details>
    </section>
  );
}
