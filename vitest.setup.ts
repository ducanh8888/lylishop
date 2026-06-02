import "@testing-library/jest-dom/vitest";
import React from "react";
import { vi } from "vitest";

vi.mock("next/image", () => {
  return {
    default: (props: any) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { src, alt, fill, sizes, priority, quality, placeholder, blurDataURL, ...rest } =
        props;
      const resolvedSrc = typeof src === "string" ? src : src?.src ?? "";
      return React.createElement("img", { src: resolvedSrc, alt: alt ?? "", ...rest });
    },
  };
});

vi.mock("next/link", () => {
  return {
    default: ({ href, children, ...props }: any) =>
      React.createElement(
        "a",
        { href: typeof href === "string" ? href : href?.pathname ?? "#", ...props },
        children
      ),
  };
});

if (!window.matchMedia) {
  // Basic matchMedia polyfill for components that check media queries.
  window.matchMedia = ((query: string) => {
    return {
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    } as any;
  }) as any;
}

if (!("IntersectionObserver" in window)) {
  class IO {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }
  // @ts-expect-error - test polyfill
  window.IntersectionObserver = IO;
}
