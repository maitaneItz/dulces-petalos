import React from "react";
import { render, screen, waitForElementToBeRemoved } from "@testing-library/react";
import { Home } from "./Home";
import product from "../fixtures/product.json";
import userEvent from "@testing-library/user-event";
import { server } from "../mocks/server";
import { rest } from "msw";

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

  it("al cargar, muestra un loader", async () => {
    render(<Home />);

    expect(screen.getByText(/Cargando/i)).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.queryByText(/Cargando/i))
  })

  it('si hay un error en la obtención de los artículos, muestra un aviso al usuario', async() => {
    server.use(
      rest.get('https://dulces-petalos.herokuapp.com/api/product', (req, res, ctx) => {
        return res(ctx.status(500))
      }),
    )
    render(<Home />);

    expect(await screen.findByText(/ha habido un error/i)).toBeInTheDocument();
  })
});
