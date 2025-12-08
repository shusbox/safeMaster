import { create } from "zustand";

const useUserStore = create((set) => ({
  usernameStore: "",
  setUsernameStore: (value) => set({ usernameStore: value }),
}));

export default useUserStore;