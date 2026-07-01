import Link from "next/link";
import Image from "next/image";
import { Camera, MapPin, MessageCircle, Phone, ThumbsUp } from "lucide-react";

import { SITE } from "@/lib/site";
import { Container } from "@/components/Container";

const FOOTER_LINKS: Array<{ label: string; href: string }> = [
  { label: "Trang chủ", href: "/" },
  { label: "Tin tức", href: "/blog" },
  { label: "Cửa hàng", href: "/products" },
  { label: "Giới thiệu", href: "/#about" },
  { label: "Liên hệ", href: "/#contact" },
];

const POLICY_LINKS: Array<{ label: string; href: string }> = [
  { label: "Chính sách đổi trả", href: "/terms" },
  { label: "Chính sách vận chuyển", href: "/terms" },
  { label: "Điều khoản", href: "/terms" },
  { label: "Chính sách bảo mật", href: "/privacy" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1.1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2" aria-label="LyliShop homepage">
              <Image src={SITE.logo} alt="LyliShop logo" width={28} height={28} />
              <span className="font-display text-base font-semibold tracking-tight">{SITE.name}</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              {SITE.brandDescription}
            </p>

            <div className="mt-6 flex items-center gap-2">
              <a
                href={SITE.socials.zalo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/70 bg-background/70 text-foreground/80 shadow-sm transition hover:bg-accent hover:text-foreground"
                aria-label="Zalo LyliShop"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={SITE.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/70 bg-background/70 text-foreground/80 shadow-sm transition hover:bg-accent hover:text-foreground"
                aria-label="Facebook LyliShop"
              >
                <ThumbsUp className="h-4 w-4" />
              </a>
              <a
                href={SITE.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/70 bg-background/70 text-foreground/80 shadow-sm transition hover:bg-accent hover:text-foreground"
                aria-label="Instagram LyliShop"
              >
                <Camera className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold">Danh mục</h2>
            <ul className="mt-4 grid gap-2.5">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <Link className="text-sm text-foreground/80 hover:text-foreground" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold">Chính sách</h2>
            <ul className="mt-4 grid gap-2.5">
              {POLICY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link className="text-sm text-foreground/80 hover:text-foreground" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold">Thông tin liên hệ</h2>
            <div className="mt-4 grid gap-3 text-sm leading-6 text-muted-foreground">
              <p className="flex items-center gap-2 text-foreground/80">
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                {SITE.phone}
              </p>
              <p>Email: Cập nhật sau</p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                Google Maps: Cập nhật sau
              </p>
              <p>Facebook, Instagram và Zalo là kênh liên hệ đặt hàng chính.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border/70 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Bản quyền thuộc về LyliShop.
          </p>
          <p>
            <Link href="/#contact" className="hover:text-foreground">
              Nhắn shop để đặt hàng
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
