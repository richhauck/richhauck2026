import { fetchProjects } from "#/services/projectsService";
import { useQuery } from "@tanstack/react-query";

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });
};
