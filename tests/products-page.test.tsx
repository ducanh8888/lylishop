import { render, screen } from "@testing-library/react";

import ProductsPage from "@/app/products/page";

describe("ProductsPage", () => {
  it("renders one primary page heading", () => {
    render(<ProductsPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: /móc khóa len/i })
    ).toBeInTheDocument();
  });
});
