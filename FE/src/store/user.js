import { create } from "zustand";

const useUserStore = create((set) => ({
  usernameStore: "",
  setUsernameStore: (value) => set({ username: value }),
}));

export default useUserStore;