import React from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectList from './pages/ProjectList'; // <-- Import ProjectList
import Navbar from './components/Navbar';

import AdminLogin from './admin/AdminLogin';
import AdminLayout from './admin/AdminLayout';
import AdminDashboard from './admin/AdminDashboard';
import AddProject from './admin/AddProject';
import ManageProjects from './admin/ManageProjects';
import Analytics from './admin/Analytics';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* User Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectList />} /> {/* <-- Add this line */}

        {/* Admin Login */}
        <Route path="/admin" element={<AdminLogin />} />

        {/* Admin Dashboard with nested routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" index element={<AdminDashboard />} />
          <Route path="add-project" element={<AddProject />} />
          <Route path="manage-projects" element={<ManageProjects />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
