import { SettingsPage } from "@src/pages/Settings/SettingsPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/settings")({
  component: () => <SettingsPage />,
});
