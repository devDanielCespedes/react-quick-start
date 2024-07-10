import { Box, Button, ButtonGroup, IconButton } from "@mui/material";
import { useAuthStore } from "@src/store/auth//authStore";
import { useLoadingStore } from "@src/store/loading/loadingStore";
import { useThemeStore } from "@src/store/theme/themeStore";
import {
  createFileRoute,
  Outlet,
  redirect,
  useRouter,
} from "@tanstack/react-router";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/_auth")({
  beforeLoad: ({ context, location }) => {
    if (!context.authContext.isAuthenticated) {
      throw redirect({
        to: "/login",
        search: {
          // Use the current location to power a redirect after login
          // (Do not use `router.state.resolvedLocation` as it can
          // potentially lag behind the actual current location)
          redirect: location.href,
        },
      });
    }
    return {
      isAuthenticated: context?.authContext?.isAuthenticated,
      token: context?.authContext?.token,
    };
  },
  component: AuthLayout,
});

function AuthLayout() {
  const logout = useAuthStore((state) => state.logout);
  const showLoading = useLoadingStore((state) => state.showLoading);
  const hideLoading = useLoadingStore((state) => state.hideLoading);
  const themeMode = useThemeStore((state) => state.mode);
  const toggleColorMode = useThemeStore((state) => state.toggleColorMode);
  const router = useRouter();
  const navigate = Route.useNavigate();
  const { i18n, t } = useTranslation("common");

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };

  const handleNavigateToSettings = () => {
    navigate({ to: "/settings" });
  };

  const handleNavigateToHome = () => {
    navigate({ to: "/home" });
  };

  const handleLogout = () => {
    showLoading();
    logout();
    router.invalidate().finally(() => {
      hideLoading();
      navigate({ to: "/login" });
    });
  };

  return (
    <div className="p-2 h-full">
      <h1>Authenticated Route</h1>
      <p>This route's content is only visible to authenticated users.</p>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: 3,
        }}
      >
        {themeMode} mode
        <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
          {themeMode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        <Button onClick={() => changeLanguage("pt")}>pt</Button>
        <Button onClick={() => changeLanguage("en")}>en</Button>
      </Box>

      <ButtonGroup>
        <Button onClick={handleNavigateToHome} variant="contained">
          {t("home")}
        </Button>
        <Button onClick={handleNavigateToSettings} variant="contained">
          {t("settings")}
        </Button>

        <Button onClick={handleLogout} variant="contained">
          {t("logout")}
        </Button>
      </ButtonGroup>

      <hr />
      <Outlet />
    </div>
  );
}
