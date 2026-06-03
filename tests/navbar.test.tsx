import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Navbar } from "@/components/Navbar";

describe("Navbar", () => {
  it("opens the mobile menu", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const trigger = screen.getByLabelText(/mở menu/i);
    const menu = trigger.closest("details");

    expect(menu).not.toBeNull();
    expect(menu).not.toHaveAttribute("open");

    await user.click(trigger);

    expect(menu).toHaveAttribute("open");
    expect(screen.getByText(/nhắn instagram/i)).toBeInTheDocument();
  });
});
