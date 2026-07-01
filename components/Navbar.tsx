import Link from "next/link";
import Image from "next/image";
import { Menu, MessageCircle } from "lucide-react";

import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV_LINKS: Array<{ label: string; href: string }> = [
  { label: "Trang chủ", href: "/" },
  { label: "Tin tức", href: "/blog" },
  { label: "Cửa hàng", href: "/products" },
  { label: "Giới thiệu", href: "/#about" },
  { label: "Liên hệ", href: "/#order" },
];

const actionBase =
  "inline-flex touch-manipulation items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none";
const outlineAction =
  "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground";
const primaryAction =
  "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90";

function NavLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-1", className)} aria-label="Điều hướng chính">
      {NAV_LINKS.map((l) => (
        <li key={l.href}>
          <Link
            href={l.href}
            className="inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-foreground/80 transition hover:bg-accent hover:text-foreground"
          >
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/75 backdrop-blur-md">
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto] items-center gap-3 px-4 sm:px-6 md:grid-cols-[1fr_auto_1fr]">
        <Link href="/" className="flex items-center gap-2" aria-label={`${SITE.name} homepage`}>
          <Image src={SITE.logo} alt="LyliShop logo" width={28} height={28} />
          <span className="font-display text-base font-semibold tracking-tight">
            {SITE.name}
          </span>
        </Link>

        <nav className="hidden md:flex">
          <NavLinks />
        </nav>

        <div className="flex items-center justify-end gap-2">
          <a
            href={SITE.socials.zalo}
            target="_blank"
            rel="noreferrer"
            aria-label="Liên hệ đặt hàng qua Zalo"
            className={cn(actionBase, primaryAction, "hidden h-10 px-4 py-2 sm:inline-flex")}
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Liên hệ
          </a>

          <details className="group relative md:hidden">
            <summary
              className={cn(
                actionBase,
                outlineAction,
                "h-10 w-10 cursor-pointer list-none [&::-webkit-details-marker]:hidden"
              )}
              aria-label="Mở menu"
            >
              <Menu className="h-4 w-4" aria-hidden="true" />
            </summary>

            <div className="absolute right-0 top-12 w-[min(92vw,20rem)] rounded-lg border border-border/70 bg-background/95 p-4 shadow-xl backdrop-blur-md">
              <NavLinks className="flex-col items-start gap-1" />
              <div className="mt-4 grid gap-2">
                <a
                  href={SITE.socials.zalo}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(actionBase, primaryAction, "h-11 rounded-md px-6")}
                >
                  Liên hệ đặt hàng
                </a>
                <a
                  href={SITE.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(actionBase, outlineAction, "h-11 rounded-md px-6")}
                >
                  Nhắn Instagram
                </a>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                LyliShop chỉ nhận đặt hàng qua Facebook, Zalo hoặc Instagram.
              </p>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
