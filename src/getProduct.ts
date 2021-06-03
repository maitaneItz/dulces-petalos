export function getProduct() {
  return fetch("https://dulces-petalos.herokuapp.com/api/product").then(
    (response) => response.json()
  );
}
