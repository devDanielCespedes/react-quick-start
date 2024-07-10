import FullScreenLoader from "@src/components/FullScreenLoader/FullScreenLoader";
import { useFetchGetUser, useUserState } from "@src/hooks/useUser";
import { enqueueSnackbarError } from "@src/utils/error/apiError";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const HomePage = (): JSX.Element => {
  const { t } = useTranslation(["common", "home"]);

  const {
    user: { id, name },
  } = useUserState();
  const { data: user, error, isFetched, isFetching } = useFetchGetUser({ id });
  const { updateUserState } = useUserState();

  useEffect(() => {
    if (user) {
      updateUserState(user);
    }
  }, [user, updateUserState]);

  useEffect(() => {
    if (error && isFetched) {
      enqueueSnackbarError({
        error,
        message: "Erro:",
        fallbackErrorMessage: t("common:unexpectedError"),
      });
    }
  }, [error, isFetched, t]);

  if (isFetching) {
    return <FullScreenLoader />;
  }

  if (error && isFetched) {
    return <div>Error: {error.message}</div>;
  }

  return <div>{t("home:greeting", { name })}</div>;
};
