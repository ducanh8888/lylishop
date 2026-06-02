import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Navbar } from "@/components/Navbar";

describe("Navbar", () => {
  it("opens the mobile menu sheet", async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    expect(screen.queryByText(/nhắn instagram/i)).not.toBeInTheDocument();

    const openButton = screen.getByRole("button", { name: /mở menu/i });
    await user.click(openButton);

    expect(screen.getByText(/nhắn instagram/i)).toBeInTheDocument();
  });
});
