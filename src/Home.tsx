import React, { useEffect, useState } from "react";

export function Home() {
  const [product, setProduct] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    fetch("https://dulces-petalos.herokuapp.com/api/product")
      .then((response) => response.json())
      .then(setProduct);
  }, []);

  return (
    <>
      {product.map((flower) => (
        <p key={`${flower.id}${flower.name}`}>{flower.name}</p>
      ))}
    </>
  );
}
