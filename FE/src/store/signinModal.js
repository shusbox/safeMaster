import { create } from "zustand";

const useSigninModalStore = create((set) => ({
  signinIsVisible: false,
  signinModal: () => set((state) => ({ signinIsVisible: !state.signinIsVisible })),
}));

export default useSigninModalStore;