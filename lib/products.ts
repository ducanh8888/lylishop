export type Product = {
  slug: string;
  name: string;
  priceUsd: number;
  shortDescription: string;
  longDescription: string;
  rating: number;
  reviewCount: number;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  highlights: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "crochet-bear-keychain",
    name: "Crochet Bear Keychain",
    priceUsd: 14,
    shortDescription: "A tiny teddy with a soft blush nose and gold clasp.",
    longDescription:
      "A pocket-sized bear crocheted with premium yarn for a plush, cozy feel. Finished with a sturdy gold clasp so it’s ready for keys, bags, or zipper pulls.",
    rating: 4.9,
    reviewCount: 128,
    image: {
      src: "/products/crochet-bear-keychain.png",
      alt: "Handmade crochet bear keychain with soft pink background and gold clasp",
      width: 1200,
      height: 1200,
    },
    highlights: ["Gift-ready packaging", "Soft premium yarn", "Sturdy clasp"],
  },
  {
    slug: "strawberry-yarn-charm",
    name: "Strawberry Yarn Charm",
    priceUsd: 12,
    shortDescription: "Sweet strawberry charm for bags, pouches, and keys.",
    longDescription:
      "A cute strawberry charm with embroidered seeds and a leafy top. Lightweight, durable, and perfect for adding a pop of sweetness to your everyday essentials.",
    rating: 4.8,
    reviewCount: 96,
    image: {
      src: "/products/strawberry-yarn-charm.png",
      alt: "Handmade crochet strawberry charm keychain on light pink background",
      width: 1200,
      height: 1200,
    },
    highlights: ["Lightweight", "Neat stitching", "Perfect gift add-on"],
  },
  {
    slug: "tulip-crochet-keychain",
    name: "Tulip Crochet Keychain",
    priceUsd: 9,
    shortDescription: "A delicate tulip bloom, crocheted petal by petal.",
    longDescription:
      "A minimal tulip keychain inspired by spring bouquets. Clean silhouette, soft touch, and an easy match for backpacks, tote bags, and pencil cases.",
    rating: 4.9,
    reviewCount: 74,
    image: {
      src: "/products/tulip-crochet-keychain.png",
      alt: "Handmade crochet tulip keychain with rose pink petals on soft white background",
      width: 1200,
      height: 1200,
    },
    highlights: ["Smooth finish", "Cute boutique style", "Great for students"],
  },
  {
    slug: "bunny-plush-charm",
    name: "Bunny Plush Charm",
    priceUsd: 15,
    shortDescription: "Fluffy bunny charm with long ears and gentle vibe.",
    longDescription:
      "A plush-style bunny charm made for cozy aesthetics. Designed with rounded edges and soft textures, plus a secure clasp for everyday use.",
    rating: 5.0,
    reviewCount: 63,
    image: {
      src: "/products/bunny-plush-charm.png",
      alt: "Handmade crochet bunny plush charm keychain photographed on pink gradient background",
      width: 1200,
      height: 1200,
    },
    highlights: ["Super soft texture", "Iconic long ears", "Handmade with love"],
  },
  {
    slug: "cat-paw-crochet-accessory",
    name: "Cat Paw Crochet Accessory",
    priceUsd: 10,
    shortDescription: "Tiny paw pad details with a satisfying squishy look.",
    longDescription:
      "A kawaii-inspired cat paw accessory featuring embroidered paw pads and a glossy clasp. Ideal for keyrings, phone straps, and mini pouches.",
    rating: 4.8,
    reviewCount: 82,
    image: {
      src: "/products/cat-paw-crochet-accessory.png",
      alt: "Handmade crochet cat paw accessory with cute paw pad details",
      width: 1200,
      height: 1200,
    },
    highlights: ["Kawaii look", "Neat embroidery", "Easy to clip on"],
  },
];

export const FEATURED_PRODUCTS = PRODUCTS.slice(0, 5);

export function getProductBySlug(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

