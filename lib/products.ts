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
  images?: Array<{
    src: string;
    alt: string;
    width: number;
    height: number;
  }>;
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

const TIERED_SIZE_AND_PRICE_NOTE = `Giá sản phẩm thay đổi theo kích thước và độ chi tiết của từng mẫu.
• Giá sp từ 45k / size S: 6-7 cm.
• Giá sp từ 59k / size M: 8-10 cm.
• Giá sp từ 69k / size L: 10-12 cm.`;

function productDescriptionWithTieredPrice(title: string, bullets: string[]) {
  return `${title}

${bullets.map((bullet) => `• ${bullet}`).join("\n")}

${TIERED_SIZE_AND_PRICE_NOTE}`;
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
  {
    slug: "set-moc-khoa-len-6-mau-cute",
    name: "Set móc khóa len 6 mẫu cute",
    priceVnd: 45000,
    shortDescription:
      "Set móc khóa len handmade gồm 6 mẫu nhỏ xinh, phù hợp treo balo, túi xách hoặc làm quà tặng.",
    longDescription: productDescriptionWithTieredPrice("Set móc khóa len handmade 6 mẫu cute", [
      "Handmade 100%, đan thủ công từng mũi len.",
      "Gồm 6 mẫu móc khóa len nhỏ xinh, dễ phối theo nhiều phong cách.",
      "Len Milk cotton, bền, giữ form tốt và hạn chế xù lông.",
      "Khoen móc kim loại chắc chắn, phù hợp treo chìa khóa, túi xách, balo hoặc hộp bút.",
      "Phù hợp làm quà tặng sinh nhật, quà cảm ơn, quà nhóm bạn hoặc quà handmade dễ thương.",
      "Có thể lựa chọn màu sắc và thêm một số chi tiết theo yêu cầu.",
    ]),
    metaDescription:
      "Set móc khóa len handmade 6 mẫu cute, giá từ 45k size S, có size M và L, phù hợp treo balo, túi xách hoặc làm quà tặng handmade.",
    rating: 4.9,
    reviewCount: 51,
    image: {
      src: "/product-assets/set-6-mau-cute-2.jpg",
      alt: "Set móc khóa len handmade 6 mẫu cute ảnh đại diện",
      width: 1920,
      height: 2560,
    },
    images: [
      {
        src: "/product-assets/set-6-mau-cute-2.jpg",
        alt: "Ảnh 1 set móc khóa len handmade 6 mẫu cute",
        width: 1920,
        height: 2560,
      },
      {
        src: "/product-assets/set-6-mau-cute-1.jpg",
        alt: "Ảnh 2 set móc khóa len handmade 6 mẫu cute",
        width: 1920,
        height: 2560,
      },
    ],
    highlights: ["Gồm 6 mẫu", "Giá từ 45k", "Có size S, M, L"],
  },
  {
    slug: "set-moc-khoa-len-6-mau-qua-tang",
    name: "Set móc khóa len 6 mẫu quà tặng",
    priceVnd: 45000,
    shortDescription:
      "Set 6 móc khóa len handmade phong cách quà tặng, dễ chọn màu và đóng gói xinh theo yêu cầu.",
    longDescription: productDescriptionWithTieredPrice("Set móc khóa len handmade 6 mẫu quà tặng", [
      "Handmade 100%, đan thủ công từng mũi len.",
      "Gồm 6 mẫu móc khóa len phù hợp làm quà cho bạn bè, người yêu hoặc người thích đồ handmade.",
      "Len Milk cotton, mềm tay, bền và giữ form tốt khi treo hằng ngày.",
      "Khoen móc kim loại chắc chắn, dễ treo balo, túi tote, chìa khóa hoặc hộp bút.",
      "Có thể trao đổi màu sắc, phong cách dễ thương hoặc nhẹ nhàng trước khi làm.",
      "Shop xác nhận mẫu, size và thời gian hoàn thiện trước khi chốt đơn.",
    ]),
    metaDescription:
      "Set móc khóa len handmade 6 mẫu quà tặng, giá từ 45k size S, có size M và L, nhận chọn màu và đóng gói xinh theo yêu cầu.",
    rating: 4.9,
    reviewCount: 47,
    image: {
      src: "/product-assets/set-6-mau-qua-tang-1.jpg",
      alt: "Set móc khóa len handmade 6 mẫu quà tặng ảnh đại diện",
      width: 1254,
      height: 1254,
    },
    images: [
      {
        src: "/product-assets/set-6-mau-qua-tang-1.jpg",
        alt: "Ảnh 1 set móc khóa len handmade 6 mẫu quà tặng",
        width: 1254,
        height: 1254,
      },
      {
        src: "/product-assets/set-6-mau-qua-tang-2.jpg",
        alt: "Ảnh 2 set móc khóa len handmade 6 mẫu quà tặng",
        width: 1280,
        height: 1024,
      },
    ],
    highlights: ["Gồm 6 mẫu", "Hợp làm quà", "Nhận chọn màu"],
  },
  {
    slug: "set-moc-khoa-len-10-mau-mix",
    name: "Set móc khóa len 10 mẫu mix",
    priceVnd: 45000,
    shortDescription:
      "Set móc khóa len handmade 10 mẫu mix, phù hợp đặt theo nhóm, quà lớp hoặc bộ sưu tập phụ kiện len.",
    longDescription: productDescriptionWithTieredPrice("Set móc khóa len handmade 10 mẫu mix", [
      "Handmade 100%, đan thủ công từng mũi len.",
      "Gồm 10 mẫu móc khóa len mix nhiều kiểu dáng, phù hợp đặt theo nhóm hoặc làm quà số lượng nhiều.",
      "Len Milk cotton, bền, giữ form tốt và hạn chế xù lông khi sử dụng đúng cách.",
      "Khoen móc kim loại chắc chắn, thích hợp treo chìa khóa, túi xách, balo hoặc hộp bút.",
      "Phù hợp làm quà sinh nhật, quà lớp, quà cảm ơn hoặc bộ sưu tập móc khóa len mini.",
      "Có thể lựa chọn tone màu, size và một số chi tiết nhỏ theo yêu cầu.",
    ]),
    metaDescription:
      "Set móc khóa len handmade 10 mẫu mix, giá từ 45k size S, có size M và L, phù hợp đặt theo nhóm, quà lớp hoặc quà handmade dễ thương.",
    rating: 4.9,
    reviewCount: 58,
    image: {
      src: "/product-assets/set-10-mau-mix-1.jpg",
      alt: "Set móc khóa len handmade 10 mẫu mix ảnh đại diện",
      width: 1280,
      height: 670,
    },
    images: [
      {
        src: "/product-assets/set-10-mau-mix-1.jpg",
        alt: "Ảnh 1 set móc khóa len handmade 10 mẫu mix",
        width: 1280,
        height: 670,
      },
      {
        src: "/product-assets/set-10-mau-mix-4.jpg",
        alt: "Ảnh 2 set móc khóa len handmade 10 mẫu mix",
        width: 1536,
        height: 2048,
      },
      {
        src: "/product-assets/set-10-mau-mix-2.jpg",
        alt: "Ảnh 3 set móc khóa len handmade 10 mẫu mix",
        width: 1920,
        height: 2560,
      },
      {
        src: "/product-assets/set-10-mau-mix-3.jpg",
        alt: "Ảnh 4 set móc khóa len handmade 10 mẫu mix",
        width: 1920,
        height: 2560,
      },
    ],
    highlights: ["Gồm 10 mẫu", "Hợp đặt theo nhóm", "Giá từ 45k"],
  },
];

export const FEATURED_PRODUCTS = [
  PRODUCTS.find((p) => p.slug === "set-moc-khoa-len-10-mau-mix"),
  ...PRODUCTS.filter((p) => p.slug !== "set-moc-khoa-len-10-mau-mix").slice(0, 4),
].filter((product): product is Product => Boolean(product));

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
