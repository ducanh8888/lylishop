import nextConfig from "@/next.config";

describe("Next image config", () => {
  it("allows the image quality values used across the site", () => {
    expect(nextConfig.images?.qualities).toEqual(expect.arrayContaining([55, 58, 60, 75]));
  });
});
