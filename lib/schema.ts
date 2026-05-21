import { SITE } from "@/lib/site";
import type { Product } from "@/lib/products";
import type { FaqItem } from "@/lib/faq";

const organizationId = `${SITE.url}/#organization`;
const websiteId = `${SITE.url}/#website`;

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: SITE.name,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}${SITE.logo}`,
    },
    sameAs: Object.values(SITE.socials),
  } as const;
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: SITE.name,
    url: SITE.url,
    inLanguage: "vi-VN",
    publisher: {
      "@id": organizationId,
    },
  } as const;
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "vi-VN",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.answer,
      },
    })),
  } as const;
}

export function productJsonLd(product: Product) {
  const url = `${SITE.url}/products/${product.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: product.name,
    description: product.longDescription,
    url,
    image: [`${SITE.url}${product.image.src}`],
    sku: product.slug,
    category: "Handmade crochet keychain",
    brand: {
      "@type": "Brand",
      name: SITE.name,
    },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "VND",
      price: product.priceVnd.toString(),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@id": organizationId,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating.toFixed(1),
      reviewCount: product.reviewCount,
    },
  } as const;
}

export function productItemListJsonLd(products: Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured handmade crochet products",
    itemListElement: products.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Product",
        "@id": `${SITE.url}/products/${p.slug}#product`,
        name: p.name,
        url: `${SITE.url}/products/${p.slug}`,
        image: `${SITE.url}${p.image.src}`,
      },
    })),
  } as const;
}
