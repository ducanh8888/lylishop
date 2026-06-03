import { render, screen } from "@testing-library/react";
import { FaqSection } from "@/components/sections/FaqSection";
import { FAQ_ITEMS } from "@/lib/faq";

describe("FAQ accordion", () => {
  it("renders native expandable FAQ items", () => {
    render(<FaqSection />);

    const first = FAQ_ITEMS[0];
    const question = screen.getByText(first.question);
    const details = question.closest("details");

    expect(details).not.toBeNull();
    expect(details?.querySelector("summary")).toHaveTextContent(first.question);
    expect(screen.getByText(first.answer)).toBeInTheDocument();
  });
});

