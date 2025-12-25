import { create } from "zustand";

const initialState = {
  activityDetailId: null,
};

interface ActivityState {
  activityDetailId: string | null;
  setActivityDetailId: (id: string | null) => void;
  reset: () => void;
}

export const useActivityStore = create<ActivityState>((set) => ({
  ...initialState,
  setActivityDetailId: (id) => set({ activityDetailId: id }),
  reset: () => set(initialState),
}));
