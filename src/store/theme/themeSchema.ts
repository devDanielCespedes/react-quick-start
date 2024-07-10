import { z } from "zod";

export const themeStateSchema = z.object({
  mode: z.enum(["light", "dark"]),
  toggleColorMode: z.function().returns(z.void()),
  setMode: z
    .function()
    .args(z.enum(["light", "dark"]))
    .returns(z.void()),
});

export type ThemeState = z.infer<typeof themeStateSchema>;
