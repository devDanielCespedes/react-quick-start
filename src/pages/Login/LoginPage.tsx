import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "@hooks/useLogin";
import { useLoadingStore } from "@store/login/loadingStore";
import { LoginInput, loginSchema } from "./loginSchema";
import ninjaSwordFlying from "@src/assets/ringaNinja/sword-flying.png";
import { containerStyles, logoStyles } from "./styles";
import { Input } from "@src/components/Input/Input";
import { Button } from "@src/components/Button/Button";
import { Box } from "@mui/material";

export const LoginPage = (): JSX.Element => {
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

  return (
    <Box
      component="form"
      sx={containerStyles}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box component="img" src={ninjaSwordFlying} alt="Ninja" sx={logoStyles} />
      <Input
        label="Email"
        variant="outlined"
        {...register("username")}
        error={!!errors.username}
        helperText={errors.username?.message}
        disabled={isLoading}
      />
      <Input
        label="Password"
        type="password"
        variant="outlined"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
        disabled={isLoading}
      />
      <Button type="submit" variant="contained" loading={isLoading}>
        Login
      </Button>
    </Box>
  );
};
