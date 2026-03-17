import { create } from "zustand";

const initialState = {
  activityDetailId: null,
  listScrollTrigger: 0,
};

interface ActivityState {
  activityDetailId: string | null;
  listScrollTrigger: number;
  setActivityDetailId: (id: string | null) => void;
  triggerListScroll: () => void;
  reset: () => void;
}

export const useActivityStore = create<ActivityState>((set) => ({
  ...initialState,
  setActivityDetailId: (id) => set({ activityDetailId: id }),
  triggerListScroll: () =>
    set((state) => ({ listScrollTrigger: state.listScrollTrigger + 1 })),
  reset: () => set(initialState),
}));
