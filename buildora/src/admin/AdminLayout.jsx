import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

import './AdminLayout.css'; // optional styling

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-content">
        {/* Nested routes (e.g. AddProject) will render here */}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
