import React from 'react';
import Category from './Category';
import dashboardData from '../dashboardData.json'; // We import our data here!
import './Dashboard.css';

const Dashboard = () => {
  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <h1>CNAPP Dashboard</h1>
        {/* We will add the buttons here later */}
      </header>
      <div className="categories-container">
        {dashboardData.map(category => (
          <Category key={category.id} title={category.categoryTitle} widgets={category.widgets} />
        ))}
      </div>
    </main>
  );
};

export default Dashboard;