import React, { ChangeEvent, useEffect, useState } from "react";
import { Flower } from "../models/Flower";
import { getProduct } from "../services/getProduct";

export function Home() {
  const [product, setProduct] = useState<Flower[]>([]);
  const [filter, setFilter] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    getProduct().then(setProduct).finally(() => {setLoading(false)});
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  }

  const filterFlowers = (flower: Flower) => flower.name.includes(filter);

  if(loading) {
    return(
      <p>Cargando...</p>
    )
  }

  return (
    <>
      <input type="text" aria-label="filtro" onChange={handleChange}/>
      {product.filter(filterFlowers).map((flower) => (
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
