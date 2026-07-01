import type { BlogPost } from "@/lib/blog";
import { Container } from "@/components/Container";
import { BlogCard } from "@/components/blog/BlogCard";

export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="bg-background py-14 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-wider text-primary/90">
            Đọc tiếp
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Bài viết liên quan
          </h2>
          <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
            Những gợi ý gần chủ đề giúp bạn chọn quà handmade dễ hơn.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
