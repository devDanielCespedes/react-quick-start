import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "./useLoginMutation";
import { useLoadingStore } from "@src/store/loading/loadingStore";
import { LoginInput, loginSchema } from "@src/pages/Login/loginSchema";

export const useLoginForm = () => {
  const loginMutation = useLoginMutation();
  const isLoading = useLoadingStore((state) => state.isLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginInput> = (data) => {
    loginMutation.mutate(data);
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    isLoading,
  };
};
