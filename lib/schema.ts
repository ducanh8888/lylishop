import { SITE } from "@/lib/site";
import type { Product } from "@/lib/products";
import type { FaqItem } from "@/lib/faq";

const organizationId = `${SITE.url}/#organization`;
const websiteId = `${SITE.url}/#website`;
const socialProfiles = [
  SITE.socials.facebook,
  SITE.socials.tiktok,
  SITE.socials.instagram,
  SITE.socials.zalo,
];

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
    sameAs: socialProfiles,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phone,
      email: SITE.email,
      contactType: "customer service",
      availableLanguage: ["vi-VN"],
      areaServed: "VN",
    },
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

function productUrl(product: Product) {
  return `${SITE.url}/products/${product.slug}`;
}

function productOfferJsonLd(product: Product) {
  const url = productUrl(product);

  return {
    "@type": "Offer",
    url,
    priceCurrency: "VND",
    price: product.priceVnd.toString(),
    availability: "https://schema.org/InStock",
  } as const;
}

function productListItemJsonLd(product: Product) {
  const url = productUrl(product);

  return {
    "@type": "Product",
    "@id": `${url}#product`,
    name: product.name,
    description: product.shortDescription,
    url,
    image: [`${SITE.url}${product.image.src}`],
    category: product.category,
    brand: {
      "@type": "Brand",
      name: SITE.name,
    },
    offers: productOfferJsonLd(product),
  } as const;
}

export function productJsonLd(product: Product) {
  const url = productUrl(product);
  const images = product.images ?? [product.image];

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: product.name,
    description: product.longDescription,
    url,
    image: images.map((image) => `${SITE.url}${image.src}`),
    category: product.category,
    material: product.material,
    brand: {
      "@type": "Brand",
      name: SITE.name,
    },
    offers: productOfferJsonLd(product),
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
      item: productListItemJsonLd(p),
    })),
  } as const;
}

export function collectionPageJsonLd({
  name,
  description,
  url,
  products,
}: {
  name: string;
  description: string;
  url: string;
  products: Product[];
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
    mainEntity: {
      "@type": "ItemList",
      name,
      itemListElement: products.map((p, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: productListItemJsonLd(p),
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
