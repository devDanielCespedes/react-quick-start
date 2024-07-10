import {
  Palette as PaletteMUI,
  PaletteOptions as PaletteOptionsMUI,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    myColor: PaletteMUI["primary"];
  }
  interface PaletteOptions {
    myColor?: PaletteOptionsMUI["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    myColor: true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    myColor: true;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    myColor: true;
  }
}
