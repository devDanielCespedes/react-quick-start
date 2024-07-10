import { SxProps } from "@mui/system";

export const containerStyles: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: {
    lg: "flex-start",
  },
  alignItems: "center",
  gap: 5,
  height: "100vh",
  paddingTop: {
    lg: 10,
  },
};

export const logoStyles: SxProps = {
  width: {
    xs: "200px",
    sm: "250px",
    md: "300px",
  },
  height: {
    xs: "200px",
    sm: "250px",
    md: "300px",
  },
};
