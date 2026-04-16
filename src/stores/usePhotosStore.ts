import type { Photo } from "#/types/mediaItem";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
interface usePhotosStore {
  photos: Photo[];
  setPhotos: (photos: Photo[]) => void;
}
const storePrefix = "usePhotosStore";
const usePhotosStore = create<usePhotosStore>()(
  devtools(
    (set) => ({
      photos: [],
      setPhotos: (photos) => set({ photos }),
    }),
    { name: `${storePrefix}` },
  ),
);

export default usePhotosStore;
