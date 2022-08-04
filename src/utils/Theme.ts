import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#FFFFFC",
    },
    text: {
      primary: "#11111",
    },
  },
  typography: {
    allVariants: {
      color: "#11111",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#363636",
    },
    text: {
      primary: "#fff",
    },
  },
  typography: {
    allVariants: {
      color: "#fff",
    },
  },
});
