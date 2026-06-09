export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "shipping",
    question: "Shop có giao hàng toàn quốc không? Thời gian bao lâu?",
    answer:
      "Có. Shop thường chuẩn bị đơn trong 1–3 ngày làm việc. Sau khi gửi hàng, thời gian nhận khoảng 2–5 ngày tùy khu vực.",
  },
  {
    id: "customization",
    question: "Mình có thể chọn màu hoặc tùy chỉnh theo yêu cầu không?",
    answer:
      "Được. Bạn có thể chọn màu, thêm nơ, tim hoặc chi tiết nhỏ. Nhắn shop để chốt mẫu trước khi LyliShop bắt đầu làm.",
  },
  {
    id: "handmade",
    question: "Sản phẩm có phải handmade 100% không?",
    answer:
      "Có. Mỗi sản phẩm đều được móc tay, khâu tay và hoàn thiện thủ công. Vì là handmade nên từng mẫu sẽ có nét riêng nhỏ.",
  },
  {
    id: "packaging",
    question: "Có đóng gói quà không?",
    answer:
      "Có. Mỗi đơn được gói gọn gàng, sạch đẹp và sẵn sàng để tặng. Bạn cũng có thể nhờ shop ghi lời nhắn ngắn.",
  },
  {
    id: "order",
    question: "Cách đặt hàng như thế nào?",
    answer:
      "Bạn chỉ cần gửi mẫu muốn đặt, màu yêu thích và số lượng. Shop sẽ xác nhận giá, thời gian làm và thông tin nhận hàng sau.",
  },
];
