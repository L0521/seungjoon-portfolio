import { create } from "zustand";

interface ProjectState {
  projectDetailId: string | null;
  setProjectDetailId: (id: string | null) => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
  projectDetailId: null,
  setProjectDetailId: (id) => set({ projectDetailId: id }),
}));
