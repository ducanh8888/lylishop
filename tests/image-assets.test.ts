import { existsSync } from "node:fs";
import { join } from "node:path";

import { GALLERY_IMAGES } from "@/lib/gallery";
import { PRODUCTS } from "@/lib/products";

describe("image assets", () => {
  it("has every referenced product and gallery image in public", () => {
    const publicDir = join(process.cwd(), "public");
    const imageSources = [
      ...PRODUCTS.map((product) => product.image.src),
      ...GALLERY_IMAGES.map((image) => image.src),
    ];

    for (const src of new Set(imageSources)) {
      expect(existsSync(join(publicDir, src.replace(/^\//, "")))).toBe(true);
    }
  });
});
