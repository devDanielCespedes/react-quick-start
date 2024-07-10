import { z } from "zod";

export const loadingStateSchema = z.object({
  isLoading: z.boolean(),
  showLoading: z.function().args().returns(z.void()),
  hideLoading: z.function().args().returns(z.void()),
});

export type LoadingState = z.infer<typeof loadingStateSchema>;
