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
  },
  MuiInputLabel: {
    shrink: true
  },
  MuiInput: {
    disableUnderline: true
  },
  MuiTooltip: {
    arrow: true
  }
};

theme.overrides = {
  MuiButton: {
    root: {
      borderRadius: 7,
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
    },
    containedSizeLarge: {
      fontSize: "18px",
      fontWeight: "700"
    }
  },
  MuiInput: {
    root: {
      top: theme.spacing(1),
      border: "1px solid #EFEFEF",
      padding: theme.spacing(1),
      "&$focused": {
        border: "1px solid #000"
      }
    }
  },
  MuiInputLabel: {
    root: {
      textTransform: "uppercase",
      fontSize: "1rem"
    }
  },
  MuiTooltip: {
    tooltip: {
      backgroundColor: "#fff",
      padding: theme.spacing(1),
      color: "#202020",
      fontSize: "0.75rem",
      boxShadow: "1px 1px 45px 0px rgba(0,0,0,0.21)"
    },
    arrow: {
      color: "#fff"
    }
  }
};

export default theme;
