import React, { useState } from 'react';
import Category from './Category';
import AddWidgetModal from './AddWidgetModal'; // Import the new modal
import useDashboardStore from '../store/dashboardStore';
import './Dashboard.css';

const Dashboard = () => {
  const categories = useDashboardStore((state) => state.categories);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const handleOpenModal = (categoryId) => {
    setActiveCategoryId(categoryId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveCategoryId(null);
  };

  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <h1>CNAPP Dashboard</h1>
      </header>
      <div className="categories-container">
        {categories.map((category) => (
          <Category
            key={category.id}
            id={category.id}
            title={category.categoryTitle}
            widgets={category.widgets}
            onAddWidget={() => handleOpenModal(category.id)} // Pass down the open modal function
          />
        ))}
      </div>

      {/* Conditionally render the modal */}
      {isModalOpen && (
        <AddWidgetModal
          categoryId={activeCategoryId}
          onClose={handleCloseModal}
        />
      )}
    </main>
  );
};

export default Dashboard;