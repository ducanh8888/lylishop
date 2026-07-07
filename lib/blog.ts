export type BlogContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
      ordered?: boolean;
    }
  | {
      type: "table";
      caption?: string;
      headers: string[];
      rows: string[][];
    }
  | {
      type: "quote";
      quote: string;
      cite?: string;
    }
  | {
      type: "callout";
      tone: "info" | "tip" | "warning";
      title?: string;
      body: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      caption?: string;
    };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  keywords: string[];
  datePublished: string;
  dateModified: string;
  readingTime: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  sections: Array<{
    heading: string;
    body?: string[];
    blocks?: BlogContentBlock[];
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "phu-kien-len-handmade-la-gi",
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
    image: {
      src: "/images/blog/moc-khoa-mini-hang-tang-lylishop.webp",
      alt: "Bộ móc khóa len mini nhiều màu đang chuẩn bị tại LyliShop",
      width: 1200,
      height: 900,
    },
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
      {
        heading: "Checklist nhanh trước khi chọn phụ kiện len",
        blocks: [
          {
            type: "list",
            items: [
              "Xác định người nhận sẽ treo ở đâu: chìa khóa, balo, túi tote, hộp bút hay góc học tập.",
              "Chọn form theo sở thích: thú len cho cảm giác đáng yêu, hoa len cho phong cách nhẹ nhàng, hình quả cho cảm giác vui mắt.",
              "Hỏi trước màu người nhận thích nếu đây là quà sinh nhật hoặc quà cho bạn thân.",
              "Nếu cần nhận đúng ngày, hãy nhắn shop ngày cần nhận để kiểm tra thời gian làm và giao hàng.",
              "Với mẫu có chi tiết nhỏ như lá, tai, nơ hoặc đệm chân, nên hỏi cách bảo quản để dùng lâu hơn.",
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Gợi ý từ LyliShop",
            body: "Nếu bạn phân vân giữa nhiều mẫu, hãy gửi LyliShop ảnh sản phẩm hoặc tên mẫu bạn thích. Shop có thể tư vấn theo mục đích dùng, màu người nhận thích và thời gian bạn cần nhận quà.",
          },
        ],
      },
      {
        heading: "So sánh nhanh các nhóm phụ kiện len",
        blocks: [
          {
            type: "table",
            caption: "Bảng này giúp bạn chọn nhóm sản phẩm theo nhu cầu, không thay thế tư vấn mẫu cụ thể qua tin nhắn.",
            headers: ["Nhóm sản phẩm", "Phù hợp với", "Lưu ý khi chọn"],
            rows: [
              ["Móc khóa thú len", "Người thích đồ cute, thú bông nhỏ, phụ kiện nổi bật", "Chú ý form tai, tay hoặc chi tiết nhỏ nếu dùng hằng ngày"],
              ["Hoa len", "Người thích phong cách nhẹ nhàng, tinh tế", "Nên chọn màu hoa và màu lá hài hòa với túi hoặc balo"],
              ["Mẫu mini size S", "Quà nhóm, quà lớp, phụ kiện treo gọn", "Phù hợp khi cần món nhỏ, dễ chia và dễ đặt số lượng"],
            ],
          },
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
      {
        question: "Nên gửi thông tin gì khi hỏi mẫu phụ kiện len?",
        answer:
          "Bạn nên gửi mẫu đang thích, màu mong muốn, số lượng, dịp tặng và ngày cần nhận. Những thông tin này giúp LyliShop tư vấn rõ hơn trước khi chốt đơn.",
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
    image: {
      src: "/images/blog/hoa-len-bo-hoa-handmade.webp",
      alt: "Bo hoa len handmade dung lam qua tang",
      width: 1200,
      height: 900,
    },
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
        heading: "Bảng chọn mẫu theo phong cách người nhận",
        blocks: [
          {
            type: "table",
            caption: "Gợi ý dựa trên nhóm sản phẩm hiện có tại LyliShop, không phải quy tắc bắt buộc.",
            headers: ["Phong cách", "Mẫu nên cân nhắc", "Vì sao phù hợp"],
            rows: [
              ["Ngọt ngào", "Dâu tây, thỏ con", "Màu sắc và form nhỏ dễ tạo cảm giác đáng yêu"],
              ["Nhẹ nhàng", "Hoa tulip", "Dáng gọn, ít chi tiết rườm rà, hợp quà tinh tế"],
              ["Vui mắt", "Bàn chân mèo, thú mini", "Có chi tiết nhận diện rõ, dễ dùng làm phụ kiện hằng ngày"],
              ["Thích đồ đôi/nhóm", "Set móc khóa đồng giá", "Dễ chọn nhiều mẫu cùng tone màu hoặc cùng size"],
            ],
          },
        ],
      },
      {
        heading: "Khi nào nên tặng phụ kiện len nhỏ?",
        body: [
          "Phụ kiện len nhỏ phù hợp làm quà sinh nhật, quà cảm ơn, quà kỷ niệm nhỏ hoặc món quà bất ngờ sau giờ học. Vì kích thước nhỏ, sản phẩm cũng dễ gửi kèm thiệp hoặc hộp quà.",
        ],
      },
      {
        heading: "Checklist trước khi nhắn shop đặt quà",
        blocks: [
          {
            type: "list",
            items: [
              "Gửi mẫu bạn thích hoặc link sản phẩm để shop biết đúng form cần tư vấn.",
              "Nói rõ người nhận thích màu nhẹ, màu nổi hay tone dễ thương.",
              "Cho shop biết dịp tặng để gợi ý cách đóng gói và thời gian chuẩn bị phù hợp.",
              "Nếu muốn đặt theo nhóm hoặc đặt nhiều mẫu, hãy gửi số lượng từng mẫu.",
              "Hỏi trước thời gian hoàn thiện nếu bạn cần quà đúng một ngày cụ thể.",
            ],
          },
          {
            type: "callout",
            tone: "info",
            title: "Không cần chọn món quá lớn",
            body: "Với quà handmade, cảm giác được chọn đúng sở thích thường quan trọng hơn kích thước món quà. Một móc khóa len nhỏ nhưng đúng màu, đúng phong cách vẫn có thể tạo thiện cảm.",
          },
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
      {
        question: "Có nên hỏi người nhận thích màu gì trước không?",
        answer:
          "Nếu đây không phải món quà bất ngờ tuyệt đối, bạn nên hỏi màu yêu thích hoặc quan sát màu đồ người nhận thường dùng. Điều này giúp mẫu handmade cá nhân hơn.",
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
    image: {
      src: "/images/blog/moc-khoa-mini-hang-tang-lylishop.webp",
      alt: "Nhiều mẫu móc khóa len handmade làm quà tặng nhỏ",
      width: 1200,
      height: 900,
    },
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
      {
        heading: "Cách cá nhân hóa món quà mà không làm quá",
        blocks: [
          {
            type: "list",
            items: [
              "Chọn màu theo thói quen của người nhận thay vì chỉ chọn màu bạn thích.",
              "Ưu tiên mẫu người nhận có thể dùng hằng ngày như treo balo, túi hoặc chìa khóa.",
              "Gửi kèm một lời nhắn ngắn để món quà có bối cảnh, nhất là quà cảm ơn hoặc quà sinh nhật.",
              "Nếu đặt mẫu theo yêu cầu, chỉ nên thêm vài chi tiết nhỏ để sản phẩm vẫn gọn và dễ dùng.",
            ],
          },
        ],
      },
      {
        heading: "Khi nào quà handmade là lựa chọn phù hợp?",
        blocks: [
          {
            type: "table",
            caption: "Bảng này giúp bạn kiểm tra nhanh trước khi chọn quà handmade.",
            headers: ["Tình huống", "Có phù hợp không", "Lý do"],
            rows: [
              ["Quà sinh nhật nhỏ", "Phù hợp", "Dễ cá nhân hóa màu và mẫu theo người nhận"],
              ["Quà cảm ơn", "Phù hợp", "Không quá nặng về vật chất nhưng vẫn có sự chuẩn bị"],
              ["Quà cần dùng ngay", "Tùy thời gian", "Nên hỏi trước thời gian hoàn thiện và giao hàng"],
              ["Quà quá trang trọng", "Cần cân nhắc", "Phụ kiện len hợp cảm xúc gần gũi hơn là sự kiện trang trọng"],
            ],
          },
          {
            type: "callout",
            tone: "warning",
            title: "Lưu ý trước khi đặt",
            body: "Nếu bạn cần món quà đúng ngày, hãy nhắn shop trước để xác nhận thời gian làm. Đồ handmade cần thời gian hoàn thiện nên không nên đặt quá sát nếu mẫu có nhiều chi tiết.",
          },
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
      {
        question: "Làm sao để quà handmade không bị quá sến?",
        answer:
          "Bạn nên chọn mẫu gọn, màu dễ dùng và lời nhắn ngắn gọn. Món quà sẽ tự nhiên hơn khi người nhận có thể dùng trong đời sống hằng ngày.",
      },
    ],
  },
  {
    slug: "cach-bao-quan-phu-kien-len",
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
    image: {
      src: "/images/blog/quy-trinh-moc-khoa-mini-phoi.webp",
      alt: "Móc khóa len mini trong quá trình chuẩn bị",
      width: 1200,
      height: 900,
    },
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
        heading: "Bảng xử lý nhanh khi phụ kiện len bị bẩn hoặc xù",
        blocks: [
          {
            type: "table",
            caption: "Chỉ áp dụng cho tình huống nhẹ. Nếu sản phẩm bị bung chi tiết hoặc hỏng khoen, nên nhắn shop để được tư vấn trước khi tự xử lý.",
            headers: ["Tình trạng", "Nên làm", "Không nên làm"],
            rows: [
              ["Bám bụi nhẹ", "Dùng khăn khô mềm hoặc chổi lông mềm phủi nhẹ", "Chà mạnh bằng bàn chải cứng"],
              ["Dính vết bẩn nhỏ", "Chấm nhẹ bằng khăn ẩm, để khô tự nhiên", "Ngâm nước lâu hoặc vắt mạnh"],
              ["Xù lông nhẹ", "Dùng kéo nhỏ cắt phần xù nổi trên bề mặt", "Kéo sợi len ra khỏi sản phẩm"],
              ["Bị đè mất form", "Đặt ở nơi khô thoáng, chỉnh nhẹ bằng tay", "Dùng nhiệt cao hoặc phơi nắng gắt"],
            ],
          },
        ],
      },
      {
        heading: "Cách giữ form khi dùng hằng ngày",
        body: [
          "Hạn chế để phụ kiện len bị đè nặng trong balo quá lâu. Khi không dùng, bạn có thể treo ở nơi khô thoáng để sản phẩm giữ dáng đẹp hơn.",
        ],
      },
      {
        heading: "Checklist bảo quản sau khi nhận hàng",
        blocks: [
          {
            type: "list",
            items: [
              "Kiểm tra khoen trước khi treo vào balo hoặc chùm chìa khóa.",
              "Cầm vào khoen kim loại khi tháo ra, hạn chế kéo phần tai, lá, nơ hoặc chi tiết thêu.",
              "Tránh để sản phẩm bị ẩm lâu trong túi kín.",
              "Nếu không dùng trong thời gian dài, nên cất ở nơi khô thoáng và tránh bị đè nặng.",
              "Khi cần vệ sinh, hãy xử lý nhẹ từng vùng nhỏ thay vì giặt cả sản phẩm.",
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Mẹo dùng hằng ngày",
            body: "Với các mẫu có lá, tai dài hoặc chi tiết nhỏ, bạn nên treo ở vị trí ít bị cọ vào khóa kéo hoặc vật sắc trong balo.",
          },
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
      {
        question: "Có nên phơi phụ kiện len dưới nắng gắt không?",
        answer:
          "Không nên. Nếu sản phẩm bị ẩm nhẹ, bạn nên để khô tự nhiên ở nơi thoáng mát để hạn chế ảnh hưởng đến form và màu len.",
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
    image: {
      src: "/images/blog/quy-trinh-moc-khoa-size-m-ga-vang.webp",
      alt: "Nhieu moc khoa len size M dang duoc chuan bi",
      width: 1200,
      height: 900,
    },
    sections: [
      {
        heading: "Chọn quà sinh nhật handmade theo mức độ thân",
        body: [
          "Nếu là bạn cùng lớp hoặc bạn mới quen, nên chọn món nhỏ, dễ dùng và không quá riêng tư. Nếu là bạn thân hoặc người yêu, bạn có thể chọn màu, hình dáng hoặc chi tiết gần với sở thích của người nhận hơn.",
        ],
      },
      {
        heading: "Bảng chọn quà sinh nhật theo người nhận",
        blocks: [
          {
            type: "table",
            caption: "Gợi ý theo bối cảnh sinh nhật, dùng để định hướng trước khi xem sản phẩm cụ thể.",
            headers: ["Người nhận", "Nên ưu tiên", "Gợi ý tại LyliShop"],
            rows: [
              ["Bạn cùng lớp hoặc đồng nghiệp", "Mẫu nhỏ, dễ dùng, không quá riêng tư", "Mẫu mini size S hoặc móc khóa đồng giá"],
              ["Bạn thân", "Màu đúng sở thích, form có cá tính rõ", "Dâu tây, bàn chân mèo, thú len mini"],
              ["Người yêu", "Mẫu có cảm giác được chọn riêng", "Thỏ con, thỏ bông, hoa tulip"],
              ["Nhóm bạn", "Dễ đặt số lượng, có thể đổi màu từng mẫu", "Set móc khóa len đồng giá từ 45k"],
            ],
          },
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
      {
        heading: "Checklist để quà sinh nhật trông chỉn chu hơn",
        blocks: [
          {
            type: "list",
            items: [
              "Chọn mẫu trước theo người nhận, không chỉ theo mẫu đang phổ biến.",
              "Gửi màu người nhận thích hoặc màu thường dùng trong balo, túi, phụ kiện.",
              "Nói rõ ngày sinh nhật hoặc ngày cần nhận để shop kiểm tra thời gian chuẩn bị.",
              "Nếu tặng nhóm, hãy thống nhất size và khoảng giá trước khi chọn mẫu.",
              "Hỏi cách đóng gói nếu bạn muốn trao quà trực tiếp.",
            ],
          },
          {
            type: "callout",
            tone: "info",
            title: "Điểm khác với bài quà tặng bạn gái",
            body: "Bài này tập trung vào dịp sinh nhật và mức độ thân với người nhận. Nếu bạn cần chọn quà theo phong cách của bạn gái, hãy xem bài gợi ý quà handmade tặng bạn gái.",
          },
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
      {
        question: "Có nên đặt nhiều móc khóa giống nhau để tặng nhóm không?",
        answer:
          "Có thể, nếu bạn muốn quà đồng bộ. Bạn cũng có thể chọn cùng một size nhưng đổi màu hoặc đổi mẫu để mỗi người nhận có cảm giác riêng.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
