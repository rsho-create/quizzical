/** @jest-environment jsdom */

import { screen } from "@testing-library/react";
import Navbar from "./";
import { MemoryRouter } from "react-router-dom";

const fakeShow = {
  name: "My Little Pony: Making your Mark",
  summary: "A really good show",
  rating: 10,
  image: "",
};

describe("Navbar", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  });
  test("Displays the logo with the correct alt text", () => {
    const navbar = screen.getAllByRole("heading");
    expect(navbar).toBeInTheDocument();
    expect(navbar).tohave("My Little Pony: Making your Mark");
  });
});
