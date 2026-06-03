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

export const PRODUCTS: Product[] = [
  {
    slug: "crochet-bear-keychain",
    name: "Móc khóa thỏ con",
    priceVnd: 89000,
    shortDescription: "Thỏ nhỏ xinh, mềm tay, kèm khoen khóa vàng chắc chắn.",
    longDescription:
      "Móc khóa thỏ con handmade được làm thủ công từng mũi len, dáng nhỏ gọn và dễ thương để treo chìa khóa, túi xách, balo hoặc hộp bút. Sản phẩm dùng len mềm, bề mặt êm tay, phần khoen khóa vàng chắc chắn giúp bạn dùng hằng ngày mà vẫn giữ được vẻ chỉn chu. Mẫu thỏ con phù hợp làm quà tặng sinh nhật, quà cảm ơn hoặc món phụ kiện nhỏ cho người thích đồ len xinh xắn. Bạn có thể nhắn shop để chọn màu tai, màu thân hoặc phối thêm chi tiết nhỏ trước khi shop bắt đầu làm.",
    metaDescription:
      "Móc khóa thỏ con handmade bằng len mềm, kèm khoen vàng chắc chắn, phù hợp treo túi, chìa khóa hoặc làm quà tặng nhỏ xinh.",
    rating: 4.9,
    reviewCount: 128,
    image: {
      src: "/product-assets/crochet-bear-keychain.jpg",
      alt: "Móc khóa thỏ con handmade bằng len với khoen vàng trên nền hồng nhạt",
      width: 1000,
      height: 995,
    },
    highlights: ["Đóng gói sẵn để tặng", "Len mềm cao cấp", "Khoen vàng chắc chắn"],
  },
  {
    slug: "strawberry-yarn-charm",
    name: "Móc treo dâu tây",
    priceVnd: 79000,
    shortDescription: "Dâu tây ngọt ngào, hợp treo túi, ví, chìa khóa.",
    longDescription:
      "Móc treo dâu tây handmade có dáng quả nhỏ xinh, phần hạt thêu tỉ mỉ và chiếc lá gọn gàng phía trên. Sản phẩm nhẹ, dễ treo lên túi, ví, chìa khóa hoặc dây trang trí điện thoại. Tông màu đỏ nổi bật giúp phụ kiện trông vui mắt nhưng vẫn mềm mại nhờ chất len êm tay. Đây là lựa chọn phù hợp khi bạn muốn tìm một món quà nhỏ, dễ thương và có cảm giác riêng hơn đồ sản xuất hàng loạt. Shop có thể hỗ trợ chọn sắc đỏ, xanh lá hoặc điều chỉnh chi tiết theo sở thích của bạn.",
    metaDescription:
      "Móc treo dâu tây handmade nhỏ gọn, thêu hạt tỉ mỉ, dễ treo túi, ví hoặc chìa khóa và có thể tùy chỉnh màu theo yêu cầu.",
    rating: 4.8,
    reviewCount: 96,
    image: {
      src: "/product-assets/strawberry-yarn-charm.jpg",
      alt: "Móc treo dâu tây handmade bằng len trên nền hồng phấn",
      width: 1000,
      height: 993,
    },
    highlights: ["Nhẹ và bền", "Mũi len gọn", "Phù hợp làm quà"],
  },
  {
    slug: "tulip-crochet-keychain",
    name: "Móc khóa hoa tulip",
    priceVnd: 59000,
    shortDescription: "Tulip tối giản, lên ảnh xinh và tinh tế.",
    longDescription:
      "Móc khóa hoa tulip handmade lấy cảm hứng từ một bó hoa nhỏ mang theo mỗi ngày. Dáng hoa gọn, màu sắc dịu và dễ phối với balo, túi tote, hộp bút hoặc chùm chìa khóa. Từng cánh hoa được móc và hoàn thiện thủ công để giữ form mềm, không quá cứng nhưng vẫn rõ dáng tulip. Mẫu này hợp với người thích phong cách nhẹ nhàng, tối giản và tinh tế. Bạn có thể đặt theo màu yêu thích như hồng, trắng, vàng, tím hoặc phối màu riêng để làm quà tặng.",
    metaDescription:
      "Móc khóa hoa tulip handmade dáng gọn, màu dịu, phù hợp treo balo, túi tote, hộp bút hoặc làm quà tặng tinh tế.",
    rating: 4.9,
    reviewCount: 74,
    image: {
      src: "/product-assets/tulip-crochet-keychain.jpg",
      alt: "Móc khóa hoa tulip handmade màu hồng trên nền trắng hồng",
      width: 1000,
      height: 1000,
    },
    highlights: ["Dáng gọn đẹp", "Phong cách nhẹ nhàng", "Phù hợp đi học"],
  },
  {
    slug: "bunny-plush-charm",
    name: "Móc treo thỏ bông",
    priceVnd: 99000,
    shortDescription: "Thỏ tai dài, dáng mềm mại và đáng yêu.",
    longDescription:
      "Móc treo thỏ bông handmade có đôi tai dài, thân bo tròn và cảm giác mềm mại khi cầm trên tay. Sản phẩm được làm thủ công bằng len, phù hợp treo túi, chìa khóa, balo hoặc dùng như một món phụ kiện nhỏ để trang trí góc học tập. Dáng thỏ đáng yêu nhưng vẫn gọn, không quá cồng kềnh khi mang theo hằng ngày. Đây là mẫu hợp để tặng bạn bè, người thân hoặc tự thưởng cho bản thân nếu bạn thích đồ len có nét riêng. Shop có thể đổi màu thân, màu tai hoặc thêm chi tiết nhỏ theo yêu cầu.",
    metaDescription:
      "Móc treo thỏ bông handmade mềm tay, tai dài đáng yêu, phù hợp treo túi, balo, chìa khóa hoặc tặng bạn bè.",
    rating: 5.0,
    reviewCount: 63,
    image: {
      src: "/product-assets/bunny-plush-charm.jpg",
      alt: "Móc treo thỏ bông handmade bằng len trên nền hồng nhạt",
      width: 1000,
      height: 1000,
    },
    highlights: ["Mềm tay", "Tai dài đặc trưng", "Làm thủ công tỉ mỉ"],
  },
  {
    slug: "cat-paw-crochet-accessory",
    name: "Phụ kiện bàn chân mèo",
    priceVnd: 69000,
    shortDescription: "Chi tiết đệm chân thêu xinh, mềm mại và vui mắt.",
    longDescription:
      "Phụ kiện bàn chân mèo handmade có phần đệm chân được thêu gọn, tạo cảm giác vui mắt và rất dễ thương. Kích thước nhỏ giúp sản phẩm dễ treo vào chìa khóa, túi mini, dây điện thoại hoặc balo mà không gây vướng. Chất len mềm, đường hoàn thiện chắc chắn và màu sắc có thể tùy chỉnh theo sở thích. Mẫu bàn chân mèo phù hợp với người yêu mèo, thích phụ kiện nhỏ xinh hoặc muốn tìm một món quà handmade có giá vừa dễ chọn vừa có dấu ấn cá nhân.",
    metaDescription:
      "Phụ kiện bàn chân mèo handmade bằng len mềm, thêu đệm chân dễ thương, hợp treo chìa khóa, túi mini hoặc dây điện thoại.",
    rating: 4.8,
    reviewCount: 82,
    image: {
      src: "/product-assets/cat-paw-crochet-accessory.jpg",
      alt: "Phụ kiện bàn chân mèo handmade bằng len với chi tiết đệm chân",
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
