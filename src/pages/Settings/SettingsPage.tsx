import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box } from "@mui/material";
import { Input } from "@src/components/Input/Input";
import { containerStyles } from "./styles";
import {
  UpdateUserInputMutation,
  updateUserInputMutationSchema,
} from "@src/store/user/userSchema";
import { useUpdateUserMutation, useUserState } from "@src/hooks/useUser";
import { Button } from "@src/components/Button/Button";

export const SettingsPage = (): JSX.Element => {
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

  return (
    <Box
      component="form"
      sx={containerStyles}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="Name"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <Input
        label="Email"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <Input
        label="Role"
        variant="outlined"
        {...register("role")}
        error={!!errors.role}
        helperText={errors.role?.message}
      />
      <Button type="submit" variant="contained">
        Save
      </Button>
    </Box>
  );
};
