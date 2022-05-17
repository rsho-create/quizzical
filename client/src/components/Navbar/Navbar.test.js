/** @jest-environment jsdom */

import { screen, render } from "@testing-library/react";
import Navbar from ".";
import { MemoryRouter } from "react-router-dom";

describe("Navbar", () => {
  test("Displays the logo with the correct alt text", () => {
    render(<Header />, { wrapper: MemoryRouter });
    const navbar = screen.getAllByRole("heading");
    expect(navbar).toBeInTheDocument();
    expect(navbar).tohavealt("");
  });
});
