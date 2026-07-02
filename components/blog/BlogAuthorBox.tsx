import { CalendarDays, Clock3, PenLine } from "lucide-react";

import { formatBlogDate } from "@/components/blog/BlogCard";
import { Card } from "@/components/ui/card";

export function BlogAuthorBox({
  dateModified,
  readingTime,
}: {
  dateModified: string;
  readingTime: string;
}) {
  return (
    <Card className="bg-white/75 p-5 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <PenLine className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="font-display text-base font-semibold text-foreground">LyliShop Team</p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              LyliShop Team biên soạn nội dung này từ sản phẩm đang có, quá trình tư vấn chọn mẫu, phối màu, đóng gói quà và hướng dẫn khách dùng phụ kiện len handmade. Mục tiêu là giúp bạn chọn quà rõ hơn trước khi nhắn shop.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" />
            Cập nhật {formatBlogDate(dateModified)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-4 w-4 text-primary" aria-hidden="true" />
            {readingTime}
          </span>
        </div>
      </div>
    </Card>
  );
}
