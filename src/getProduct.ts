import { Flower } from "./Flower";

export function getProduct(): Promise<Flower[]> {
  return fetch("https://dulces-petalos.herokuapp.com/api/product").then(
    (response) => response.json()
  );
}
