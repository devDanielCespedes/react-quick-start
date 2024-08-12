import { useUserStore } from "@src/store/user/userStore";
import { useFetch, useMutate } from "./useApi";
import {
  GetUserInput,
  GetUserResponse,
  UpdateUserInputMutation,
} from "@src/store/user/userSchema";
import { useLoadingStore } from "@src/store/loading/loadingStore";
import { enqueueSnackbarError } from "@src/utils/error/apiError";
import { enqueueSnackbar } from "notistack";
import { useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

export const useUserState = () => {
  const user = useUserStore((state) => state.user);
  const updateUserState = useUserStore().updateUser;
  return { user, updateUserState };
};

export const useFetchGetUser = ({ id }: GetUserInput) => {
  const { data, ...rest } = useFetch<GetUserResponse>({
    url: `/api/v1/users/${id}`,
    queryOptions: {
      queryKey: ["getUser"],
      enabled: !!id,
      refetchOnWindowFocus: false,
    },
  });
  return { data: data?.data, ...rest };
};

export const useUpdateUserMutation = ({ id }: GetUserInput) => {
  const showLoading = useLoadingStore((state) => state.showLoading);
  const hideLoading = useLoadingStore((state) => state.hideLoading);
  const queryClient = useQueryClient();
  const { t } = useTranslation("common");

  return useMutate<GetUserResponse, UpdateUserInputMutation>({
    url: `/api/v1/users/${id}`,
    method: "PATCH",
    mutationOptions: {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["getUser"],
        });
        enqueueSnackbar("Usuário atualizado com sucesso", {
          variant: "success",
        });
        hideLoading();
      },
      onMutate: () => {
        showLoading();
      },
      onError: (error) => {
        enqueueSnackbarError({
          error,
          message: "Atualização falhou:",
          fallbackErrorMessage: t("unexpectedError"),
        });
        hideLoading();
      },
    },
  });
};
