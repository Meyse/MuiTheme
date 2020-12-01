import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3165D4"
    },
    secondary: {
      main: "#fff",
      contrastText: "#272727"
    }
  }
});

theme.props = {
  MuiButton: {
    disableElevation: true
  }
};

theme.overrides = {
  MuiButton: {
    root: {
      borderRadius: 0,
      textTransform: "none"
    },
    containedPrimary: {
      "&:hover": {
        backgroundColor: "#265AC8",
        color: "#FFF"
      }
    },
    containedSecondary: {
      fontWeight: 700
    }
  }
};

export default theme;
