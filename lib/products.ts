export type Product = {
  slug: string;
  name: string;
  priceVnd: number;
  shortDescription: string;
  longDescription: string;
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
    name: "Móc khóa gấu crochet",
    priceVnd: 89000,
    shortDescription: "Gấu nhỏ xinh, mềm tay, kèm khoen vàng chắc chắn.",
    longDescription:
      "Alo 123",
    rating: 4.9,
    reviewCount: 128,
    image: {
      src: "/products/crochet-bear-keychain.png",
      alt: "Móc khóa gấu crochet handmade với khoen vàng trên nền hồng nhạt",
      width: 1200,
      height: 1200,
    },
    highlights: ["Gift-ready packaging", "Len mềm cao cấp", "Khoen vàng chắc chắn"],
  },
  {
    slug: "strawberry-yarn-charm",
    name: "Charm dâu tây crochet",
    priceVnd: 79000,
    shortDescription: "Dâu tây ngọt ngào, hợp treo túi, ví, chìa khóa.",
    longDescription:
      "Charm dâu tây crochet với hạt thêu tỉ mỉ và phần lá gọn xinh. Nhẹ, bền, dễ phối với túi hoặc ví và phù hợp làm quà tặng.",
    rating: 4.8,
    reviewCount: 96,
    image: {
      src: "/products/strawberry-yarn-charm.png",
      alt: "Charm dâu tây crochet handmade trên nền hồng phấn",
      width: 1200,
      height: 1200,
    },
    highlights: ["Nhẹ và bền", "Mũi len gọn", "Phù hợp làm quà"],
  },
  {
    slug: "tulip-crochet-keychain",
    name: "Móc khóa hoa tulip crochet",
    priceVnd: 59000,
    shortDescription: "Tulip tối giản, lên ảnh xinh và tinh tế.",
    longDescription:
      "Móc khóa tulip crochet lấy cảm hứng từ bó hoa mùa xuân. Dáng gọn, màu dịu, phù hợp treo ba lô, túi tote hoặc hộp bút.",
    rating: 4.9,
    reviewCount: 74,
    image: {
      src: "/products/tulip-crochet-keychain.png",
      alt: "Móc khóa hoa tulip crochet màu hồng rose trên nền trắng hồng",
      width: 1200,
      height: 1200,
    },
    highlights: ["Form gọn đẹp", "Boutique style", "Phù hợp đi học"],
  },
  {
    slug: "bunny-plush-charm",
    name: "Charm thỏ bông crochet",
    priceVnd: 99000,
    shortDescription: "Thỏ tai dài, dáng mềm mại và đáng yêu.",
    longDescription:
      "Charm thỏ crochet kiểu bông mềm, thiết kế bo tròn đáng yêu. Hoàn thiện chắc chắn, phù hợp dùng hằng ngày hoặc tặng bạn bè.",
    rating: 5.0,
    reviewCount: 63,
    image: {
      src: "/products/bunny-plush-charm.png",
      alt: "Charm thỏ bông crochet handmade trên nền hồng nhạt",
      width: 1200,
      height: 1200,
    },
    highlights: ["Mềm tay", "Tai dài đặc trưng", "Làm thủ công tỉ mỉ"],
  },
  {
    slug: "cat-paw-crochet-accessory",
    name: "Phụ kiện bàn chân mèo crochet",
    priceVnd: 69000,
    shortDescription: "Chi tiết đệm chân thêu xinh, mềm mại và vui mắt.",
    longDescription:
      "Phụ kiện bàn chân mèo crochet phong cách kawaii, thêu đệm chân tỉ mỉ. Phù hợp treo móc khóa, dây điện thoại hoặc túi mini.",
    rating: 4.8,
    reviewCount: 82,
    image: {
      src: "/products/cat-paw-crochet-accessory.png",
      alt: "Phụ kiện bàn chân mèo crochet với chi tiết đệm chân",
      width: 1200,
      height: 1200,
    },
    highlights: ["Kawaii style", "Thêu gọn đẹp", "Dễ kẹp, dễ treo"],
  },
];

export const FEATURED_PRODUCTS = PRODUCTS.slice(0, 5);

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
