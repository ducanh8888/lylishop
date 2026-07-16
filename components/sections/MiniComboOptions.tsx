"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Shuffle, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const MINI_MODELS = ["Mèo", "Vịt", "Thỏ", "Cừu", "Cún con"];

function zaloOrderLink(message: string) {
  return `${SITE.socials.zalo}?text=${encodeURIComponent(message)}`;
}

export function MiniComboOptions() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
      <Button type="button" variant="outline" size="sm" className="mt-4 w-full" onClick={() => setIsOpen(true)}>
        Xem combo
      </Button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-end bg-slate-950/35 p-4 sm:items-center sm:justify-center"
          role="presentation"
          onMouseDown={() => setIsOpen(false)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="mini-combo-title"
            className="w-full max-w-lg rounded-xl border border-primary/20 bg-background p-5 shadow-xl sm:p-6"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Combo Mini</p>
                <h2 id="mini-combo-title" className="mt-1 font-display text-xl font-semibold tracking-tight">
                  Chọn cách đặt 3 mẫu
                </h2>
              </div>
              <Button type="button" variant="ghost" size="icon" aria-label="Đóng lựa chọn combo Mini" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a
                href={zaloOrderLink("Mình muốn đặt combo Mini Random 3 mẫu. Nhờ shop chọn giúp 3 mẫu bất kỳ.")}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-primary/25 bg-primary/5 p-4 transition hover:border-primary/50 hover:bg-primary/10"
              >
                <Shuffle className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="mt-3 font-semibold">Random 3 mẫu</p>
                <p className="mt-1 text-sm leading-5 text-muted-foreground">Shop sẽ lấy 3 mẫu bất kỳ.</p>
              </a>
              <a
                href={zaloOrderLink("Mình muốn chọn combo Mini theo yêu cầu từ các mẫu có sẵn. Nhờ shop tư vấn giúp.")}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-border bg-white p-4 transition hover:border-primary/50 hover:bg-rose-50/50"
              >
                <MessageCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="mt-3 font-semibold">Chọn theo yêu cầu</p>
                <p className="mt-1 text-sm leading-5 text-muted-foreground">Liên hệ trực tiếp để tư vấn.</p>
              </a>
            </div>

            <div className="mt-5 border-t border-border/70 pt-4">
              <p className="text-sm font-semibold">Các mẫu Mini đang có</p>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {MINI_MODELS.map((model) => (
                  <div key={model} className="rounded-md border border-border/70 bg-rose-50/40 px-3 py-2 text-center text-sm font-medium">
                    {model}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
