import FullScreenLoader from "@src/components/FullScreenLoader/FullScreenLoader";
import { useFetchGetUser, useUserState } from "@src/hooks/useUser";
import { enqueueSnackbarError } from "@src/utils/error/apiError";
import { useEffect } from "react";

export const HomePage = (): JSX.Element => {
  const {
    user: { id },
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
      });
    }
  }, [error, isFetched]);

  if (isFetching) {
    return <FullScreenLoader />;
  }

  if (error && isFetched) {
    return <div>Error: {error.message}</div>;
  }

  return <div>Hello, {user?.name}!</div>;
};
