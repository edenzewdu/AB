import React from 'react';
import './adminStyle.css'

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1 className="admin-title">Admin Dashboard</h1>
      </header>
      <div className="admin-content">
        <div className="admin-sidebar">
          <ul className="admin-menu">
            <li className="admin-menu-item">Dashboard</li>
            <li className="admin-menu-item">Users</li>
            <li className="admin-menu-item">Products</li>
            <li className="admin-menu-item">Orders</li>
          </ul>
        </div>
        <div className="admin-main">
          <h2>Welcome, Admin!</h2>
          <p>You have full access to manage the system.</p>
        </div>
      </div>
      <footer className="admin-footer">
        <span>&copy; 2023 Admin Dashboard</span>
      </footer>
    </div>
  );
};

export default AdminDashboard;