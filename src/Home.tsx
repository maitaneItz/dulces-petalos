import React, { useEffect, useState } from "react";
import { getProduct } from "./getProduct";

interface Flower {
  id: string;
  name: string;
  binomialName: string;
  imgUrl: string;
  price: string;
}

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
