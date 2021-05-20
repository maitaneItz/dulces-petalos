import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import product from "./product.json";

describe("Home", () => {
  it("muestra una flor", async () => {
    render(<Home />);

    expect(await screen.findByText("Orquídea")).toBeInTheDocument();
  });

  it("muestra varias flores", async () => {
    render(<Home />);

    product.forEach(async (element) => {
      expect(await screen.findByText(element.name)).toBeInTheDocument();
    });
  });
});
