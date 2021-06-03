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
        <div key={`${flower.id}${flower.name}`}>
          <p>{flower.name}</p>
          <p>{flower.binomialName}</p>
          <img alt={flower.name} src={flower.imgUrl} />
          <p>{flower.price}</p>
        </div>
      ))}
    </>
  );
}
