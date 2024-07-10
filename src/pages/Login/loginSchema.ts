import { userSchema } from "@src/store/user/userSchema";
import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().email("Invalid email address"),
  password: z.string().min(4, "Password must be at least 4 characters"),
});

export type LoginInput = z.infer<typeof loginSchema>;

export const loginResponseSchema = z.object({
  data: userSchema,
  access_token: z.string(),
  token_type: z.string(),
});

export type LoginResponse = z.infer<typeof loginResponseSchema>;
