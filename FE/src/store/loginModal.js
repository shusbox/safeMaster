import { create } from "zustand";

const useLoginModalStore = create((set) => ({
  loginIsVisible: false,
  loginModal: () => set((state) => ({ loginIsVisible: !state.loginIsVisible })),
}));

export default useLoginModalStore;