import { DEFAULT_METADATA } from "@/lib/seo";
import { PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";
import sitemap from "@/app/sitemap";

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

  it("keeps the product model minimal and readable", () => {
    const product = PRODUCTS[0];

    expect(product.category).toBeTruthy();
    expect(product.tags.length).toBeGreaterThan(0);
    expect(product.material).toContain("Len");
    expect(product.benefits.length).toBeGreaterThan(0);
  });

  it("keeps sitemap priorities aligned with the topical silo", () => {
    const entries = sitemap();
    const byUrl = new Map(entries.map((entry) => [entry.url, entry]));

    expect(byUrl.get(`${SITE.url}/`)?.priority).toBe(1);
    expect(byUrl.get(`${SITE.url}/products`)?.priority).toBe(0.9);
    expect(byUrl.get(`${SITE.url}/moc-khoa-len`)?.priority).toBe(0.9);
    expect(byUrl.get(`${SITE.url}/products/${PRODUCTS[0].slug}`)?.priority).toBe(0.72);
    expect(byUrl.get(`${SITE.url}/blog`)?.priority).toBeLessThan(0.5);
  });
});
