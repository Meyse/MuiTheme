import React from "react";
import {
  ThemeProvider,
  Button,
  TextField,
  Grid,
  Tooltip,
  Typography,
  Container
} from "@material-ui/core";

import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={6}>
        <Grid item xs="12">
          <Button variant="contained" size="large" color="primary">
            Start conversion
          </Button>
        </Grid>

        <Grid item xs="12">
          <Button variant="contained" size="small" color="primary">
            Create VerusID
          </Button>
        </Grid>

        <Grid item xs="12">
          <Button variant="contained" size="small" color="primary" disabled>
            Disabled button
          </Button>
        </Grid>

        <Grid item xs="12">
          <Button variant="text" size="small" color="primary">
            Recover VerusID
          </Button>
        </Grid>

        <Grid item xs="12">
          <Button variant="contained" size="small" color="secondary">
            Deactivate coin
          </Button>
        </Grid>

        <Grid item xs="12">
          <TextField
            label="Profile Name"
            size="medium"
            placeholder="John Doe's Wallet"
            style={{
              width: "300px"
            }}
          />
        </Grid>

        <Grid item xs="12">
          <TextField size="small" placeholder="John Doe's Wallet" />
        </Grid>

        <Grid item xs="12">
          <Tooltip title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat, nibh sed fermentum pellentesque, nulla sem dapibus lorem, eget fermentum dolor urna id felis.">
            <Typography variant="body2" align="center">
              Hover here!
            </Typography>
          </Tooltip>
        </Grid>

        <Container fixed>
          <Typography
            component="div"
            style={{
              backgroundColor: "#3165D4",
              height: "400px",
              width: "400px",
              borderRadius: 10
            }}
          >
            <Typography
              variant="h1"
              style={{
                color: "#fff",
                paddingTop: "70px",
                paddingLeft: "40px",
                maxWidth: "300px"
              }}
            >
              Welcome to Verus, where you are self-sovereign.
            </Typography>
            <Typography
              variant="body1"
              style={{
                color: "#fff",
                opacity: "0.83",
                paddingLeft: "40px",
                paddingTop: "20px",
                maxWidth: "250px"
              }}
            >
              Discover and enjoy what Verus and its ecosystem has to offer.
            </Typography>
          </Typography>
        </Container>
      </Grid>
    </ThemeProvider>
  );
}
