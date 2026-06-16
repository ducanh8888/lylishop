import Link from "next/link";
import Image from "next/image";
import { Camera, MessageCircle, Music2, ThumbsUp } from "lucide-react";

import { SITE } from "@/lib/site";
import { Container } from "@/components/Container";

const FOOTER_LINKS: Array<{ label: string; href: string }> = [
  { label: "Móc khóa len", href: "/moc-khoa-len" },
  { label: "Mẫu nổi bật", href: "/#featured" },
  { label: "Cẩm nang handmade", href: "/blog" },
  { label: "Hình ảnh", href: "/#gallery" },
  { label: "Đánh giá", href: "/#reviews" },
  { label: "Câu hỏi thường gặp", href: "/#faq" },
  { label: "Liên hệ đặt hàng", href: "/#order" },
];

const POLICY_LINKS: Array<{ label: string; href: string }> = [
  { label: "Chính sách bảo mật", href: "/privacy" },
  { label: "Điều khoản", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2" aria-label="LyliShop homepage">
              <Image src={SITE.logo} alt="LyliShop logo" width={28} height={28} />
              <span className="font-display text-base font-semibold tracking-tight">{SITE.name}</span>
            </Link>
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              Móc khóa len handmade cute để treo balo, túi xách hoặc làm quà tặng.
              LyliShop nhận chọn màu theo yêu cầu, đóng gói xinh và giao hàng toàn quốc.
            </p>

            <div className="mt-5 flex items-center gap-2">
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
              <a
                href={SITE.socials.tiktok}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/70 bg-background/70 text-foreground/80 shadow-sm transition hover:bg-accent hover:text-foreground"
                aria-label="TikTok LyliShop"
              >
                <Music2 className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-display text-sm font-semibold">Liên kết nhanh</h2>
            <ul className="mt-4 grid gap-2">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <Link className="text-sm text-foreground/80 hover:text-foreground" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="font-display text-sm font-semibold">Chính sách</h2>
            <ul className="mt-4 grid gap-2">
              {POLICY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link className="text-sm text-foreground/80 hover:text-foreground" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="font-display text-sm font-semibold">Liên hệ</h2>
            <p className="mt-4 text-sm text-muted-foreground">Đặt hàng nhanh qua:</p>
            <p className="mt-2 text-sm text-foreground/80">Zalo, Facebook, Instagram</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Shop xác nhận mẫu, giá và thời gian làm trước khi chốt đơn.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border/70 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Bản quyền thuộc về LyliShop.
          </p>
          <p>
            <Link href="/#order" className="hover:text-foreground">
              Nhắn shop để đặt hàng
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
