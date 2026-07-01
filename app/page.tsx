import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  Gift,
  HeartHandshake,
  MessageCircle,
  PackageCheck,
  Sparkles,
  Star,
  ThumbsUp,
} from "lucide-react";

import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatVnd } from "@/lib/format";
import { BLOG_POSTS } from "@/lib/blog";
import { FEATURED_PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";
import {
  homePageJsonLd,
  organizationJsonLd,
  productItemListJsonLd,
  websiteJsonLd,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Móc Khóa Len Handmade Cute | LyliShop",
  },
  description:
    "LyliShop bán móc khóa len handmade cute, nhận làm móc khóa len theo yêu cầu, phù hợp làm quà tặng handmade dễ thương cho học sinh, sinh viên.",
  alternates: { canonical: "/" },
  openGraph: {
    url: SITE.url,
    title: "Móc Khóa Len Handmade Cute | LyliShop",
    description:
      "Móc khóa len handmade cute, phụ kiện len nhỏ xinh, nhận chọn màu theo yêu cầu và đặt nhanh qua Zalo/Facebook.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "LyliShop móc khóa len handmade cute" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Móc Khóa Len Handmade Cute | LyliShop",
    description:
      "Móc khóa len handmade cute, phụ kiện len nhỏ xinh, nhận chọn màu theo yêu cầu và đặt nhanh qua Zalo/Facebook.",
    images: ["/twitter-card.png"],
  },
};

const CATEGORY_ITEMS = [
  {
    title: "Móc khóa Mini",
    description: "Nhỏ gọn, nhẹ tay, hợp treo chìa khóa hoặc túi mini.",
  },
  {
    title: "Móc khóa Size S",
    description: "Dễ tặng, dễ dùng hằng ngày và phù hợp đặt theo nhóm.",
  },
  {
    title: "Móc khóa Size M",
    description: "Nổi bật hơn trên balo, túi tote hoặc hộp bút.",
  },
  {
    title: "Móc khóa Size L",
    description: "Dành cho mẫu cần nhiều chi tiết và tạo điểm nhấn rõ.",
  },
  {
    title: "Hoa len",
    description: "Mẫu hoa nhỏ xinh, hợp làm quà nhẹ nhàng và tinh tế.",
  },
  {
    title: "Thú bông len",
    description: "Dáng mềm, dễ thương, hợp người thích phụ kiện handmade.",
  },
];

const REVIEWS = [
  {
    name: "Khách hàng LyliShop",
    date: "Cập nhật sau",
    content:
      "Khu vực này dành cho phản hồi thật của khách hàng sau khi shop xác nhận quyền hiển thị.",
  },
  {
    name: "Khách đặt quà",
    date: "Cập nhật sau",
    content:
      "Review về chất lượng, đóng gói và trải nghiệm tư vấn sẽ được thêm bằng nội dung đã được xác nhận.",
  },
  {
    name: "Khách chọn màu riêng",
    date: "Cập nhật sau",
    content:
      "LyliShop sẽ cập nhật phản hồi thật để người mua mới có thêm căn cứ trước khi liên hệ đặt hàng.",
  },
];

