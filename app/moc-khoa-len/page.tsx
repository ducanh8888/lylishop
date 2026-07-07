import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Gift,
  MessageCircle,
  Palette,
  ShieldCheck,
  ShoppingBag,
  Users,
} from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BLOG_POSTS } from "@/lib/blog";
import { getProductGroup, PRODUCTS, type Product, type ProductGroup } from "@/lib/products";
import { createPageMetadata, HOME_OG_IMAGE } from "@/lib/seo";
import { SITE } from "@/lib/site";
import {
  breadcrumbJsonLd,
  collectionPageJsonLd,
  faqJsonLd,
} from "@/lib/schema";
import { formatVnd } from "@/lib/format";

const PAGE_PATH = "/moc-khoa-len";
const PAGE_URL = `${SITE.url}${PAGE_PATH}`;

const KEYWORDS = [
  "móc khóa",
  "móc khoá",
  "móc khóa len",
  "móc khoá len",
  "móc khóa handmade",
  "móc khóa thú len",
  "móc khóa crochet",
  "móc khóa dễ thương",
  "quà tặng handmade",
  "thú len handmade",
  "móc khóa len mini",
  "móc khóa len làm quà",
];

const PILLAR_NAV = [
  { href: "#moc-khoa-len-la-gi", label: "Móc khóa len là gì" },
  { href: "#phan-loai-moc-khoa-len", label: "Phân loại móc khóa len" },
  { href: "#goi-y-chon-nhanh", label: "Gợi ý chọn nhanh" },
  { href: "#bang-chon-size", label: "Chọn size" },
  { href: "#so-sanh-dong-san-pham", label: "So sánh dòng sản phẩm" },
  { href: "#quy-trinh-dat-hang", label: "Quy trình đặt hàng" },
  { href: "#moc-khoa-len-lam-qua", label: "Móc khóa len làm quà" },
  { href: "#cach-chon-moc-khoa-len", label: "Cách chọn móc khóa len" },
];

