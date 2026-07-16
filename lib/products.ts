import type { Promotion } from "@/lib/promotions";
import { ACTIVE_PROMOTION } from "@/lib/promotions";

export type Product = {
  id: string;
  slug: string;
  name: string;
  detailHeading: string;
  category: string;
  tags: string[];
  price: number;
  priceVnd: number;
  priceText: string;
  shortDescription: string;
  description: string;
  longDescription: string;
  metaDescription: string;
  material: string;
  benefits: string[];
  faqs: ProductFaq[];
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
  orderOptions: ProductOrderOption[];
  information: ProductInformation;
  availableColors: readonly string[];
  allowCustom: boolean;
  allowPhotoReference: boolean;
  allowGiftWrap: boolean;
  allowGreetingCard: boolean;
  featured: boolean;
  promotion?: Promotion;
};

export type ProductOrderOption = {
  id: string;
  name: string;
  price?: number;
  isCustom: boolean;
  description?: string;
};

type ProductOrderOptionInput =
  | ProductOrderOption
  | {
      id?: string;
      label?: string;
      name?: string;
      price?: number;
      priceVnd?: number;
      isCustom?: boolean;
      description?: string;
    };

export type ProductInformation = {
  material: string;
  size: string;
  colors: string;
  production: string;
  care: string;
};

export type ProductFaq = {
  id: string;
  question: string;
  answer: string;
};

export type ProductGroup = "mini" | "size-s" | "size-m" | "size-l" | "flower" | "plush";

type ProductData = Omit<
  Product,
  | "id"
  | "detailHeading"
  | "price"
  | "priceText"
  | "description"
  | "material"
  | "faqs"
  | "orderOptions"
  | "information"
  | "availableColors"
  | "allowCustom"
  | "allowPhotoReference"
  | "allowGiftWrap"
  | "allowGreetingCard"
  | "featured"
> & {
  id?: string;
  detailHeading?: string;
  price?: number;
  priceText?: string;
  description?: string;
  material?: string;
  faqs?: ProductFaq[];
  orderOptions: ProductOrderOptionInput[];
  information?: Partial<ProductInformation>;
  availableColors?: readonly string[];
  allowCustom?: boolean;
  allowPhotoReference?: boolean;
  allowGiftWrap?: boolean;
  allowGreetingCard?: boolean;
  featured?: boolean;
};

const DEFAULT_MATERIAL = "Len Milk Cotton, khoen kim loại";
const DEFAULT_BENEFITS = [
  "Treo chìa khóa, balo, túi xách hoặc hộp bút",
  "Có thể trao đổi màu sắc và chi tiết nhỏ trước khi làm",
  "Phù hợp làm quà tặng handmade nhỏ xinh",
];

const DEFAULT_PRODUCT_INFORMATION: ProductInformation = {
  material: DEFAULT_MATERIAL,
  size: "Xác nhận theo mẫu/size khi liên hệ",
  colors: "Trắng, kem, hồng, tím, xanh, nâu, vàng hoặc phối theo yêu cầu",
  production: "Handmade",
  care: "Tránh ngâm nước và hạn chế kéo mạnh phần thân len",
};

const DEFAULT_AVAILABLE_COLORS = ["Trắng", "Kem", "Hồng", "Tím", "Xanh", "Nâu", "Vàng", "Khác"] as const;

const CUSTOM_COLOR_ORDER_OPTIONS: ProductOrderOptionInput[] = [
  { label: "Mẫu giống ảnh" },
  { label: "Đổi màu theo yêu cầu" },
  { label: "Đặt theo yêu cầu" },
];

const MINI_ORDER_OPTIONS: ProductOrderOptionInput[] = [
  {
    label: "Combo 3 mẫu cùng màu",
    priceVnd: 49000,
    description: "Phù hợp khi muốn set quà nhỏ đồng bộ.",
  },
  {
    label: "Combo 3 mẫu phối màu ngẫu nhiên",
    priceVnd: 49000,
    description: "Shop phối màu dễ thương theo mẫu có sẵn.",
  },
  {
    label: "Đặt theo yêu cầu",
    priceVnd: 59000,
    description: "Trao đổi mẫu, màu và chi tiết trước khi làm.",
  },
];

const SIZE_S_ORDER_OPTIONS: ProductOrderOptionInput[] = [
  { label: "Gấu trúc" },
  { label: "Cún xám" },
  { label: "Cún vàng" },
  { label: "Hổ" },
  { label: "Stitch" },
  { label: "Đặt theo yêu cầu" },
];

const SIZE_M_ORDER_OPTIONS: ProductOrderOptionInput[] = [
  { label: "Gấu Teddy" },
  { label: "Gà vàng" },
  { label: "Gà thỏ" },
  { label: "Bó hoa mini" },
  { label: "Đặt theo yêu cầu" },
];

const SIZE_L_ORDER_OPTIONS: ProductOrderOptionInput[] = [
  { label: "Thỏ hồng Size L", priceVnd: 69000 },
  { label: "Gà vàng Size L", priceVnd: 69000 },
  { label: "Vịt dưa hấu Size L", priceVnd: 69000 },
  { label: "Đặt theo yêu cầu" },
];

function formatPriceText(price: number) {
  return `${price.toLocaleString("vi-VN")}đ`;
}

