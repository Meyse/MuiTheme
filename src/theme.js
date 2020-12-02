import { createMuiTheme, ButtonBase } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3165D4"
    },
    secondary: {
      main: "#D4313E",
      contrastText: "#fff"
    }
  }
});

theme.props = {
  MuiButtonBase: {},
  MuiButton: {
    disableElevation: true,
    disableRipple: true,
    disableFocusRipple: true
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
    focusVisible: {
      outline: "2px solid #9CBCFF",
      outlineOffset: "-4px"
    },
    root: {
      borderRadius: 7,
      textTransform: "none",
      transition: "all 0.05s"
    },
    containedPrimary: {
      "&:active": {
        backgroundColor: "#1949AE"
      },
      "&:hover": {
        backgroundColor: "#265AC8",
        color: "#FFF"
      }
    },
    textPrimary: {
      fontWeight: 700,
      color: "#383838",
      "&:active": {
        color: "#000"
      },
      "&:hover": {
        color: "#242424",
        backgroundColor: "transparent"
      }
    },
    containedSecondary: {
      fontWeight: 700,
      color: "#fff",
      "&:active": {
        color: "#fff",
        backgroundColor: "#B71F2B"
      },
      "&:hover": {
        backgroundColor: "#C52835",
        color: "#fff"
      }
    },
    containedSizeLarge: {
      fontSize: "18px",
      fontWeight: "600",
      paddingTop: "12px",
      paddingBottom: "12px"
    },
    containedSizeSmall: {
      borderRadius: "5px",
      fontSize: "14px",
      padding: "5px 18px 5px 18px",
      fontWeight: "700"
    },
    textSizeSmall: {
      borderRadius: "5px",
      fontSize: "14px",
      padding: "5px 18px 5px 18px",
      fontWeight: "700"
    }
  },
  MuiInput: {
    root: {
      paddingLeft: "15px",
      color: "#383838",
      top: theme.spacing(1),
      backgroundColor: "#EEEEEE",
      border: "1px solid #9F9F9F",
      borderRadius: 5,
      padding: theme.spacing(1),
      "&$focused": {
        border: "1px solid #000",
        backgroundColor: "#fff"
      },
      "&:hover": {
        border: "1px solid #000"
      }
    }
  },
  MuiInputLabel: {
    root: {
      fontSize: "1rem",
      color: "#383838",
      "&$focused": {
        color: "#383838"
      }
    }
  },
  MuiTooltip: {
    tooltip: {
      backgroundColor: "#202020",
      padding: theme.spacing(1),
      color: "#fff",
      fontSize: "0.75rem"
    },
    arrow: {
      color: "#202020"
    }
  }
};

export default theme;
