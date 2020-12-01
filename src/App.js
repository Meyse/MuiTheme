import React from "react";
import { ThemeProvider, Button } from "@material-ui/core";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        Click Me!
      </Button>
    </ThemeProvider>
  );
}
