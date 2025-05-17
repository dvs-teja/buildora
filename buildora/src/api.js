// Add a new project
export async function addProject(projectData) {
  const payload = {
    ...projectData,
    screenshots: JSON.stringify(projectData.screenshots),
  };

  const response = await fetch('http://localhost:8080/api/projects', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Failed to submit project');
  }
  return response.json();
}

// Fetch all projects
export async function fetchProjects() {
  const response = await fetch('http://localhost:8080/api/projects');
  if (!response.ok) throw new Error('Failed to fetch projects');
  return response.json();
}

export async function deleteProject(id) {
  const response = await fetch(`http://localhost:8080/api/projects/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete project');
}