const FAQ = [
  {
    id: "moc-khoa-len-la-gi",
    question: "Móc khóa len là gì?",
    answer:
      "Móc khóa len là phụ kiện nhỏ được móc thủ công bằng sợi len, thường gắn khoen kim loại để treo chìa khóa, balo, túi xách hoặc hộp bút. Tại LyliShop, mỗi mẫu được làm theo phong cách handmade, có thể tùy chỉnh màu và chi tiết nhỏ.",
  },
  {
    id: "moc-khoa-len-hop-lam-qua-khong",
    question: "Móc khóa len có hợp làm quà tặng không?",
    answer:
      "Có. Móc khóa len nhỏ, dễ dùng, giá dễ chọn và tạo cảm giác cá nhân hơn quà tặng sản xuất hàng loạt. Các mẫu thỏ, dâu tây, hoa tulip hoặc bàn chân mèo hợp để tặng bạn bè, người thân, đồng nghiệp hoặc dùng làm quà cảm ơn.",
  },
  {
    id: "moc-khoa-crochet-va-moc-khoa-len",
    question: "Móc khóa crochet và móc khóa len có khác nhau không?",
    answer:
      "Crochet là kỹ thuật móc bằng kim móc; còn len là chất liệu thường dùng để tạo sản phẩm. Vì vậy nhiều mẫu móc khóa crochet cũng chính là móc khóa len handmade.",
  },
  {
    id: "co-tuy-chinh-mau-khong",
    question: "Có thể đặt móc khóa len theo màu riêng không?",
    answer:
      "Có. Bạn có thể nhắn LyliShop để chọn màu thân, màu tai, màu hoa, khoen hoặc thêm chi tiết nhỏ như nơ, tim, chữ cái ngắn. Shop xác nhận mẫu trước khi bắt đầu làm.",
  },
  {
    id: "gia-moc-khoa-len",
    question: "Giá móc khóa len handmade tại LyliShop là bao nhiêu?",
    answer:
      "Các mẫu hiện có có giá từ 45.000 đồng tùy kích thước, độ chi tiết và thời gian hoàn thiện. Giá cụ thể được hiển thị ở từng sản phẩm.",
  },
  {
    id: "nen-chon-size-nao",
    question: "Nên chọn móc khóa len size S, M hay L?",
    answer:
      "Size S hợp treo hằng ngày và đặt theo nhóm; size M hợp khi muốn mẫu nổi bật hơn trên balo hoặc túi tote; size L phù hợp với mẫu nhiều chi tiết hoặc quà muốn tạo điểm nhấn rõ.",
  },
  {
    id: "dat-hang-nhu-the-nao",
    question: "Đặt móc khóa len tại LyliShop như thế nào?",
    answer:
      "Bạn chọn mẫu trên website rồi nhắn LyliShop qua Instagram, TikTok, Facebook hoặc Zalo. Shop sẽ xác nhận sản phẩm, màu mong muốn, số lượng, thời gian làm và thông tin giao hàng.",
  },
  {
    id: "can-gui-gi-khi-dat-mau-rieng",
    question: "Cần gửi gì khi muốn đặt mẫu theo màu riêng?",
    answer:
      "Bạn nên gửi tên mẫu, màu mong muốn, số lượng, ngày cần nhận và chi tiết muốn thêm nếu có. Shop sẽ xác nhận lại trước khi bắt đầu làm.",
  },
  {
    id: "co-goi-qua-khong",
    question: "Có gói quà không?",
    answer:
      "Có thể hỗ trợ gói quà nếu bạn cần. Khi nhắn LyliShop, hãy ghi rõ sản phẩm dùng để tặng ai hoặc dịp nào để shop tư vấn cách gói phù hợp trước khi xác nhận đơn.",
  },
  {
    id: "co-viet-thiep-khong",
    question: "Có viết thiệp không?",
    answer:
      "LyliShop có thể ghi nhận yêu cầu kèm thiệp trong phần ghi chú. Nội dung, kiểu thiệp và khả năng chuẩn bị sẽ được shop xác nhận lại qua tin nhắn trước khi làm.",
  },
  {
    id: "co-lam-theo-anh-khong",
    question: "Có làm móc khóa len theo ảnh không?",
    answer:
      "Có thể nhận làm theo ảnh tham khảo nếu mẫu phù hợp với kỹ thuật móc len và chất liệu hiện có. Shop sẽ trao đổi trước về form, màu, kích thước và chi tiết nào có thể giữ giống ảnh.",
  },
  {
    id: "bao-lau-hoan-thanh",
    question: "Bao lâu hoàn thành một mẫu móc khóa len?",
    answer:
      "Thời gian hoàn thành phụ thuộc vào mẫu, số lượng và độ chi tiết. LyliShop sẽ báo thời gian dự kiến qua tin nhắn sau khi bạn gửi mẫu, màu và ngày cần nhận.",
  },
  {
    id: "co-ship-toan-quoc-khong",
    question: "Có ship toàn quốc không?",
    answer:
      "LyliShop hỗ trợ tư vấn và chốt đơn online. Thông tin giao hàng, phí vận chuyển và thời gian nhận sẽ được xác nhận theo từng đơn trước khi shop bắt đầu chuẩn bị sản phẩm.",
  },
  {
    id: "thanh-toan-nhu-the-nao",
    question: "Thanh toán như thế nào?",
    answer:
      "Cách thanh toán sẽ được LyliShop xác nhận trực tiếp qua kênh bạn liên hệ. Website không có giỏ hàng hoặc checkout, mọi thông tin đặt hàng đều được trao đổi qua Zalo, Facebook hoặc Instagram.",
  },
  {
    id: "bao-quan-moc-khoa-len",
    question: "Bảo quản móc khóa len ra sao?",
    answer:
      "Nên giữ sản phẩm khô thoáng, tránh ngâm nước lâu, tránh kéo mạnh các chi tiết nhỏ và hạn chế để vật nặng đè lên form móc khóa trong thời gian dài.",
  },
  {
    id: "moc-khoa-len-co-giat-duoc-khong",
    question: "Móc khóa len có giặt được không?",
    answer:
      "Nếu cần vệ sinh, bạn nên lau hoặc chấm nhẹ khu vực bị bẩn bằng khăn ẩm, sau đó để khô tự nhiên. Không nên vò mạnh, ngâm lâu hoặc dùng nhiệt cao vì có thể làm xù len và lệch form.",
  },
];

const useCases = [
  {
    title: "Treo balo, túi xách, chìa khóa",
    description:
      "Kích thước nhỏ gọn, khoen chắc chắn và màu sắc dễ phối giúp móc khóa len trở thành phụ kiện dùng hằng ngày.",
  },
  {
    title: "Quà tặng handmade nhỏ xinh",
    description:
      "Phù hợp làm quà sinh nhật, quà cảm ơn, quà cho bạn thân hoặc món tự thưởng có dấu ấn riêng.",
  },
  {
    title: "Đặt theo màu và chi tiết riêng",
    description:
      "Có thể tùy chỉnh màu len, phối màu tai/thân/hoa hoặc thêm chi tiết nhỏ theo sở thích.",
  },
];

