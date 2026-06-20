export type Promotion = {
  title: string;
  eyebrow: string;
  summary: string;
  items: string[];
  notes: string[];
  href: string;
  ctaLabel: string;
};

export const JUNE_PROMOTION: Promotion = {
  title: "CHỈ 5 SUẤT QUÀ TẶNG",
  eyebrow: "Ưu đãi móc khóa len handmade",
  summary:
    "Mua 3 tặng 1 hoặc rủ bạn mua cùng nhận quà đôi 45K.",
  items: [
    "Mua 3 móc khóa len handmade bất kỳ, tặng 1 Túi Mù Size S trị giá 45.000đ. Chỉ áp dụng cho 3 khách hàng đầu tiên.",
    "Rủ bạn mua cùng tại LyliShop, mỗi người nhận 1 móc khóa Size S trị giá 45.000đ. Chỉ áp dụng cho 2 cặp khách hàng đầu tiên.",
  ],
  notes: [
    "Tổng số lượng quà tặng: 5 suất.",
    "Mỗi khách hàng chỉ được áp dụng 1 chương trình ưu đãi.",
    "Không áp dụng đồng thời 2 chương trình.",
    "Quà tặng không quy đổi thành tiền mặt.",
    "Chương trình kết thúc khi hết quà tặng.",
  ],
  href: "/#featured",
  ctaLabel: "Xem ưu đãi",
};
