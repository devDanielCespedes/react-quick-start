import { LoginPage } from "@src/pages/Login/LoginPage";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { z } from "zod";

const fallbackRedirect = "/home";

export const Route = createFileRoute("/login")({
  validateSearch: z.object({
    redirect: z.string().optional().catch(""),
  }),
  beforeLoad: ({ context, search }) => {
    if (context?.authContext?.isAuthenticated) {
      throw redirect({ to: search.redirect || fallbackRedirect });
    }
  },
  component: LoginPage,
});
