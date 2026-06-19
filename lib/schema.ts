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

export function homePageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE.url}/#webpage`,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    inLanguage: "vi-VN",
    isPartOf: {
      "@id": websiteId,
    },
    about: {
      "@id": organizationId,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE.url}${SITE.ogImage}`,
      width: 1200,
      height: 630,
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
  const images = product.images ?? [product.image];

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: product.name,
    description: product.longDescription,
    url,
    image: images.map((image) => `${SITE.url}${image.src}`),
    sku: product.slug,
    category: "Móc khóa len handmade",
    material: "Len mềm",
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Kiểu sản phẩm",
        value: "Móc khóa len handmade",
      },
      {
        "@type": "PropertyValue",
        name: "Kỹ thuật",
        value: "Crochet",
      },
    ],
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
    name: "Danh sách sản phẩm len handmade",
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

export function collectionPageJsonLd({
  name,
  description,
  url,
  products,
  keywords,
}: {
  name: string;
  description: string;
  url: string;
  products: Product[];
  keywords: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    name,
    description,
    url,
    inLanguage: "vi-VN",
    isPartOf: {
      "@id": websiteId,
    },
    publisher: {
      "@id": organizationId,
    },
    about: keywords.map((keyword) => ({
      "@type": "Thing",
      name: keyword,
    })),
    mainEntity: {
      "@type": "ItemList",
      name,
      itemListElement: products.map((p, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "Product",
          "@id": `${SITE.url}/products/${p.slug}#product`,
          name: p.name,
          url: `${SITE.url}/products/${p.slug}`,
          image: `${SITE.url}${p.image.src}`,
          offers: {
            "@type": "Offer",
            priceCurrency: "VND",
            price: p.priceVnd.toString(),
            availability: "https://schema.org/InStock",
          },
        },
      })),
    },
  } as const;
}

export function articleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  keywords,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  keywords: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: title,
    description,
    url,
    inLanguage: "vi-VN",
    datePublished,
    dateModified,
    keywords,
    image: [`${SITE.url}${SITE.ogImage}`],
    isPartOf: {
      "@id": websiteId,
    },
    author: {
      "@id": organizationId,
    },
    publisher: {
      "@id": organizationId,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  } as const;
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  } as const;
}