const quickChoiceGuides = [
  {
    icon: Gift,
    title: "Tặng bạn bè hoặc người thương",
    description:
      "Ưu tiên mẫu nhỏ xinh, màu dễ thương và có thể đóng gói gọn để trao quà ngay.",
    href: "/products/set-moc-khoa-len-6-mau-qua-tang",
    cta: "Xem mẫu làm quà",
  },
  {
    icon: ShoppingBag,
    title: "Treo balo, túi xách mỗi ngày",
    description:
      "Chọn form gọn, khoen chắc và màu dễ phối để dùng thường xuyên khi đi học, đi làm.",
    href: "/products/set-moc-khoa-len-6-mau-cute",
    cta: "Xem mẫu mini",
  },
  {
    icon: Users,
    title: "Đặt theo nhóm hoặc số lượng",
    description:
      "Chọn nhóm đồng giá từ 45k để dễ thống nhất ngân sách, màu sắc và số lượng.",
    href: "/products/set-moc-khoa-len-10-mau-mix",
    cta: "Xem set đồng giá",
  },
];

const PILLAR_HERO_IMAGE = {
  src: "/images/homepage/lylishop-hero-handmade-keychains.webp",
  alt: "Các mẫu móc khóa len handmade của LyliShop",
  width: 1200,
  height: 960,
} as const;

const productGroupSections = [
  {
    id: "mini",
    title: "Móc khóa Mini",
    description:
      "Nhỏ gọn, nhẹ tay, phù hợp treo chìa khóa, túi mini hoặc làm quà tặng theo combo.",
    ctaLabel: "Xem combo",
  },
  {
    id: "size-s",
    title: "Móc khóa Size S",
    description:
      "Dễ dùng hằng ngày, nhiều mẫu để chọn và phù hợp khi cần món quà nhỏ có thể chọn màu.",
    ctaLabel: "Chọn mẫu",
  },
  {
    id: "size-m",
    title: "Móc khóa Size M",
    description:
      "Nổi bật hơn nhóm mini, phù hợp treo balo, túi tote hoặc làm quà tặng có điểm nhấn.",
    ctaLabel: "Xem mẫu",
  },
  {
    id: "size-l",
    title: "Móc khóa Size L",
    description:
      "Phù hợp với mẫu nhiều chi tiết hoặc khách muốn phụ kiện nhìn rõ hơn khi treo balo, túi lớn.",
    ctaLabel: "Khám phá",
  },
  {
    id: "flower",
    title: "Hoa len",
    description:
      "Bó hoa và hoa len handmade, phù hợp làm quà tặng lưu giữ lâu hoặc trang trí góc nhỏ.",
    ctaLabel: "Xem hoa",
  },
  {
    id: "plush",
    title: "Thú bông len",
    description:
      "Dáng mềm và nhiều chi tiết hơn, hợp làm quà handmade hoặc món trang trí cá nhân.",
    ctaLabel: "Xem thú bông",
  },
] satisfies Array<{
  id: ProductGroup;
  title: string;
  description: string;
  ctaLabel: string;
}>;

const sizeGuideRows = [
  {
    size: "Size S",
    range: "6-7 cm",
    price: "Từ 45k",
    bestFor: "Treo hằng ngày, quà nhóm, quà lớp, món nhỏ dễ dùng",
  },
  {
    size: "Size M",
    range: "8-10 cm",
    price: "Từ 59k",
    bestFor: "Muốn mẫu nổi bật hơn trên balo, túi tote hoặc hộp bút",
  },
  {
    size: "Size L",
    range: "10-12 cm",
    price: "Từ 69k",
    bestFor: "Mẫu nhiều chi tiết hoặc món quà muốn tạo điểm nhấn rõ",
  },
];

const comparisonRows = [
  {
    group: "Mini",
    size: "3-4 cm",
    purpose: "Treo chìa khóa, túi mini, đặt theo combo",
    visibility: "Gọn nhẹ",
    gift: "Quà nhỏ, quà nhóm",
    price: "Từ 45k, tùy mẫu",
  },
  {
    group: "Size S",
    size: "5-7 cm",
    purpose: "Treo hằng ngày, balo, túi xách",
    visibility: "Dễ nhìn nhưng không vướng",
    gift: "Bạn bè, lớp học, đồng nghiệp",
    price: "Từ 45k, tùy mẫu",
  },
  {
    group: "Size M",
    size: "8-10 cm",
    purpose: "Treo balo, túi tote, hộp bút",
    visibility: "Nổi bật hơn size nhỏ",
    gift: "Quà sinh nhật, quà nhóm",
    price: "Theo mẫu hiện có",
  },
  {
    group: "Size L",
    size: "10-12 cm",
    purpose: "Mẫu nhiều chi tiết, treo balo hoặc túi lớn",
    visibility: "Nổi bật rõ",
    gift: "Món quà cần điểm nhấn",
    price: "Đang cập nhật theo mẫu",
  },
  {
    group: "Hoa len",
    size: "Tùy loại hoa",
    purpose: "Quà tặng, phụ kiện kèm hộp quà",
    visibility: "Nhẹ nhàng, tinh tế",
    gift: "Người thích hoa, quà lưu giữ lâu",
    price: "Tùy loại hoa",
  },
  {
    group: "Thú bông len",
    size: "Tùy mẫu",
    purpose: "Treo túi, trang trí bàn học hoặc làm quà",
    visibility: "Mềm mại, nhiều chi tiết",
    gift: "Người thích phụ kiện handmade",
    price: "Theo mẫu và kích thước",
  },
];

