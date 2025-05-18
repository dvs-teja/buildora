const BASE_URL = 'https://buildora-4.onrender.com';

// Add a new project
export async function addProject(projectData) {
  const payload = {
    ...projectData,
    screenshots: JSON.stringify(projectData.screenshots),
  };

  const response = await fetch(`${BASE_URL}/api/projects`, {
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
  const response = await fetch(`${BASE_URL}/api/projects`);
  if (!response.ok) throw new Error('Failed to fetch projects');
  return response.json();
}

// Delete a project by ID
export async function deleteProject(id) {
  const response = await fetch(`${BASE_URL}/api/projects/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete project');
}
