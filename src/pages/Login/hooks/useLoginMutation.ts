import { UseMutationResult } from "@tanstack/react-query";
import { useMutate } from "@hooks/useApi";
import { useRouter } from "@tanstack/react-router";
import { Route as AuthRoute } from "@routes/_auth";
import { useAuthStore } from "@src/store/auth/authStore";
import { useLoadingStore } from "@src/store/loading/loadingStore";
import { LoginInput, LoginResponse } from "@src/pages/Login/loginSchema";
import { enqueueSnackbarError } from "@src/utils/error/apiError";
import { useUserState } from "@src/hooks/useUser";
import { useTranslation } from "react-i18next";

export const useLoginMutation = (): UseMutationResult<
  LoginResponse,
  Error,
  unknown
> => {
  const login = useAuthStore((state) => state.login);
  const showLoading = useLoadingStore((state) => state.showLoading);
  const hideLoading = useLoadingStore((state) => state.hideLoading);
  const { updateUserState } = useUserState();
  const router = useRouter();
  const navigateAuth = AuthRoute.useNavigate();
  const { t } = useTranslation("common");

  return useMutate<LoginResponse, LoginInput>({
    url: "/api/v1/auth/login",
    method: "POST",
    mutationOptions: {
      onSuccess: (response) => {
        login(response.access_token);
        updateUserState(response.data);
        router.invalidate().finally(() => {
          hideLoading();
          navigateAuth({ to: "/home" });
        });
      },
      onMutate: showLoading,
      onError: (error) => {
        enqueueSnackbarError({
          error,
          message: "Login falhou:",
          fallbackErrorMessage: t("unexpectedError"),
        });
        hideLoading();
      },
    },
    axiosConfig: {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  });
};
