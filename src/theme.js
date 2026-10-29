// src/theme.js
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    secondary: { main: "#90caf9" },
    background: { default: "#f5f5f5" },
    text: { primary: "#000" },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    secondary: { main: "#1976d2" },
    background: { default: "#121212" },
    text: { primary: "#fff" },
  },
});
