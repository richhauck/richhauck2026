import type { Project } from "#/types/project";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
interface useProjectsStore {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
}
const storePrefix = "useProjectsStore";
const useProjectsStore = create<useProjectsStore>()(
  devtools(
    (set) => ({
      projects: [],
      setProjects: (projects) => set({ projects }),
    }),
    { name: `${storePrefix}` },
  ),
);

export default useProjectsStore;
