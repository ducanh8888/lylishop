import { SITE } from "@/lib/site";

export type HomepageAboutHighlight = {
  title: string;
  description: string;
  icon: "handmade" | "palette" | "gift" | "reference";
};

export type HomepageAboutTrustStep = {
  title: string;
  description: string;
};

export type HomepageAboutCta = {
  label: string;
  href: string;
  external?: boolean;
  variant: "primary" | "secondary";
};

export const HOMEPAGE_ABOUT = {
  eyebrow: "Về LyliShop",
  title: "Móc khóa len handmade được chuẩn bị theo từng món quà",
  description:
    "LyliShop làm móc khóa len handmade, hoa len và thú bông len theo từng yêu cầu nhỏ của khách. Sản phẩm được móc thủ công từ len Milk Cotton, có thể chọn màu, phối chi tiết và chuẩn bị theo dịp tặng. Shop ưu tiên tư vấn rõ trước khi làm để món quà giữ được cảm giác riêng, phù hợp tặng bạn thân, người yêu hoặc tự thưởng.",
  highlights: [
    {
      title: "Handmade theo đơn",
      description: "Mỗi mẫu được chuẩn bị theo yêu cầu, không sản xuất đại trà.",
      icon: "handmade",
    },
    {
      title: "Chọn màu và phối chi tiết",
      description: "Bạn có thể trao đổi tone màu, mẫu yêu thích hoặc phong cách người nhận.",
      icon: "palette",
    },
    {
      title: "Gói quà gọn gàng",
      description: "Sản phẩm được kiểm tra và đóng gói chỉn chu trước khi gửi.",
      icon: "gift",
    },
    {
      title: "Làm theo ảnh hoặc mô tả",
      description: "LyliShop sẽ phản hồi phần nào làm được trước khi chốt mẫu.",
      icon: "reference",
    },
  ] satisfies HomepageAboutHighlight[],
  image: {
    src: "/images/homepage/lylishop-about-handmade-workshop.webp",
    alt: "Nhiều mẫu móc khóa len mini được chuẩn bị tại LyliShop",
    width: 1200,
    height: 900,
    caption: "Ảnh sản phẩm và quá trình chuẩn bị thực tế tại LyliShop.",
  },
  imageChecklist: [
    "Ảnh xưởng hoặc góc làm len",
    "Ảnh đóng gói trước khi gửi",
    "Ảnh quy trình móc thủ công",
    "Ảnh bàn làm việc có sản phẩm thật",
  ],
  trustSteps: [
    {
      title: "Trao đổi mẫu",
      description: "Shop hỏi rõ mẫu, màu, số lượng và dịp tặng trước khi làm.",
    },
    {
      title: "Móc thủ công",
      description: "Sản phẩm được móc, chỉnh form và gắn khoen theo từng mẫu.",
    },
    {
      title: "Kiểm tra trước khi gửi",
      description: "LyliShop kiểm tra lại thành phẩm và xác nhận thông tin qua tin nhắn.",
    },
  ] satisfies HomepageAboutTrustStep[],
  ctas: [
    {
      label: "Nhắn Zalo",
      href: SITE.socials.zalo,
      external: true,
      variant: "primary",
    },
    {
      label: "Xem sản phẩm",
      href: "/products",
      variant: "secondary",
    },
    {
      label: "Xem danh mục",
      href: "/#categories",
      variant: "secondary",
    },
  ] satisfies HomepageAboutCta[],
} as const;
