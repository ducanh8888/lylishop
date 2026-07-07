import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  Gift,
  HeartHandshake,
  MessageCircle,
  Sparkles,
  Star,
  ThumbsUp,
} from "lucide-react";

import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { ContactSection } from "@/components/sections/ContactSection";
import { HomepageAboutSection } from "@/components/sections/HomepageAboutSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatVnd } from "@/lib/format";
import { BLOG_POSTS } from "@/lib/blog";
import { FEATURED_PRODUCTS } from "@/lib/products";
import { createPageMetadata, HOME_OG_IMAGE } from "@/lib/seo";
import { SITE } from "@/lib/site";
import {
  homePageJsonLd,
  organizationJsonLd,
  productItemListJsonLd,
  websiteJsonLd,
} from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Móc Khóa Len Handmade Cute | LyliShop",
  absoluteTitle: true,
  description:
    "LyliShop bán móc khóa len handmade cute, nhận làm móc khóa len theo yêu cầu, phù hợp làm quà tặng handmade dễ thương cho học sinh, sinh viên.",
  canonical: "/",
  image: HOME_OG_IMAGE,
  ogDescription:
    "Móc khóa len handmade cute, phụ kiện len nhỏ xinh, nhận chọn màu theo yêu cầu và đặt nhanh qua Zalo/Facebook.",
});

const CATEGORY_ITEMS = [
  {
    title: "Mini",
    price: "Từ 49.000đ",
    description: "Combo quà nhỏ xinh",
    cta: "Xem combo",
    href: "/products#nhom-mini",
  },
  {
    title: "Size S",
    price: "45.000đ",
    description: "Nhiều mẫu nhất",
    cta: "Chọn mẫu",
    href: "/products#nhom-size-s",
  },
  {
    title: "Size M",
    price: "59.000đ",
    description: "Quà tặng nổi bật",
    cta: "Xem mẫu",
    href: "/products#nhom-size-m",
  },
  {
    title: "Size L",
    price: "69.000đ",
    description: "Kích thước lớn hơn",
    cta: "Khám phá",
    href: "/products#nhom-size-l",
  },
  {
    title: "Hoa len",
    price: "35.000-40.000đ",
    description: "Không héo, lưu giữ lâu",
    cta: "Xem hoa",
    href: "/products#nhom-flower",
  },
  {
    title: "Thú bông len",
    price: "Từ 150.000đ",
    description: "Món quà handmade độc đáo",
    cta: "Xem thú bông",
    href: "/products#nhom-plush",
  },
];

const CATEGORY_IMAGES = [
  {
    src: "/images/categories/moc-khoa-mini.webp",
    alt: "Bộ móc khóa len mini nhiều màu của LyliShop",
    width: 900,
    height: 900,
  },
  {
    src: "/images/categories/moc-khoa-size-s.webp",
    alt: "Móc khóa len size S nhiều mẫu dễ thương",
    width: 900,
    height: 900,
  },
  {
    src: "/images/categories/moc-khoa-size-m.webp",
    alt: "Móc khóa len size M handmade trên khay tre",
    width: 900,
    height: 900,
  },
  null,
  {
    src: "/images/categories/hoa-len.webp",
    alt: "Bó hoa len handmade nhiều màu",
    width: 900,
    height: 900,
  },
  {
    src: "/images/categories/thu-bong-len.webp",
    alt: "Thú bông len handmade màu hồng",
    width: 900,
    height: 900,
  },
] as const;

const HOMEPAGE_IMAGES = {
  hero: {
    src: "/images/homepage/lylishop-hero-handmade-keychains.webp",
    alt: "Nhiều mẫu móc khóa len handmade của LyliShop",
    width: 1200,
    height: 960,
  },
} as const;

const FEATURED_ARTICLE_IMAGES = [
  {
    src: "/images/blog/moc-khoa-mini-hang-tang-lylishop.webp",
    alt: "Nhiều mẫu móc khóa len handmade làm quà tặng nhỏ",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/blog/hoa-len-bo-hoa-handmade.webp",
    alt: "Bó hoa len handmade dùng làm quà tặng",
    width: 1200,
    height: 900,
  },
] as const;

