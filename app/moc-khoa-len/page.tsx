import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Gift,
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
import { PRODUCTS } from "@/lib/products";
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
  { href: "#goi-y-chon-nhanh", label: "Gợi ý chọn nhanh" },
  { href: "#cach-chon-moc-khoa-len", label: "Cách chọn móc khóa len" },
  { href: "#moc-khoa-len-lam-qua", label: "Móc khóa len làm quà" },
  { href: "#phan-loai-moc-khoa-len", label: "Phân loại móc khóa len" },
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
    id: "dat-hang-nhu-the-nao",
    question: "Đặt móc khóa len tại LyliShop như thế nào?",
    answer:
      "Bạn chọn mẫu trên website rồi nhắn LyliShop qua Instagram, TikTok, Facebook hoặc Zalo. Shop sẽ xác nhận sản phẩm, màu mong muốn, số lượng, thời gian làm và thông tin giao hàng.",
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

export const metadata: Metadata = {
  title: "Móc khóa len handmade cute, dễ thương làm quà",
  description:
    "Mua móc khóa len handmade nhỏ xinh tại LyliShop: móc khóa thú len, móc khóa crochet, quà tặng handmade dễ thương, có thể tùy chỉnh màu.",
  keywords: KEYWORDS,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    url: PAGE_URL,
    title: "Móc khóa len handmade cute, dễ thương làm quà | LyliShop",
    description:
      "Bộ sưu tập móc khóa len handmade, móc khóa thú len và quà tặng crochet nhỏ xinh từ LyliShop.",
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "Móc khóa len handmade LyliShop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Móc khóa len handmade cute | LyliShop",
    description:
      "Móc khóa len handmade nhỏ xinh, có thể tùy chỉnh màu và đặt hàng qua mạng xã hội.",
    images: [SITE.twitterImage],
  },
};

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
                  <Link href="/#order">Liên hệ đặt hàng</Link>
                </Button>
              </div>
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
                  <dd className="font-medium">Len mềm, khoen kim loại</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-muted-foreground">Phong cách</dt>
                  <dd className="font-medium">Cute, mini, handmade</dd>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <dt className="text-muted-foreground">Đặt hàng</dt>
                  <dd className="font-medium">Instagram, TikTok, Facebook, Zalo</dd>
                </div>
              </dl>
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
                <Link href="/#order">Nhắn shop tư vấn mẫu</Link>
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

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
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
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-medium text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
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
