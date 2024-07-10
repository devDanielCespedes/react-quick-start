import { z } from "zod";

export const authStateSchema = z.object({
  isAuthenticated: z.boolean(),
  token: z.string().nullable(),
  login: z.function().args(z.string()).returns(z.void()),
  logout: z.function().args().returns(z.void()),
});

export type AuthState = z.infer<typeof authStateSchema>;
