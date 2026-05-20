import { DEFAULT_METADATA } from "@/lib/seo";
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
});

