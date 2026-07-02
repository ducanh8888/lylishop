import type { Promotion } from "@/lib/promotions";
import { JUNE_PROMOTION } from "@/lib/promotions";

export type Product = {
  slug: string;
  name: string;
  category: string;
  tags: string[];
  priceVnd: number;
  shortDescription: string;
  longDescription: string;
  metaDescription: string;
  material: string;
  benefits: string[];
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
  promotion?: Promotion;
};

const DEFAULT_MATERIAL = "Len Milk cotton, khoen kim loại";
const DEFAULT_BENEFITS = [
  "Treo chìa khóa, balo, túi xách hoặc hộp bút",
  "Có thể trao đổi màu sắc và chi tiết nhỏ trước khi làm",
  "Phù hợp làm quà tặng handmade nhỏ xinh",
];

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
    category: "Móc khóa thú len handmade",
    tags: ["thỏ", "móc khóa thú len", "móc khóa len cute", "quà tặng handmade"],
    priceVnd: 89000,
    shortDescription: "Móc khóa len thỏ con nhỏ xinh, mềm tay, kèm khoen vàng chắc chắn.",
    longDescription: productDescription("Móc khóa thỏ con handmade", [
      "Dáng thỏ nhỏ xinh, hợp người thích phụ kiện thú len mềm và dễ thương.",
      "Khoen vàng giúp mẫu thỏ nổi bật hơn khi treo cùng chìa khóa, túi xách hoặc balo.",
      "Phù hợp làm quà sinh nhật, quà cảm ơn hoặc món phụ kiện nhỏ cho người yêu đồ handmade.",
      "Nếu muốn đặt theo màu riêng, bạn nên gửi tone màu thân thỏ và chi tiết muốn giữ trước khi shop làm.",
      "Khi sử dụng hằng ngày, nên cầm vào khoen kim loại thay vì kéo phần thân len để giữ form tốt hơn.",
    ]),
    metaDescription:
      "Móc khóa len thỏ con handmade bằng len mềm, kèm khoen vàng chắc chắn, phù hợp treo túi, chìa khóa hoặc làm quà tặng nhỏ xinh.",
    material: DEFAULT_MATERIAL,
    benefits: ["Tạo hình thỏ nhỏ xinh, dễ treo hằng ngày", ...DEFAULT_BENEFITS],
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
    category: "Móc khóa len handmade",
    tags: ["dâu tây", "móc khóa len cute", "phụ kiện len cute", "quà tặng handmade"],
    priceVnd: 79000,
    shortDescription: "Móc khóa len dâu tây ngọt ngào, hợp treo túi, ví, chìa khóa.",
    longDescription: productDescription("Móc khóa dâu tây handmade", [
      "Tạo hình quả dâu tây nhỏ xinh, có lá xanh và chi tiết hạt thêu tỉ mỉ.",
      "Hợp với phong cách ngọt ngào, dễ phối cùng túi mini, ví, chìa khóa hoặc balo sáng màu.",
      "Là lựa chọn dễ tặng cho người thích hình quả, đồ cute hoặc món quà nhỏ có màu sắc vui mắt.",
      "Nếu đổi màu, nên giữ độ tương phản giữa thân quả và lá để mẫu vẫn dễ nhận ra khi treo.",
      "Lưu ý hạn chế kéo mạnh phần lá vì đây là chi tiết nhỏ trên thân móc khóa.",
    ]),
    metaDescription:
      "Móc khóa len dâu tây handmade nhỏ gọn, thêu hạt tỉ mỉ, dễ treo túi, ví hoặc chìa khóa và có thể tùy chỉnh màu theo yêu cầu.",
    material: DEFAULT_MATERIAL,
    benefits: ["Tạo hình dâu tây nhỏ gọn, màu sắc ngọt ngào", ...DEFAULT_BENEFITS],
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
    category: "Móc khóa hoa len handmade",
    tags: ["hoa tulip", "móc khóa crochet handmade", "móc khóa len treo balo", "quà tặng handmade"],
    priceVnd: 59000,
    shortDescription: "Móc khóa len hoa tulip tối giản, lên ảnh xinh và tinh tế.",
    longDescription: productDescription("Móc khóa hoa tulip handmade", [
      "Tạo hình hoa tulip nhỏ gọn, màu sắc nhẹ nhàng và dễ phối với nhiều phong cách.",
      "Phù hợp với người thích quà tinh tế, ít chi tiết rườm rà nhưng vẫn có điểm nhấn handmade.",
      "Dáng hoa gọn nên hợp treo túi tote, balo, hộp bút hoặc kèm trong hộp quà nhỏ.",
      "Có thể trao đổi màu hoa và màu lá trước khi làm để hợp phong cách người nhận.",
      "Nếu dùng thường xuyên, nên tránh để phần cánh hoa bị đè nặng lâu trong balo.",
    ]),
    metaDescription:
      "Móc khóa len hoa tulip handmade dáng gọn, màu dịu, phù hợp treo balo, túi tote, hộp bút hoặc làm quà tặng tinh tế.",
    material: DEFAULT_MATERIAL,
    benefits: ["Dáng hoa tulip gọn, dễ phối với balo hoặc túi tote", ...DEFAULT_BENEFITS],
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
    category: "Móc khóa thú len handmade",
    tags: ["thỏ bông", "móc khóa thú len", "móc khóa len cute", "quà tặng handmade"],
    priceVnd: 99000,
    shortDescription: "Móc khóa thú len thỏ tai dài, dáng mềm mại và đáng yêu.",
    longDescription: productDescription("Móc khóa thỏ bông handmade", [
      "Tạo hình thỏ tai dài mềm mại, dáng bo tròn và dễ thương khi treo hằng ngày.",
      "Mẫu này nổi bật hơn các form mini vì phần tai dài tạo cảm giác mềm và đáng yêu.",
      "Phù hợp treo túi xách, balo hoặc trang trí góc học tập cho người thích thú len handmade.",
      "Khi đặt riêng, bạn có thể trao đổi màu thân và màu tai để mẫu thỏ hợp người nhận hơn.",
      "Nên treo ở vị trí ít móc vào vật sắc để phần tai giữ dáng đẹp khi dùng lâu.",
    ]),
    metaDescription:
      "Móc khóa thú len thỏ bông handmade mềm tay, tai dài đáng yêu, phù hợp treo túi, balo, chìa khóa hoặc tặng bạn bè.",
    material: DEFAULT_MATERIAL,
    benefits: ["Tạo hình thỏ tai dài mềm mại, nổi bật khi treo túi", ...DEFAULT_BENEFITS],
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
    category: "Móc khóa thú len handmade",
    tags: ["bàn chân mèo", "móc khóa thú len", "phụ kiện len cute", "móc khóa len treo balo"],
    priceVnd: 69000,
    shortDescription: "Móc khóa len bàn chân mèo với đệm chân thêu xinh, mềm mại.",
    longDescription: productDescription("Móc khóa bàn chân mèo handmade", [
      "Tạo hình bàn chân mèo nhỏ xinh, có phần đệm chân thêu nổi bật.",
      "Hợp người thích mèo, thích phụ kiện nhỏ vui mắt hoặc muốn một mẫu dễ treo hằng ngày.",
      "Form bàn chân gọn nên dễ treo chìa khóa, túi mini, balo hoặc dây điện thoại.",
      "Có thể trao đổi màu nền và màu đệm chân trước khi làm để mẫu cá nhân hơn.",
      "Khi vệ sinh, nên chấm nhẹ phần đệm thêu và tránh chà mạnh để giữ chi tiết nổi rõ.",
    ]),
    metaDescription:
      "Móc khóa len bàn chân mèo handmade bằng len mềm, thêu đệm chân dễ thương, hợp treo chìa khóa, túi mini hoặc dây điện thoại.",
    material: DEFAULT_MATERIAL,
    benefits: ["Chi tiết đệm chân mèo thêu nổi bật, dễ kẹp và dễ treo", ...DEFAULT_BENEFITS],
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
    name: "Móc khóa thú mini size S đồng giá 45k",
    category: "Set móc khóa thú len mini",
    tags: ["móc khóa thú mini", "size S", "móc khóa len cute", "quà tặng handmade giá tốt"],
    priceVnd: 45000,
    shortDescription:
      "Móc khóa thú len mini size S đồng giá 45k, handmade nhỏ xinh, phù hợp treo balo, túi xách hoặc làm quà tặng.",
    longDescription: productDescriptionWithTieredPrice("Móc khóa thú len mini size S đồng giá 45k", [
      "Nhóm móc khóa thú len mini size S gồm các mẫu nhỏ xinh, dễ phối theo nhiều phong cách.",
      "Phù hợp khi bạn cần quà nhỏ cho nhóm bạn, lớp học hoặc nhiều người nhận cùng lúc.",
      "Size S gọn, dễ treo chìa khóa, túi xách, balo hoặc hộp bút mà không quá cồng kềnh.",
      "Nên gửi số lượng, mẫu muốn chọn và tone màu trước để shop kiểm tra khả năng làm đồng bộ.",
      "Nếu đặt theo nhóm, bạn có thể chọn cùng một form nhưng đổi màu để mỗi món quà vẫn có nét riêng.",
    ]),
    metaDescription:
      "Móc khóa thú mini size S đồng giá 45k tại LyliShop, handmade bằng len mềm, phù hợp treo balo, túi xách hoặc làm quà tặng dễ thương.",
    material: DEFAULT_MATERIAL,
    benefits: ["Nhiều mẫu thú mini size S dễ chọn theo nhóm", ...DEFAULT_BENEFITS],
    image: {
      src: "/product-assets/set-6-mau-cute-2.webp",
      alt: "Móc khóa thú mini size S đồng giá 45k ảnh đại diện",
      width: 900,
      height: 1200,
    },
    images: [
      {
        src: "/product-assets/set-6-mau-cute-2.webp",
        alt: "Ảnh 1 móc khóa thú mini size S đồng giá 45k",
        width: 900,
        height: 1200,
      },
      {
        src: "/product-assets/set-6-mau-cute-1.webp",
        alt: "Ảnh 2 móc khóa thú mini size S đồng giá 45k",
        width: 900,
        height: 1200,
      },
    ],
    highlights: ["Đồng giá 45k size S", "Mẫu thú mini", "Có ưu đãi tháng 6"],
    promotion: JUNE_PROMOTION,
  },
  {
    slug: "set-moc-khoa-len-6-mau-qua-tang",
    name: "Mẫu móc khóa đồng giá 45k",
    category: "Set móc khóa len handmade",
    tags: ["đồng giá 45k", "quà tặng handmade dễ thương", "móc khóa len theo yêu cầu", "móc khóa len cute"],
    priceVnd: 45000,
    shortDescription:
      "Mẫu móc khóa len handmade đồng giá 45k, dễ chọn làm quà tặng nhỏ xinh cho bạn bè, người yêu hoặc nhóm bạn.",
    longDescription: productDescriptionWithTieredPrice("Mẫu móc khóa len handmade đồng giá 45k", [
      "Nhóm mẫu móc khóa len đồng giá 45k phù hợp làm quà cho bạn bè, người yêu hoặc người thích đồ handmade.",
      "Phù hợp khi bạn muốn một món quà vừa túi tiền nhưng vẫn có cảm giác được chuẩn bị riêng.",
      "Các mẫu có thể treo balo, túi tote, chìa khóa hoặc hộp bút tùy thói quen người nhận.",
      "Nên chọn tone màu theo tính cách người nhận: nhẹ nhàng, dễ thương hoặc nổi bật hơn khi treo túi.",
      "Shop xác nhận mẫu, size, số lượng và thời gian hoàn thiện trước khi chốt đơn qua tin nhắn.",
    ]),
    metaDescription:
      "Mẫu móc khóa len handmade đồng giá 45k tại LyliShop, nhận chọn màu, đóng gói xinh và có ưu đãi tháng 6 số lượng giới hạn.",
    material: DEFAULT_MATERIAL,
    benefits: ["Nhiều mẫu đồng giá dễ chọn làm quà nhỏ", ...DEFAULT_BENEFITS],
    image: {
      src: "/product-assets/set-6-mau-qua-tang-1.webp",
      alt: "Mẫu móc khóa len handmade đồng giá 45k ảnh đại diện",
      width: 900,
      height: 900,
    },
    images: [
      {
        src: "/product-assets/set-6-mau-qua-tang-1.webp",
        alt: "Ảnh 1 mẫu móc khóa len handmade đồng giá 45k",
        width: 900,
        height: 900,
      },
      {
        src: "/product-assets/set-6-mau-qua-tang-2.webp",
        alt: "Ảnh 2 mẫu móc khóa len handmade đồng giá 45k",
        width: 1200,
        height: 960,
      },
    ],
    highlights: ["Đồng giá 45k", "Hợp làm quà", "Có ưu đãi tháng 6"],
    promotion: JUNE_PROMOTION,
  },
  {
    slug: "set-moc-khoa-len-10-mau-mix",
    name: "Móc khóa len đồng giá từ 45k",
    category: "Set móc khóa len đồng giá",
    tags: ["móc khóa len đồng giá từ 45k", "móc khóa len giá tốt", "đặt móc khóa len số lượng", "móc khóa len cute"],
    priceVnd: 45000,
    shortDescription:
      "Móc khóa len handmade đồng giá từ 45k, 10 mẫu mix phù hợp đặt theo nhóm, quà lớp hoặc đặt số lượng.",
    longDescription: productDescriptionWithTieredPrice("Móc khóa len đồng giá từ 45k", [
      "Gồm 10 mẫu móc khóa len mix nhiều kiểu dáng, phù hợp đặt theo nhóm, quà lớp hoặc làm quà số lượng nhiều.",
      "Phù hợp cho khách muốn chọn móc khóa len giá tốt, dễ chia quà cho lớp, nhóm bạn hoặc sự kiện nhỏ.",
      "Khi đặt nhiều mẫu, bạn nên thống nhất trước tone màu, size và số lượng từng loại để shop tư vấn nhanh hơn.",
      "Các mẫu size S gọn, dễ treo hằng ngày; size M và L phù hợp khi muốn món quà nổi bật hơn.",
      "Nếu cần đồng bộ theo nhóm, hãy gửi danh sách mẫu hoặc màu mong muốn trước khi shop xác nhận thời gian làm.",
    ]),
    metaDescription:
      "Móc khóa len đồng giá từ 45k tại LyliShop, 10 mẫu mix handmade, phù hợp đặt số lượng, quà lớp, quà nhóm và nhận tư vấn màu trên toàn Việt Nam.",
    material: DEFAULT_MATERIAL,
    benefits: ["Giá tốt từ 45k, dễ đặt theo nhóm hoặc làm quà lớp", ...DEFAULT_BENEFITS],
    image: {
      src: "/product-assets/set-10-mau-mix-1.webp",
      alt: "Móc khóa len đồng giá từ 45k set 10 mẫu mix handmade",
      width: 1200,
      height: 628,
    },
    images: [
      {
        src: "/product-assets/set-10-mau-mix-1.webp",
        alt: "Ảnh 1 móc khóa len đồng giá từ 45k set 10 mẫu mix",
        width: 1200,
        height: 628,
      },
      {
        src: "/product-assets/set-10-mau-mix-4.webp",
        alt: "Ảnh 2 móc khóa len đồng giá từ 45k đặt số lượng",
        width: 900,
        height: 1200,
      },
      {
        src: "/product-assets/set-10-mau-mix-2.webp",
        alt: "Ảnh 3 móc khóa len handmade giá tốt từ 45k",
        width: 900,
        height: 1200,
      },
      {
        src: "/product-assets/set-10-mau-mix-3.webp",
        alt: "Ảnh 4 móc khóa len đồng giá từ 45k nhiều mẫu",
        width: 900,
        height: 1200,
      },
    ],
    highlights: ["Đồng giá từ 45k", "Hợp đặt số lượng", "10 mẫu mix dễ chọn"],
  },
];

const FEATURED_PRODUCT_SLUGS = [
  "set-moc-khoa-len-10-mau-mix",
  "set-moc-khoa-len-6-mau-cute",
  "set-moc-khoa-len-6-mau-qua-tang",
];

export const FEATURED_PRODUCTS = [
  ...FEATURED_PRODUCT_SLUGS.map((slug) => PRODUCTS.find((p) => p.slug === slug)),
  ...PRODUCTS.filter((p) => !FEATURED_PRODUCT_SLUGS.includes(p.slug)),
].filter((product): product is Product => Boolean(product));

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 3) {
  const candidates = PRODUCTS.filter((candidate) => candidate.slug !== product.slug);
  const sameCategory = candidates.filter((candidate) => candidate.category === product.category);
  const fallbackByTags = candidates
    .filter((candidate) => candidate.category !== product.category)
    .map((candidate, index) => ({
      product: candidate,
      sharedTags: candidate.tags.filter((tag) => product.tags.includes(tag)).length,
      index,
    }))
    .sort((a, b) => b.sharedTags - a.sharedTags || a.index - b.index)
    .map((item) => item.product);

  return [...sameCategory, ...fallbackByTags].slice(0, limit);
}
