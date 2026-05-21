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
    description: "Mềm tay, lên form gọn, giữ dáng đẹp theo thời gian.",
    icon: Sparkles,
  },
  {
    title: "Đóng gói quà chỉn chu",
    description: "Phong cách boutique, sạch đẹp và sẵn sàng để tặng.",
    icon: PackageCheck,
  },
  {
    title: "Tùy chỉnh theo yêu cầu",
    description: "Chọn màu, thêm nơ, hoa hoặc chi tiết nhỏ theo phong cách bạn thích.",
    icon: Palette,
  },
  {
    title: "Hỗ trợ đơn hàng rõ ràng",
    description: "Phản hồi nhanh và cập nhật tình trạng đơn qua kênh nhắn tin bạn đã chọn.",
    icon: Truck,
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why" className="bg-gradient-to-b from-rose-50 to-background py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Why LyliShop"
          title="Mềm mại, tinh tế và chỉn chu"
          description="Chúng mình tập trung vào mũi len gọn đẹp, hoàn thiện đồng đều và trải nghiệm đặt hàng đơn giản qua các kênh bạn quen dùng."
        />

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r) => {
            const Icon = r.icon;
            return (
              <StaggerItem key={r.title}>
                <Card className="h-full border-border/70 bg-white/60 p-6 shadow-sm backdrop-blur-md">
                  <div className="flex items-start gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
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
