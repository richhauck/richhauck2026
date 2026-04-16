import { fetchProject, fetchProjects } from "#/services/projectsService";
import { useQuery } from "@tanstack/react-query";

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });
};
export const useProject = (projectId: string) => {
  return useQuery({
    queryKey: ["project"],
    queryFn: () => fetchProject(projectId),
  });
};
