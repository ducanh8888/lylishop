import {
  HeartHandshake,
  Sparkles,
  PackageCheck,
  Palette,
  Truck,
} from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

const REASONS = [
  {
    title: "Thủ công tỉ mỉ",
    description: "Móc tay, khâu tay, hoàn thiện kỹ từng chi tiết.",
    icon: HeartHandshake,
  },
  {
    title: "Len cao cấp",
    description: "Mềm tay, lên form gọn, nhìn xinh và bền theo thời gian.",
    icon: Sparkles,
  },
  {
    title: "Đóng gói quà xinh",
    description: "Phong cách boutique, mở ra là thấy “xịn” ngay.",
    icon: PackageCheck,
  },
  {
    title: "Tùy chỉnh theo yêu cầu",
    description: "Chọn màu, thêm nơ/hoa/chi tiết nhỏ để đúng gu của bạn.",
    icon: Palette,
  },
  {
    title: "Hỗ trợ giao hàng nhanh",
    description: "Trả lời nhanh và cập nhật đơn hàng rõ ràng qua chat.",
    icon: Truck,
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why" className="bg-gradient-to-b from-rose-50 to-background py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Vì sao LyliShop"
          title="Mềm sang, handmade chỉn chu"
          description="Tụi mình tập trung vào mũi len gọn đẹp, hoàn thiện đồng đều và trải nghiệm đặt hàng đơn giản qua các app bạn dùng hằng ngày."
        />

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r) => {
            const Icon = r.icon;
            return (
              <StaggerItem key={r.title}>
                <Card className="h-full border-border/70 bg-white/60 p-6 shadow-sm backdrop-blur-md">
                  <div className="flex items-start gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold">{r.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {r.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
