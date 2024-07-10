import { create } from "zustand";
import { LoadingState } from "./loginSchema";

export const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,
  showLoading: () => set({ isLoading: true }),
  hideLoading: () => set({ isLoading: false }),
}));
