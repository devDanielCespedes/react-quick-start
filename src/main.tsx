import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import { ThemeContextProvider } from "./context/ThemeContext.tsx";
import { closeSnackbar } from "notistack";
import { Button } from "@mui/material";
import "./locales/i18n.ts";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider
          maxSnack={3}
          action={(snackbarId) => (
            <Button onClick={() => closeSnackbar(snackbarId)}>Dismiss</Button>
          )}
        >
          <App />
        </SnackbarProvider>
      </QueryClientProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
