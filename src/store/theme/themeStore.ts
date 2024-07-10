import { create } from "zustand";
import { PaletteMode } from "@mui/material";
import { ThemeState } from "./themeSchema";

export const useThemeStore = create<ThemeState>((set) => ({
  mode:
    (localStorage.getItem("quick-start-theme-mode") as PaletteMode) || "light",
  toggleColorMode: () =>
    set((state) => {
      const newMode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("quick-start-theme-mode", newMode);
      return { mode: newMode };
    }),
  setMode: (mode: PaletteMode) =>
    set(() => {
      localStorage.setItem("quick-start-theme-mode", mode);
      return { mode };
    }),
}));
