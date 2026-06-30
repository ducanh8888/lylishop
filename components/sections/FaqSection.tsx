import { ChevronDown } from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQ_ITEMS } from "@/lib/faq";

export function FaqSection() {
  return (
    <section id="faq" className="bg-background py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Câu hỏi"
          title="Câu hỏi thường gặp về móc khóa len"
          description="Thông tin về giao hàng, tùy chỉnh màu, đóng gói quà và cách liên hệ đặt móc khóa len."
        />

        <div className="mx-auto mt-10 max-w-3xl rounded-lg border border-border/70 bg-white/60 p-6 shadow-sm backdrop-blur-md">
          {FAQ_ITEMS.map((it) => (
            <details
              key={it.id}
              className="group border-b border-border/70 py-4 first:pt-0 last:border-b-0 last:pb-0"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-medium text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
                <span>{it.question}</span>
                <ChevronDown
                  className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{it.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
