import React from "react";
import { ThemeProvider, Button, TextField } from "@material-ui/core";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">
        My Primary
      </Button>

      <Button variant="contained" color="secondary">
        My Secondary
      </Button>
    </ThemeProvider>
  );
}
