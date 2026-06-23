import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProductsSection } from "@/components/sections/FeaturedProductsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Container } from "@/components/Container";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import { FAQ_ITEMS } from "@/lib/faq";
import { FEATURED_BLOG_POSTS } from "@/lib/blog";
import { FEATURED_PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";
import {
  faqJsonLd,
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

function HomeSeoContentSection() {
  return (
    <section className="bg-background py-14 sm:py-20" aria-labelledby="home-seo-title">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
            LyliShop handmade
          </p>
          <h2
            id="home-seo-title"
            className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            Móc khóa len handmade nhỏ xinh cho balo, túi xách và quà tặng
          </h2>
          <div className="mt-6 space-y-6 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            <p>
              LyliShop là shop móc khóa len handmade dành cho những bạn thích phụ kiện nhỏ xinh,
              mềm mại và có cảm giác được làm riêng. Mỗi mẫu móc khóa len được hoàn thiện thủ công
              từ từng mũi móc, phù hợp để treo balo, túi tote, chìa khóa, hộp bút hoặc làm một món
              quà tặng handmade dễ thương cho bạn thân, người yêu, em gái hay chính bản thân mình.
            </p>
            <p>
              Điểm đáng yêu của móc khóa handmade là mỗi chiếc đều có nét riêng. Thay vì một món phụ
              kiện sản xuất hàng loạt, người nhận sẽ thấy món quà có sự chăm chút, có màu sắc được
              chọn theo gu và có câu chuyện nhỏ phía sau. Vì vậy, móc khóa len cute rất hợp với học
              sinh, sinh viên, người thích đồ thủ công, người mê phong cách dễ thương hoặc những ai
              đang tìm một món quà sinh nhật handmade vừa gọn, vừa có cảm xúc.
            </p>
            <p>
              Bộ sưu tập của LyliShop tập trung vào các mẫu móc khóa len treo balo, móc khóa crochet
              handmade, thú len mini và phụ kiện len cute. Bạn có thể chọn mẫu có sẵn hoặc nhắn shop
              để trao đổi thêm về tone màu, size, số lượng và chi tiết nhỏ như nơ, hoa, biểu cảm hay
              phối màu theo người nhận. Với những mẫu đặt theo yêu cầu, shop sẽ xác nhận lại trước
              khi làm để hạn chế sai kỳ vọng khi nhận hàng.
            </p>
            <p>
              LyliShop ưu tiên trải nghiệm đặt hàng qua tin nhắn vì mỗi sản phẩm handmade thường cần
              trao đổi kỹ hơn hàng có sẵn. Shop sẽ xác nhận mẫu, màu, giá theo kích thước và thời
              gian hoàn thiện trước khi bắt đầu làm. Thành phẩm được đóng gói gọn gàng, sạch đẹp,
              phù hợp để tặng trực tiếp hoặc gửi cho người nhận như một món quà nhỏ có nhiều sự quan
              tâm.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border/70 bg-rose-50/70 p-5">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Nhận làm móc khóa len theo yêu cầu
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Nếu bạn muốn đặt móc khóa len theo màu riêng, đặt nhiều mẫu cho nhóm bạn hoặc chọn
                quà tặng handmade cho nữ, hãy gửi LyliShop mẫu bạn thích. Shop sẽ tư vấn chất liệu,
                màu len, kích thước và thời gian hoàn thiện trước khi chốt đơn.
              </p>
            </div>
            <div className="rounded-lg border border-border/70 bg-white/70 p-5">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Cách đặt hàng qua Zalo/Facebook
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Bạn chỉ cần chọn sản phẩm, gửi màu mong muốn và số lượng qua Zalo hoặc Facebook.
                LyliShop sẽ báo giá theo kích thước, độ chi tiết của mẫu và xác nhận thời gian làm
                trước khi bắt đầu. Shop không có giỏ hàng hay thanh toán tự động trên website.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-border/70 bg-background/70 p-5">
            <h3 className="font-display text-lg font-semibold text-foreground">
              FAQ ngắn khi chọn móc khóa len handmade
            </h3>
            <div className="mt-4 grid gap-4 text-sm leading-7 text-muted-foreground md:grid-cols-3">
              <div>
                <p className="font-medium text-foreground">Có chọn màu riêng được không?</p>
                <p className="mt-1">
                  Có. Bạn có thể gửi tone màu yêu thích để shop tư vấn mẫu móc khóa len theo yêu cầu.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">Móc khóa len hợp làm quà cho ai?</p>
                <p className="mt-1">
                  Sản phẩm hợp với bạn nữ, học sinh, sinh viên và người thích quà tặng handmade dễ thương.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">Đặt hàng như thế nào?</p>
                <p className="mt-1">
                  Chọn mẫu trên website rồi nhắn Zalo/Facebook để shop xác nhận mẫu, giá và thời gian làm.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href={SITE.socials.zalo} target="_blank" rel="noreferrer">
                Nhắn Zalo đặt hàng
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/products">Xem các mẫu móc khóa len</Link>
            </Button>
          </div>
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
      <JsonLd data={faqJsonLd(FAQ_ITEMS)} />

      <HeroSection />
      <FeaturedProductsSection />
      <WhyChooseUsSection />
      <HomeSeoContentSection />
      <GallerySection />
      <TestimonialsSection />
      <FaqSection />
      <section className="bg-background py-14 sm:py-20">
        <Container>
          <div className="grid gap-8 rounded-lg border border-border/70 bg-rose-50 p-6 shadow-sm lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
                Cẩm nang
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Cách chọn móc khóa len handmade làm quà
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                Đọc thêm các gợi ý chọn quà handmade, cách bảo quản móc khóa len và cách chọn
                mẫu phù hợp trước khi nhắn LyliShop đặt hàng.
              </p>
              <Button asChild className="mt-5">
                <Link href="/blog">
                  Xem cẩm nang
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <div className="grid gap-3">
              {FEATURED_BLOG_POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="rounded-md border border-border/70 bg-white/70 p-4 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:text-primary hover:shadow-md"
                >
                  {post.title}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <ContactSection />
      <FinalCtaSection />
    </>
  );
}

