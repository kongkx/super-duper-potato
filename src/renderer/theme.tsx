import { createTheme } from "@mui/material/styles";

// Create a Material-UI theme instance
// https://mui.com/customization/theming/
const primary = "#1976d2";

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    // secondary: {
    //   main: "#9575CD",
    // },
  },
  typography: {
    fontWeightMedium: 600,
    fontSize: 16,
    h1: {
      fontSize: "2.2rem",
      fontWeight: 400,
      color: primary,
    },
    h3: {
      color: primary,
    },
  },
});

export default theme;
