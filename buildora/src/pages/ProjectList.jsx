import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../api';
import './ProjectList.css';

const WHATSAPP_URL = 'https://wa.me/918885630224?text=Hi%20I%20am%20interested%20in%20buying%20your%20project';

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showBuyModal, setShowBuyModal] = useState(false);
  const [buyProject, setBuyProject] = useState(null);

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch(console.error);
  }, []);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setShowBuyModal(false);
    setBuyProject(null);
  };

  const handleBuyClick = (project, e) => {
    e.stopPropagation();
    setBuyProject(project);
    setShowBuyModal(true);
  };

  return (
    <div className="project-list-bg">
      <div className="project-list-container" style={{ maxWidth: 1200, width: "100%", margin: "0 auto", padding: "24px" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: 16, color: "#fff" }}>Available Projects</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
          gap: 28
        }}>
          {projects.length === 0 ? (
            <p style={{ color: "#fff" }}>No projects available.</p>
          ) : (
            projects.map(project => (
              <div
                key={project.id}
                style={{
                  background: "linear-gradient(135deg, #fffbe7 0%, #ffe0ec 100%)",
                  borderRadius: 12,
                  boxShadow: "0 4px 18px rgba(0,0,0,0.08)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  cursor: "pointer",
                  position: "relative"
                }}
                onClick={() => handleCardClick(project)}
              >
                {/* Optional Badge */}
                <div className="badge">Best Seller</div>

                <img
                  src={`http://localhost:8080/uploads/${project.screenshots}`}
                  alt={project.title}
                  style={{ width: "100%", height: 170, objectFit: "cover", background: "#f3f3f3" }}
                />
                <div style={{ padding: "18px 16px 14px 16px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: 8 }}>{project.title}</h3>
                  <p style={{
                    fontSize: "0.98rem",
                    color: "#444",
                    marginBottom: 14,
                    flex: 1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical"
                  }}>{project.description}</p>
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}>
                    <span className="price-tag">Just ₹{project.price}</span>
                    <span style={{ color: "#e67e22", fontWeight: 500 }}>{project.category}</span>
                  </div>
                  <div style={{ marginTop: 14, display: "flex", gap: 10 }}>
                    <button
                      style={{
                        flex: 1,
                        background: "#e67e22",
                        color: "#fff",
                        border: "none",
                        borderRadius: 6,
                        padding: "8px 0",
                        fontWeight: 600,
                        cursor: "pointer"
                      }}
                      onClick={e => { e.stopPropagation(); handleCardClick(project); }}
                    >
                      View Details
                    </button>
                    <button
                      style={{
                        flex: 1,
                        background: "#27ae60",
                        color: "#fff",
                        border: "none",
                        borderRadius: 6,
                        padding: "8px 0",
                        fontWeight: 600,
                        cursor: "pointer"
                      }}
                      onClick={e => handleBuyClick(project, e)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal for project details */}
      {selectedProject && !showBuyModal && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={e => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeModal}>×</button>
            <img
              src={`http://localhost:8080/uploads/${selectedProject.screenshots}`}
              alt={selectedProject.title}
            />
            <div className="project-modal-content">
              <h2>{selectedProject.title}</h2>
              <p><strong>Description:</strong> {selectedProject.description}</p>
              <p><strong>Tech Stack:</strong> {selectedProject.techStack}</p>
              <p><strong>Features:</strong> {selectedProject.features}</p>
              <p><strong>Price:</strong> ₹{selectedProject.price}</p>
              <p><strong>Category:</strong> {selectedProject.category}</p>
              <p><strong>Level:</strong> {selectedProject.level}</p>
              <p><strong>License:</strong> {selectedProject.license}</p>
              <p><strong>Setup Time:</strong> {selectedProject.setupTime}</p>
              <p><strong>What's Included:</strong> {selectedProject.whatIncluded}</p>
              <p><strong>Seller Notes:</strong> {selectedProject.sellerNotes}</p>
              {selectedProject.demoLink && (
                <p>
                  <strong>Demo Link:</strong>{" "}
                  <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                    {selectedProject.demoLink}
                  </a>
                </p>
              )}
              {selectedProject.videoDemo && (
                <p>
                  <strong>Video Demo:</strong>{" "}
                  <a href={selectedProject.videoDemo} target="_blank" rel="noopener noreferrer">
                    {selectedProject.videoDemo}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modal for Buy Now legal clearance */}
      {showBuyModal && buyProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: 500 }}>
            <button className="close-modal-btn" onClick={closeModal}>×</button>
            <h2>Legal Clearance</h2>
            <p style={{ marginTop: 10 }}>
              By proceeding to buy this project, you agree that this project is for <strong>educational purposes only.</strong>  
              You will not use this project for any illegal or unethical activities.
            </p>
            <p style={{ fontWeight: 600, marginTop: 20 }}>
              Many users have successfully purchased and used this project for their learning and development.
            </p>
            <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center' }}>
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#25D366",
                  color: "white",
                  padding: "10px 20px",
                  borderRadius: 6,
                  fontWeight: 700,
                  fontSize: "1rem",
                  textDecoration: "none",
                  gap: 8
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16.67 3A8.69 8.69 0 0 0 12 1.5a8.57 8.57 0 0 0-8.1 6.9A8.51 8.51 0 0 0 5 12.3L3 21l9.2-2.1a8.54 8.54 0 0 0 4.47-6.15Z"></path>
                  <path d="M16 12.6a2 2 0 0 1-2 2"></path>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectList;
