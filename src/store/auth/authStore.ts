import { create } from "zustand";
import { AuthState } from "./authSchema";

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: !!localStorage.getItem("token"),
  token: localStorage.getItem("token"),
  login: (token) => {
    localStorage.setItem("token", token);
    set({ isAuthenticated: true, token });
  },
  logout: async () => {
    localStorage.removeItem("token");
    set({ isAuthenticated: false, token: null });
  },
}));
