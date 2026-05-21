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
      "Móc khóa gấu ngoài đời còn xinh hơn ảnh. Mũi len gọn, đóng gói rất có tâm, mở ra thấy như quà tự thưởng luôn.",
  },
  {
    name: "Chloe Nguyen",
    handle: "@chloeng",
    rating: 5,
    quote:
      "Mình mua tulip treo balo, nhẹ mà nhìn sang. Khoen chắc, cầm lên cảm giác rất “xịn”.",
  },
  {
    name: "Sophie Lee",
    handle: "@sophiel",
    rating: 5,
    quote:
      "Nhắn Instagram phản hồi nhanh, tư vấn phối màu dễ thương. Mình tặng bạn sinh nhật, bạn mê luôn.",
  },
  {
    name: "Hana Park",
    handle: "@hanapark",
    rating: 4,
    quote:
      "Charm dâu tây siêu đáng yêu, chi tiết thêu gọn đẹp. Shop cập nhật tình trạng đơn rõ ràng, dễ theo dõi.",
  },
];