function normalizeText(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function isCustomOrderOption(name: string) {
  const normalizedName = normalizeText(name);
  return normalizedName.includes("yeu-cau") || normalizedName.includes("doi-mau");
}

function faq(id: string, question: string, answer: string): ProductFaq {
  return { id, question, answer };
}

const PRODUCT_FAQS_BY_GROUP: Record<ProductGroup, ProductFaq[]> = {
  mini: [
    faq(
      "mini-cleaning",
      "Móc khóa mini có dễ vệ sinh không?",
      "Có. Với bụi nhẹ, bạn nên dùng khăn khô mềm hoặc chổi lông mềm để làm sạch bề mặt. Hạn chế ngâm nước, vắt mạnh hoặc chà mạnh vào các chi tiết nhỏ để sản phẩm giữ form lâu hơn."
    ),
    faq(
      "mini-sample",
      "Có được chọn mẫu không?",
      "Có. Bạn có thể chọn mẫu có sẵn, chọn combo cùng màu, phối màu ngẫu nhiên hoặc gửi ý tưởng riêng. LyliShop sẽ xác nhận mẫu, màu và khả năng thực hiện trước khi làm."
    ),
    faq(
      "mini-timing",
      "Thời gian hoàn thành bao lâu?",
      "Thời gian hoàn thành phụ thuộc vào mẫu, số lượng và độ chi tiết. Khi bạn nhắn Zalo, LyliShop sẽ kiểm tra lịch làm hiện tại và báo thời gian dự kiến trước khi chốt đơn."
    ),
  ],
  flower: [
    faq(
      "flower-care",
      "Có cách bảo quản khi sử dụng không?",
      "Có. Hoa len nên được giữ khô, tránh bị đè lâu trong balo và hạn chế kéo mạnh phần cánh hoặc lá. Khi bám bụi nhẹ, bạn có thể phủi bằng khăn khô mềm."
    ),
    faq(
      "flower-custom-bouquet",
      "Có bó theo yêu cầu không?",
      "Có. Bạn có thể trao đổi màu hoa, số lượng bông, kiểu gói và tone tổng thể. LyliShop sẽ tư vấn lại trước khi bắt đầu làm để bó hoa phù hợp hơn với người nhận."
    ),
    faq(
      "flower-gift-wrap",
      "Có gói quà không?",
      "Có thể hỗ trợ gói quà theo nhu cầu. Bạn hãy ghi chú khi đặt hoặc nhắn trực tiếp để LyliShop xác nhận cách gói phù hợp với mẫu hoa."
    ),
    faq(
      "flower-card",
      "Có kèm thiệp không?",
      "Có thể thêm thiệp nếu bạn cần. Nội dung thiệp và cách chuẩn bị sẽ được LyliShop xác nhận qua tin nhắn trước khi hoàn thiện đơn."
    ),
  ],
  "size-s": [
    faq(
      "size-s-color",
      "Có được chọn màu không?",
      "Có. Bạn có thể chọn màu từ các tone LyliShop đang hỗ trợ hoặc gửi màu mong muốn để shop tư vấn cách phối phù hợp với mẫu size S."
    ),
    faq(
      "size-s-photo",
      "Có nhận làm theo ảnh không?",
      "Có thể nhận làm theo ảnh tham khảo nếu mẫu phù hợp với chất liệu len và kích thước size S. Shop sẽ xác nhận lại chi tiết có thể thực hiện trước khi làm."
    ),
    faq(
      "size-s-name",
      "Có thể gắn tên hoặc chữ không?",
      "Tùy mẫu và kích thước chữ. Với size S, không phải chi tiết chữ nào cũng đủ rõ khi móc bằng len, nên LyliShop sẽ kiểm tra trước và tư vấn phương án phù hợp."
    ),
  ],
  "size-m": [
    faq(
      "size-m-size",
      "Kích thước thực tế bao nhiêu?",
      "Nhóm size M thường khoảng 8-10 cm, tùy form và độ chi tiết của từng mẫu. LyliShop sẽ xác nhận lại kích thước dự kiến khi bạn chọn mẫu cụ thể."
    ),
    faq(
      "size-m-custom",
      "Có thể làm theo yêu cầu không?",
      "Có. Bạn có thể gửi mẫu, màu hoặc ý tưởng muốn điều chỉnh. Shop sẽ phản hồi phần nào làm được, phần nào cần giản lược để sản phẩm đẹp và chắc chắn hơn."
    ),
    faq(
      "size-m-gift",
      "Có phù hợp làm quà tặng không?",
      "Có. Size M nổi bật hơn nhóm mini và size S, phù hợp làm quà sinh nhật, quà nhóm bạn hoặc món phụ kiện treo balo/túi xách dễ nhìn thấy."
    ),
  ],
  "size-l": [
    faq(
      "size-l-backpack",
      "Có thể treo balo không?",
      "Có. Size L phù hợp để treo balo hoặc túi lớn vì nhìn nổi bật hơn. Khi đặt, bạn nên trao đổi vị trí treo để LyliShop tư vấn khoen và form phù hợp."
    ),
    faq(
      "size-l-color",
      "Có nhận phối màu riêng không?",
      "Có. Bạn có thể gửi tone màu yêu thích hoặc ảnh tham khảo. LyliShop sẽ tư vấn cách phối màu sao cho sản phẩm rõ form và không bị rối."
    ),
    faq(
      "size-l-timing",
      "Thời gian hoàn thành bao lâu?",
      "Thời gian hoàn thành phụ thuộc vào kích thước, số lượng và độ chi tiết của mẫu. Shop sẽ báo thời gian dự kiến qua Zalo trước khi chốt đơn."
    ),
  ],
  plush: [
    faq(
      "plush-photo",
      "Có thể đặt theo ảnh không?",
      "Có thể. Bạn có thể gửi ảnh mẫu hoặc mô tả ý tưởng, sau đó LyliShop sẽ kiểm tra form, màu và chi tiết nào có thể làm bằng len trước khi xác nhận."
    ),
    faq(
      "plush-size",
      "Có kích thước khác không?",
      "Có thể điều chỉnh kích thước tùy mẫu. Vì thú bông len có nhiều chi tiết, shop sẽ xác nhận lại kích thước, độ nổi bật và giá trước khi làm."
    ),
    faq(
      "plush-gift-wrap",
      "Có gói quà không?",
      "Có thể hỗ trợ gói quà nếu bạn cần. Hãy ghi chú trong phần đặt hàng hoặc nhắn LyliShop để shop chuẩn bị theo mục đích tặng."
    ),
  ],
};

export function getProductGroup(
  product: Pick<Product, "name" | "category" | "tags"> & { detailHeading?: string }
): ProductGroup {
  const text = normalizeText(
    [product.name, product.detailHeading, product.category, ...product.tags].filter(Boolean).join(" ")
  );

  if (text.includes("hoa-len") || text.includes("tulip")) return "flower";
  if (text.includes("size-l")) return "size-l";
  if (text.includes("size-m")) return "size-m";
  if (text.includes("size-s")) return "size-s";
  if (text.includes("mini")) return "mini";
  if (text.includes("thu-bong") || text.includes("tho-bong")) return "plush";

  return "mini";
}

function getProductFaqFallback(product: ProductData) {
  return PRODUCT_FAQS_BY_GROUP[getProductGroup(product)];
}

function normalizeOrderOptions(options: ProductOrderOptionInput[]) {
  return options.map((option, index): ProductOrderOption => {
    const name =
      option.name || ("label" in option && option.label ? option.label : `Tùy chọn ${index + 1}`);
    const price = option.price ?? ("priceVnd" in option ? option.priceVnd : undefined);

    return {
      id: option.id || normalizeText(name) || `option-${index + 1}`,
      name,
      price,
      isCustom: option.isCustom ?? isCustomOrderOption(name),
      description: option.description,
    };
  });
}

function normalizeProduct(product: ProductData): Product {
  const price = product.price ?? product.priceVnd;
  const description = product.description ?? product.longDescription;
  const information: ProductInformation = {
    ...DEFAULT_PRODUCT_INFORMATION,
    material: product.material || DEFAULT_PRODUCT_INFORMATION.material,
    ...product.information,
  };

  return {
    ...product,
    id: product.id || product.slug,
    detailHeading: product.detailHeading || product.name,
    price,
    priceVnd: price,
    priceText: product.priceText || formatPriceText(price),
    description,
    longDescription: description,
    material: information.material,
    faqs: product.faqs || getProductFaqFallback(product),
    orderOptions: normalizeOrderOptions(product.orderOptions),
    information,
    availableColors: product.availableColors || DEFAULT_AVAILABLE_COLORS,
    allowCustom: product.allowCustom ?? true,
    allowPhotoReference: product.allowPhotoReference ?? true,
    allowGiftWrap: product.allowGiftWrap ?? true,
    allowGreetingCard: product.allowGreetingCard ?? true,
    featured: product.featured ?? false,
  };
}

export function getProductInformation(product: Product): ProductInformation {
  return {
    ...DEFAULT_PRODUCT_INFORMATION,
    ...product.information,
    material: product.information.material || product.material || DEFAULT_PRODUCT_INFORMATION.material,
  };
}

const SIZE_AND_PRICE_NOTE = `Kích thước:
• Sản phẩm size S: 5-7 cm.

Nhận theo yêu cầu:
• Size S: 5-7 cm.
• Size M: 8-10 cm.
• Size L: 10-12 cm.

Giá sản phẩm thay đổi theo kích thước và độ chi tiết của từng mẫu.`;

const MINI_SIZE_NOTE = `Kích thước:
• Mini: 3-4 cm.

Nhận theo yêu cầu:
• Có thể chọn combo cùng màu, phối màu ngẫu nhiên hoặc gửi ý tưởng riêng.

Giá sản phẩm thay đổi theo số lượng, mẫu chọn và độ chi tiết khi đặt riêng.`;

const FLOWER_SIZE_NOTE = `Kích thước:
• Hoa len có kích thước tùy loại hoa và cách bó/treo.

Nhận theo yêu cầu:
• Có thể trao đổi màu hoa, màu lá và phong cách gói trước khi làm.

Giá sản phẩm thay đổi theo loại hoa, số lượng bông và độ chi tiết của mẫu.`;

const PLUSH_SIZE_NOTE = `Kích thước:
• Thú bông len có kích thước tùy mẫu, shop xác nhận trước khi làm.

Nhận theo yêu cầu:
• Có thể đổi màu thân, phụ kiện hoặc gửi ảnh mẫu tham khảo.

Giá sản phẩm thay đổi theo kích thước và độ chi tiết của từng mẫu.`;

function productDescription(title: string, bullets: string[], note = SIZE_AND_PRICE_NOTE) {
  return `${title}

${bullets.map((bullet) => `• ${bullet}`).join("\n")}

${note}`;
}

const TIERED_SIZE_AND_PRICE_NOTE = `Giá sản phẩm thay đổi theo kích thước và độ chi tiết của từng mẫu.
• Giá sp từ 45k / size S: 5-7 cm.
• Giá sp từ 59k / size M: 8-10 cm.
• Giá sp từ 69k / size L: 10-12 cm.`;

function productDescriptionWithTieredPrice(title: string, bullets: string[]) {
  return `${title}

${bullets.map((bullet) => `• ${bullet}`).join("\n")}

${TIERED_SIZE_AND_PRICE_NOTE}`;
}

const PRODUCT_DATA: ProductData[] = [
  {
    slug: "crochet-bear-keychain",
    name: "Móc khóa len thỏ con",
    detailHeading: "Thú bông len Handmade thỏ con",
    category: "Móc khóa thú len handmade",
    tags: ["thỏ", "móc khóa thú len", "móc khóa len cute", "quà tặng handmade"],
    priceVnd: 89000,
    shortDescription:
      "Thỏ con được làm thủ công từ len Milk Cotton mềm tay, phù hợp làm quà tặng nhỏ cho người thích phụ kiện dễ thương. Mẫu có thể dùng để treo balo, túi xách hoặc trang trí góc học tập. LyliShop nhận phối màu, đổi chi tiết nhỏ và làm theo yêu cầu sau khi bạn gửi ý tưởng hoặc ảnh mẫu tham khảo.",
    longDescription: productDescription(
      "Móc khóa thỏ con handmade",
      [
        "Nhóm thú bông len tập trung vào cảm giác mềm mại, đáng yêu và có thể dùng như món quà nhỏ để trang trí.",
        "Mẫu thỏ con hợp với người thích phụ kiện có dáng tròn, màu nhẹ và không quá rườm rà khi treo lên túi.",
        "Vì được làm thủ công, bạn có thể trao đổi trước màu thân thỏ, màu tai hoặc chi tiết muốn giữ giống ảnh.",
        "Nếu đặt làm quà, mẫu này phù hợp với sinh nhật, quà cảm ơn hoặc món tự thưởng cho người yêu đồ handmade.",
        "Khi dùng hằng ngày, nên cầm vào khoen kim loại thay vì kéo phần thân len để giữ form sản phẩm tốt hơn.",
      ],
      PLUSH_SIZE_NOTE
    ),
    metaDescription:
      "Móc khóa len thỏ con handmade bằng len mềm, kèm khoen vàng chắc chắn, phù hợp treo túi, chìa khóa hoặc làm quà tặng nhỏ xinh.",
    material: DEFAULT_MATERIAL,
    orderOptions: [
      { label: "Mẫu thỏ con giống ảnh", priceVnd: 89000 },
      { label: "Đổi màu theo yêu cầu", priceVnd: 99000 },
      { label: "Đặt theo yêu cầu", priceVnd: 99000 },
    ],
    information: {
      size: "Tùy mẫu thú bông, shop xác nhận trước khi làm",
      colors: "Hồng, trắng, kem hoặc phối theo yêu cầu",
    },
    benefits: ["Tạo hình thỏ nhỏ xinh, dễ treo hằng ngày", ...DEFAULT_BENEFITS],
    image: {
      src: "/images/products/thu-bong-len/thu-bong-len-tho-hong-cover.webp",
      alt: "Thú bông len thỏ hồng handmade của LyliShop",
      width: 900,
      height: 1200,
    },
    highlights: ["Đóng gói sẵn để tặng", "Len mềm cao cấp", "Khoen vàng chắc chắn"],
  },
  {
    slug: "strawberry-yarn-charm",
    name: "Móc khóa len dâu tây",
    detailHeading: "Móc khóa len Mini Handmade dâu tây",
    category: "Móc khóa len handmade",
    tags: ["dâu tây", "móc khóa len cute", "phụ kiện len cute", "quà tặng handmade"],
    priceVnd: 79000,
    shortDescription:
      "Móc khóa len mini dâu tây được làm thủ công từ len Milk Cotton, nhỏ gọn và hợp làm quà tặng dễ thương. Mẫu phù hợp treo ví, chìa khóa, balo hoặc túi nhỏ mà không gây nặng. LyliShop nhận phối màu thân quả, lá và chi tiết trang trí theo yêu cầu để món quà có cảm giác riêng hơn.",
    longDescription: productDescription(
      "Móc khóa dâu tây handmade",
      [
        "Nhóm móc khóa mini phù hợp khi bạn cần một món quà nhỏ, giá dễ tiếp cận và có thể đặt theo combo.",
        "Form dâu tây gọn, lên màu vui mắt và dễ treo hằng ngày trên chìa khóa, ví nhỏ hoặc balo.",
        "Nếu mua theo nhóm, bạn có thể chọn cùng một mẫu dâu nhưng đổi tone màu để mỗi món vẫn có nét riêng.",
        "Khi đặt theo yêu cầu, nên giữ độ tương phản giữa thân quả và lá để mẫu vẫn dễ nhận ra khi treo.",
        "Lưu ý hạn chế kéo mạnh phần lá vì đây là chi tiết nhỏ, cần dùng nhẹ tay để sản phẩm giữ form lâu hơn.",
      ],
      MINI_SIZE_NOTE
    ),
    metaDescription:
      "Móc khóa len dâu tây handmade nhỏ gọn, thêu hạt tỉ mỉ, dễ treo túi, ví hoặc chìa khóa và có thể tùy chỉnh màu theo yêu cầu.",
    material: DEFAULT_MATERIAL,
    orderOptions: CUSTOM_COLOR_ORDER_OPTIONS,
    information: {
      size: "Mini: 3-4 cm",
      colors: "Đỏ, hồng, xanh lá hoặc phối màu theo yêu cầu",
    },
    benefits: ["Tạo hình dâu tây nhỏ gọn, màu sắc ngọt ngào", ...DEFAULT_BENEFITS],
    image: {
      src: "/images/products/moc-khoa-mini/moc-khoa-mini-nhieu-mau-cover.webp",
      alt: "Bộ móc khóa len mini nhiều màu của LyliShop",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        src: "/images/products/moc-khoa-mini/moc-khoa-mini-nhieu-mau-cover.webp",
        alt: "Bộ móc khóa len mini nhiều màu của LyliShop",
        width: 1000,
        height: 1000,
      },
      {
        src: "/images/products/moc-khoa-mini/moc-khoa-mini-hang-tang-lylishop.webp",
        alt: "Nhiều mẫu móc khóa len mini đang chuẩn bị tại LyliShop",
        width: 1200,
        height: 1200,
      },
      {
        src: "/images/products/moc-khoa-mini/moc-khoa-mini-dong-goi-nhieu-mau.webp",
        alt: "Móc khóa len mini đóng gói nhiều màu",
        width: 1000,
        height: 1000,
      }
    ],
    highlights: ["Nhẹ và bền", "Mũi len gọn", "Phù hợp làm quà"],
  },
  {
    slug: "tulip-crochet-keychain",
    name: "Móc khóa len hoa tulip",
    detailHeading: "Hoa len Handmade hoa tulip",
    category: "Móc khóa hoa len handmade",
    tags: ["hoa tulip", "móc khóa crochet handmade", "móc khóa len treo balo", "quà tặng handmade"],
    priceVnd: 59000,
    shortDescription:
      "Hoa len tulip được làm thủ công từ len Milk Cotton, phù hợp làm quà tặng nhẹ nhàng cho người thích hoa nhưng muốn lưu giữ lâu. Mẫu không héo, dễ treo kèm balo, túi tote hoặc đặt trong hộp quà nhỏ. LyliShop nhận phối màu cánh hoa, lá và làm theo yêu cầu để hợp với người nhận.",
    longDescription: productDescription(
      "Móc khóa hoa tulip handmade",
      [
        "Hoa len là lựa chọn hợp với người thích quà tặng có ý nghĩa lưu giữ lâu, không héo như hoa tươi.",
        "Mẫu tulip có dáng gọn, ít chi tiết rườm rà nhưng vẫn tạo điểm nhấn handmade khi treo lên túi.",
        "Có thể dùng làm quà sinh nhật, quà cảm ơn hoặc món kèm trong hộp quà cho người thích phong cách nhẹ nhàng.",
        "Bạn có thể trao đổi màu cánh hoa, màu lá và tone tổng thể trước khi shop bắt đầu làm.",
        "Nếu dùng thường xuyên, nên tránh để phần cánh hoa bị đè nặng lâu trong balo để giữ dáng hoa tốt hơn.",
      ],
      FLOWER_SIZE_NOTE
    ),
    metaDescription:
      "Móc khóa len hoa tulip handmade dáng gọn, màu dịu, phù hợp treo balo, túi tote, hộp bút hoặc làm quà tặng tinh tế.",
    material: DEFAULT_MATERIAL,
    orderOptions: [
      { label: "Hoa tulip giống ảnh", priceVnd: 59000 },
      { label: "Đổi màu hoa" },
      { label: "Đặt theo yêu cầu" },
    ],
    information: {
      size: "Tùy loại hoa, shop xác nhận trước khi làm",
      colors: "Hồng, tím, vàng, xanh hoặc phối theo yêu cầu",
    },
    benefits: ["Dáng hoa tulip gọn, dễ phối với balo hoặc túi tote", ...DEFAULT_BENEFITS],
    image: {
      src: "/images/products/hoa-len/hoa-len-bo-hoa-handmade-cover.webp",
      alt: "Bó hoa len handmade nhiều màu của LyliShop",
      width: 900,
      height: 1200,
    },
    images: [
      {
        src: "/images/products/hoa-len/hoa-len-bo-hoa-handmade-cover.webp",
        alt: "Bó hoa len handmade nhiều màu của LyliShop",
        width: 900,
        height: 1200,
      },
      {
        src: "/images/products/hoa-len/hoa-len-nhieu-mau-quy-trinh.webp",
        alt: "Hoa len nhiều màu trong quá trình chuẩn bị",
        width: 900,
        height: 1200,
      },
      {
        src: "/images/products/hoa-len/hoa-len-mini-treo-tui.webp",
        alt: "Hoa len mini dùng làm phụ kiện treo túi",
        width: 900,
        height: 1200,
      }
    ],
    highlights: ["Dáng gọn đẹp", "Phong cách nhẹ nhàng", "Phù hợp đi học"],
  },
  {
    slug: "bunny-plush-charm",
    name: "Móc khóa thú len thỏ bông",
    detailHeading: "Thú bông len Handmade thỏ bông",
    category: "Móc khóa thú len handmade",
    tags: ["thỏ bông", "móc khóa thú len", "móc khóa len cute", "quà tặng handmade"],
    priceVnd: 99000,
    shortDescription:
      "Thú bông len thỏ bông được làm thủ công từ len Milk Cotton, dáng mềm và hợp làm quà tặng cho người thích đồ dễ thương. Mẫu có thể dùng để treo túi, balo hoặc trang trí góc nhỏ. LyliShop nhận phối màu tai, thân, phụ kiện và làm theo yêu cầu để món quà gần với ý tưởng của bạn hơn.",
    longDescription: productDescription(
      "Móc khóa thỏ bông handmade",
      [
        "Nhóm thú bông len phù hợp với người thích quà tặng mềm mại, có thể treo hoặc đặt trang trí.",
        "Mẫu thỏ bông nổi bật hơn form mini nhờ phần tai dài và dáng bo tròn tạo cảm giác đáng yêu.",
        "Sản phẩm hợp làm quà sinh nhật, quà cho bạn thân hoặc món trang trí nhỏ trên bàn học.",
        "Khi đặt riêng, bạn có thể trao đổi màu thân, màu tai hoặc phụ kiện để mẫu thỏ hợp người nhận hơn.",
        "Nên treo ở vị trí ít móc vào vật sắc để phần tai và thân len giữ dáng đẹp khi dùng lâu.",
      ],
      PLUSH_SIZE_NOTE
    ),
    metaDescription:
      "Móc khóa thú len thỏ bông handmade mềm tay, tai dài đáng yêu, phù hợp treo túi, balo, chìa khóa hoặc tặng bạn bè.",
    material: DEFAULT_MATERIAL,
    orderOptions: [
      { label: "Mẫu thỏ bông giống ảnh", priceVnd: 99000 },
      { label: "Đổi màu tai/thân thỏ" },
      { label: "Đặt theo yêu cầu" },
    ],
    information: {
      size: "Tùy mẫu thú bông, shop xác nhận trước khi làm",
      colors: "Hồng, trắng, kem hoặc phối theo yêu cầu",
    },
    benefits: ["Tạo hình thỏ tai dài mềm mại, nổi bật khi treo túi", ...DEFAULT_BENEFITS],
    image: {
      src: "/images/products/thu-bong-len/thu-bong-len-tho-hong-cover.webp",
      alt: "Thú bông len thỏ hồng handmade của LyliShop",
      width: 900,
      height: 1200,
    },
    highlights: ["Mềm tay", "Tai dài đặc trưng", "Làm thủ công tỉ mỉ"],
  },
  {
    slug: "cat-paw-crochet-accessory",
    name: "Móc khóa len bàn chân mèo",
    detailHeading: "Móc khóa len Size S Handmade bàn chân mèo",
    category: "Móc khóa thú len handmade",
    tags: ["bàn chân mèo", "móc khóa thú len", "phụ kiện len cute", "móc khóa len treo balo"],
    priceVnd: 69000,
    shortDescription:
      "Móc khóa len size S bàn chân mèo được làm thủ công từ len Milk Cotton, kích thước gọn nên dễ treo chìa khóa, balo hoặc túi nhỏ. Mẫu hợp làm quà tặng cho người thích mèo và phụ kiện cute. LyliShop nhận phối màu nền, màu đệm chân và làm theo yêu cầu trước khi chốt mẫu.",
    longDescription: productDescription("Móc khóa bàn chân mèo handmade", [
      "Nhóm size S là lựa chọn dễ dùng nhất vì đủ nhỏ để treo chìa khóa nhưng vẫn nhìn rõ chi tiết.",
      "Mẫu bàn chân mèo hợp với người thích mèo, thích phụ kiện nhỏ vui mắt hoặc muốn một món quà dễ dùng hằng ngày.",
      "Form bàn chân gọn nên phù hợp treo túi mini, balo, chìa khóa hoặc dây điện thoại.",
      "Có thể trao đổi màu nền và màu đệm chân trước khi làm để sản phẩm mang dấu ấn cá nhân hơn.",
      "Khi vệ sinh, nên chấm nhẹ phần đệm thêu và tránh chà mạnh để giữ chi tiết nổi rõ.",
    ]),
    metaDescription:
      "Móc khóa len bàn chân mèo handmade bằng len mềm, thêu đệm chân dễ thương, hợp treo chìa khóa, túi mini hoặc dây điện thoại.",
    material: DEFAULT_MATERIAL,
    orderOptions: [
      { label: "Bàn chân mèo giống ảnh", priceVnd: 69000 },
      { label: "Đổi màu đệm chân" },
      { label: "Đặt theo yêu cầu" },
    ],
    information: {
      size: "Size S: 5-7 cm",
      colors: "Trắng, hồng, nâu, đen hoặc phối theo yêu cầu",
    },
    benefits: ["Chi tiết đệm chân mèo thêu nổi bật, dễ kẹp và dễ treo", ...DEFAULT_BENEFITS],
    image: {
      src: "/images/products/moc-khoa-size-s/moc-khoa-size-s-nhieu-mau-cover.webp",
      alt: "Móc khóa len size S nhiều mẫu dễ thương",
      width: 1000,
      height: 1000,
    },
    highlights: ["Dễ thương", "Thêu gọn đẹp", "Dễ kẹp, dễ treo"],
  },
  {
    slug: "set-moc-khoa-len-6-mau-cute",
    name: "Móc khóa thú mini size S đồng giá 45k",
    detailHeading: "Móc khóa len Size S Handmade",
    category: "Set móc khóa thú len mini",
    tags: ["móc khóa thú mini", "size S", "móc khóa len cute", "quà tặng handmade giá tốt"],
    priceVnd: 45000,
    shortDescription:
      "Móc khóa len size S được làm thủ công từ len Milk Cotton, là nhóm có nhiều mẫu dễ chọn nhất cho nhu cầu treo chìa khóa, balo hoặc túi xách. Kích thước gọn, giá dễ tiếp cận và phù hợp làm quà tặng nhỏ. LyliShop nhận phối màu, chọn mẫu theo sở thích và làm theo yêu cầu trước khi chốt đơn.",
    longDescription: productDescriptionWithTieredPrice("Móc khóa thú len mini size S đồng giá 45k", [
      "Size S là nhóm mẫu linh hoạt nhất vì nhỏ gọn, dễ treo chìa khóa và vẫn đủ nổi bật khi dùng hằng ngày.",
      "Phù hợp khi bạn cần quà nhỏ cho nhóm bạn, lớp học hoặc nhiều người nhận cùng lúc.",
      "Các mẫu như gấu trúc, cún, hổ hoặc Stitch có thể chọn theo sở thích của người nhận.",
      "Nên gửi số lượng, mẫu muốn chọn và tone màu trước để shop kiểm tra khả năng làm đồng bộ.",
      "Nếu đặt theo nhóm, bạn có thể chọn cùng một form nhưng đổi màu để mỗi món quà vẫn có nét riêng.",
    ]),
    metaDescription:
      "Móc khóa thú mini size S đồng giá 45k tại LyliShop, handmade bằng len mềm, phù hợp treo balo, túi xách hoặc làm quà tặng dễ thương.",
    material: DEFAULT_MATERIAL,
    orderOptions: SIZE_S_ORDER_OPTIONS,
    information: {
      size: "Size S: 5-7 cm",
      colors: "Trắng, kem, hồng, tím, xanh, nâu, vàng hoặc phối theo yêu cầu",
    },
    benefits: ["Nhiều mẫu thú mini size S dễ chọn theo nhóm", ...DEFAULT_BENEFITS],
    image: {
      src: "/images/products/moc-khoa-size-s/moc-khoa-size-s-nhieu-mau-cover.webp",
      alt: "Móc khóa len size S nhiều mẫu dễ thương",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        src: "/images/products/moc-khoa-size-s/moc-khoa-size-s-nhieu-mau-cover.webp",
        alt: "Móc khóa len size S nhiều mẫu dễ thương",
        width: 1000,
        height: 1000,
      }
    ],
    highlights: ["Đồng giá 45k size S", "Mẫu thú mini", "Có ưu đãi hiện hành"],
    promotion: ACTIVE_PROMOTION,
  },
  {
    slug: "set-moc-khoa-len-6-mau-qua-tang",
    name: "Combo 3 móc khóa len Mini",
    detailHeading: "Móc khóa len Mini Handmade combo 3 chiếc",
    category: "Combo móc khóa len Mini",
    tags: ["combo móc khóa mini", "móc khóa len mini", "quà tặng handmade", "móc khóa len theo yêu cầu"],
    priceVnd: 49000,
    shortDescription:
      "Combo 3 móc khóa len Mini được làm thủ công từ len Milk Cotton, phù hợp khi bạn cần set quà nhỏ để tặng bạn bè hoặc treo chìa khóa, balo, túi mini. LyliShop gợi ý các mẫu cún con, mèo, thỏ, cừu với màu xanh lá, đỏ hoặc hồng; bạn vẫn có thể nhắn shop để đổi mẫu, đổi màu hoặc gửi ảnh tham khảo trước khi làm.",
    longDescription: productDescription("Combo 3 móc khóa len Mini handmade", [
      "Nhóm mini phù hợp nhất khi bạn muốn một món quà nhỏ, giá tốt và có thể đặt theo combo.",
      "Kích thước gọn giúp sản phẩm dễ treo chìa khóa, túi tote, balo hoặc hộp bút mà không vướng.",
      "Gợi ý mẫu gồm cún con, mèo, thỏ, cừu hoặc các mẫu mini có form đơn giản để set 3 chiếc nhìn đồng bộ.",
      "Màu gợi ý gồm xanh lá, đỏ và hồng; có thể đổi sang tone khác nếu bạn muốn set quà hợp người nhận hơn.",
      "Shop xác nhận mẫu, size, số lượng và thời gian hoàn thiện trước khi chốt đơn qua tin nhắn.",
    ], MINI_SIZE_NOTE),
    metaDescription:
      "Combo 3 móc khóa len Mini handmade tại LyliShop, gợi ý mẫu cún con, mèo, thỏ, cừu và nhận chọn màu theo yêu cầu.",
    material: DEFAULT_MATERIAL,
    orderOptions: MINI_ORDER_OPTIONS,
    information: {
      size: "Mini: 3-4 cm",
      colors: "Trắng, kem, hồng, tím, xanh, nâu, vàng hoặc phối theo yêu cầu",
    },
    benefits: ["Combo 3 chiếc dễ chọn làm quà nhỏ", ...DEFAULT_BENEFITS],
    image: {
      src: "/images/products/moc-khoa-mini/moc-khoa-mini-dong-goi-nhieu-mau.webp",
      alt: "Móc khóa len mini đóng gói nhiều màu",
      width: 1000,
      height: 1000,
    },
    images: [
      {
        src: "/images/products/moc-khoa-mini/moc-khoa-mini-dong-goi-nhieu-mau.webp",
        alt: "Móc khóa len mini đóng gói nhiều màu",
        width: 1000,
        height: 1000,
      },
      {
        src: "/images/products/moc-khoa-mini/moc-khoa-mini-nhieu-mau-cover.webp",
        alt: "Bộ móc khóa len mini nhiều màu của LyliShop",
        width: 1000,
        height: 1000,
      },
      {
        src: "/images/products/moc-khoa-mini/moc-khoa-mini-hang-tang-lylishop.webp",
        alt: "Nhiều mẫu móc khóa len mini đang chuẩn bị tại LyliShop",
        width: 1200,
        height: 1200,
      }
    ],
    highlights: ["Combo 3 chiếc", "Gợi ý cún, mèo, thỏ, cừu", "Chọn màu trước khi làm"],
    promotion: ACTIVE_PROMOTION,
  },
  {
    slug: "set-moc-khoa-len-10-mau-mix",
    name: "Móc khóa len đồng giá từ 45k",
    detailHeading: "Móc khóa len Size M Handmade",
    category: "Set móc khóa len đồng giá",
    tags: ["móc khóa len đồng giá từ 45k", "móc khóa len giá tốt", "đặt móc khóa len số lượng", "móc khóa len cute"],
    priceVnd: 45000,
    shortDescription:
      "Móc khóa len size M được làm thủ công từ len Milk Cotton, nổi bật hơn size nhỏ nên hợp làm quà tặng cần gây ấn tượng. Nhóm mẫu này phù hợp treo balo, túi xách hoặc đặt số lượng cho nhóm bạn, lớp học. LyliShop nhận phối màu, chọn mẫu mix và làm theo yêu cầu trước khi xác nhận đơn.",
    longDescription: productDescriptionWithTieredPrice("Móc khóa len đồng giá từ 45k", [
      "Size M phù hợp khi bạn muốn món quà nổi bật hơn size mini nhưng vẫn đủ gọn để treo balo hoặc túi xách.",
      "Nhóm mẫu mix dễ dùng cho quà lớp, quà nhóm bạn hoặc các dịp cần nhiều món quà handmade cùng lúc.",
      "Khi đặt nhiều mẫu, bạn nên thống nhất trước tone màu, size và số lượng từng loại để shop tư vấn nhanh hơn.",
      "Các mẫu size M tạo cảm giác đầy đặn hơn, phù hợp với người thích phụ kiện nhìn rõ từ xa.",
      "Nếu cần đồng bộ theo nhóm, hãy gửi danh sách mẫu hoặc màu mong muốn trước khi shop xác nhận thời gian làm.",
    ]),
    metaDescription:
      "Móc khóa len đồng giá từ 45k tại LyliShop, 10 mẫu mix handmade, phù hợp đặt số lượng, quà lớp, quà nhóm và nhận tư vấn màu trên toàn Việt Nam.",
    material: DEFAULT_MATERIAL,
    orderOptions: SIZE_M_ORDER_OPTIONS,
    information: {
      size: "Size M: 8-10 cm",
      colors: "Trắng, kem, hồng, tím, xanh, nâu, vàng hoặc phối theo yêu cầu",
    },
    benefits: ["Giá tốt từ 45k, dễ đặt theo nhóm hoặc làm quà lớp", ...DEFAULT_BENEFITS],
    image: {
      src: "/images/products/moc-khoa-size-m/moc-khoa-size-m-kem-hong-xanh.webp",
      alt: "Móc khóa len size M nhiều màu trên khay tre",
      width: 1200,
      height: 1062,
    },
    images: [
      {
        src: "/images/products/moc-khoa-size-m/moc-khoa-size-m-kem-hong-xanh.webp",
        alt: "Móc khóa len size M nhiều màu trên khay tre",
        width: 1200,
        height: 1062,
      }
    ],
    highlights: ["Đồng giá từ 45k", "Hợp đặt số lượng", "10 mẫu mix dễ chọn"],
  },
  {
    slug: "moc-khoa-len-size-l-handmade",
    name: "Móc khóa len Size L 12cm",
    detailHeading: "Móc khóa len Size L Handmade",
    category: "Móc khóa len Size L",
    tags: ["móc khóa len size-l", "móc khóa len size L", "treo balo", "quà handmade"],
    priceVnd: 69000,
    shortDescription:
      "Móc khóa len Size L được làm thủ công từ len Milk Cotton, phù hợp khi bạn muốn phụ kiện nổi bật hơn để treo balo, túi xách hoặc làm quà tặng. Mẫu ảnh đang có các form thỏ hồng, gà vàng và vịt dưa hấu với kích thước tham khảo ngang 5cm, cao 12cm. LyliShop nhận trao đổi màu và chi tiết trước khi làm.",
    longDescription: productDescription("Móc khóa len Size L handmade", [
      "Size L phù hợp khi bạn muốn móc khóa nhìn rõ hơn trên balo, túi tote hoặc túi lớn.",
      "Ảnh chính đang thể hiện ba mẫu tham khảo gồm thỏ hồng, gà vàng và vịt dưa hấu.",
      "Kích thước trong ảnh là ngang 5cm và cao 12cm, phù hợp để khách dễ hình dung trước khi đặt.",
      "Có thể trao đổi màu, form nhân vật hoặc gửi ảnh tham khảo để LyliShop kiểm tra khả năng thực hiện.",
      "Shop xác nhận mẫu, màu, khoen treo và thời gian hoàn thiện qua tin nhắn trước khi bắt đầu làm.",
    ]),
    metaDescription:
      "Móc khóa len Size L handmade cao 12cm tại LyliShop, phù hợp treo balo, túi xách và nhận chọn màu theo yêu cầu.",
    material: DEFAULT_MATERIAL,
    orderOptions: SIZE_L_ORDER_OPTIONS,
    information: {
      size: "Size L: ngang 5 cm, cao 12 cm theo mẫu ảnh",
      colors: "Hồng, vàng, xanh lá, đỏ hoặc phối theo yêu cầu",
    },
    benefits: ["Kích thước nổi bật hơn khi treo balo hoặc túi lớn", ...DEFAULT_BENEFITS],
    image: {
      src: "/images/products/moc-khoa-size-l/moc-khoa-size-l-12cm-cover.jpg",
      alt: "Móc khóa len Size L handmade cao 12 cm của LyliShop",
      width: 1280,
      height: 853,
    },
    images: [
      {
        src: "/images/products/moc-khoa-size-l/moc-khoa-size-l-12cm-cover.jpg",
        alt: "Móc khóa len Size L handmade cao 12 cm của LyliShop",
        width: 1280,
        height: 853,
      },
      {
        src: "/images/products/moc-khoa-size-l/moc-khoa-size-l-tho-hong.jpg",
        alt: "Móc khóa len Size L hình thỏ hồng handmade của LyliShop",
        width: 1280,
        height: 1280,
      },
      {
        src: "/images/products/moc-khoa-size-l/moc-khoa-size-l-ga-vang.jpg",
        alt: "Móc khóa len Size L hình gà vàng handmade của LyliShop",
        width: 1280,
        height: 1280,
      },
      {
        src: "/images/products/moc-khoa-size-l/moc-khoa-size-l-vit-dua-hau.jpg",
        alt: "Móc khóa len Size L hình vịt dưa hấu handmade của LyliShop",
        width: 1280,
        height: 1280,
      },
      {
        src: "/images/products/moc-khoa-size-l/moc-khoa-size-l-treo-balo.jpg",
        alt: "Móc khóa len Size L hình gà vàng treo balo của LyliShop",
        width: 960,
        height: 1280,
      }
    ],
    highlights: ["Size L 12cm", "Nổi bật khi treo balo", "Có thể chọn màu"],
  },
];

const FEATURED_PRODUCT_SLUGS = [
  "set-moc-khoa-len-10-mau-mix",
  "set-moc-khoa-len-6-mau-cute",
  "set-moc-khoa-len-6-mau-qua-tang",
];

export const PRODUCTS: Product[] = PRODUCT_DATA.map((product) =>
  normalizeProduct({
    ...product,
    featured: product.featured ?? FEATURED_PRODUCT_SLUGS.includes(product.slug),
  })
);

export const FEATURED_PRODUCTS = [
  ...FEATURED_PRODUCT_SLUGS.map((slug) => PRODUCTS.find((p) => p.slug === slug)),
  ...PRODUCTS.filter((p) => !FEATURED_PRODUCT_SLUGS.includes(p.slug)),
].filter((product): product is Product => Boolean(product));

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4) {
  const productGroup = getProductGroup(product);

  return PRODUCTS.filter((candidate) => candidate.slug !== product.slug)
    .filter((candidate) => getProductGroup(candidate) === productGroup)
    .slice(0, limit);
}
