import React from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { getDesignTokens } from "../src/styles/theme";
import type { Preview } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";

const lightTheme = createTheme(getDesignTokens("light"));
const darkTheme = createTheme(getDesignTokens("dark"));

const queryClient = new QueryClient();

const withThemeProvider = (Story, context) => {
  const theme = context.globals.theme === "dark" ? darkTheme : lightTheme;
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={3}>
          <CssBaseline />
          <Story />
        </SnackbarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: lightTheme.palette.background.default },
        { name: "dark", value: darkTheme.palette.background.default },
      ],
    },
  },
  decorators: [withThemeProvider],
  globals: {
    theme: "light",
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        showName: true,
      },
    },
  },
};

export default preview;
