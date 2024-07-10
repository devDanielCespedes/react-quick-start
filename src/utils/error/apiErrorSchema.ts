import { z } from "zod";

export const CustomApiErrorSchema = z.object({
  error: z.object({
    message: z.string(),
    code: z.string(),
    details: z.string(),
  }),
});

export type CustomApiError = z.infer<typeof CustomApiErrorSchema>;

export const enqueueSnackbarErrorArgsSchema = z.object({
  error: z.instanceof(Error),
  message: z.string(),
});

export type EnqueueSnackbarErrorArgs = z.infer<
  typeof enqueueSnackbarErrorArgsSchema
>;

export const enqueueSnackbarErrorSchema = z
  .function()
  .args(enqueueSnackbarErrorArgsSchema)
  .returns(z.void());
