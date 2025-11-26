import { create } from "zustand";

const useSignupModalStore = create((set) => ({
  signupIsVisible: false,
  signupModal: () => set((state) => ({ signupIsVisible: !state.signupIsVisible })),
}));

export default useSignupModalStore;