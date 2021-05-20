import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import product from "./product.json";

describe("Home", () => {
  it("muestra varias flores", async () => {
    render(<Home />);

    product.forEach(async (element) => {
      expect(await screen.findByText(element.name)).toBeInTheDocument();
    });
  });
});
