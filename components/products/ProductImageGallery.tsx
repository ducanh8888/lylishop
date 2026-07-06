import Image from "next/image";
import { Camera } from "lucide-react";

import type { Product } from "@/lib/products";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

type ProductImage = Product["image"];

const IMAGE_SLOTS = [
  {
    id: "cover",
    title: "Ảnh chính sản phẩm",
    notes: ["Chính diện", "Nền sáng", "Không watermark", "Dùng làm ảnh đại diện"],
  },
  {
    id: "detail",
    title: "Ảnh chi tiết",
    notes: ["Cận mũi móc", "Chất liệu Milk Cotton", "Thấy rõ texture", "Không bị mờ"],
  },
  {
    id: "lifestyle",
    title: "Ảnh thực tế",
    notes: ["Đặt trên tay", "Treo balo", "Treo chìa khóa", "Dễ hình dung kích thước"],
  },
] as const;

function getProductGalleryImages(product: Product) {
  const images = [product.image, ...(product.images ?? [])];
  const uniqueImages = images.filter(
    (image, index, list) => list.findIndex((item) => item.src === image.src) === index
  );

  return IMAGE_SLOTS.map((slot, index) => ({
    ...slot,
    image: uniqueImages[index],
    index,
  }));
}

function PlaceholderFrame({
  title,
  notes,
  className,
}: {
  title: string;
  notes: readonly string[];
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${title} sẽ được LyliShop cập nhật bằng ảnh thật`}
      className={cn(
        "flex h-full min-h-full flex-col justify-center rounded-xl border border-dashed border-primary/30 bg-amber-50/60 p-5 text-left",
        className
      )}
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-sm">
        <Camera className="h-4 w-4" aria-hidden="true" />
      </span>
      <p className="mt-4 font-display text-base font-semibold text-foreground">{title}</p>
      <ul className="mt-3 grid gap-1.5 text-sm leading-6 text-muted-foreground">
        {notes.map((note) => (
          <li key={note} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
            <span>{note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ImageFrame({
  image,
  title,
  index,
  priority = false,
  compact = false,
}: {
  image?: ProductImage;
  title: string;
  index: number;
  priority?: boolean;
  compact?: boolean;
}) {
  if (!image) {
    return (
      <PlaceholderFrame
        title={title}
        notes={IMAGE_SLOTS[index].notes}
        className={compact ? "min-h-36 p-4" : undefined}
      />
    );
  }

  return (
    <div className="relative h-full overflow-hidden rounded-xl bg-gradient-to-b from-white to-rose-50">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
        priority={priority}
        fetchPriority={priority ? "high" : undefined}
        loading={priority ? undefined : "lazy"}
        quality={priority ? 65 : 58}
        sizes={
          priority
            ? "(max-width: 1024px) 100vw, 520px"
            : "(max-width: 1024px) 90vw, 180px"
        }
      />
      <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground shadow-sm">
        {title}
      </div>
    </div>
  );
}

export function ProductImageGallery({ product }: { product: Product }) {
  const galleryItems = getProductGalleryImages(product);

  return (
    <div aria-label={`Thư viện ảnh ${product.name}`} className="grid gap-4">
      <div className="lg:hidden">
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
          {galleryItems.map((item) => (
            <div key={item.id} className="min-w-full snap-start">
              <Card className="overflow-hidden bg-white/75 p-2 shadow-sm backdrop-blur-md">
                <div className="relative aspect-square">
                  <ImageFrame image={item.image} title={item.title} index={item.index} />
                  <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-foreground shadow-sm">
                    {item.index + 1}/3
                  </span>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden gap-4 lg:grid">
        <Card className="overflow-hidden bg-white/75 p-2 shadow-sm backdrop-blur-md">
          <div className="aspect-square">
            <ImageFrame
              image={galleryItems[0].image}
              title={galleryItems[0].title}
              index={0}
              priority
            />
          </div>
        </Card>

        <div className="grid grid-cols-3 gap-3">
          {galleryItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden bg-white/75 p-2 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="aspect-square">
                <ImageFrame
                  image={item.image}
                  title={item.title}
                  index={item.index}
                  compact
                />
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-primary/15 bg-rose-50/70 px-4 py-3 text-sm leading-6 text-muted-foreground shadow-sm">
        Hình ảnh sẽ được LyliShop cập nhật đầy đủ theo từng mẫu sản phẩm để khách hàng dễ dàng
        tham khảo trước khi đặt hàng.
      </div>
    </div>
  );
}
