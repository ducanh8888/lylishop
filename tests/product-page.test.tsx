import { render, screen } from "@testing-library/react";

import ProductPage from "@/app/products/[slug]/page";
import { PRODUCTS } from "@/lib/products";

describe("ProductPage", () => {
  it("renders the product order flow and primary contact CTA", async () => {
    const product = PRODUCTS[0];
    const ui = await ProductPage({
      params: Promise.resolve({ slug: product.slug }),
    });

    render(ui);

    expect(
      screen.getByRole("heading", {
        name: new RegExp(`Đặt ${product.name} qua tin nhắn trong 3 bước`, "i"),
      })
    ).toBeInTheDocument();
    expect(screen.getByText("Chọn mẫu, màu và số lượng")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /nhắn zalo để đặt hàng/i })).toHaveAttribute(
      "href",
      "https://zalo.me/0356839196"
    );
  });
});
