export type Product = {
  slug: string;
  name: string;
  priceVnd: number;
  shortDescription: string;
  longDescription: string;
  metaDescription: string;
  rating: number;
  reviewCount: number;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  highlights: string[];
};

const SIZE_AND_PRICE_NOTE = `Kích thước:
• Sản phẩm size S: 6-7 cm.

Nhận theo yêu cầu:
• Size S: 6-7 cm.
• Size M: 8-10 cm.
• Size L: 10-12 cm.

Giá sản phẩm thay đổi theo kích thước và độ chi tiết của từng mẫu.`;

function productDescription(title: string, bullets: string[]) {
  return `${title}

${bullets.map((bullet) => `• ${bullet}`).join("\n")}

${SIZE_AND_PRICE_NOTE}`;
}

export const PRODUCTS: Product[] = [
  {
    slug: "crochet-bear-keychain",
    name: "Móc khóa len thỏ con",
    priceVnd: 89000,
    shortDescription: "Móc khóa len thỏ con nhỏ xinh, mềm tay, kèm khoen vàng chắc chắn.",
    longDescription: productDescription("Móc khóa thỏ con handmade", [
      "Handmade 100%, đan thủ công từng mũi len.",
      "Len Milk cotton, bền, giữ form tốt và hạn chế xù lông.",
      "Khoen móc kim loại màu vàng chắc chắn, dày dặn.",
      "Thích hợp treo chìa khóa, túi xách, balo hoặc hộp bút.",
      "Phù hợp làm quà tặng sinh nhật, quà cảm ơn hoặc dành cho người yêu thích đồ len handmade.",
      "Có thể lựa chọn màu sắc và thêm một số chi tiết theo yêu cầu.",
    ]),
    metaDescription:
      "Móc khóa len thỏ con handmade bằng len mềm, kèm khoen vàng chắc chắn, phù hợp treo túi, chìa khóa hoặc làm quà tặng nhỏ xinh.",
    rating: 4.9,
    reviewCount: 128,
    image: {
      src: "/product-assets/crochet-bear-keychain.jpg",
      alt: "Móc khóa len thỏ con handmade với khoen vàng trên nền hồng nhạt",
      width: 1000,
      height: 995,
    },
    highlights: ["Đóng gói sẵn để tặng", "Len mềm cao cấp", "Khoen vàng chắc chắn"],
  },
  {
    slug: "strawberry-yarn-charm",
    name: "Móc khóa len dâu tây",
    priceVnd: 79000,
    shortDescription: "Móc khóa len dâu tây ngọt ngào, hợp treo túi, ví, chìa khóa.",
    longDescription: productDescription("Móc khóa dâu tây handmade", [
      "Handmade 100%, đan thủ công từng mũi len.",
      "Len Milk cotton, bền, giữ form tốt và hạn chế xù lông.",
      "Khoen móc kim loại màu vàng chắc chắn, dày dặn.",
      "Tạo hình quả dâu tây nhỏ xinh, có lá xanh và chi tiết hạt thêu tỉ mỉ.",
      "Thích hợp treo chìa khóa, túi xách, ví, balo hoặc hộp bút.",
      "Phù hợp làm quà tặng sinh nhật, quà cảm ơn hoặc dành cho người yêu thích đồ len handmade.",
      "Có thể lựa chọn màu sắc và thêm một số chi tiết theo yêu cầu.",
    ]),
    metaDescription:
      "Móc khóa len dâu tây handmade nhỏ gọn, thêu hạt tỉ mỉ, dễ treo túi, ví hoặc chìa khóa và có thể tùy chỉnh màu theo yêu cầu.",
    rating: 4.8,
    reviewCount: 96,
    image: {
      src: "/product-assets/strawberry-yarn-charm.jpg",
      alt: "Móc khóa len dâu tây handmade trên nền hồng phấn",
      width: 1000,
      height: 993,
    },
    highlights: ["Nhẹ và bền", "Mũi len gọn", "Phù hợp làm quà"],
  },
  {
    slug: "tulip-crochet-keychain",
    name: "Móc khóa len hoa tulip",
    priceVnd: 59000,
    shortDescription: "Móc khóa len hoa tulip tối giản, lên ảnh xinh và tinh tế.",
    longDescription: productDescription("Móc khóa hoa tulip handmade", [
      "Handmade 100%, đan thủ công từng mũi len.",
      "Len Milk cotton, bền, giữ form tốt và hạn chế xù lông.",
      "Khoen móc kim loại màu vàng chắc chắn, dày dặn.",
      "Tạo hình hoa tulip nhỏ gọn, màu sắc nhẹ nhàng và dễ phối với nhiều phong cách.",
      "Thích hợp treo chìa khóa, túi tote, balo hoặc hộp bút.",
      "Phù hợp làm quà tặng sinh nhật, quà cảm ơn hoặc dành cho người yêu thích đồ len handmade.",
      "Có thể lựa chọn màu hoa, màu lá và thêm một số chi tiết theo yêu cầu.",
    ]),
    metaDescription:
      "Móc khóa len hoa tulip handmade dáng gọn, màu dịu, phù hợp treo balo, túi tote, hộp bút hoặc làm quà tặng tinh tế.",
    rating: 4.9,
    reviewCount: 74,
    image: {
      src: "/product-assets/tulip-crochet-keychain.jpg",
      alt: "Móc khóa len hoa tulip handmade màu hồng trên nền trắng hồng",
      width: 1000,
      height: 1000,
    },
    highlights: ["Dáng gọn đẹp", "Phong cách nhẹ nhàng", "Phù hợp đi học"],
  },
  {
    slug: "bunny-plush-charm",
    name: "Móc khóa thú len thỏ bông",
    priceVnd: 99000,
    shortDescription: "Móc khóa thú len thỏ tai dài, dáng mềm mại và đáng yêu.",
    longDescription: productDescription("Móc khóa thỏ bông handmade", [
      "Handmade 100%, đan thủ công từng mũi len.",
      "Len Milk cotton, bền, giữ form tốt và hạn chế xù lông.",
      "Khoen móc kim loại màu vàng chắc chắn, dày dặn.",
      "Tạo hình thỏ tai dài mềm mại, dáng bo tròn và dễ thương khi treo hằng ngày.",
      "Thích hợp treo chìa khóa, túi xách, balo hoặc trang trí góc học tập.",
      "Phù hợp làm quà tặng sinh nhật, quà cảm ơn hoặc dành cho người yêu thích đồ len handmade.",
      "Có thể lựa chọn màu thân, màu tai và thêm một số chi tiết theo yêu cầu.",
    ]),
    metaDescription:
      "Móc khóa thú len thỏ bông handmade mềm tay, tai dài đáng yêu, phù hợp treo túi, balo, chìa khóa hoặc tặng bạn bè.",
    rating: 5.0,
    reviewCount: 63,
    image: {
      src: "/product-assets/bunny-plush-charm.jpg",
      alt: "Móc khóa thú len thỏ bông handmade trên nền hồng nhạt",
      width: 1000,
      height: 1000,
    },
    highlights: ["Mềm tay", "Tai dài đặc trưng", "Làm thủ công tỉ mỉ"],
  },
  {
    slug: "cat-paw-crochet-accessory",
    name: "Móc khóa len bàn chân mèo",
    priceVnd: 69000,
    shortDescription: "Móc khóa len bàn chân mèo với đệm chân thêu xinh, mềm mại.",
    longDescription: productDescription("Móc khóa bàn chân mèo handmade", [
      "Handmade 100%, đan thủ công từng mũi len.",
      "Len Milk cotton, bền, giữ form tốt và hạn chế xù lông.",
      "Khoen móc kim loại màu vàng chắc chắn, dày dặn.",
      "Tạo hình bàn chân mèo nhỏ xinh, có phần đệm chân thêu nổi bật.",
      "Thích hợp treo chìa khóa, túi mini, balo hoặc dây điện thoại.",
      "Phù hợp làm quà tặng sinh nhật, quà cảm ơn hoặc dành cho người yêu thích đồ len handmade.",
      "Có thể lựa chọn màu nền, màu đệm chân và thêm một số chi tiết theo yêu cầu.",
    ]),
    metaDescription:
      "Móc khóa len bàn chân mèo handmade bằng len mềm, thêu đệm chân dễ thương, hợp treo chìa khóa, túi mini hoặc dây điện thoại.",
    rating: 4.8,
    reviewCount: 82,
    image: {
      src: "/product-assets/cat-paw-crochet-accessory.jpg",
      alt: "Móc khóa len bàn chân mèo handmade với chi tiết đệm chân",
      width: 1000,
      height: 1176,
    },
    highlights: ["Dễ thương", "Thêu gọn đẹp", "Dễ kẹp, dễ treo"],
  },
];

export const FEATURED_PRODUCTS = PRODUCTS.slice(0, 5);

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
