export const fetchProjects = async (): Promise<string[]> => {
  const response = await fetch("projects/projects.json");
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  const data = await response.json();
  return data;
};
