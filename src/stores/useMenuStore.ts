import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface MenuState {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

export const useMenuStore = create<MenuState>()(
  persist(
    (set) => ({
      activeMenu: "About Me",
      setActiveMenu: (menu) => set({ activeMenu: menu }),
    }),
    {
      name: "menu-storage", // 세션 스토리지 키 이름
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
