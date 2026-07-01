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

    expect(screen.getByRole("link", { name: /móc khóa len là gì/i })).toHaveAttribute(
      "href",
      "#moc-khoa-len-la-gi"
    );
    expect(screen.getByRole("link", { name: /gợi ý chọn nhanh/i })).toHaveAttribute(
      "href",
      "#goi-y-chon-nhanh"
    );
    expect(screen.getByRole("link", { name: /cách chọn móc khóa len/i })).toHaveAttribute(
      "href",
      "#cach-chon-moc-khoa-len"
    );
    expect(screen.getByRole("link", { name: /móc khóa len làm quà/i })).toHaveAttribute(
      "href",
      "#moc-khoa-len-lam-qua"
    );
    expect(screen.getByRole("link", { name: /phân loại móc khóa len/i })).toHaveAttribute(
      "href",
      "#phan-loai-moc-khoa-len"
    );
    expect(
      screen.getByRole("heading", { name: /chọn móc khóa len theo nhu cầu/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /xem set đồng giá/i })).toHaveAttribute(
      "href",
      "/products/set-moc-khoa-len-10-mau-mix"
    );

    for (const product of PRODUCTS) {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    }
  });
});
