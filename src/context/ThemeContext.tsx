import { useEffect, useMemo, ReactNode } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  useMediaQuery,
} from "@mui/material";
import { useThemeStore } from "@store/theme/themeStore";
import { getDesignTokens } from "../styles/theme";

const ThemeContextProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const { mode, setMode } = useThemeStore((state) => ({
    mode: state.mode,
    setMode: state.setMode,
  }));

  useEffect(() => {
    if (!localStorage.getItem("quick-start-theme-mode")) {
      setMode(prefersDarkMode ? "dark" : "light");
    }
  }, [prefersDarkMode, setMode]);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export { ThemeContextProvider };
