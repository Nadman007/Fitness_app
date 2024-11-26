import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // Black for primary elements
    },
    secondary: {
      main: "#FFFFFF", // White for secondary elements
    },
    background: {
      default: "#F5F5F5", // Off-white background for the app
      paper: "#B3B3B3", // Grey background for paper-like elements
    },
    text: {
      primary: "#000000", // Black text for primary content
      secondary: "#333333", // Darker grey text for secondary content
    },
  },
  typography: {
    fontFamily: "Orbitron, Arial", // Custom typography
  },
});

export default theme;
