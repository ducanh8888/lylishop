import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

export function StarRating({
  rating,
  className,
  label,
}: {
  rating: number;
  className?: string;
  label?: string;
}) {
  const full = Math.round(rating);
  return (
    <div
      className={cn("flex items-center gap-2", className)}
      aria-label={label ?? `Đánh giá ${rating} trên 5`}
    >
      <div className="flex items-center gap-0.5 text-primary">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Star
            key={idx}
            className={cn("h-4 w-4", idx < full ? "text-primary" : "text-primary/30")}
            fill={idx < full ? "currentColor" : "none"}
          />
        ))}
      </div>
      <span className="text-xs text-muted-foreground">{rating.toFixed(1)}</span>
    </div>
  );
}
