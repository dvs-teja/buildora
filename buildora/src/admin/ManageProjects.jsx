import React, { useState, useEffect } from 'react';
import { fetchProjects, deleteProject } from '../api';
import './ManageProjects.css';

const ManageProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch((err) => console.error('Error fetching projects:', err));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteProject(id);
        setProjects((prevProjects) => prevProjects.filter((project) => (project._id || project.id) !== id));
      } catch (err) {
        alert('Failed to delete project.');
        console.error('Delete error:', err);
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
              <th style={{ minWidth: '100px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => {
              const projectId = project._id || project.id;
              return (
                <tr key={projectId}>
                  <td>{project.title}</td>
                  <td>{project.description}</td>
                  <td>
                    <button onClick={() => handleDelete(projectId)} className="delete-btn">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageProjects;
