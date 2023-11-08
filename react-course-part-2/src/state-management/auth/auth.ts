import { create } from "zustand";

interface AuthStore {
  user: string;
  login: (username: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: "",
  login: (username) => set(() => ({ user: "youssef.soliman" })),
  logout: () => set(() => ({ user: "" })),
}));

export default useAuthStore;
