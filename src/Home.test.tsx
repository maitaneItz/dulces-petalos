import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import product from "./product.json";

describe("Home", () => {
  it("muestra una flor", () => {
    render(<Home />);

    expect(screen.getByText("Orquídea")).toBeInTheDocument();
  });

  it("muestra varias flores", () => {
    render(<Home />);

    product.forEach((element) => {
      expect(screen.getByText(element.name)).toBeInTheDocument();
    });
  });
});
