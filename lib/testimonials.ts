export type Testimonial = {
  name: string;
  handle: string;
  rating: number;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mina Tran",
    handle: "@minatrn",
    rating: 5,
    quote:
      "Móc khóa gấu ngoài đời còn xinh hơn ảnh. Mũi len gọn, đóng gói chỉn chu, mở ra thấy như một món quà tự thưởng.",
  },
  {
    name: "Chloe Nguyen",
    handle: "@chloeng",
    rating: 5,
    quote:
      "Mình mua tulip treo ba lô, nhẹ mà nhìn rất tinh tế. Khoen chắc, cầm lên thấy sản phẩm được hoàn thiện kỹ.",
  },
  {
    name: "Sophie Lee",
    handle: "@sophiel",
    rating: 5,
    quote:
      "Nhắn Instagram phản hồi nhanh, tư vấn phối màu rất dễ thương. Mình tặng sinh nhật bạn và bạn thích lắm.",
  },
  {
    name: "Hana Park",
    handle: "@hanapark",
    rating: 4,
    quote:
      "Charm dâu tây đáng yêu, chi tiết thêu gọn đẹp. Shop cập nhật tình trạng đơn rõ ràng nên mình dễ theo dõi.",
  },
];
