import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

export const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: grey[50],
    },
    secondary: {
      main: grey[500],
    },
  },
});

export const Theme = {
  colors: {
    primaryColor: "#9e9e9e",
    secondaryColor: "",
    white: "#ffffff",
    primaryGrey: "#8D8D8D",
    darkBlue: "#15151B",
  },
  fontSize: {
    extraSmall: "1rem",
    small: "1.2rem",
    medium: "1.4rem",
    large: "1.6rem",
    extraLarge: "2rem",
  },
  fontFamily: {},
  fontWeight: {
    normal: 400,
    regular: 500,
    semiBold: 600,
    bold: 700,
    boldest: 900,
  },
};
