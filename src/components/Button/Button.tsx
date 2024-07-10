import React from "react";
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";
import { styles } from "./styles";

const Button = React.forwardRef<HTMLButtonElement, LoadingButtonProps>(
  (props, ref) => {
    return <LoadingButton sx={styles} {...props} ref={ref} />;
  }
);

Button.displayName = "Button";

export { Button };
