import { z } from "zod";

export const UserRoleSchema = z.enum(["admin", "user"]).optional();
export type UserRole = z.infer<typeof UserRoleSchema>;

// USER STATE SCHEMA
export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email("Invalid email address"),
  role: UserRoleSchema,
  isActive: z.boolean(),
  createdAt: z.string(),
});
export type User = z.infer<typeof userSchema>;

// USER STATE SCHEMA

export const userStateSchema = z.object({
  user: userSchema,
  updateUser: z.function().args(userSchema).returns(z.void()),
});

export type UserState = z.infer<typeof userStateSchema>;

// GET USER INPUT

export const GetUserInputSchema = z.object({
  id: z.number(),
});

export type GetUserInput = z.infer<typeof GetUserInputSchema>;

// GET USER RESPONSE

export const GetUserResponseSchema = z.object({
  data: userSchema,
});

export type GetUserResponse = z.infer<typeof GetUserResponseSchema>;

// UPDATE USER INPUT

export const updateUserInputMutationSchema = z.object({
  name: z.string().optional(),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  role: UserRoleSchema.optional().or(z.literal("")),
});

export type UpdateUserInputMutation = z.infer<
  typeof updateUserInputMutationSchema
>;
