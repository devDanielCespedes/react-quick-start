import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import sadNingja from "@src/assets/ringaNinja/sad-ninja.png";
import { logoStyles } from "./styles";

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate({ to: "/login" });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box component="img" src={sadNingja} alt="Ninja" sx={logoStyles} />
      <Typography variant="h3" component="h1" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        The page you are looking for does not exist.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoHome}>
        Go Back
      </Button>
    </Box>
  );
};
