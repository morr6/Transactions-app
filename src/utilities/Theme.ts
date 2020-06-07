import { createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import indigo from "@material-ui/core/colors/indigo";

export const Theme = {
  colors: {
    primaryColor: indigo[600],
    secondaryColor: grey[800],
    white: "#ffffff",
    primaryGrey: "#8D8D8D",
    darkBlue: "#15151B",
  },
  fontSize: {
    extraSmall: "1rem",
    small: "1.2rem",
    medium: "1.4rem",
    large: "2rem",
    extraLarge: "4rem",
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

export const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: Theme.colors.primaryColor,
    },
    secondary: {
      main: Theme.colors.secondaryColor,
    },
  },
});
