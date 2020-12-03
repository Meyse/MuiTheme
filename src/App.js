import React from "react";
import {
  ThemeProvider,
  Button,
  TextField,
  Grid,
  Tooltip,
  Typography,
  Container,
  Link,
  Zoom,
  Fade
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
          <Tooltip
            TransitionComponent={Zoom}
            title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat, nibh sed fermentum pellentesque, nulla sem dapibus lorem, eget fermentum dolor urna id felis."
          >
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

        <Container fixed>
          <Typography
            component="div"
            style={{
              backgroundColor: "#fff",
              border: "1px solid #272727",
              height: "400px",
              width: "400px",
              padding: "60px",
              marginTop: "100px",
              borderRadius: 10
            }}
          >
            <Typography
              variant="h1"
              style={{
                color: "#272727",
                maxWidth: "300px"
              }}
            >
              Login to my profile
            </Typography>
            <Grid item xs="12">
              <TextField size="small" placeholder="John Doe's Wallet" />
            </Grid>
            <Button
              variant="contained"
              size="large"
              color="primary"
              style={{ width: "350px", align: "center" }}
            >
              Login to profile
            </Button>
            <Typography
              variant="body1"
              style={{
                color: "#000",
                opacity: "0.83",
                paddingLeft: "40px",
                paddingTop: "20px",
                maxWidth: "250px"
              }}
            >
              No profile yet?{" "}
              <Link href="#" underline="always" color="inherit">
                Create one here
              </Link>
            </Typography>
            <Typography
              variant="subtitle1"
              style={{
                color: "#000",
                opacity: "0.83",
                paddingLeft: "40px",
                paddingTop: "90px",
                maxWidth: "250px"
              }}
            >
              Need help? Go to{" "}
              <Link href="#" underline="always" color="inherit">
                support Wiki
              </Link>{" "}
              or interact with our community on{" "}
              <Link href="#" underline="always" color="inherit">
                Discord
              </Link>
            </Typography>
          </Typography>
        </Container>
      </Grid>
    </ThemeProvider>
  );
}