const orderSteps = [
  {
    step: "Bước 1",
    title: "Chọn mẫu",
    description:
      "Bạn chọn nhóm Mini, Size S, Size M, Hoa len hoặc Thú bông len phù hợp với nhu cầu.",
  },
  {
    step: "Bước 2",
    title: "Chọn màu",
    description:
      "Gửi màu mong muốn hoặc tone màu người nhận thích để LyliShop tư vấn cách phối.",
  },
  {
    step: "Bước 3",
    title: "Gửi ảnh hoặc ghi chú",
    description:
      "Nếu muốn làm theo ảnh, đổi chi tiết, gói quà hoặc kèm thiệp, bạn ghi rõ trong tin nhắn.",
  },
  {
    step: "Bước 4",
    title: "LyliShop xác nhận rồi mới bắt đầu làm",
    description:
      "Shop xác nhận mẫu, màu, số lượng và thời gian dự kiến trước khi thực hiện sản phẩm.",
  },
];

const recipientGuideRows = [
  {
    recipient: "Bạn cùng lớp, đồng nghiệp",
    suggestion: "Mẫu mini size S hoặc móc khóa đồng giá",
    reason: "Dễ chọn số lượng, không quá riêng tư và phù hợp dùng hằng ngày",
  },
  {
    recipient: "Bạn thân",
    suggestion: "Dâu tây, bàn chân mèo, thú len mini",
    reason: "Có chi tiết dễ thương, dễ chọn theo tính cách hoặc màu yêu thích",
  },
  {
    recipient: "Người yêu",
    suggestion: "Thỏ con, thỏ bông, hoa tulip",
    reason: "Có cảm giác được chọn riêng và hợp làm quà nhỏ có ý nghĩa",
  },
  {
    recipient: "Nhóm bạn hoặc lớp",
    suggestion: "Set móc khóa len đồng giá từ 45k",
    reason: "Dễ thống nhất ngân sách, size và số lượng trước khi đặt",
  },
];

const purposeGuideRows = [
  {
    purpose: "Treo balo hoặc túi mỗi ngày",
    suggestion: "Form gọn, khoen chắc, size S hoặc M",
    note: "Hạn chế chọn mẫu có quá nhiều chi tiết nhô nếu thường xuyên để trong balo",
  },
  {
    purpose: "Làm quà sinh nhật",
    suggestion: "Mẫu theo màu người nhận thích",
    note: "Nên nhắn shop ngày cần nhận để kiểm tra thời gian chuẩn bị",
  },
  {
    purpose: "Đặt số lượng",
    suggestion: "Set đồng giá, cùng size hoặc cùng tone màu",
    note: "Gửi số lượng từng mẫu giúp shop tư vấn nhanh hơn",
  },
];

const trustSignals = [
  {
    icon: ShieldCheck,
    title: "Làm thủ công từng mũi",
    description:
      "Mỗi sản phẩm được móc, khâu và hoàn thiện thủ công nên có nét riêng, không rập khuôn.",
  },
  {
    icon: Palette,
    title: "Tùy chỉnh trước khi làm",
    description:
      "Shop xác nhận màu, mẫu và chi tiết qua tin nhắn để hạn chế sai kỳ vọng khi nhận hàng.",
  },
  {
    icon: Gift,
    title: "Đóng gói sẵn để tặng",
    description:
      "Đơn hàng được gói gọn gàng, sạch đẹp, phù hợp gửi thẳng cho người nhận hoặc tự tay trao quà.",
  },
];

const RELATED_BLOG_POSTS = BLOG_POSTS.filter((post) =>
  post.keywords.some((keyword) =>
    ["móc", "len", "handmade", "quà", "phụ kiện"].some((term) =>
      keyword.toLowerCase().includes(term)
    )
  )
).slice(0, 4);

function getGroupSectionId(group: ProductGroup) {
  return `nhom-${group}`;
}

function getProductsByGroup(group: ProductGroup) {
  return PRODUCTS.filter((product) => getProductGroup(product) === group);
}

