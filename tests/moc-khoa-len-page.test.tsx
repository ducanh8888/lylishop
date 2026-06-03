import { render, screen } from "@testing-library/react";

import MocKhoaLenPage from "@/app/moc-khoa-len/page";
import { PRODUCTS } from "@/lib/products";

describe("MocKhoaLenPage", () => {
  it("renders the keyword-focused collection page", () => {
    render(<MocKhoaLenPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /móc khóa len handmade nhỏ xinh/i,
      })
    ).toBeInTheDocument();

    for (const product of PRODUCTS) {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    }
  });
});
