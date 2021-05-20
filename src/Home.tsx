import React from "react";
import product from "./product.json";

export function Home() {
  return (
    <>
      {product.map((flower) => (
        <p key={`${flower.id}${flower.name}`}>{flower.name}</p>
      ))}
    </>
  );
}
