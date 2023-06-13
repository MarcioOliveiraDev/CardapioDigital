import "./card.css";


import { useState } from 'react';

interface CardProps {
    id: number,
    price: number,
    title: string,
    image: string,
    handleUpdate: (id: number) => void;
    handleDelete: (id: number) => void;
}
export function Card({
  id,
  price,
  image,
  title,
  handleUpdate,
  handleDelete,
}: CardProps) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>
        <b>Valor: R$ </b>
        {price}
      </p>
      <button className="update-button" onClick={() => handleUpdate(id)}>Atualizar</button>
      <button className="delete-button" onClick={() => handleDelete(id)}>Deletar</button>
      
    </div>
  );
}
