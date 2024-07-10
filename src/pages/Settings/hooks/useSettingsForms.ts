import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateUserMutation, useUserState } from "@src/hooks/useUser";
import {
  UpdateUserInputMutation,
  updateUserInputMutationSchema,
} from "@src/store/user/userSchema";
import { useForm, SubmitHandler } from "react-hook-form";

export const useSettingsForms = () => {
  const {
    user: { id },
  } = useUserState();
  const updateUserMutation = useUpdateUserMutation({ id });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<UpdateUserInputMutation>({
    resolver: zodResolver(updateUserInputMutationSchema),
    defaultValues: {
      name: undefined,
      email: undefined,
      role: undefined,
    },
  });

  const onSubmit: SubmitHandler<UpdateUserInputMutation> = () => {
    const data: UpdateUserInputMutation = {
      email: getValues("email") || undefined,
      name: getValues("name") || undefined,
      role: getValues("role") || undefined,
    };
    updateUserMutation.mutate(data);
  };

  return { register, handleSubmit, errors, onSubmit };
};
