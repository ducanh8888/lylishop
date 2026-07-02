import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  Gift,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
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
              <a href={SITE.socials.facebook} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1.5 transition hover:text-foreground">
                <ThumbsUp className="h-4 w-4 text-primary" aria-hidden="true" />
                Facebook
              </a>
              <a href={SITE.socials.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1.5 transition hover:text-foreground">
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
              <ImagePlaceholder
                label="Khung ảnh hero LyliShop dành cho hình móc khóa len handmade"
                className="aspect-[5/4]"
              />
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
          {CATEGORY_ITEMS.map((category) => (
            <Card key={category.title} className="group flex h-full flex-col overflow-hidden bg-white/75 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
              <ImagePlaceholder label={`Khung ảnh danh mục ${category.title}`} className="aspect-[4/3] rounded-b-none border-x-0 border-t-0 xl:aspect-square" />
              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-display text-base font-semibold leading-snug tracking-tight">{category.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{category.description}</p>
                <Button asChild variant="outline" size="sm" className="mt-4 w-full">
                  <Link href="/products">
                    Xem sản phẩm
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
    <section id="featured" className="bg-white py-14 sm:py-20 lg:py-24">
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
          description="Section review được giữ sẵn theo đúng hành trình mua hàng, nhưng nội dung chỉ dùng phản hồi đã được khách cho phép hiển thị."
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
          description="Hai bài viết nổi bật giúp người mua hiểu thêm về ý nghĩa món quà và cách chọn móc khóa len."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {FEATURED_ARTICLES.map((article) => (
            <Card key={article.title} className="group flex h-full flex-col overflow-hidden bg-background/70 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
              <ImagePlaceholder label={`Khung ảnh bài viết ${article.title}`} className="aspect-[16/9] rounded-b-none border-x-0 border-t-0" />
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

const ABOUT_CARDS = [
  {
    title: "Sứ mệnh",
    description:
      "Mang đến những món quà handmade được tạo nên từ sự tỉ mỉ và chân thành, giúp mỗi sản phẩm đều mang ý nghĩa riêng dành cho người nhận.",
    icon: HeartHandshake,
  },
  {
    title: "Giá trị cốt lõi",
    values: ["Handmade tỉ mỉ", "Chất lượng", "Thân thiện", "Luôn lắng nghe khách hàng"],
    icon: Sparkles,
  },
  {
    title: "Định vị thương hiệu",
    description:
      "LyliShop hướng đến hình ảnh một thương hiệu phụ kiện len handmade trẻ trung, tinh tế và gần gũi, phù hợp với những ai yêu thích sự dễ thương và các món quà mang dấu ấn cá nhân.",
    icon: Gift,
  },
];

const HANDMADE_PROCESS = [
  {
    title: "Trao đổi mẫu",
    description:
      "LyliShop hỏi rõ mẫu, tone màu, dịp tặng và số lượng để tránh làm sai mong muốn của khách.",
  },
  {
    title: "Móc và hoàn thiện",
    description:
      "Sản phẩm được móc thủ công, chỉnh chi tiết nhỏ, gắn khoen và kiểm tra form trước khi đóng gói.",
  },
  {
    title: "Kiểm tra, đóng gói",
    description:
      "Shop kiểm tra lại sản phẩm, gói gọn theo phong cách quà tặng và xác nhận thông tin giao hàng qua tin nhắn.",
  },
];

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-background py-14 sm:py-20 lg:py-24">
      <Container>
        <SectionTitle
          eyebrow="Giới thiệu"
          title="Giới thiệu LyliShop"
          description="LyliShop mang đến những sản phẩm handmade được móc hoàn toàn thủ công, phù hợp làm quà tặng và phụ kiện cá nhân với phong cách dễ thương, tinh tế và mang dấu ấn riêng."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div
            role="img"
            aria-label="Hình ảnh thương hiệu LyliShop"
            className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-primary/25 bg-gradient-to-b from-white to-rose-50 p-6 text-center shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-500"
          >
            <div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-white/80 text-primary shadow-sm">
                <Sparkles className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="mt-4 font-display text-base font-semibold text-foreground">
                Hình ảnh thương hiệu LyliShop
              </p>
            </div>
          </div>

          <Card className="bg-white/75 p-6 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-500 sm:p-7">
            <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
              Câu chuyện nhỏ
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
              Những món quà len được chuẩn bị bằng sự tỉ mỉ.
            </h3>
            <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
              <p>
                LyliShop tập trung vào móc khóa len, hoa len và thú bông len nhỏ xinh.
                Mỗi sản phẩm được làm thủ công để người mua có thể chọn món quà gần
                với sở thích và câu chuyện của người nhận.
              </p>
              <p>
                Shop ưu tiên cách tư vấn rõ ràng, nhẹ nhàng và gần gũi để khách dễ
                chọn mẫu, màu sắc và cách đóng gói phù hợp trước khi liên hệ đặt hàng.
              </p>
            </div>
          </Card>
        </div>

        <Card className="mt-8 bg-white/75 p-6 shadow-sm sm:p-7">
          <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
            Quy trình thực hiện
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
            Quy trình handmade tại LyliShop
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
            Mỗi đơn được chuẩn bị theo tin nhắn trao đổi với khách, từ chọn màu đến kiểm tra thành phẩm.
            Quy trình này giúp người mua biết rõ shop đang làm gì trước khi chốt đơn qua mạng xã hội.
          </p>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {HANDMADE_PROCESS.map((step, index) => (
              <li key={step.title} className="rounded-lg border border-border/70 bg-background/70 p-4">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-sm font-semibold text-primary">
                  {index + 1}
                </span>
                <h4 className="mt-3 font-display text-base font-semibold">{step.title}</h4>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
        </Card>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {ABOUT_CARDS.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="h-full bg-white/75 p-6 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                {item.values ? (
                  <ul className="mt-3 grid gap-2 text-left text-sm leading-6 text-muted-foreground">
                    {item.values.map((value) => (
                      <li key={value} className="flex items-start gap-2">
                        <span className="text-primary" aria-hidden="true">✔</span>
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                )}
              </Card>
            );
          })}
        </div>

        <Card className="mt-8 bg-rose-50/80 p-6 text-center shadow-sm sm:p-8">
          <h3 className="font-display text-2xl font-semibold tracking-tight">
            Bạn đã tìm được mẫu yêu thích?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Liên hệ LyliShop để được tư vấn và lựa chọn mẫu phù hợp.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/products">
                🟣 Xem cửa hàng
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/#contact">💬 Liên hệ ngay</Link>
            </Button>
          </div>
        </Card>
      </Container>
    </section>
  );
}

function ContactSection() {
  const contactItems = [
    {
      label: "Facebook",
      value: "Theo dõi LyliShop.",
      href: SITE.socials.facebook,
      icon: ThumbsUp,
    },
    {
      label: "Instagram",
      value: "Xem hình ảnh sản phẩm.",
      href: SITE.socials.instagram,
      icon: Camera,
    },
    {
      label: "Zalo",
      value: "Tư vấn nhanh.",
      href: SITE.socials.zalo,
      icon: MessageCircle,
    },
    {
      label: "Điện thoại",
      value: SITE.phone,
      href: `tel:${SITE.phone}`,
      icon: Phone,
    },
    {
      label: "Email",
      value: SITE.email,
      href: `mailto:${SITE.email}`,
      icon: Mail,
    },
    {
      label: "Google Maps",
      value: "Shop hiện tư vấn và chốt đơn online.",
      icon: MapPin,
    },
  ];
  const productOptions = [
    { icon: "🧶", label: "Móc khóa Mini" },
    { icon: "🔑", label: "Móc khóa Size S" },
    { icon: "🎁", label: "Móc khóa Size M" },
    { icon: "✨", label: "Móc khóa Size L" },
    { icon: "🌷", label: "Hoa len" },
    { icon: "🧸", label: "Thú bông len" },
    { icon: "💬", label: "Khác" },
  ];
  const colorOptions = ["🟣 Tím Pastel", "🩷 Hồng Pastel", "💙 Xanh Pastel", "🤍 Trắng", "🤎 Kem", "🌈 Khác"];

  return (
    <section id="contact" className="scroll-mt-24 bg-white py-14 sm:py-20 lg:py-24">
      <span id="order" className="sr-only" aria-hidden="true" />
      <Container>
        <SectionTitle
          eyebrow="Liên hệ"
          title="Liên hệ & Đặt hàng"
          description="Bạn cần tư vấn hoặc muốn đặt móc khóa handmade theo yêu cầu? LyliShop luôn sẵn sàng hỗ trợ bạn qua các kênh liên hệ dưới đây."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-[0.8fr_1.2fr]">
          <Card className="h-full bg-background/70 p-5 shadow-sm sm:p-6">
            <h3 className="font-display text-xl font-semibold tracking-tight">
              Thông tin liên hệ
            </h3>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-semibold leading-tight">
                        {item.label}
                      </h4>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        {item.value}
                      </p>
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex min-h-32 flex-col gap-3 rounded-lg border border-border/70 bg-white/75 p-4 shadow-sm transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="flex min-h-32 flex-col gap-3 rounded-lg border border-border/70 bg-white/75 p-4 shadow-sm"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="mt-5 overflow-hidden rounded-lg border border-border/70 bg-white/75 shadow-sm">
              <div className="border-b border-border/70 px-5 py-4">
                <h4 className="font-display text-base font-semibold">Google Maps</h4>
              </div>
              <div
                role="img"
                aria-label="Khung placeholder Google Maps LyliShop"
                className="flex min-h-[300px] items-center justify-center bg-gradient-to-b from-white to-rose-50 p-6 text-center"
              >
                <p className="max-w-xs text-sm leading-6 text-muted-foreground">
                  LyliShop hiện chốt đơn online qua Facebook, Instagram và Zalo. Khung bản đồ sẽ được thay bằng địa chỉ công khai khi shop có điểm nhận/gửi phù hợp.
                </p>
              </div>
            </div>
          </Card>

          <Card className="h-full bg-background/70 p-5 shadow-sm sm:p-6">
            <h3 className="font-display text-xl font-semibold tracking-tight">
              Đặt hàng nhanh
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Form này chỉ giúp bạn chuẩn bị thông tin trước khi nhắn LyliShop qua Zalo.
              Website không lưu dữ liệu và không xử lý thanh toán.
            </p>

            <div className="mt-6 grid gap-5">
              <div className="grid gap-2">
                <label htmlFor="contact-name" className="text-sm font-medium">
                  Họ và tên
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Nhập tên của bạn"
                  className="h-11 rounded-md border border-input bg-white px-4 text-sm shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="contact-phone" className="text-sm font-medium">
                  Số điện thoại
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Nhập số điện thoại"
                  className="h-11 rounded-md border border-input bg-white px-4 text-sm shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
              </div>

              <fieldset className="grid gap-3">
                <legend className="text-sm font-medium">Sản phẩm muốn đặt</legend>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {productOptions.map((option) => (
                    <label
                      key={option.label}
                      className="group cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name="product"
                        value={option.label}
                        className="peer sr-only"
                      />
                      <span className="flex min-h-20 flex-col justify-center gap-2 rounded-md border border-border/70 bg-white/75 px-4 py-3 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white hover:shadow-md peer-focus-visible:ring-2 peer-focus-visible:ring-primary/20 peer-checked:border-primary/40 peer-checked:bg-primary/10">
                        <span className="text-xl" aria-hidden="true">
                          {option.icon}
                        </span>
                        <span className="font-medium leading-snug">{option.label}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="grid gap-3">
                <legend className="text-sm font-medium">Màu sắc yêu thích</legend>
                <div className="flex flex-wrap gap-2">
                  {colorOptions.map((option) => (
                    <label
                      key={option}
                      className="cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        name="color"
                        value={option}
                        className="peer sr-only"
                      />
                      <span className="inline-flex min-h-10 items-center rounded-full border border-border/70 bg-white/75 px-4 py-2 text-sm shadow-sm transition hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white hover:shadow-md peer-focus-visible:ring-2 peer-focus-visible:ring-primary/20 peer-checked:border-primary/40 peer-checked:bg-primary/10">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-2">
                <label htmlFor="contact-note" className="text-sm font-medium">
                  Ghi chú
                </label>
                <textarea
                  id="contact-note"
                  name="note"
                  placeholder="Ví dụ: số lượng, dịp tặng, màu muốn phối, ngày cần nhận..."
                  rows={5}
                  className="resize-none rounded-md border border-input bg-white px-4 py-3 text-sm leading-6 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
              </div>

              <Button asChild size="lg" className="w-full sm:w-fit">
                <a href={SITE.socials.zalo} target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Đặt hàng qua Zalo
                </a>
              </Button>
              <p className="text-sm leading-6 text-muted-foreground">
                LyliShop sẽ phản hồi sớm nhất qua kênh bạn chọn; nếu cần gấp, hãy ưu tiên Zalo hoặc điện thoại.
              </p>
            </div>
          </Card>
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
      <AboutSection />
      <ContactSection />
    </>
  );
}
