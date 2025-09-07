import React from 'react';
import Category from './Category';
import useDashboardStore from '../store/dashboardStore'; // Import our store!
import './Dashboard.css';

const Dashboard = () => {
  // Get the 'categories' state directly from our store
  const categories = useDashboardStore((state) => state.categories);

  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <h1>CNAPP Dashboard</h1>
        {/* We will add the buttons here later */}
      </header>
      <div className="categories-container">
        {/* The component now renders data from the live store */}
        {categories.map(category => (
          <Category
            key={category.id}
            id={category.id} // Pass down the category ID
            title={category.categoryTitle}
            widgets={category.widgets}
          />
        ))}
      </div>
    </main>
  );
};

export default Dashboard;