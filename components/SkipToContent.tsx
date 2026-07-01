import Link from "next/link";

import { cn } from "@/lib/utils";

export function SkipToContent({ className }: { className?: string }) {
  return (
    <Link
      href="#main"
      className={cn(
        "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:shadow-lg",
        className
      )}
    >
      Bỏ qua đến nội dung chính
    </Link>
  );
}
