import { DEFAULT_METADATA } from "@/lib/seo";
import { productJsonLd, websiteJsonLd } from "@/lib/schema";
import { PRODUCTS, getRelatedProducts } from "@/lib/products";
import { SITE } from "@/lib/site";

describe("SEO metadata", () => {
  it("uses the correct metadata base and canonical", () => {
    expect(DEFAULT_METADATA.metadataBase?.toString()).toBe(`${SITE.url}/`);
    expect(DEFAULT_METADATA.alternates?.canonical).toBe("/");
  });

  it("defines OpenGraph and Twitter cards", () => {
    expect(DEFAULT_METADATA.openGraph?.title).toBe(SITE.title);
    expect(DEFAULT_METADATA.openGraph?.images?.length).toBeGreaterThan(0);
    expect(DEFAULT_METADATA.twitter?.card).toBe("summary_large_image");
  });

  it("uses the Google Search Console verification code without meta tag prefix", () => {
    expect(DEFAULT_METADATA.verification?.google).toBe(SITE.google.searchConsoleVerification);
    expect(DEFAULT_METADATA.verification?.google).not.toContain("google-site-verification=");
  });

  it("emits stable Website and Product structured data identifiers", () => {
    expect(websiteJsonLd()).toMatchObject({
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      inLanguage: "vi-VN",
    });

    expect(productJsonLd(PRODUCTS[0])).toMatchObject({
      "@type": "Product",
      "@id": `${SITE.url}/products/${PRODUCTS[0].slug}#product`,
      url: `${SITE.url}/products/${PRODUCTS[0].slug}`,
      offers: {
        "@type": "Offer",
        priceCurrency: "VND",
      },
    });

    expect(productJsonLd(PRODUCTS[0])).not.toHaveProperty("aggregateRating");
  });

  it("uses explicit product entity fields for SEO and semantic related products", () => {
    const product = PRODUCTS[0];
    const schema = productJsonLd(product);
    const relatedProducts = getRelatedProducts(product);

    expect(product.category).toBeTruthy();
    expect(product.tags.length).toBeGreaterThan(0);
    expect(product.material).toContain("Len");
    expect(product.benefits.length).toBeGreaterThan(0);
    expect(product.giftFor.length).toBeGreaterThan(0);
    expect(schema).toMatchObject({
      category: product.category,
      material: product.material,
    });
    expect(relatedProducts).toHaveLength(3);
    expect(relatedProducts.every((item) => item.slug !== product.slug)).toBe(true);
  });
});
