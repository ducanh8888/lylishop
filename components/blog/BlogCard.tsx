import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";

import type { BlogPost } from "@/lib/blog";
import { SITE } from "@/lib/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function formatBlogDate(value: string) {
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(value));
}

export function BlogCard({
  post,
  headingLevel = "h2",
}: {
  post: BlogPost;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  const image = post.image ?? {
    src: SITE.ogImage,
    alt: post.title,
    width: 1200,
    height: 630,
  };

  return (
    <Card className="group flex h-full flex-col overflow-hidden bg-white/75 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      <Link
        href={`/blog/${post.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-gradient-to-b from-white to-rose-50"
        aria-label={`Đọc bài viết ${post.title}`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          quality={58}
        />
        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur">
          {post.readingTime}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" />
            {formatBlogDate(post.dateModified)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-4 w-4 text-primary" aria-hidden="true" />
            {post.readingTime}
          </span>
        </div>

        <Heading className="mt-3 font-display text-xl font-semibold leading-tight tracking-tight">
          <Link href={`/blog/${post.slug}`} className="transition hover:text-primary">
            {post.title}
          </Link>
        </Heading>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {post.keywords.slice(0, 3).map((keyword) => (
            <Badge key={keyword} variant="secondary">
              {keyword}
            </Badge>
          ))}
        </div>

        <div className="mt-auto pt-5">
          <Button asChild variant="outline" className="w-full sm:w-fit">
            <Link href={`/blog/${post.slug}`}>
              Đọc bài viết
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}

export { formatBlogDate };
