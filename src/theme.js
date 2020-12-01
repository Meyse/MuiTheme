import { createMuiTheme } from "@material-ui/core";
import { deepPurple, amber } from "@material-ui/core/colors";

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

export default theme;
