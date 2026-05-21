import { Camera, MessageCircle, Music2, Send, ThumbsUp } from "lucide-react";

import { SITE } from "@/lib/site";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CopyToClipboard } from "@/components/CopyToClipboard";
import { FadeUp } from "@/components/motion/Reveal";

const ORDER_TEMPLATE = `Xin chào LyliShop 👋

Mình muốn đặt:
- Sản phẩm:
- Màu:
- Số lượng:

Thông tin nhận hàng:
- Tên:
- SĐT:
- Địa chỉ:

Cảm ơn shop!`;

export function ContactSection() {
  return (
    <section id="order" className="bg-gradient-to-b from-rose-50 to-background py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Liên hệ / Đặt hàng"
          title="Đặt hàng qua mạng xã hội"
          description="Không cần giỏ hàng hay thanh toán trên web. Bạn nhắn shop trên app bạn dùng, shop sẽ xác nhận mẫu, tùy chỉnh và phí ship."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <FadeUp>
            <Card className="h-full border-border/70 bg-white/60 p-6 shadow-sm backdrop-blur-md">
              <h3 className="font-display text-lg font-semibold">Chọn kênh liên hệ</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Shop phản hồi nhanh và hỗ trợ tùy chỉnh màu/mẫu theo yêu cầu.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Button asChild size="lg">
                  <a href={SITE.socials.instagram} target="_blank" rel="noreferrer">
                    <Camera className="h-4 w-4" />
                    Instagram
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={SITE.socials.tiktok} target="_blank" rel="noreferrer">
                    <Music2 className="h-4 w-4" />
                    TikTok
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={SITE.socials.facebook} target="_blank" rel="noreferrer">
                    <ThumbsUp className="h-4 w-4" />
                    Facebook
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={SITE.socials.zalo} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    Zalo
                  </a>
                </Button>
              </div>

              <div className="mt-6 rounded-lg border border-border/70 bg-background/60 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium">Gợi ý</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Gửi ảnh chụp sản phẩm bạn thích để shop xử lý nhanh nhất.
                    </p>
                  </div>
                  <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Send className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Card>
          </FadeUp>

          <FadeUp delay={0.06}>
            <Card className="h-full border-border/70 bg-white/60 p-6 shadow-sm backdrop-blur-md">
              <h3 className="font-display text-lg font-semibold">Mẫu tin nhắn</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Sao chép mẫu này và dán vào chat. Bạn chỉ cần điền tên sản phẩm và màu mong muốn.
              </p>

              <pre className="mt-4 whitespace-pre-wrap rounded-lg border border-border/70 bg-background/60 p-4 text-sm leading-6 text-foreground/90">
                {ORDER_TEMPLATE}
              </pre>

              <div className="mt-4">
                <CopyToClipboard text={ORDER_TEMPLATE} label="Sao chép mẫu tin nhắn" />
              </div>
            </Card>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}

