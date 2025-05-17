import React from 'react';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1>Welcome to the Admin Dashboard</h1>
      
      <div className="dashboard-options">
        <h2>Manage Your Content</h2>
        <ul>
          <li>
            <Link to="/admin/dashboard/manage-projects">Manage Projects</Link>
          </li>
          <li>
            <Link to="/admin/dashboard/manage-users">Manage Users</Link>
          </li>
          <li>
            <Link to="/admin/dashboard/reports">View Reports</Link>
          </li>
        </ul>
      </div>

      <div className="dashboard-stats">
        <h2>Dashboard Stats</h2>
        <div className="stats-card">
          <h3>Total Projects</h3>
          <p>25</p> {/* This would be dynamic, just a placeholder */}
        </div>
        <div className="stats-card">
          <h3>Total Users</h3>
          <p>200</p> {/* This would be dynamic, just a placeholder */}
        </div>
        <div className="stats-card">
          <h3>Total Revenue</h3>
          <p>$5000</p> {/* This would be dynamic, just a placeholder */}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
