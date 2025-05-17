import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Buildora Logo" className="logo" />
        <h1 className="brand-name">Buildora</h1>
      </div>

      <div className="navbar-right">
        <a href="home">Home</a>
        <a href="about">About</a>
        <a href="/projects">Projects</a>
       

        <div
          className="admin-reveal-zone"
          onMouseEnter={() => setShowAdmin(true)}
          onMouseLeave={() => setShowAdmin(false)}
        >
          {showAdmin && <a href="/admin" className="admin-link">Admin</a>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
