import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { FaqSection } from "@/components/sections/FaqSection";
import { FAQ_ITEMS } from "@/lib/faq";

describe("FAQ accordion", () => {
  it("expands an item to reveal the answer", async () => {
    const user = userEvent.setup();
    render(<FaqSection />);

    const first = FAQ_ITEMS[0];
    const trigger = screen.getByRole("button", { name: first.question });
    await user.click(trigger);

    expect(screen.getByText(first.answer)).toBeInTheDocument();
  });
});

