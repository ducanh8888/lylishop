export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "shipping",
    question: "Shop có giao hàng toàn quốc không? Mất bao lâu?",
    answer:
      "Có. Thông thường shop chuẩn bị đơn trong 1-3 ngày làm việc. Thời gian nhận hàng tùy khu vực, thường 2-5 ngày sau khi gửi. Shop sẽ gửi mã vận đơn/chi tiết theo dõi qua ứng dụng chat bạn dùng.",
  },
  {
    id: "customization",
    question: "Mình có thể chọn màu hoặc tùy chỉnh theo yêu cầu không?",
    answer:
      "Được nha. Bạn có thể chọn màu, yêu cầu thêm chi tiết nhỏ (nơ, tim...), hoặc tag tên ngắn. Nhắn shop qua Instagram/TikTok/Facebook/Zalo để chốt mẫu trước khi shop bắt đầu làm.",
  },
  {
    id: "handmade",
    question: "Sản phẩm có phải handmade 100% không?",
    answer:
      "Đúng rồi. Mỗi sản phẩm đều được móc tay, khâu tay và hoàn thiện với khoen chắc chắn. Vì là handmade nên có thể có khác biệt nhỏ giữa từng sản phẩm, đó cũng là điểm dễ thương riêng.",
  },
  {
    id: "packaging",
    question: "Có đóng gói quà không?",
    answer:
      "Có. Mỗi đơn đều được đóng gói gọn sạch, xinh xắn, sẵn sàng để tặng. Bạn cũng có thể nhờ shop ghi lời nhắn ngắn cho người nhận.",
  },
  {
    id: "order",
    question: "Cách đặt hàng như thế nào?",
    answer:
      "Bạn bấm nút “Đặt qua Instagram” trên website hoặc nhắn shop qua Instagram, TikTok, Facebook hay Zalo. Chỉ cần gửi tên sản phẩm (hoặc ảnh chụp), màu bạn muốn và thông tin nhận hàng.",
  },
];

