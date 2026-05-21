import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/lib/faq";
import { FadeUp } from "@/components/motion/Reveal";

export function FaqSection() {
  return (
    <section id="faq" className="bg-background py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Trả lời nhanh"
          description="Thông tin về giao hàng, tùy chỉnh, đóng gói quà và cách liên hệ đặt hàng."
        />

        <FadeUp className="mx-auto mt-10 max-w-3xl rounded-lg border border-border/70 bg-white/60 p-6 shadow-sm backdrop-blur-md">
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((it) => (
              <AccordionItem key={it.id} value={it.id}>
                <AccordionTrigger>{it.question}</AccordionTrigger>
                <AccordionContent>{it.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>
      </Container>
    </section>
  );
}
