import React from "react";
import { CircularProgress, Box } from "@mui/material";
import { styles } from "./styles";

const FullScreenLoader: React.FC = () => {
  return (
    <Box sx={styles}>
      <CircularProgress />
    </Box>
  );
};

export default FullScreenLoader;
