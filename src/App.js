import React from "react";
import {
  ThemeProvider,
  Button,
  TextField,
  Grid,
  Tooltip,
  Typography
} from "@material-ui/core";

import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={6}>
        <Grid item xs="12">
          <Button variant="contained" size="large" color="primary">
            Start Conversion
          </Button>
        </Grid>

        <Grid item xs="12">
          <Button variant="contained" size="small" color="primary">
            Create VerusID
          </Button>
        </Grid>

        <Grid item xs="12">
          <Button variant="contained" size="small" color="secondary">
            Recover VerusID
          </Button>
        </Grid>

        <Grid item xs="12">
          <TextField label="First Name" />
        </Grid>

        <Grid item xs="12">
          <Tooltip title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat, nibh sed fermentum pellentesque, nulla sem dapibus lorem, eget fermentum dolor urna id felis.">
            <Typography variant="body2" align="center">
              Hover here!
            </Typography>
          </Tooltip>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
