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
  },
  MuiInput: {
    root: {
      top: theme.spacing(2),
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
      backgroundColor: "#000"
    },
    arrow: {
      color: "#000"
    }
  }
};

export default theme;
