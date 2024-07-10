import { UserRoleSchema } from "@src/store/user/userSchema";
import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().email("Invalid email address"),
  password: z.string(),
});

export type LoginInput = z.infer<typeof loginSchema>;

export const loginResponseSchema = z.object({
  data: z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
    role: UserRoleSchema,
    isActive: z.boolean(),
    createdAt: z.string(),
  }),
  access_token: z.string(),
  token_type: z.string(),
});

export type LoginResponse = z.infer<typeof loginResponseSchema>;
