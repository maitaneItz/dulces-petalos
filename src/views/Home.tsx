import React, { useEffect, useState } from "react";
import { Flower } from "../models/Flower";
import { getProduct } from "../services/getProduct";

export function Home() {
  const [product, setProduct] = useState<Flower[]>([]);

  useEffect(() => {
    getProduct().then(setProduct);
  }, []);

  return (
    <>
      {product.map((flower) => (
        <FlowerSummary key={`${flower.id}${flower.name}`} flower={flower} />
      ))}
    </>
  );
}

const FlowerSummary: React.FC<{ flower: Flower }> = ({ flower }) => {
  return (
    <>
      <p>{flower.name}</p>
      <p>{flower.binomialName}</p>
      <img alt={flower.name} src={flower.imgUrl} />
      <p>{flower.price}</p>
    </>
  );
};