function getPillarProductImage(product: Product) {
  const productGroup = getProductGroup(product);

  if (productGroup === "size-m") {
    return product.images?.find((image) => image.src.includes("/moc-khoa-size-m/")) ?? product.image;
  }

  return product.image;
}

function getPillarProductImageAlt(product: Product) {
  const productGroup = getProductGroup(product);
  const groupTitle = productGroupSections.find((group) => group.id === productGroup)?.title;

  return `${product.name} trong nhóm ${groupTitle ?? "sản phẩm len handmade"} của LyliShop`;
}

export const metadata: Metadata = createPageMetadata({
  title: "Móc khóa len handmade cute, dễ thương làm quà",
  description:
    "Mua móc khóa len handmade nhỏ xinh tại LyliShop: móc khóa thú len, móc khóa crochet, quà tặng handmade dễ thương, có thể tùy chỉnh màu.",
  keywords: KEYWORDS,
  canonical: PAGE_PATH,
  image: HOME_OG_IMAGE,
  ogDescription:
    "Bộ sưu tập móc khóa len handmade, móc khóa thú len và quà tặng crochet nhỏ xinh từ LyliShop.",
});

export default function MocKhoaLenPage() {
  const minPrice = Math.min(...PRODUCTS.map((p) => p.priceVnd));
  const maxPrice = Math.max(...PRODUCTS.map((p) => p.priceVnd));

  return (
    <>
      <JsonLd
        data={collectionPageJsonLd({
          name: "Móc khóa len handmade",
          description:
            "Bộ sưu tập móc khóa len handmade, móc khóa thú len và quà tặng crochet nhỏ xinh tại LyliShop.",
          url: PAGE_URL,
          products: PRODUCTS,
        })}
      />
      <JsonLd data={faqJsonLd(FAQ)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Trang chủ", url: SITE.url },
          { name: "Móc khóa len", url: PAGE_URL },
        ])}
      />

      <section
        id="moc-khoa-len-la-gi"
        className="scroll-mt-24 bg-gradient-to-b from-white to-rose-50 py-10 sm:py-14"
      >
        <Container>
          <Breadcrumbs
            items={[
              { label: "Trang chủ", href: "/" },
              { label: "Móc khóa len" },
            ]}
            className="mb-6"
          />

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="pink">Móc khóa len</Badge>
                <Badge variant="secondary">Móc khóa handmade</Badge>
                <Badge>Móc khóa crochet</Badge>
              </div>
              <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Móc khóa len handmade nhỏ xinh, dễ thương
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                LyliShop làm các mẫu móc khóa len, móc khoá len và móc khóa thú len
                handmade để treo balo, túi xách, chìa khóa hoặc làm quà tặng handmade.
                Mỗi mẫu dùng len mềm, hoàn thiện thủ công và có thể tùy chỉnh màu theo
                yêu cầu.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg">
                  <Link href="#phan-loai-moc-khoa-len">
                    Xem mẫu móc khóa len
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/products">Xem sản phẩm</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/#contact">Liên hệ đặt hàng</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/70 bg-white shadow-sm">
                <Image
                  src={PILLAR_HERO_IMAGE.src}
                  alt={PILLAR_HERO_IMAGE.alt}
                  width={PILLAR_HERO_IMAGE.width}
                  height={PILLAR_HERO_IMAGE.height}
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="h-full w-full object-cover"
                  priority
                  fetchPriority="high"
                />
              </div>

              <div className="grid gap-3 rounded-xl border border-border/70 bg-white/70 p-5 shadow-sm backdrop-blur-md">
                <h2 className="font-display text-lg font-semibold">Thông tin nhanh về móc khóa len</h2>
                <dl className="grid gap-3 text-sm">
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-muted-foreground">Khoảng giá</dt>
                    <dd className="font-medium">
                      {formatVnd(minPrice)} - {formatVnd(maxPrice)}
                    </dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-muted-foreground">Chất liệu</dt>
                    <dd className="font-medium">Len Milk Cotton, khoen kim loại</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-muted-foreground">Phong cách</dt>
                    <dd className="font-medium">Handmade, chọn màu, làm quà</dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-muted-foreground">Đặt hàng</dt>
                    <dd className="font-medium">Ưu tiên Zalo, Facebook, Instagram</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background py-8">
        <Container>
          <nav
            aria-label="Mục lục móc khóa len"
            className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2 rounded-lg border border-border/70 bg-white/70 p-3 text-sm shadow-sm"
          >
            {PILLAR_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 font-medium text-foreground/80 transition hover:bg-rose-50 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </Container>
      </section>

      <section
        id="phan-loai-moc-khoa-len"
        className="scroll-mt-24 bg-background py-14 sm:py-20"
      >
        <Container>
          <SectionHeading
            eyebrow="Bộ sưu tập"
            title="Phân loại móc khóa len tại LyliShop"
            description="Chọn mẫu bạn thích để xem mô tả, giá và cách liên hệ đặt hàng. Các mẫu đều có thể trao đổi thêm về màu sắc trước khi làm."
          />

          <div className="mx-auto mt-5 max-w-2xl text-center text-sm leading-6 text-muted-foreground">
            <p>
              Nếu bạn đã biết kiểu móc khóa len muốn đặt, hãy xem toàn bộ
              <Link href="/products" className="font-medium text-primary hover:underline">
                {" "}sản phẩm móc khóa len handmade
              </Link>
              {" "}để chọn mẫu và nhắn shop xác nhận màu, size, thời gian làm.
            </p>
          </div>

          <div
            id="goi-y-chon-nhanh"
            className="mx-auto mt-8 max-w-5xl scroll-mt-24 rounded-xl border border-border/70 bg-rose-50/70 p-5 shadow-sm"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
                  Gợi ý chọn nhanh
                </p>
                <h2 className="mt-1 font-display text-xl font-semibold tracking-tight text-foreground">
                  Chọn móc khóa len theo nhu cầu của bạn
                </h2>
              </div>
              <Button asChild variant="outline">
                <Link href="/#contact">Nhắn shop tư vấn mẫu</Link>
              </Button>
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-3">
              {quickChoiceGuides.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-lg border border-border/70 bg-white/80 p-4 shadow-sm"
                  >
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h3 className="mt-3 font-display text-base font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                    <Link
                      href={item.href}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                    >
                      {item.cta}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>

          <div
            id="bang-chon-size"
            className="mt-10 scroll-mt-24 rounded-xl border border-border/70 bg-white/70 p-5 shadow-sm sm:p-6"
          >
            <div className="max-w-3xl">
              <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
                Bảng chọn size
              </p>
              <h2 className="mt-1 font-display text-xl font-semibold tracking-tight text-foreground">
                Chọn size móc khóa len theo cách bạn sẽ sử dụng
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Kích thước và giá dưới đây lấy từ thông tin sản phẩm hiện có của LyliShop.
                Giá thực tế vẫn được shop xác nhận lại theo độ chi tiết của mẫu trước khi làm.
              </p>
            </div>

            <div className="mt-5 overflow-hidden rounded-lg border border-border/70 bg-background/70">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-left text-sm">
                  <thead className="bg-rose-50/90 text-foreground">
                    <tr>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Size</th>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Kích thước</th>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Giá tham khảo</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Nên chọn khi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/70">
                    {sizeGuideRows.map((row) => (
                      <tr key={row.size} className="align-top">
                        <td className="whitespace-nowrap px-4 py-3 font-medium text-foreground">{row.size}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">{row.range}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">{row.price}</td>
                        <td className="min-w-64 px-4 py-3 leading-6 text-muted-foreground">{row.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div
            id="so-sanh-dong-san-pham"
            className="mt-10 scroll-mt-24 rounded-xl border border-border/70 bg-white/70 p-5 shadow-sm sm:p-6"
          >
            <div className="max-w-3xl">
              <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
                So sánh nhanh
              </p>
              <h2 className="mt-1 font-display text-xl font-semibold tracking-tight text-foreground">
                So sánh nhanh các dòng sản phẩm
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Bảng này giúp bạn chọn nhóm sản phẩm phù hợp trước khi xem chi tiết từng
                mẫu. Mức giá là thông tin tham khảo theo dữ liệu hiện có và sẽ được
                LyliShop xác nhận lại qua tin nhắn.
              </p>
            </div>

            <div className="mt-5 overflow-hidden rounded-lg border border-border/70 bg-background/70">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-left text-sm">
                  <thead className="bg-rose-50/90 text-foreground">
                    <tr>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Dòng</th>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Kích thước</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Mục đích sử dụng</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Độ nổi bật</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Phù hợp làm quà</th>
                      <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Giá tham khảo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/70">
                    {comparisonRows.map((row) => (
                      <tr key={row.group} className="align-top">
                        <td className="whitespace-nowrap px-4 py-3 font-medium text-foreground">{row.group}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">{row.size}</td>
                        <td className="min-w-56 px-4 py-3 leading-6 text-muted-foreground">{row.purpose}</td>
                        <td className="min-w-40 px-4 py-3 leading-6 text-muted-foreground">{row.visibility}</td>
                        <td className="min-w-48 px-4 py-3 leading-6 text-muted-foreground">{row.gift}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-10">
            {productGroupSections.map((group) => {
              const products = getProductsByGroup(group.id);

              return (
                <section
                  key={group.id}
                  id={getGroupSectionId(group.id)}
                  className="scroll-mt-24 rounded-xl border border-border/70 bg-white/70 p-5 shadow-sm sm:p-6"
                  aria-labelledby={`${getGroupSectionId(group.id)}-title`}
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                      <h2
                        id={`${getGroupSectionId(group.id)}-title`}
                        className="font-display text-2xl font-semibold tracking-tight text-foreground"
                      >
                        {group.title}
                      </h2>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {group.description}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 sm:flex-row">
                      <Button asChild variant="outline">
                        <Link href={`/products#${getGroupSectionId(group.id)}`}>
                          {group.ctaLabel}
                        </Link>
                      </Button>
                      <Button asChild variant="ghost">
                        <Link href="/#contact">Liên hệ đặt theo yêu cầu</Link>
                      </Button>
                    </div>
                  </div>

                  {products.length > 0 ? (
                    <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {products.map((product) => (
                        <ProductCard
                          key={product.slug}
                          product={product}
                          ctaLabel={group.ctaLabel}
                          image={getPillarProductImage(product)}
                          imageAlt={getPillarProductImageAlt(product)}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="mt-6 rounded-lg border border-dashed border-border bg-background/70 p-5 text-sm leading-6 text-muted-foreground">
                      Đang cập nhật thêm mẫu. Bạn có thể nhắn LyliShop để gửi ảnh tham khảo
                      hoặc mô tả ý tưởng muốn làm theo yêu cầu.
                    </div>
                  )}
                </section>
              );
            })}
          </div>

          <div className="mt-10 rounded-xl border border-primary/20 bg-rose-50/80 p-5 text-center shadow-sm">
            <h2 className="font-display text-xl font-semibold tracking-tight">
              Bạn muốn chọn mẫu theo màu riêng?
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              Gửi LyliShop mẫu bạn thích, màu muốn phối và ngày cần nhận để shop kiểm tra
              khả năng thực hiện trước khi xác nhận.
            </p>
            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild>
                <a href={SITE.socials.zalo} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Nhắn Zalo
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/products">Xem sản phẩm</Link>
              </Button>
            </div>
          </div>

          {RELATED_BLOG_POSTS.length > 0 ? (
            <div className="mt-12 rounded-xl border border-border/70 bg-white/70 p-5 shadow-sm sm:p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
                    Tìm hiểu thêm
                  </p>
                  <h2 className="mt-1 font-display text-xl font-semibold tracking-tight">
                    Bài viết liên quan về quà handmade và phụ kiện len
                  </h2>
                </div>
                <Button asChild variant="outline">
                  <Link href="/blog">Xem cẩm nang LyliShop</Link>
                </Button>
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {RELATED_BLOG_POSTS.map((post) => (
                  <article
                    key={post.slug}
                    className="rounded-lg border border-border/70 bg-background/70 p-4 text-sm leading-6 transition hover:border-primary/30 hover:bg-rose-50"
                  >
                    <h3 className="font-display text-base font-semibold text-foreground">
                      <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </section>

      <section
        id="quy-trinh-dat-hang"
        className="scroll-mt-24 bg-white py-14 sm:py-20"
      >
        <Container>
          <SectionHeading
            eyebrow="Quy trình"
            title="Quy trình đặt móc khóa len handmade"
            description="LyliShop không dùng giỏ hàng hay checkout. Mỗi đơn được trao đổi trực tiếp để shop hiểu đúng mẫu, màu và yêu cầu riêng trước khi bắt đầu làm."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {orderSteps.map((item, index) => (
              <article
                key={item.step}
                className="relative rounded-xl border border-border/70 bg-background/70 p-5 shadow-sm"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {item.step}
                  </span>
                  {index < orderSteps.length - 1 ? (
                    <ArrowRight className="hidden h-4 w-4 text-primary/70 xl:block" aria-hidden="true" />
                  ) : null}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-primary/20 bg-rose-50/80 p-5 text-center shadow-sm">
            <p className="text-sm leading-6 text-muted-foreground">
              Nếu bạn chưa chắc nên chọn mẫu nào, hãy gửi màu yêu thích, người nhận và
              dịp tặng. LyliShop sẽ tư vấn hướng phù hợp trước khi xác nhận đơn.
            </p>
            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild>
                <a href={SITE.socials.zalo} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Nhắn Zalo tư vấn
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/#contact">Liên hệ đặt theo yêu cầu</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="moc-khoa-len-lam-qua"
        className="scroll-mt-24 bg-rose-50 py-14 sm:py-20"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
                Chọn đúng nhu cầu
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Móc khóa len hợp với ai?
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                Nhóm từ khóa như móc khóa dễ thương, móc khóa handmade và quà tặng
                handmade thường đến từ người muốn tìm một món phụ kiện nhỏ nhưng có cảm
                giác riêng. Vì vậy LyliShop tập trung vào mẫu nhỏ gọn, dễ dùng hằng ngày
                và có thể cá nhân hóa bằng màu sắc.
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                Khi đã xác định người nhận và phong cách màu, bạn có thể
                <Link href="/products" className="font-medium text-primary hover:underline">
                  {" "}xem các mẫu móc khóa len
                </Link>
                {" "}để chọn sản phẩm phù hợp hơn.
              </p>
            </div>

            <div className="grid gap-4">
              {useCases.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-border/70 bg-white/70 p-5 shadow-sm"
                >
                  <h3 className="font-display text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-border/70 bg-white/70 p-5 shadow-sm">
              <h3 className="font-display text-lg font-semibold">
                Chọn theo người nhận
              </h3>
              <div className="mt-4 overflow-hidden rounded-lg border border-border/70 bg-background/70">
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-left text-sm">
                    <thead className="bg-rose-50/90 text-foreground">
                      <tr>
                        <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Người nhận</th>
                        <th scope="col" className="px-4 py-3 font-semibold">Gợi ý</th>
                        <th scope="col" className="px-4 py-3 font-semibold">Lý do</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/70">
                      {recipientGuideRows.map((row) => (
                        <tr key={row.recipient} className="align-top">
                          <td className="min-w-40 px-4 py-3 font-medium text-foreground">{row.recipient}</td>
                          <td className="min-w-44 px-4 py-3 text-muted-foreground">{row.suggestion}</td>
                          <td className="min-w-56 px-4 py-3 leading-6 text-muted-foreground">{row.reason}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border/70 bg-white/70 p-5 shadow-sm">
              <h3 className="font-display text-lg font-semibold">
                Chọn theo nhu cầu
              </h3>
              <div className="mt-4 overflow-hidden rounded-lg border border-border/70 bg-background/70">
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse text-left text-sm">
                    <thead className="bg-rose-50/90 text-foreground">
                      <tr>
                        <th scope="col" className="whitespace-nowrap px-4 py-3 font-semibold">Nhu cầu</th>
                        <th scope="col" className="px-4 py-3 font-semibold">Nên ưu tiên</th>
                        <th scope="col" className="px-4 py-3 font-semibold">Lưu ý</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/70">
                      {purposeGuideRows.map((row) => (
                        <tr key={row.purpose} className="align-top">
                          <td className="min-w-44 px-4 py-3 font-medium text-foreground">{row.purpose}</td>
                          <td className="min-w-44 px-4 py-3 text-muted-foreground">{row.suggestion}</td>
                          <td className="min-w-56 px-4 py-3 leading-6 text-muted-foreground">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="cach-chon-moc-khoa-len"
        className="scroll-mt-24 bg-background py-14 sm:py-20"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
                Chất liệu và hoàn thiện
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Cách chọn móc khóa len handmade
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                <p>
                  Móc khóa crochet là nhóm sản phẩm được tạo bằng kỹ thuật móc len thủ
                  công. Với các mẫu thú len handmade như thỏ, mèo hoặc hình quả dâu,
                  phần form cần đủ chắc để treo hằng ngày nhưng vẫn giữ cảm giác mềm
                  mại khi cầm.
                </p>
                <p>
                  Khi đặt tại LyliShop, bạn có thể gửi màu mong muốn hoặc ảnh tham khảo
                  để shop tư vấn cách phối phù hợp. Các chi tiết nhỏ như tai, nơ, lá,
                  đệm chân hoặc màu khoen được xác nhận trước khi làm.
                </p>
                <p>
                  Nếu bạn muốn so sánh nhiều mẫu theo giá, hình dáng và mục đích dùng,
                  hãy mở trang
                  <Link href="/products" className="font-medium text-primary hover:underline">
                    {" "}sản phẩm móc khóa len
                  </Link>
                  {" "}rồi chọn từng mẫu để xem mô tả chi tiết.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {trustSignals.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-lg border border-border/70 bg-white/60 p-5 shadow-sm"
                  >
                    <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h3 className="mt-3 font-display text-base font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-rose-50 py-14 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Câu hỏi"
            title="Câu hỏi về móc khóa len"
            description="Các thông tin quan trọng trước khi chọn móc khóa len handmade hoặc đặt mẫu tùy chỉnh."
          />

          <div className="mx-auto mt-10 max-w-3xl rounded-lg border border-border/70 bg-white/70 p-6 shadow-sm">
            {FAQ.map((item) => (
              <details
                key={item.id}
                className="group border-b border-border/70 py-4 first:pt-0 last:border-b-0 last:pb-0"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-md text-left text-sm font-medium text-foreground marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
