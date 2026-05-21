"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Sparkles } from "lucide-react";

import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NAV_LINKS: Array<{ label: string; href: string }> = [
  { label: "Products", href: "/#featured" },
  { label: "Why LyliShop", href: "/#why" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
  { label: "Order", href: "/#order" },
];

function NavLinks({
  className,
  itemWrapper,
}: {
  className?: string;
  itemWrapper?: (node: React.ReactNode, key: string) => React.ReactNode;
}) {
  return (
    <ul className={cn("flex items-center gap-1", className)} aria-label="Main navigation">
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
        <Link href="/" className="flex items-center gap-2" aria-label={`${SITE.name} homepage`}>
          <Image src={SITE.logo} alt="LyliShop logo" width={28} height={28} priority />
          <span className="font-display text-base font-semibold tracking-tight">
            {SITE.name}
          </span>
        </Link>

        <nav className="hidden md:flex">
          <NavLinks />
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link href="/#featured" aria-label="View featured products">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Featured
            </Link>
          </Button>

          <Button asChild className="hidden sm:inline-flex">
            <Link href="/#order" aria-label="Go to order contact section">
              Contact to order
            </Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="h-4 w-4" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="font-display">{SITE.name}</SheetTitle>
                <SheetDescription className="sr-only">
                  Main navigation and order contact links
                </SheetDescription>
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
                <SheetClose asChild>
                  <Link href="/#order" className={buttonVariants({ size: "lg" })}>
                    Contact to order
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href={SITE.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({ variant: "outline", size: "lg" })}
                  >
                    DM Instagram
                  </a>
                </SheetClose>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Handmade crochet keychains with gift-ready packaging and custom color support.
              </p>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
