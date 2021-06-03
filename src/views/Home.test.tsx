import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import product from "../fixtures/product.json";
import userEvent from "@testing-library/user-event";

describe("Home", () => {
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

  it("filtra las flores en base al nombre", async () => {
    render(<Home />);
    const filtro = await screen.findByRole("textbox", {name: "filtro"});
    userEvent.type(filtro, "Orquídea");

    expect(screen.getByText("Orquídea")).toBeInTheDocument();
    expect(screen.queryByText("Petunia")).not.toBeInTheDocument();
  });

  it("al cargar, muestra un loader", () => {
    render(<Home />);

    expect(screen.getByText(/Cargando/i)).toBeInTheDocument();
  })
});
