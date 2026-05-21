import { DEFAULT_METADATA } from "@/lib/seo";
import { productJsonLd, websiteJsonLd } from "@/lib/schema";
import { PRODUCTS } from "@/lib/products";
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
  });
});
