import { SITE } from "@/lib/site";

export type HomepageContactTrustItem = {
  title: string;
  description: string;
  icon: "handmade" | "palette" | "gift" | "card" | "confirm";
};

export type HomepageContactFaq = {
  question: string;
  answer: string;
};

export type HomepageContactChannel = {
  label: string;
  value: string;
  href?: string;
  icon: "facebook" | "instagram" | "zalo" | "phone" | "email" | "maps";
  ariaLabel?: string;
};

export type HomepageContactCta = {
  label: string;
  href: string;
  external?: boolean;
  variant: "primary" | "secondary";
  ariaLabel: string;
};

export const HOMEPAGE_CONTACT = {
  eyebrow: "Liên hệ đặt hàng",
  title: "Liên hệ đặt móc khóa len handmade theo yêu cầu",
  description:
    "LyliShop nhận đặt móc khóa len handmade, hoa len và thú bông len làm thủ công từ len Milk Cotton. Bạn có thể chọn mẫu, chọn màu, gửi ảnh tham khảo hoặc nhắn ý tưởng để shop tư vấn trước khi làm. Sản phẩm phù hợp làm quà tặng nhỏ, quà sinh nhật hoặc phụ kiện cá nhân; LyliShop sẽ xác nhận mẫu, màu và ghi chú trước khi chốt đơn qua Zalo.",
  trustItems: [
    {
      title: "Handmade theo đơn",
      description: "Shop trao đổi mẫu, số lượng và ghi chú trước khi bắt đầu làm.",
      icon: "handmade",
    },
    {
      title: "Chọn màu theo yêu cầu",
      description: "Bạn có thể chọn tone màu hoặc nhờ shop tư vấn phối màu hài hòa.",
      icon: "palette",
    },
    {
      title: "Có gói quà",
      description: "LyliShop hỗ trợ chuẩn bị món quà gọn gàng khi bạn cần tặng.",
      icon: "gift",
    },
    {
      title: "Có thiệp",
      description: "Bạn có thể ghi chú nhu cầu kèm thiệp trong form đặt hàng nhanh.",
      icon: "card",
    },
    {
      title: "Xác nhận trước khi làm",
      description: "Shop phản hồi phần có thể thực hiện để khách yên tâm trước khi chốt.",
      icon: "confirm",
    },
  ] satisfies HomepageContactTrustItem[],
  faqs: [
    {
      question: "Bao lâu shop phản hồi?",
      answer:
        "LyliShop ưu tiên phản hồi qua Zalo. Nếu bạn gửi đủ mẫu, màu và số lượng, shop có thể tư vấn nhanh hơn.",
    },
    {
      question: "Có làm theo ảnh không?",
      answer:
        "Có. Bạn có thể gửi ảnh mẫu hoặc mô tả ý tưởng, LyliShop sẽ xác nhận phần làm được trước khi nhận đơn.",
    },
    {
      question: "Có chọn màu không?",
      answer:
        "Có. Bạn có thể chọn màu yêu thích, phối màu theo dịp tặng hoặc nhờ shop gợi ý màu phù hợp.",
    },
  ] satisfies HomepageContactFaq[],
  ctas: [
    {
      label: "Nhắn Zalo đặt hàng",
      href: SITE.socials.zalo,
      external: true,
      variant: "primary",
      ariaLabel: "Nhắn Zalo đặt móc khóa len handmade với LyliShop",
    },
    {
      label: "Xem danh mục",
      href: "/#categories",
      variant: "secondary",
      ariaLabel: "Xem danh mục sản phẩm handmade của LyliShop",
    },
  ] satisfies HomepageContactCta[],
  channels: [
    {
      label: "Facebook",
      value: "Theo dõi LyliShop.",
      href: SITE.socials.facebook,
      icon: "facebook",
      ariaLabel: "Mở Facebook LyliShop",
    },
    {
      label: "Instagram",
      value: "Xem hình ảnh sản phẩm.",
      href: SITE.socials.instagram,
      icon: "instagram",
      ariaLabel: "Mở Instagram LyliShop",
    },
    {
      label: "Zalo",
      value: "Tư vấn nhanh.",
      href: SITE.socials.zalo,
      icon: "zalo",
      ariaLabel: "Nhắn Zalo LyliShop",
    },
    {
      label: "Điện thoại",
      value: SITE.phone,
      href: `tel:${SITE.phone}`,
      icon: "phone",
      ariaLabel: "Gọi điện cho LyliShop",
    },
    {
      label: "Email",
      value: SITE.email,
      href: `mailto:${SITE.email}`,
      icon: "email",
      ariaLabel: "Gửi email cho LyliShop",
    },
    {
      label: "Google Maps",
      value: "Tư vấn và chốt đơn online.",
      icon: "maps",
    },
  ] satisfies HomepageContactChannel[],
  map: {
    title: "Google Maps",
    ariaLabel: "Khung thông tin Google Maps LyliShop",
    description:
      "LyliShop hiện hỗ trợ tư vấn và đặt hàng online trên toàn quốc. Khung bản đồ sẽ được cập nhật khi shop có địa chỉ công khai phù hợp.",
  },
} as const;
