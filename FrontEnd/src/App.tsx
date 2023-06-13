import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card';
import { FoodData } from './interface/FoodData';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal';
import { UpdateModal } from './components/create-modal/UpdateModal';
import { DeleteModal } from './components/create-modal/DeleteModal';
import { useFoodDataDelete } from './hooks/useFoodDataMutate';
import { useFoodDataUpdate } from './hooks/useFoodDataMutate';
import { SearchBar } from './components/SearchBar/SearchBar';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [updateData, setUpdateData] = useState({ id: 0, title: '', price: 0, image: '' });
  const [deleteId, setDeleteId] = useState(0);
  const { mutateAsync: updateFoodData } = useFoodDataUpdate();
  const { mutateAsync: deleteFoodData } = useFoodDataDelete();
  const [searchTerm, setSearchTerm] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const handleOpenUpdateModal = (id: number) => {
    const selectedData = data?.find(item => item.id === id);
    if (selectedData) {
      setUpdateData({
        id: selectedData.id as number,
        title: selectedData.title,
        price: selectedData.price,
        image: selectedData.image,
      });
      setIsUpdateModalOpen(true);
    }
  };

  const handleOpenDeleteModal = (id: number) => {
    setDeleteId(id);
    setIsDeleteModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleUpdateSubmit = async (data: FoodData) => {
    try {
      await updateFoodData(data);
      
      handleCloseUpdateModal();
    } catch (error) {
      
      console.error(error);
    }
  };

  const handleDeleteSubmit = async (id: number) => {
    try {
      await deleteFoodData(id);
      
      handleCloseDeleteModal();
    } catch (error) {
      
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>Cardápio UNIT Lanches</h1>
      <div>
        <button style={{
          position: 'fixed',
          right: '20px',
          bottom: '20px',
          padding: '10px 20px',
          fontSize: '1rem',
          border: 'none',
          borderRadius: '5px',
          backgroundColor: 'green',
          color: 'white',
          cursor: 'pointer',
        }} onClick={handleOpenModal}>Novo</button>
      </div>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <div className="card-grid">
        {data?.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())).map(foodData => (
            
          
          <Card
            id={foodData.id as number}
            price={foodData.price}
            title={foodData.title}
            image={foodData.image}
            handleUpdate={() => handleOpenUpdateModal(foodData.id as number)}
            handleDelete={() => handleOpenDeleteModal(foodData.id as number)}
          />
        ))}
      </div>
      {isModalOpen && <CreateModal closeModal={handleCloseModal} />}
      {isUpdateModalOpen && <UpdateModal closeModal={handleCloseUpdateModal} item={updateData} handleSubmit={handleUpdateSubmit} />}
      {isDeleteModalOpen && <DeleteModal closeModal={handleCloseDeleteModal} id={deleteId} handleDelete={handleDeleteSubmit} />}
      
    </div>
  );
}

export default App



