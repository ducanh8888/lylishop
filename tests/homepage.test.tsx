import { render, screen } from "@testing-library/react";

import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders the hero headline and key sections", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { level: 1, name: /tiny handmade gifts/i })
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /order now/i })).toBeInTheDocument();

    // Sections present
    expect(document.querySelector("#featured")).toBeTruthy();
    expect(document.querySelector("#why")).toBeTruthy();
    expect(document.querySelector("#gallery")).toBeTruthy();
    expect(document.querySelector("#reviews")).toBeTruthy();
    expect(document.querySelector("#faq")).toBeTruthy();
    expect(document.querySelector("#order")).toBeTruthy();
  });
});

