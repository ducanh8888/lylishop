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
    description: "Từng sản phẩm được làm bằng tay, hợp để tặng hoặc tự dùng mỗi ngày.",
    icon: HeartHandshake,
  },
  {
    title: "Len cao cấp",
    description: "Mềm tay, form gọn, dễ treo balo, túi xách hoặc chìa khóa.",
    icon: Sparkles,
  },
  {
    title: "Đóng gói quà chỉn chu",
    description: "Gói xinh, sạch đẹp, phù hợp làm quà sinh nhật hoặc quà bất ngờ.",
    icon: PackageCheck,
  },
  {
    title: "Tùy chỉnh theo yêu cầu",
    description: "Chọn tone màu, thêm nơ, hoa hoặc chi tiết nhỏ theo gu của bạn.",
    icon: Palette,
  },
  {
    title: "Hỗ trợ đơn hàng rõ ràng",
    description: "Shop xác nhận mẫu, giá, thời gian làm và phí giao hàng trước khi chốt.",
    icon: Truck,
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why" className="bg-gradient-to-b from-rose-50 to-background py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Vì sao khách thích?"
          title="Đặt móc khóa len dễ thương, rõ ràng và dễ nhắn"
          description="LyliShop tập trung vào sản phẩm dễ tặng, dễ dùng và quy trình đặt hàng đơn giản qua Zalo, Facebook, Instagram hoặc TikTok."
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
