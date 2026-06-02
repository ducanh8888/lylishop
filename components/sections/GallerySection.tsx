import Image from "next/image";

import { GALLERY_IMAGES } from "@/lib/gallery";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeUp } from "@/components/motion/Reveal";

export function GallerySection() {
  return (
    <section id="gallery" className="bg-background py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="Những góc nhỏ của LyliShop"
          description="Một vài khung hình về chất len, cách đóng gói và cảm giác mềm mại của đồ handmade."
        />

        <FadeUp>
          <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4">
            {GALLERY_IMAGES.map((img) => (
              <div key={img.src} className="mb-4 break-inside-avoid">
                <div className="group overflow-hidden rounded-lg border border-border/70 bg-white/50 shadow-sm backdrop-blur-md">
                  <div className="relative">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      loading="lazy"
                      quality={55}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 opacity-0 transition group-hover:opacity-100" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
