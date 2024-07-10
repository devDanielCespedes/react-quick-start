import { HomePage } from "@src/pages/Home/HomePage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/home")({
  component: () => <HomePage />,
  beforeLoad: ({ context }) => {
    if (!context?.authContext?.isAuthenticated) {
      throw { to: "/login" };
    }
  },
});
