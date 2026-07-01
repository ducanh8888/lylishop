import Link from "next/link";
import { Camera, MessageCircle, Star, ThumbsUp } from "lucide-react";

import type { BlogPost } from "@/lib/blog";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatBlogDate } from "@/components/blog/BlogCard";

export function BlogSidebar({
  posts,
  currentSlug,
}: {
  posts: BlogPost[];
  currentSlug?: string;
}) {
  const availablePosts = posts.filter((post) => post.slug !== currentSlug);
  const latestPosts = availablePosts.slice(0, 4);
  const featuredPosts = availablePosts
    .filter((post) =>
      post.keywords.some((keyword) => /quà|handmade|móc khóa|phụ kiện/i.test(keyword))
    )
    .slice(0, 3);

  return (
    <aside className="grid gap-5 lg:sticky lg:top-24 lg:self-start" aria-label="Nội dung Blog liên quan">
      <Card className="bg-white/75 p-5 shadow-sm">
        <h2 className="font-display text-base font-semibold tracking-tight">Bài mới</h2>
        <div className="mt-4 grid gap-4">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-md border border-border/70 bg-background/70 p-3 transition hover:-translate-y-0.5 hover:shadow-sm"
            >
              <p className="text-xs text-muted-foreground">{formatBlogDate(post.dateModified)}</p>
              <h3 className="mt-1 text-sm font-medium leading-6 transition group-hover:text-primary">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
      </Card>

      <Card className="bg-white/75 p-5 shadow-sm">
        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 text-primary" aria-hidden="true" />
          <h2 className="font-display text-base font-semibold tracking-tight">Bài nổi bật</h2>
        </div>
        <div className="mt-4 grid gap-2">
          {featuredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-rose-50 hover:text-primary"
            >
              {post.title}
            </Link>
          ))}
        </div>
      </Card>

      <Card className="bg-rose-50/80 p-5 text-center shadow-sm">
        <p className="font-display text-sm font-semibold text-foreground">
          Cần chọn quà handmade?
        </p>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Nhắn LyliShop qua kênh bạn tiện để được gợi ý mẫu, màu và size phù hợp.
        </p>
        <div className="mt-4 grid gap-2">
          <Button asChild>
            <a href={SITE.socials.zalo} target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Zalo
            </a>
          </Button>
          <div className="grid grid-cols-2 gap-2">
            <Button asChild variant="outline" size="sm">
              <a href={SITE.socials.facebook} target="_blank" rel="noreferrer">
                <ThumbsUp className="h-4 w-4" aria-hidden="true" />
                Facebook
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={SITE.socials.instagram} target="_blank" rel="noreferrer">
                <Camera className="h-4 w-4" aria-hidden="true" />
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </aside>
  );
}
