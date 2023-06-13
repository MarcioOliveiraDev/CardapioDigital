import { useState } from 'react';
import { FoodData } from '../../interface/FoodData';

interface UpdateModalProps {
  closeModal: () => void;
  item: FoodData;
  handleSubmit: (data: FoodData) => Promise<void>;
}

export function UpdateModal({ closeModal, item, handleSubmit }: UpdateModalProps) {
  const [id, setId] = useState(item.id);
  const [title, setTitle] = useState(item.title);
  const [price, setPrice] = useState(item.price);
  const [image, setImage] = useState(item.image);

  const handleUpdateSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSubmit({ id, title, price, image});
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Atualizar </h2>
        <form onSubmit={handleUpdateSubmit} className="input-container">
          <label>ID:</label>
          <input
            type="number"
            value={id}
            onChange={event => setId(Number(event.target.value))}
            readOnly
          />
          <label>Title:</label>
          <input value={title} onChange={event => setTitle(event.target.value)} />
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={event => setPrice(Number(event.target.value))}
          />
          <label>Image URL:</label>
          <input value={image} onChange={event => setImage(event.target.value)} />
          <button type="submit" className="btn-secondary">
            Atualizar
          </button>
        </form>
      </div>
    </div>
  );
}