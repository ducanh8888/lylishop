import { render, screen } from "@testing-library/react";

import { SkipToContent } from "@/components/SkipToContent";

describe("SkipToContent", () => {
  it("uses a Vietnamese accessible label and points to the main content", () => {
    render(<SkipToContent />);

    expect(
      screen.getByRole("link", { name: /bỏ qua đến nội dung chính/i })
    ).toHaveAttribute("href", "#main");
  });
});
