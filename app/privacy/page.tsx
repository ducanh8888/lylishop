import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chính sách riêng tư",
  alternates: { canonical: "/privacy" },
  openGraph: {
    url: `${SITE.url}/privacy`,
    title: "Chính sách riêng tư | LyliShop",
    description: "Cách LyliShop xử lý tin nhắn, thông tin đặt hàng và quyền riêng tư.",
  },
};

export default function PrivacyPage() {
  return (
    <section className="bg-background py-14 sm:py-20">
      <Container>
        <article className="mx-auto max-w-3xl rounded-xl border border-border/70 bg-white/60 p-8 shadow-sm backdrop-blur-md">
          <h1 className="font-display text-3xl font-semibold tracking-tight">Chính sách riêng tư</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Cập nhật: {new Date().getFullYear()}.
          </p>

          <div className="prose prose-sm mt-8 max-w-none prose-p:text-muted-foreground prose-li:text-muted-foreground">
            <p>
              LyliShop là website trưng bày sản phẩm handmade. Bạn đặt hàng qua chat trên Instagram,
              TikTok, Facebook hoặc Zalo. Shop chỉ sử dụng thông tin bạn cung cấp để xác nhận đơn,
              giao hàng và hỗ trợ sau mua.
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

            <h2>Dịch vụ bên thứ ba</h2>
            <p>
              Nền tảng nhắn tin và đơn vị vận chuyển do bên thứ ba cung cấp. Chính sách riêng tư của
              họ có thể áp dụng khi bạn sử dụng các nền tảng đó.
            </p>

            <h2>Liên hệ</h2>
            <p>
              Nếu bạn có yêu cầu liên quan tới quyền riêng tư, hãy nhắn shop qua đúng kênh bạn đã
              dùng để đặt hàng.
            </p>
          </div>
        </article>
      </Container>
    </section>
  );
}

