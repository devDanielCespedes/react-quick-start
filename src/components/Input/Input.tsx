import React from "react";
import { TextFieldProps, TextField } from "@mui/material";
import { styles } from "./styles";

const Input = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    return <TextField sx={styles} {...props} inputRef={ref} />;
  }
);

Input.displayName = "Input";

export { Input };
