import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error('Failed to fetch projects:', err));
  }, []);

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">List of Projects</h2>
      <p className="dashboard-subtitle">These are the projects for sale</p>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project._id || project.id}>
            {project.screenshot && (
              <img
                src={`http://localhost:8080/uploads/${project.screenshot}`}
                alt={`${project.title} Screenshot`}
                className="project-image"
              />
            )}
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
