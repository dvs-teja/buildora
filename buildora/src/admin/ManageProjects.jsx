import React, { useState, useEffect } from 'react';
import { fetchProjects, deleteProject } from '../api';
import './ManageProjects.css';

const ManageProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch(console.error);
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteProject(id);
        setProjects(projects.filter(project => project.id !== id));
      } catch (err) {
        alert('Failed to delete project.');
      }
    }
  };

  return (
    <div className="manage-projects-container">
      <h2>Manage Projects</h2>
      {projects.length === 0 ? (
        <p>No projects to manage.</p>
      ) : (
        <table className="projects-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.title}</td>
                <td>{project.description}</td>
                <td>
                  <button onClick={() => handleDelete(project.id)} className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageProjects;