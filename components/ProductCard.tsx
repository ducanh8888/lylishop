import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import type { Product } from "@/lib/products";
import { formatVnd } from "@/lib/format";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "group flex h-full overflow-hidden border-border/70 bg-white/75 shadow-sm backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:shadow-lg",
        className
      )}
    >
      <Link
        href={`/products/${product.slug}`}
        className="flex h-full w-full flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label={`Xem chi tiết ${product.name}`}
      >
        <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-white to-rose-50">
          <Image
            src={product.image.src}
            alt={product.image.alt}
            width={product.image.width}
            height={product.image.height}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            loading="lazy"
            quality={55}
          />
        </div>

        <div className="flex flex-1 flex-col p-4 sm:p-5">
          <Badge variant="pink" className="w-fit">
            {product.category}
          </Badge>

          <div className="mt-3">
            <h3 className="font-display text-base font-semibold leading-snug tracking-tight transition group-hover:text-primary">
              {product.name}
            </h3>
            <p className="mt-2 font-display text-base font-semibold text-foreground">
              {formatVnd(product.priceVnd)}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {product.shortDescription}
            </p>
          </div>

          <div className="mt-auto pt-5">
            <span className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md border border-border/70 bg-background/80 px-4 text-sm font-medium text-foreground shadow-sm transition group-hover:border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground">
              Xem chi tiết
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </Link>
    </Card>
  );
}