const FEATURED_ARTICLES = [
  {
    title: "Móc khóa len handmade - Món quà nhỏ mang ý nghĩa lớn",
    description:
      "Vì sao một món quà nhỏ, mềm tay và có thể chọn màu lại dễ gắn với kỷ niệm của người nhận.",
    date: "16/06/2026",
    href: `/blog/${BLOG_POSTS.find((post) => post.slug === "y-nghia-qua-handmade")?.slug ?? BLOG_POSTS[0].slug}`,
  },
  {
    title: "5 lý do móc khóa len handmade được nhiều người lựa chọn làm quà tặng",
    description:
      "Những lý do khiến móc khóa len trở thành lựa chọn dễ thương cho sinh nhật, bạn thân và quà tự thưởng.",
    date: "16/06/2026",
    href: `/blog/${BLOG_POSTS.find((post) => post.slug === "qua-handmade-tang-ban-gai")?.slug ?? BLOG_POSTS[1].slug}`,
  },
];

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function ImagePlaceholder({
  label,
  className = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`${className} flex items-center justify-center overflow-hidden rounded-lg border border-dashed border-primary/25 bg-[linear-gradient(135deg,rgba(255,252,247,0.95),rgba(255,255,255,0.72))]`}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-white/80 text-primary shadow-sm">
        <Sparkles className="h-6 w-6" aria-hidden="true" />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-white to-background py-14 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/80 px-4 py-2 text-sm font-medium text-foreground shadow-sm">
              <Gift className="h-4 w-4 text-primary" aria-hidden="true" />
              Móc khóa len handmade, đặt qua tin nhắn
            </div>

            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Móc khóa len handmade cute cho những món quà nhỏ có cảm xúc.
            </h1>
            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
              LyliShop làm phụ kiện len nhỏ xinh, có thể trao đổi màu sắc và đóng gói gọn gàng
              để bạn tặng bạn thân, người yêu hoặc tự thưởng cho mình.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={SITE.socials.zalo} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Liên hệ đặt hàng
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={SITE.socials.facebook} target="_blank" rel="noreferrer">
                  <ThumbsUp className="h-4 w-4" aria-hidden="true" />
                  Facebook
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={SITE.socials.instagram} target="_blank" rel="noreferrer">
                  <Camera className="h-4 w-4" aria-hidden="true" />
                  Instagram
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[28px] border border-primary/10 bg-white/40" />
            <Card className="relative overflow-hidden bg-white/75 p-4 shadow-lg backdrop-blur-md">
              <ImagePlaceholder
                label="Khung ảnh hero LyliShop dành cho hình móc khóa len handmade"
                className="aspect-[5/4]"
              />
              <div className="grid gap-3 p-4 sm:grid-cols-3">
                {["Handmade", "Chọn màu", "Gói quà"].map((item) => (
                  <div key={item} className="rounded-md border border-border/70 bg-white/70 px-3 py-2 text-center text-sm font-medium">
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CategorySection() {
  return (
    <section id="categories" className="bg-background py-14 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="Danh mục sản phẩm"
          title="Chọn nhanh theo kiểu móc khóa và quà tặng"
          description="Các nhóm sản phẩm được sắp xếp để bạn dễ chọn size, kiểu dáng và mục đích tặng."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORY_ITEMS.map((category) => (
            <Card key={category.title} className="group overflow-hidden bg-white/70 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
              <ImagePlaceholder label={`Khung ảnh danh mục ${category.title}`} className="aspect-[4/3] rounded-b-none border-x-0 border-t-0" />
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold tracking-tight">{category.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{category.description}</p>
                <Button asChild variant="outline" className="mt-5 w-full">
                  <Link href="/products">
                    Xem sản phẩm
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FeaturedProductsSection() {
  const products = FEATURED_PRODUCTS.slice(0, 6);

  return (
    <section id="featured" className="bg-white py-14 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="Sản phẩm bán chạy"
          title="Những mẫu móc khóa len được hỏi nhiều"
          description="Card sản phẩm giữ ngắn gọn để bạn xem nhanh mẫu, giá và liên hệ shop khi cần chọn màu hoặc đặt số lượng."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.slug} className="group flex h-full flex-col overflow-hidden bg-background/70 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
              <ImagePlaceholder label={`Khung ảnh sản phẩm ${product.name}`} className="aspect-square rounded-b-none border-x-0 border-t-0" />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold leading-tight tracking-tight">
                  {product.name}
                </h3>
                <p className="mt-2 font-display text-base font-semibold text-primary">
                  {formatVnd(product.priceVnd)}
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {product.shortDescription}
                </p>
                <div className="mt-auto pt-5">
                  <Button asChild className="w-full">
                    <a href={SITE.socials.zalo} target="_blank" rel="noreferrer">
                      Liên hệ đặt hàng
                    </a>
                  </Button>
                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    Xem chi tiết
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ReviewSection() {
  return (
    <section id="reviews" className="bg-background py-14 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="Đánh giá khách hàng"
          title="Khu vực phản hồi sau khi xác nhận nội dung thật"
          description="LyliShop chỉ hiển thị phản hồi đã được xác nhận, tránh tạo đánh giá giả hoặc gây hiểu nhầm."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <Card key={review.name} className="bg-white/70 p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div
                  role="img"
                  aria-label={`Avatar placeholder của ${review.name}`}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-primary/30 bg-background text-primary"
                >
                  <HeartHandshake className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold">{review.name}</h3>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-1 text-primary" aria-label="Khu vực số sao đánh giá">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{review.content}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function NewsSection() {
  return (
    <section id="news" className="bg-white py-14 sm:py-20">
      <Container>
        <SectionTitle
          eyebrow="Tin tức"
          title="Cẩm nang quà handmade nhỏ xinh"
          description="Hai bài viết nổi bật giúp người mua hiểu thêm về ý nghĩa món quà và cách chọn móc khóa len."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {FEATURED_ARTICLES.map((article) => (
            <Card key={article.title} className="group overflow-hidden bg-background/70 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
              <ImagePlaceholder label={`Khung ảnh bài viết ${article.title}`} className="aspect-[16/9] rounded-b-none border-x-0 border-t-0" />
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>{article.date}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold leading-tight tracking-tight">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{article.description}</p>
                <Button asChild variant="outline" className="mt-5">
                  <Link href={article.href}>
                    Đọc thêm
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link href="/blog">Xem tất cả tin tức</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

function ContactCtaSection() {
  return (
    <section id="order" className="bg-background py-14 sm:py-20">
      <Container>
        <Card className="bg-white/75 p-6 shadow-sm sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
                Liên hệ đặt hàng
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Chọn mẫu xong, nhắn LyliShop để xác nhận màu và thời gian làm.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                Website chỉ giới thiệu sản phẩm. Đơn hàng được chốt qua Facebook, Zalo hoặc Instagram
                sau khi shop xác nhận mẫu, giá và thông tin giao hàng.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild size="lg">
                <a href={SITE.socials.zalo} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Zalo
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={SITE.socials.facebook} target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={SITE.socials.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={homePageJsonLd()} />
      <JsonLd data={productItemListJsonLd(FEATURED_PRODUCTS)} />

      <HeroSection />
      <CategorySection />
      <FeaturedProductsSection />
      <ReviewSection />
      <NewsSection />
      <ContactCtaSection />
    </>
  );
}
