import { rest } from "msw";
import product from "../product.json";

export const handlers = [
  rest.get(
    "https://dulces-petalos.herokuapp.com/api/product",
    (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json(product));
    }
  ),
];
