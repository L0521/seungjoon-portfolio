import { create } from "zustand";

const initialState = {
  projectDetailId: null,
};

interface ProjectState {
  projectDetailId: string | null;
  setProjectDetailId: (id: string | null) => void;
  reset: () => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
  ...initialState,
  setProjectDetailId: (id) => set({ projectDetailId: id }),
  reset: () => set(initialState),
}));
