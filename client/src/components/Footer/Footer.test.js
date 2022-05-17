/** @jest-environment jsdom */

import { screen, render } from "@testing-library/react";
import Footer from ".";
import { MemoryRouter } from "react-router-dom";

describe("Navbar", () => {
  test("Renders the Footer", () => {
    render(<Footer />, { wrapper: MemoryRouter });
    const footer = screen.getAllByRole("footer");
    expect(footer).toBeInTheDocument();
  });
});
