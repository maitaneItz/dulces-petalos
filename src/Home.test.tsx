import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import product from "./product.json";

describe("Home", () => {
  it("muestra el catálogo de flores", async () => {
    render(<Home />);

    for (const flower of product) {
      expect(await screen.findByText(flower.name)).toBeInTheDocument();
    }
  });

  it("muestra nombre, nombre científico, imagen y precio de cada flor", async () => {
    render(<Home />);

    for (const flower of product) {
      expect(await screen.findByText(flower.name)).toBeInTheDocument();
      expect(await screen.findByText(flower.binomialName)).toBeInTheDocument();
      const flowerImage = await screen.findByRole("img", { name: flower.name });
      expect(flowerImage).toHaveAttribute("src", flower.imgUrl);
      expect(await screen.findByText(flower.price)).toBeInTheDocument();
    }
  });
});
