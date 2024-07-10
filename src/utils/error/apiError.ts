import { AxiosError } from "axios";
import { enqueueSnackbar } from "notistack";
import { CustomApiError, EnqueueSnackbarErrorArgs } from "./apiErrorSchema";

export const enqueueSnackbarError = ({
  error,
  message,
  fallbackErrorMessage,
}: EnqueueSnackbarErrorArgs): void => {
  enqueueSnackbar(
    `${message}: ${(error as AxiosError<CustomApiError>).response?.data?.error.message || fallbackErrorMessage}`,
    { variant: "error", autoHideDuration: 5000 }
  );
};