const REVIEWS = [
  {
    name: "Phản hồi sau khi nhận hàng",
    date: "Đang tổng hợp từ phản hồi thật",
    status: "Chưa công bố đánh giá sao",
    content:
      "LyliShop chỉ hiển thị review khi khách đã đồng ý cho phép dùng nội dung hoặc hình ảnh. Shop không tự tạo đánh giá giả để làm đẹp website.",
  },
  {
    name: "Trải nghiệm tư vấn",
    date: "Đang chờ nội dung đã xác nhận",
    status: "Minh bạch nguồn phản hồi",
    content:
      "Các phản hồi về tư vấn mẫu, chọn màu, đóng gói và thời gian chuẩn bị sẽ được cập nhật bằng nội dung thật từ kênh Facebook, Instagram hoặc Zalo.",
  },
  {
    name: "Hình ảnh khách gửi",
    date: "Cần quyền hiển thị trước khi đăng",
    status: "Ưu tiên quyền riêng tư",
    content:
      "Với ảnh sản phẩm khách đã nhận, LyliShop sẽ che thông tin cá nhân và chỉ đăng khi khách đồng ý. Đây là cách shop giữ phần social proof đáng tin hơn.",
  },
];

const FEATURED_ARTICLES = [
  {
    title: "Móc khóa len handmade – Món quà nhỏ mang ý nghĩa lớn",
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
    <section className="bg-gradient-to-b from-white to-background py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 rounded-[28px] border border-border/70 bg-white/65 p-5 shadow-sm backdrop-blur-md sm:p-8 lg:grid-cols-[1.02fr_0.98fr] lg:p-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-2 text-sm font-medium text-foreground shadow-sm">
              <Gift className="h-4 w-4 text-primary" aria-hidden="true" />
              Móc khóa len handmade, đặt qua tin nhắn
            </div>

            <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Móc khóa len handmade cute cho những món quà nhỏ có cảm xúc.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              LyliShop làm phụ kiện len nhỏ xinh, có thể trao đổi màu sắc và đóng gói gọn gàng
              để bạn tặng bạn thân, người yêu hoặc tự thưởng cho mình.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <a href={SITE.socials.zalo} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Liên hệ đặt hàng
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#categories">
                  Xem danh mục
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
              <a href={SITE.socials.facebook} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1.5 transition hover:text-foreground">
                <ThumbsUp className="h-4 w-4 text-primary" aria-hidden="true" />
                Facebook
              </a>
              <a href={SITE.socials.instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1.5 transition hover:text-foreground">
                <Camera className="h-4 w-4 text-primary" aria-hidden="true" />
                Instagram
              </a>
              <span className="inline-flex items-center rounded-full border border-border/70 bg-background/70 px-3 py-1.5">
                Không checkout trên website
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[28px] border border-primary/10 bg-white/40" />
            <Card className="relative overflow-hidden bg-white/75 p-4 shadow-lg backdrop-blur-md">
              <div className="relative aspect-[5/4] overflow-hidden rounded-lg border border-primary/10 bg-gradient-to-b from-white to-rose-50">
                <Image
                  src={HOMEPAGE_IMAGES.hero.src}
                  alt={HOMEPAGE_IMAGES.hero.alt}
                  width={HOMEPAGE_IMAGES.hero.width}
                  height={HOMEPAGE_IMAGES.hero.height}
                  className="h-full w-full object-cover"
                  priority
                  fetchPriority="high"
                  quality={75}
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
              <div className="grid gap-3 p-4 sm:grid-cols-3">
                {["Handmade", "Chọn màu", "Gói quà"].map((item) => (
                  <div key={item} className="rounded-md border border-border/70 bg-white/70 px-3 py-2 text-center text-sm font-medium shadow-sm">
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
    <section id="categories" className="bg-background py-14 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle
          eyebrow="Danh mục sản phẩm"
          title="Chọn nhanh theo kiểu móc khóa và quà tặng"
          description="Các nhóm sản phẩm được sắp xếp để bạn dễ chọn size, kiểu dáng và mục đích tặng."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {CATEGORY_ITEMS.map((category, index) => {
            const image = CATEGORY_IMAGES[index];

            return (
            <Card key={category.title} className="group flex h-full flex-col overflow-hidden bg-white/75 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
              {image ? (
                <div className="relative aspect-[4/3] overflow-hidden border-b border-border/70 bg-gradient-to-b from-white to-rose-50 xl:aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 16vw"
                    loading="lazy"
                    quality={55}
                  />
                </div>
              ) : (
                <ImagePlaceholder label={`Khung ảnh danh mục ${category.title}`} className="aspect-[4/3] rounded-b-none border-x-0 border-t-0 xl:aspect-square" />
              )}
              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-display text-base font-semibold leading-snug tracking-tight">{category.title}</h3>
                <p className="mt-2 text-sm font-semibold text-primary">{category.price}</p>
                <p className="mt-1 flex-1 text-sm leading-6 text-muted-foreground">{category.description}</p>
                <Button asChild variant="outline" size="sm" className="mt-4 w-full">
                  <Link href={category.href} aria-label={`${category.cta} ${category.title}`}>
                    {category.cta}
                  </Link>
                </Button>
              </div>
            </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function FeaturedProductsSection() {
  const products = FEATURED_PRODUCTS.slice(0, 4);

  return (
    <section id="featured" className="bg-white py-14 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle
          eyebrow="Sản phẩm nổi bật"
          title="Một số mẫu móc khóa len đang được ưu tiên hiển thị"
          description="Giữ danh sách ngắn để khách xem nhanh mẫu, giá và chọn đúng nhóm trước khi nhắn shop tư vấn."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.slug} className="group flex h-full flex-col overflow-hidden bg-background/70 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
              <div className="relative aspect-square overflow-hidden border-b border-border/70 bg-gradient-to-b from-white to-rose-50">
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  width={product.image.width}
                  height={product.image.height}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  quality={55}
                />
              </div>
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

        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link href="/moc-khoa-len">
              Tìm hiểu cách chọn móc khóa len
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}

function ReviewSection() {
  return (
    <section id="reviews" className="bg-background py-14 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle
          eyebrow="Đánh giá khách hàng"
          title="Phản hồi thật sẽ được cập nhật rõ ràng"
          description="LyliShop chỉ đăng phản hồi đã được khách cho phép hiển thị, ưu tiên sự minh bạch hơn là tạo đánh giá không có nguồn xác nhận."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <Card key={review.name} className="flex h-full flex-col bg-white/75 p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div
                  role="img"
                  aria-label={`Avatar placeholder của ${review.name}`}
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-dashed border-primary/30 bg-background text-primary"
                >
                  <HeartHandshake className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold">{review.name}</h3>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
              <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-xs font-medium text-muted-foreground" aria-label={review.status}>
                <Star className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>{review.status}</span>
              </div>
              <p className="mt-4 flex-1 text-sm leading-6 text-muted-foreground">{review.content}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

function NewsSection() {
  return (
    <section id="news" className="bg-white py-14 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle
          eyebrow="Tin tức"
          title="Cẩm nang quà handmade nhỏ xinh"
          description="Các bài viết giúp bạn hiểu cách chọn quà, bảo quản phụ kiện len và chuẩn bị thông tin trước khi nhắn shop tư vấn."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {FEATURED_ARTICLES.map((article, index) => {
            const image = FEATURED_ARTICLE_IMAGES[index];

            return (
            <Card key={article.title} className="group flex h-full flex-col overflow-hidden bg-background/70 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
              <div className="relative aspect-[16/9] overflow-hidden border-b border-border/70 bg-gradient-to-b from-white to-rose-50">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  quality={58}
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>{article.date}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-semibold leading-tight tracking-tight">
                  {article.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{article.description}</p>
                <Button asChild variant="outline" className="mt-5 w-fit">
                  <Link href={article.href}>
                    Đọc thêm
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </Card>
            );
          })}
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
      <HomepageAboutSection />
      <ContactSection />
    </>
  );
}
