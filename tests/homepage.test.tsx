import { render, screen } from "@testing-library/react";

import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders the hero headline and key sections", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { level: 1, name: /móc khóa len handmade cute/i })
    ).toBeInTheDocument();

    expect(screen.getAllByRole("link", { name: /nhắn zalo/i }).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: /xem cẩm nang/i })).toBeInTheDocument();

    // Sections present
    expect(document.querySelector("#featured")).toBeTruthy();
    expect(document.querySelector("#why")).toBeTruthy();
    expect(document.querySelector("#gallery")).toBeTruthy();
    expect(document.querySelector("#faq")).toBeTruthy();
    expect(document.querySelector("#order")).toBeTruthy();
  });
});
