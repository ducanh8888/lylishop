import { Heart, Sparkles, Star } from "lucide-react";

export function HeroDecor() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div
        className="absolute left-6 top-10 rounded-full border border-border/70 bg-white/70 p-2 shadow-sm backdrop-blur-md"
      >
        <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
      </div>

      <div
        className="absolute right-8 top-14 rounded-full border border-border/70 bg-white/70 p-2 shadow-sm backdrop-blur-md"
      >
        <Star className="h-4 w-4 text-primary" fill="currentColor" aria-hidden="true" />
      </div>

      <div
        className="absolute bottom-10 left-10 rounded-full border border-border/70 bg-white/70 p-2 shadow-sm backdrop-blur-md"
      >
        <Heart className="h-4 w-4 text-primary" fill="currentColor" aria-hidden="true" />
      </div>
    </div>
  );
}
