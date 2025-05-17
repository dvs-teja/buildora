import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AdminSidebar.css'; // Optional styling

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any auth tokens or session here if needed
    // localStorage.removeItem('token');
    navigate('/home');
  };

  return (
    <div className="admin-sidebar">
      <h3>Admin Panel</h3>
      <ul>
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/add-project">Add Project</Link></li>
        <li><Link to="/admin/manage-projects">Manage Projects</Link></li>
        <li><Link to="/admin/analytics">Analytics</Link></li>
        <li><Link to="/admin/messages">Messages</Link></li>
        <li><Link to="/admin/users">Users</Link></li>
        <li><Link to="/admin/announcements">Announcements</Link></li>
      </ul>
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminSidebar;
