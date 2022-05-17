/** @jest-environment jsdom */

import { screen, render } from "@testing-library/react";
import Navbar from ".";
import { MemoryRouter } from "react-router-dom";

describe("Navbar", () => {
  test("Render", () => {
    render(<Navbar />, { wrapper: MemoryRouter });
    const navbar = screen.getAllByRole("heading");
    expect(navbar).toBeInTheDocument();
  });
});
