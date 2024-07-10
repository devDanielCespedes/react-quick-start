import { useLoadingStore } from "@src/store/loading/loadingStore";
import ninjaSwordFlying from "@src/assets/ringaNinja/sword-flying.png";
import { containerStyles, logoStyles } from "./styles";
import { Input } from "@src/components/Input/Input";
import { Button } from "@src/components/Button/Button";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useLoginForm } from "./hooks/useLoginForms";

export const LoginPage = (): JSX.Element => {
  const { t } = useTranslation(["common", "login"]);
  const isLoading = useLoadingStore((state) => state.isLoading);
  const { register, handleSubmit, errors, onSubmit } = useLoginForm();

  return (
    <Box
      component="form"
      sx={containerStyles}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Box component="img" src={ninjaSwordFlying} alt="Ninja" sx={logoStyles} />
      <Input
        label={t("email")}
        variant="outlined"
        {...register("username")}
        error={!!errors.username}
        helperText={errors.username?.message}
        disabled={isLoading}
      />
      <Input
        label={t("password")}
        type="password"
        variant="outlined"
        {...register("password")}
        error={!!errors.password}
        helperText={errors.password?.message}
        disabled={isLoading}
      />
      <Button type="submit" variant="contained" loading={isLoading}>
        {t("login:login")}
      </Button>
    </Box>
  );
};
