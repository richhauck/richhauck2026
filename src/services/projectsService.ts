export const fetchProjects = async (): Promise<string[]> => {
  const response = await fetch("projects/projects.json");
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  const data = await response.json();
  return data;
};
export const fetchProject = async (projectId: string): Promise<any> => {
  const response = await fetch(`projects/${projectId}/data.json`);
  if (!response.ok) {
    throw new Error("Failed to fetch project");
  }
  const data = await response.json();
  return data;
};
