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
  title: "Khuyến mãi tháng 6",
  eyebrow: "Ưu đãi móc khóa len handmade",
  summary:
    "Móc khóa len handmade đồng giá từ 45k, có quà tặng size S cho đơn đủ điều kiện trong tháng 6.",
  items: [
    "Mua 3 móc khóa đồng giá 45k, tặng 1 móc khóa túi mù size S cho 3 khách hàng đầu tiên.",
    "Rủ bạn mua cùng, có cơ hội nhận 1 móc khóa size S trị giá tương đương 45k cho 2 khách hàng đã từng mua hàng.",
  ],
  notes: [
    "Mỗi khách chỉ dùng 1 ưu đãi; không cộng dồn, không quy đổi tiền mặt và áp dụng đến khi hết quà tặng.",
  ],
  href: "/#featured",
  ctaLabel: "Xem mẫu 45k",
};
