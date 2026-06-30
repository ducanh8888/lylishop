import { PRODUCTS } from "@/lib/products";

export const BLOG_INDEX_STRATEGY = {
  index: true,
  follow: true,
  collectionPriority: 0.35,
  postPriority: 0.3,
  changeFrequency: "yearly",
} as const;

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  keywords: string[];
  datePublished: string;
  dateModified: string;
  readingTime: string;
  relatedProductSlugs: string[];
  sections: Array<{
    heading: string;
    body: string[];
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "moc-khoa-len-handmade-la-gi",
    title: "Phụ kiện len handmade vì sao được thích làm quà?",
    excerpt:
      "Một góc nhìn nhẹ nhàng về cảm giác cá nhân của phụ kiện len handmade và lý do nhiều bạn thích chọn làm quà nhỏ.",
    description:
      "Cảm hứng chọn phụ kiện len handmade làm quà nhỏ: sự cá nhân, màu sắc riêng và cảm giác được chuẩn bị có tâm.",
    keywords: [
      "phụ kiện len handmade",
      "quà handmade nhỏ xinh",
      "quà tặng cá nhân",
      "đồ len thủ công",
    ],
    datePublished: "2026-06-16",
    dateModified: "2026-06-16",
    readingTime: "4 phút đọc",
    relatedProductSlugs: [
      "crochet-bear-keychain",
      "bunny-plush-charm",
      "cat-paw-crochet-accessory",
    ],
    sections: [
      {
        heading: "Phụ kiện len handmade tạo cảm giác riêng như thế nào?",
        body: [
          "Phụ kiện len handmade là món đồ nhỏ được móc thủ công bằng sợi len, sau đó gắn khoen để treo chìa khóa, balo, túi xách hoặc hộp bút. Điểm tạo cảm xúc của sản phẩm nằm ở form mềm, màu sắc dễ thương và cảm giác được làm riêng từng chiếc.",
          "Khác với phụ kiện sản xuất hàng loạt, mỗi mẫu handmade có thể có độ lệch nhỏ về đường móc, kích thước hoặc chi tiết. Đây cũng là lý do nhiều bạn chọn đồ len nhỏ để làm quà tặng cá nhân.",
        ],
      },
      {
        heading: "Phụ kiện len phù hợp với ai?",
        body: [
          "Sản phẩm hợp với học sinh, sinh viên, người thích đồ len thủ công, người thích phụ kiện cute hoặc đang tìm quà handmade dễ thương. Các mẫu nhỏ như thỏ, dâu tây, hoa tulip, bàn chân mèo thường dễ dùng hằng ngày và dễ phối với balo, túi tote.",
        ],
      },
      {
        heading: "Nên chọn phụ kiện len theo tiêu chí nào?",
        body: [
          "Bạn nên chọn theo mục đích dùng: treo balo nên ưu tiên mẫu chắc khoen, làm quà nên chọn màu hợp người nhận, còn chụp ảnh hoặc trang trí góc học tập có thể chọn mẫu có hình dáng nổi bật hơn.",
          "Tại LyliShop, bạn có thể nhắn shop để chọn màu len, phối chi tiết nhỏ và xác nhận thời gian làm trước khi chốt đơn.",
        ],
      },
    ],
    faqs: [
      {
        question: "Phụ kiện len handmade có bền không?",
        answer:
          "Có, nếu dùng đúng cách và tránh kéo mạnh phần khoen hoặc làm ướt lâu. Mẫu nhỏ thường phù hợp treo balo, chìa khóa, túi xách hoặc hộp bút.",
      },
      {
        question: "Có thể đặt phụ kiện len theo màu riêng không?",
        answer:
          "Có. Bạn có thể gửi màu mong muốn để LyliShop tư vấn phối màu và xác nhận trước khi làm.",
      },
    ],
  },
  {
    slug: "qua-handmade-tang-ban-gai",
    title: "Gợi ý quà handmade tặng bạn gái nhỏ xinh, dễ thương",
    excerpt:
      "Các tiêu chí chọn quà handmade tặng bạn gái và gợi ý phụ kiện len mini phù hợp cho sinh nhật, kỷ niệm hoặc món quà bất ngờ.",
    description:
      "Gợi ý quà handmade tặng bạn gái: phụ kiện len mini và cách chọn món quà nhỏ dễ thương, vừa túi tiền.",
    keywords: [
      "quà handmade tặng bạn gái",
      "quà tặng handmade",
      "quà handmade dễ thương",
      "quà sinh nhật nhỏ xinh",
    ],
    datePublished: "2026-06-16",
    dateModified: "2026-06-16",
    readingTime: "5 phút đọc",
    relatedProductSlugs: [
      "strawberry-yarn-charm",
      "tulip-crochet-keychain",
      "bunny-plush-charm",
    ],
    sections: [
      {
        heading: "Vì sao quà handmade dễ tạo thiện cảm?",
        body: [
          "Quà handmade thường tạo cảm giác có sự chuẩn bị và quan tâm hơn một món đồ mua vội. Với nhóm phụ kiện len nhỏ, người nhận có thể dùng hằng ngày nên món quà dễ được nhớ tới.",
          "Nếu bạn chưa biết chọn gì quá lớn, một món phụ kiện len handmade nhỏ xinh là lựa chọn an toàn, dễ thương và không gây áp lực về giá trị vật chất.",
        ],
      },
      {
        heading: "Chọn quà handmade tặng bạn gái theo phong cách",
        body: [
          "Nếu bạn gái thích style ngọt ngào, mẫu dâu tây hoặc thỏ bông sẽ hợp hơn. Nếu thích nhẹ nhàng, hoa tulip là lựa chọn tinh tế. Nếu thích phụ kiện vui mắt, bàn chân mèo hoặc thú len mini sẽ dễ tạo cảm giác đáng yêu.",
        ],
      },
      {
        heading: "Khi nào nên tặng phụ kiện len nhỏ?",
        body: [
          "Phụ kiện len nhỏ phù hợp làm quà sinh nhật, quà cảm ơn, quà kỷ niệm nhỏ hoặc món quà bất ngờ sau giờ học. Vì kích thước nhỏ, sản phẩm cũng dễ gửi kèm thiệp hoặc hộp quà.",
        ],
      },
    ],
    faqs: [
      {
        question: "Phụ kiện len nhỏ có hợp làm quà sinh nhật không?",
        answer:
          "Có. Phụ kiện len nhỏ dễ thương, dùng được hằng ngày và có thể chọn màu theo sở thích người nhận.",
      },
      {
        question: "Nên chọn mẫu nào nếu chưa biết sở thích người nhận?",
        answer:
          "Bạn nên chọn mẫu có màu nhẹ, hình dáng dễ dùng như thỏ, hoa tulip hoặc dâu tây vì các mẫu này hợp nhiều phong cách.",
      },
    ],
  },
  {
    slug: "y-nghia-qua-handmade",
    title: "Ý nghĩa quà handmade: nhỏ thôi nhưng rất có tâm",
    excerpt:
      "Quà handmade thường được yêu thích vì mang cảm giác cá nhân, có thời gian làm và dễ gắn với kỷ niệm.",
    description:
      "Ý nghĩa quà handmade và lý do phụ kiện len nhỏ xinh phù hợp làm quà cho bạn bè, người yêu, người thân.",
    keywords: [
      "ý nghĩa quà handmade",
      "quà tặng handmade",
      "quà handmade dễ thương",
      "phụ kiện handmade",
    ],
    datePublished: "2026-06-16",
    dateModified: "2026-06-16",
    readingTime: "4 phút đọc",
    relatedProductSlugs: [
      "crochet-bear-keychain",
      "tulip-crochet-keychain",
      "strawberry-yarn-charm",
    ],
    sections: [
      {
        heading: "Quà handmade thể hiện sự quan tâm",
        body: [
          "Một món quà handmade không cần quá đắt để có ý nghĩa. Giá trị của nó nằm ở cảm giác được chọn lựa, được làm thủ công và có thể cá nhân hóa theo người nhận.",
          "Với phụ kiện len mini, bạn có thể chọn màu yêu thích, kiểu dáng dễ thương hoặc chi tiết nhỏ gắn với sở thích của người nhận.",
        ],
      },
      {
        heading: "Quà nhỏ nhưng dùng được hằng ngày",
        body: [
          "Phụ kiện len mini có thể treo balo, túi, chìa khóa hoặc trang trí góc học tập. Khi món quà xuất hiện trong đời sống hằng ngày, nó tạo cảm giác thân thuộc hơn một món đồ chỉ để cất giữ.",
        ],
      },
      {
        heading: "Cách làm quà handmade trông chỉn chu hơn",
        body: [
          "Bạn có thể chọn màu hợp người nhận, nhắn một lời chúc ngắn và yêu cầu shop đóng gói gọn gàng. Những chi tiết nhỏ này giúp món quà trông có chủ ý hơn.",
        ],
      },
    ],
    faqs: [
      {
        question: "Quà handmade có cần đắt tiền không?",
        answer:
          "Không. Quà handmade thường được yêu thích vì sự tinh tế, cá nhân hóa và cảm giác được chuẩn bị cẩn thận.",
      },
      {
        question: "Phụ kiện len mini có phù hợp tặng bạn thân không?",
        answer:
          "Phù hợp, đặc biệt nếu bạn chọn mẫu theo màu yêu thích hoặc tính cách của bạn thân.",
      },
    ],
  },
  {
    slug: "cach-bao-quan-moc-khoa-len",
    title: "Cách giữ phụ kiện len handmade dùng lâu hơn",
    excerpt:
      "Gợi ý giữ phụ kiện len sạch, ít xù và bền form khi dùng hằng ngày.",
    description:
      "Cách giữ phụ kiện len handmade bền đẹp: vệ sinh nhẹ, phơi đúng cách, tránh kéo mạnh và giữ form khi sử dụng.",
    keywords: [
      "cách bảo quản phụ kiện len",
      "phụ kiện len handmade",
      "đồ handmade dùng lâu",
      "giữ đồ len bền đẹp",
    ],
    datePublished: "2026-06-16",
    dateModified: "2026-06-16",
    readingTime: "4 phút đọc",
    relatedProductSlugs: [
      "cat-paw-crochet-accessory",
      "bunny-plush-charm",
      "crochet-bear-keychain",
    ],
    sections: [
      {
        heading: "Tránh kéo mạnh phần khoen và chi tiết nhỏ",
        body: [
          "Phụ kiện len được làm thủ công nên bạn nên hạn chế kéo mạnh vào tai, lá, nơ hoặc phần khoen. Khi tháo khỏi túi, hãy cầm vào khoen kim loại thay vì kéo phần thân len.",
        ],
      },
      {
        heading: "Cách vệ sinh khi bị bụi nhẹ",
        body: [
          "Nếu sản phẩm chỉ bám bụi, bạn có thể dùng khăn khô mềm hoặc bàn chải lông mềm chải nhẹ. Nếu cần làm sạch sâu hơn, nên chấm nhẹ bằng khăn ẩm và để khô tự nhiên.",
          "Không nên ngâm lâu hoặc vắt mạnh vì có thể làm sản phẩm mất form.",
        ],
      },
      {
        heading: "Cách giữ form khi dùng hằng ngày",
        body: [
          "Hạn chế để phụ kiện len bị đè nặng trong balo quá lâu. Khi không dùng, bạn có thể treo ở nơi khô thoáng để sản phẩm giữ dáng đẹp hơn.",
        ],
      },
    ],
    faqs: [
      {
        question: "Phụ kiện len có giặt được không?",
        answer:
          "Có thể làm sạch nhẹ, nhưng không nên ngâm hoặc vắt mạnh. Cách tốt nhất là lau/chấm nhẹ và phơi nơi thoáng mát.",
      },
      {
        question: "Làm gì khi phụ kiện len bị xù nhẹ?",
        answer:
          "Bạn có thể dùng kéo nhỏ cắt phần xù nổi trên bề mặt, tránh kéo sợi len ra khỏi sản phẩm.",
      },
    ],
  },
  {
    slug: "qua-sinh-nhat-handmade",
    title: "Quà sinh nhật handmade: chọn sao cho xinh và không bị sến?",
    excerpt:
      "Gợi ý chọn quà sinh nhật handmade vừa dễ thương, vừa thiết thực cho học sinh, sinh viên và người thích phụ kiện nhỏ.",
    description:
      "Gợi ý quà sinh nhật handmade như phụ kiện len mini và cách chọn quà theo phong cách người nhận.",
    keywords: [
      "quà sinh nhật handmade",
      "quà handmade nhỏ xinh",
      "quà handmade tặng bạn gái",
      "quà handmade dễ thương",
    ],
    datePublished: "2026-06-16",
    dateModified: "2026-06-16",
    readingTime: "5 phút đọc",
    relatedProductSlugs: [
      "tulip-crochet-keychain",
      "strawberry-yarn-charm",
      "cat-paw-crochet-accessory",
    ],
    sections: [
      {
        heading: "Chọn quà sinh nhật handmade theo mức độ thân",
        body: [
          "Nếu là bạn cùng lớp hoặc bạn mới quen, nên chọn món nhỏ, dễ dùng và không quá riêng tư. Nếu là bạn thân hoặc người yêu, bạn có thể chọn màu, hình dáng hoặc chi tiết gần với sở thích của người nhận hơn.",
        ],
      },
      {
        heading: "Phụ kiện len mini là lựa chọn dễ tặng",
        body: [
          "Phụ kiện len handmade mini có giá dễ chọn, kích thước nhỏ, dễ đóng gói và người nhận có thể dùng ngay. Đây là lựa chọn hợp với học sinh, sinh viên hoặc người thích đồ cute.",
        ],
      },
      {
        heading: "Nên nhắn gì khi đặt quà?",
        body: [
          "Bạn nên gửi cho shop mẫu muốn chọn, màu yêu thích của người nhận, ngày cần nhận hàng và yêu cầu đóng gói nếu muốn tặng trực tiếp. Càng rõ thông tin, shop càng dễ tư vấn mẫu phù hợp.",
        ],
      },
    ],
    faqs: [
      {
        question: "Quà sinh nhật handmade nên đặt trước bao lâu?",
        answer:
          "Bạn nên nhắn trước vài ngày để shop có thời gian xác nhận mẫu, màu và hoàn thiện sản phẩm.",
      },
      {
        question: "Mẫu nào hợp tặng sinh nhật nhất?",
        answer:
          "Hoa tulip, dâu tây, thỏ bông và bàn chân mèo là các mẫu dễ thương, dễ dùng và hợp làm quà sinh nhật.",
      },
    ],
  },
];

export const FEATURED_BLOG_POSTS = BLOG_POSTS.slice(0, 3);

export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedProductsForPost(post: BlogPost) {
  return post.relatedProductSlugs
    .map((slug) => PRODUCTS.find((product) => product.slug === slug))
    .filter((product): product is NonNullable<typeof product> => Boolean(product));
}

export function getBlogCoverProduct(post: BlogPost) {
  return getRelatedProductsForPost(post)[0] ?? PRODUCTS[0];
}
