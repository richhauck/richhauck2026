import { create } from "zustand";
import { devtools } from "zustand/middleware";
interface useMobileStore {
  isMobile: boolean;
  setIsMobile: (isMobile: boolean) => void;
}
const storePrefix = "useMobileStore";
const useMobileStore = create<useMobileStore>()(
  devtools(
    (set) => ({
      isMobile: false,
      setIsMobile: (isMobile) => set({ isMobile }),
    }),
    { name: `${storePrefix}` },
  ),
);

export default useMobileStore;
