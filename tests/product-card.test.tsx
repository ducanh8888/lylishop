import { render, screen } from "@testing-library/react";

import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";

describe("ProductCard", () => {
  it("renders product info and links to product page", () => {
    const product = PRODUCTS[0];
    render(<ProductCard product={product} />);

    expect(screen.getByRole("heading", { name: product.name })).toBeInTheDocument();
    expect(screen.getByText(`$${product.priceUsd}`)).toBeInTheDocument();

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/products/${product.slug}`);
  });
});

