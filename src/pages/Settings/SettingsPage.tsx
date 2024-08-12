import { Box } from "@mui/material";
import { Input } from "@src/components/Input/Input";
import { containerStyles } from "./styles";
import { Button } from "@src/components/Button/Button";
import { useTranslation } from "react-i18next";
import { useSettingsForms } from "./hooks/useSettingsForms";

export const SettingsPage = (): JSX.Element => {
  const { t } = useTranslation("common");
  const { register, handleSubmit, errors, onSubmit } = useSettingsForms();
  console.log("sETTINGS");

  return (
    <Box
      component="form"
      sx={containerStyles}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label={t("name")}
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <Input
        label={t("email")}
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
        {t("save")}
      </Button>
    </Box>
  );
};
