import { ThemeOptions, Palette } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const getDesignTokens = (mode: Palette["mode"]): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#EC9021",
          },
          secondary: {
            main: "#ED665C",
          },
          background: {
            default: "#f0f0f0",
            paper: "#e0e0e0",
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
          warning: {
            main: "#B39400",
          },
          success: {
            main: "#338B27",
          },
          // example of custom color. Please look custom.d.ts as well
          myColor: {
            main: "#4A567E",
          },
        }
      : {
          primary: {
            main: "#EC9021",
          },
          secondary: {
            main: "#005247",
          },
          background: {
            default: "#2F4858",
            paper: "#4A567E",
          },
          text: {
            primary: "#ffffff",
            secondary: grey[500],
          },
          warning: {
            main: "#B39400",
          },
          success: {
            main: "#338B27",
          },
          // example of custom color. Please look custom.d.ts as well
          myColor: {
            main: "#4A567E",
          },
        }),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: mode === "light" ? grey[900] : "#ffffff",
          "&.MuiButton-contained": {
            color: "#ffffff",
          },
        },
      },
    },
  },
});

export { getDesignTokens };
