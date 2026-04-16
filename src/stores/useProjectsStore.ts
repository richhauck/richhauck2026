import type { Project, ProjectData } from "#/types/project";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
interface useProjectsStore {
  projects: Project[];
  projectData: Record<string, ProjectData>;
  setProjects: (projects: Project[]) => void;
  setProjectDataById: (id: string, data: ProjectData) => void;
  getProjectDataById: (id: string) => ProjectData | undefined;
}
const storePrefix = "useProjectsStore";
const useProjectsStore = create<useProjectsStore>()(
  devtools(
    (set, get) => ({
      projects: [],
      projectData: {},
      setProjects: (projects) => set({ projects }),
      setProjectDataById: (id, data) =>
        set((state) => ({
          projectData: {
            ...state.projectData,
            [id]: { ...state.projectData[id], ...data },
          },
        })),
      getProjectDataById: (id) => get().projectData[id],
    }),
    { name: `${storePrefix}` },
  ),
);

export default useProjectsStore;
