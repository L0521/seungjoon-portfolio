import { create } from "zustand";

interface ActivityState {
  activityDetailId: string | null;
  setActivityDetailId: (id: string | null) => void;
}

export const useActivityStore = create<ActivityState>((set) => ({
  activityDetailId: null,
  setActivityDetailId: (id) => set({ activityDetailId: id }),
}));
