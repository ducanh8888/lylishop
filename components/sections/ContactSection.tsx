import { Camera, MessageCircle, Music2, Send, ThumbsUp } from "lucide-react";

import { SITE } from "@/lib/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FadeUp } from "@/components/motion/Reveal";

const ORDER_TEMPLATE = `Xin chào LyliShop,

Mình muốn đặt mẫu:
- Sản phẩm:
- Màu mong muốn:
- Số lượng:
- Ghi chú tùy chỉnh:

Thông tin nhận hàng:
- Họ tên:
- Số điện thoại:
- Địa chỉ:

Cảm ơn shop!`;

export function ContactSection() {
  return (
    <section id="order" className="bg-gradient-to-b from-rose-50 to-background py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Đặt hàng"
          title="Liên hệ đặt hàng qua mạng xã hội"
          description="Website không có giỏ hàng hay thanh toán trực tuyến. Bạn nhắn shop qua kênh quen dùng, shop sẽ xác nhận mẫu, tùy chỉnh và phí giao hàng."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <FadeUp>
            <Card className="h-full border-border/70 bg-white/60 p-6 shadow-sm backdrop-blur-md">
              <h3 className="font-display text-lg font-semibold">Kênh liên hệ</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Shop phản hồi nhanh và hỗ trợ tùy chỉnh màu, mẫu theo yêu cầu.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Button asChild size="lg">
                  <a href={SITE.socials.instagram} target="_blank" rel="noreferrer">
                    <Camera className="h-4 w-4" aria-hidden="true" />
                    Instagram
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={SITE.socials.tiktok} target="_blank" rel="noreferrer">
                    <Music2 className="h-4 w-4" aria-hidden="true" />
                    TikTok
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={SITE.socials.facebook} target="_blank" rel="noreferrer">
                    <ThumbsUp className="h-4 w-4" aria-hidden="true" />
                    Facebook
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={SITE.socials.zalo} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Zalo
                  </a>
                </Button>
              </div>

              <div className="mt-6 rounded-lg border border-border/70 bg-background/60 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium">Gợi ý</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Gửi ảnh chụp sản phẩm bạn thích để shop hỗ trợ nhanh hơn.
                    </p>
                  </div>
                  <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </Card>
          </FadeUp>

          <FadeUp delay={0.06}>
            <Card className="h-full border-border/70 bg-white/60 p-6 shadow-sm backdrop-blur-md">
              <h3 className="font-display text-lg font-semibold">Mẫu tin nhắn</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Sao chép mẫu này và dán vào tin nhắn. Bạn chỉ cần điền tên sản phẩm, màu mong muốn và thông tin nhận hàng.
              </p>

              <pre className="mt-4 whitespace-pre-wrap rounded-lg border border-border/70 bg-background/60 p-4 text-sm leading-6 text-foreground/90">
                {ORDER_TEMPLATE}
              </pre>
            </Card>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
