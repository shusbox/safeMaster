import { create } from "zustand";

export const useModalStore = create((set) => ({
  isVisible: false,
  modal: () => set((state) => ({ isVisible: !state.isVisible })),
}));