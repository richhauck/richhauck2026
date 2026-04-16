import type { MediaItem } from "#/types/mediaItem";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
interface useIllustrationsStore {
  illustrations: MediaItem[];
  setIllustrations: (items: MediaItem[]) => void;
}
const useIllustrationsStore = create<useIllustrationsStore>()(
  devtools(
    (set) => ({
      illustrations: [],
      setIllustrations: (items) => set({ illustrations: items }),
    }),
    { name: "useIllustrationsStore" },
  ),
);

export default useIllustrationsStore;
