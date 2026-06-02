import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chính sách bảo mật",
  description:
    "Chính sách bảo mật của LyliShop về cách xử lý tin nhắn, thông tin đặt hàng và dữ liệu cá nhân khi khách liên hệ đặt sản phẩm handmade.",
  alternates: { canonical: "/privacy" },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    url: `${SITE.url}/privacy`,
    title: "Chính sách bảo mật | LyliShop",
    description: "Cách LyliShop xử lý tin nhắn, thông tin đặt hàng và dữ liệu cá nhân.",
  },
};

export default function PrivacyPage() {
  return (
    <section className="bg-background py-14 sm:py-20">
      <Container>
        <article className="mx-auto max-w-3xl rounded-xl border border-border/70 bg-white/60 p-8 shadow-sm backdrop-blur-md">
          <h1 className="font-display text-3xl font-semibold tracking-tight">Chính sách bảo mật</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Cập nhật: {new Date().getFullYear()}.
          </p>

          <div className="prose prose-sm mt-8 max-w-none prose-p:text-muted-foreground prose-li:text-muted-foreground">
            <p>
              LyliShop là website trưng bày sản phẩm handmade. Bạn đặt hàng qua tin nhắn trên
              Instagram, TikTok, Facebook hoặc Zalo. Shop chỉ sử dụng thông tin bạn cung cấp để xác
              nhận đơn, sắp xếp giao hàng và hỗ trợ sau mua.
            </p>

            <h2>Thông tin shop có thể thu thập</h2>
            <ul>
              <li>Nội dung tin nhắn bạn gửi (mẫu, màu, số lượng).</li>
              <li>Thông tin nhận hàng bạn cung cấp (tên, số điện thoại, địa chỉ).</li>
            </ul>

            <h2>Mục đích sử dụng</h2>
            <ul>
              <li>Để làm sản phẩm handmade và xác nhận tùy chỉnh.</li>
              <li>Để sắp xếp giao hàng và gửi mã vận đơn (nếu có).</li>
              <li>Để trả lời câu hỏi và hỗ trợ khách hàng.</li>
            </ul>

            <h2>Nền tảng bên thứ ba</h2>
            <p>
              Nền tảng nhắn tin và đơn vị vận chuyển do bên thứ ba cung cấp. Chính sách bảo mật của
              các bên đó có thể áp dụng khi bạn sử dụng dịch vụ của họ.
            </p>

            <h2>Liên hệ</h2>
            <p>
              Nếu bạn có yêu cầu liên quan tới dữ liệu cá nhân, hãy nhắn shop qua đúng kênh bạn đã
              dùng để đặt hàng.
            </p>
          </div>
        </article>
      </Container>
    </section>
  );
}
