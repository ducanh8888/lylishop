import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import type { Product } from "@/lib/products";
import { formatVnd } from "@/lib/format";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { StarRating } from "@/components/StarRating";

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
        "group overflow-hidden border-border/70 bg-white/60 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:shadow-lg",
        className
      )}
    >
      <Link
        href={`/products/${product.slug}`}
        className="block"
        aria-label={`View details for ${product.name}`}
      >
        <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-white to-rose-50">
          <Image
            src={product.image.src}
            alt={product.image.alt}
            width={product.image.width}
            height={product.image.height}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        </div>

        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-base font-semibold leading-snug tracking-tight">
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {product.shortDescription}
              </p>
            </div>
            <div className="text-right">
              <div className="font-display text-base font-semibold text-foreground">
                {formatVnd(product.priceVnd)}
              </div>
              <Badge variant="pink" className="mt-1">
                Handmade
              </Badge>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <StarRating rating={product.rating} />
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
              View
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
