import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Navbar } from "@/components/Navbar";

describe("Navbar", () => {
  it("opens the mobile menu sheet", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    expect(screen.queryByText(/order via instagram/i)).not.toBeInTheDocument();

    const openButton = screen.getByRole("button", { name: /open menu/i });
    await user.click(openButton);

    expect(screen.getByText(/order via instagram/i)).toBeInTheDocument();
  });
});

