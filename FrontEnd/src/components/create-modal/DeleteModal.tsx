import { useState } from 'react';

interface DeleteModalProps {
  closeModal: () => void;
  id: number;
  handleDelete: (id: number) => Promise<void>;
}

export function DeleteModal({ closeModal, id,  handleDelete }: DeleteModalProps) {
  
  const handleDeleteSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await handleDelete(id);
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Deletar item</h2>
        <p>Tem certeza de que deseja deletar o item com ID {id}?</p>
        <button onClick={handleDeleteSubmit} className="btn-secondary">Deletar</button>
        <button onClick={closeModal} className="btn-primary">Cancelar</button>
      </div>
    </div>
  );
}