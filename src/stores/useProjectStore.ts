import { create } from "zustand";

const initialState = {
  projectDetailId: null,
  listScrollTrigger: 0,
};

interface ProjectState {
  projectDetailId: string | null;
  listScrollTrigger: number;
  setProjectDetailId: (id: string | null) => void;
  triggerListScroll: () => void;
  reset: () => void;
}

export const useProjectStore = create<ProjectState>((set) => ({
  ...initialState,
  setProjectDetailId: (id) => set({ projectDetailId: id }),
  triggerListScroll: () =>
    set((state) => ({ listScrollTrigger: state.listScrollTrigger + 1 })),
  reset: () => set(initialState),
}));
