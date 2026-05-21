import { render, screen } from "@testing-library/react";

import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";
import { formatVnd } from "@/lib/format";

describe("ProductCard", () => {
  it("renders product info and links to product page", () => {
    const product = PRODUCTS[0];
    render(<ProductCard product={product} />);

    expect(screen.getByRole("heading", { name: product.name })).toBeInTheDocument();
    const expected = formatVnd(product.priceVnd).replace(/\u00a0/g, " ");
    expect(
      screen.getByText((_, node) => (node?.textContent ?? "").replace(/\u00a0/g, " ") === expected)
    ).toBeInTheDocument();

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/products/${product.slug}`);
  });
});
