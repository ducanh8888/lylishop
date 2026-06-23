import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Điều khoản đặt móc khóa len handmade online",
  description:
    "Điều khoản đặt hàng tại LyliShop khi khách chọn mẫu, tùy chỉnh màu, xác nhận giá, giao hàng và liên hệ đặt sản phẩm handmade.",
  alternates: { canonical: "/terms" },
  openGraph: {
    url: `${SITE.url}/terms`,
    title: "Điều khoản đặt móc khóa len handmade online | LyliShop",
    description: "Điều khoản khi đặt móc khóa len handmade và phụ kiện len từ LyliShop.",
  },
};

export default function TermsPage() {
  return (
    <section className="bg-background py-14 sm:py-20">
      <Container>
        <article className="mx-auto max-w-3xl rounded-xl border border-border/70 bg-white/60 p-8 shadow-sm backdrop-blur-md">
          <h1 className="font-display text-3xl font-semibold tracking-tight">Điều khoản đặt hàng</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Các điều khoản này giúp thống nhất kỳ vọng khi bạn đặt sản phẩm handmade qua mạng xã hội.
          </p>

          <div className="prose prose-sm mt-8 max-w-none prose-p:text-muted-foreground prose-li:text-muted-foreground">
            <h2>Tính chất handmade</h2>
            <p>
              Mỗi sản phẩm đều được móc tay. Kích thước hoặc mũi len có thể chênh lệch rất nhỏ giữa
              từng sản phẩm; đây là nét đặc trưng của đồ handmade.
            </p>

            <h2>Tùy chỉnh</h2>
            <p>
              Shop có nhận tùy chỉnh màu sắc và một số chi tiết nhỏ. Shop sẽ xác nhận mẫu và chi
              tiết qua tin nhắn trước khi bắt đầu làm.
            </p>

            <h2>Đóng gói</h2>
            <p>
              Shop đóng gói gọn gàng, sạch đẹp theo phong cách quà tặng. Bạn có thể nhờ shop ghi
              lời nhắn ngắn cho người nhận.
            </p>

            <h2>Giao hàng</h2>
            <p>
              Thời gian chuẩn bị đơn thường 1–3 ngày làm việc. Thời gian nhận hàng tùy khu vực.
              Shop sẽ gửi mã vận đơn và thông tin theo dõi khi có.
            </p>

            <h2>Đặt hàng</h2>
            <p>
              Đơn hàng được đặt qua tin nhắn Instagram, TikTok, Facebook hoặc Zalo. Đơn được xác
              nhận khi hai bên thống nhất mẫu, giá và thông tin nhận hàng qua tin nhắn.
            </p>
          </div>
        </article>
      </Container>
    </section>
  );
}
