import { create } from "zustand";

const useUserStore = create((set) => ({
  username: "",
  setUsername: (value) => set({ username: value }),
}));

export default useUserStore;