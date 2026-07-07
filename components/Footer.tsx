import Link from "next/link";
import Image from "next/image";
import { Camera, MapPin, MessageCircle, Phone, ThumbsUp } from "lucide-react";

import { SITE } from "@/lib/site";
import { Container } from "@/components/Container";

const FOOTER_BRAND_DESCRIPTION =
  "LyliShop làm móc khóa len handmade, hoa len và thú bông len từ len Milk Cotton. Sản phẩm có thể chọn màu, làm theo yêu cầu và phù hợp làm quà tặng; shop luôn xác nhận mẫu trước khi bắt đầu thực hiện.";

const NAVIGATION_LINKS: Array<{ label: string; href: string }> = [
  { label: "Trang chủ", href: "/" },
  { label: "Danh mục", href: "/#categories" },
  { label: "Sản phẩm", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "Giới thiệu", href: "/#about" },
  { label: "Liên hệ", href: "/#contact" },
  { label: "Móc khóa len handmade", href: "/moc-khoa-len" },
];

const CATEGORY_LINKS: Array<{ label: string; href: string }> = [
  { label: "Mini", href: "/products#nhom-mini" },
  { label: "Size S", href: "/products#nhom-size-s" },
  { label: "Size M", href: "/products#nhom-size-m" },
  { label: "Size L", href: "/products#nhom-size-l" },
  { label: "Hoa len", href: "/products#nhom-flower" },
  { label: "Thú bông len", href: "/products#nhom-plush" },
];

const POLICY_LINKS: Array<{ label: string; href: string }> = [
  { label: "Điều khoản đặt hàng", href: "/terms" },
  { label: "Chính sách bảo mật", href: "/privacy" },
];

const footerLinkClass =
  "text-sm text-foreground/80 transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const socialLinkClass =
  "inline-flex h-11 w-11 items-center justify-center rounded-md border border-border/70 bg-background/70 text-foreground/80 shadow-sm transition hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const ctaLinkClass =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-[1.15fr_0.75fr_0.85fr_0.85fr_1.15fr]">
          <div>
            <Link href="/" className="flex items-center gap-2" aria-label="LyliShop homepage">
              <Image src={SITE.logo} alt="LyliShop logo" width={28} height={28} sizes="28px" loading="lazy" />
              <span className="font-display text-base font-semibold tracking-tight">{SITE.name}</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              {FOOTER_BRAND_DESCRIPTION}
            </p>

            <div className="mt-5 flex flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={SITE.socials.zalo}
                target="_blank"
                rel="noreferrer"
                className={`${ctaLinkClass} bg-primary text-primary-foreground shadow-sm hover:bg-primary/90`}
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Nhắn Zalo đặt hàng
              </a>
              <Link
                href="/products"
                className={`${ctaLinkClass} border border-border/70 bg-background/70 text-foreground/80 shadow-sm hover:bg-accent hover:text-foreground`}
              >
                Xem sản phẩm
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-2">
              <a
                href={SITE.socials.zalo}
                target="_blank"
                rel="noreferrer"
                className={socialLinkClass}
                aria-label="Zalo LyliShop"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={SITE.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className={socialLinkClass}
                aria-label="Facebook LyliShop"
              >
                <ThumbsUp className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={SITE.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className={socialLinkClass}
                aria-label="Instagram LyliShop"
              >
                <Camera className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <nav aria-label="Điều hướng chân trang">
              <h2 className="font-display text-sm font-semibold">Điều hướng</h2>
              <ul className="mt-4 grid gap-2.5">
                {NAVIGATION_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link className={footerLinkClass} href={l.href}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <nav aria-label="Danh mục sản phẩm">
              <h2 className="font-display text-sm font-semibold">Danh mục sản phẩm</h2>
              <ul className="mt-4 grid gap-2.5">
                {CATEGORY_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link className={footerLinkClass} href={l.href}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <nav aria-label="Chính sách LyliShop">
              <h2 className="font-display text-sm font-semibold">Chính sách</h2>
              <ul className="mt-4 grid gap-2.5">
                {POLICY_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link className={footerLinkClass} href={l.href}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold">Thông tin liên hệ</h2>
            <address className="mt-4 grid gap-3 text-sm not-italic leading-6 text-muted-foreground">
              <a
                href={`tel:${SITE.phone}`}
                className={`${footerLinkClass} flex items-center gap-2`}
              >
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className={footerLinkClass}>
                Email: {SITE.email}
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                LyliShop hiện tư vấn và chốt đơn online; bản đồ sẽ cập nhật khi có điểm nhận/gửi công khai.
              </p>
              <div className="grid gap-1">
                <a href={SITE.socials.facebook} target="_blank" rel="noreferrer" className={footerLinkClass}>
                  Facebook LyliShop
                </a>
                <a href={SITE.socials.instagram} target="_blank" rel="noreferrer" className={footerLinkClass}>
                  Instagram LyliShop
                </a>
                <a href={SITE.socials.zalo} target="_blank" rel="noreferrer" className={footerLinkClass}>
                  Zalo LyliShop
                </a>
              </div>
              <p>Facebook, Instagram và Zalo là kênh liên hệ đặt hàng chính. Shop thường phản hồi sớm nhất qua Zalo hoặc điện thoại.</p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border/70 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Bản quyền thuộc về LyliShop.
          </p>
          <p>
            <a href={SITE.socials.zalo} target="_blank" rel="noreferrer" className={footerLinkClass}>
              Nhắn Zalo đặt hàng
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
