"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Sparkles } from "lucide-react";

import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS: Array<{ label: string; href: string }> = [
  { label: "Sản phẩm", href: "#featured" },
  { label: "Vì sao chọn", href: "#why" },
  { label: "Bộ sưu tập", href: "#gallery" },
  { label: "Đánh giá", href: "#reviews" },
  { label: "Hỏi đáp", href: "#faq" },
  { label: "Đặt hàng", href: "#order" },
];

function NavLinks({
  className,
  itemWrapper,
}: {
  className?: string;
  itemWrapper?: (node: React.ReactNode, key: string) => React.ReactNode;
}) {
  return (
    <ul className={cn("flex items-center gap-1", className)} aria-label="Điều hướng chính">
      {NAV_LINKS.map((l) => {
        const link = (
          <Link
            href={l.href}
            className="inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-foreground/80 transition hover:bg-accent hover:text-foreground"
          >
            {l.label}
          </Link>
        );
        const wrapped = itemWrapper ? itemWrapper(link, l.href) : link;
        return <li key={l.href}>{wrapped}</li>;
      })}
    </ul>
  );
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/75 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label={`Trang chủ ${SITE.name}`}>
          <Image src={SITE.logo} alt="Logo LyliShop" width={28} height={28} priority />
          <span className="font-display text-base font-semibold tracking-tight">
            {SITE.name}
          </span>
        </Link>

        <nav className="hidden md:flex">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link href="#featured" aria-label="Xem sản phẩm nổi bật">
              <Sparkles className="h-4 w-4" />
              Nổi bật
            </Link>
          </Button>

          <Button asChild className="hidden sm:inline-flex">
            <Link href="#order" aria-label="Đi tới mục đặt hàng">
              Đặt hàng
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Mở menu">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="font-display">{SITE.name}</SheetTitle>
              </SheetHeader>
              <div className="mt-2">
                <NavLinks
                  className="flex-col items-start gap-1"
                  itemWrapper={(node, key) => (
                    <SheetClose asChild key={key}>
                      {node}
                    </SheetClose>
                  )}
                />
              </div>
              <div className="mt-4 grid gap-2">
                <Button asChild>
                  <Link href="#order">Đặt hàng</Link>
                </Button>
                <Button asChild variant="outline">
                  <a href={SITE.socials.instagram} target="_blank" rel="noreferrer">
                    Đặt hàng qua Instagram
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Móc khóa crochet handmade. Đóng gói quà xinh. Có thể tùy chỉnh màu sắc theo yêu cầu.
              </p>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
