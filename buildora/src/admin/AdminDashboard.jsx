import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="dashboard-container">
      <h2>List of Projects</h2>
      <p>These are the projects for sale</p>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={`http://localhost:8080/uploads/${project.screenshots}`} alt="Screenshot" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="desc">{project.description}</p>
              <div className="meta">
                <span>₹{project.price}</span>
                <span>{project.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
