import React from "react";
import "./signIn.css";
import { Button, Paper, Grid, TextField } from "@mui/material";
import WbSunny from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import image from "./images/valentin-muller-bWtd1ZyEy6w-unsplash.jpg";
import Stack from "@mui/material/Stack";
function SignIn() {
  return (
    <Stack direction="row" spacing={20}>
      <div>
        <img src={image.src} className="weather-image"></img>
      </div>
      <div>
        <div className="signin-icon">
          <WbSunny fontSize="large" />
          <NightsStayIcon fontSize="large" />
        </div>
        <h1>Login to your Account</h1>
        <Paper
          square={false}
          variant="outlined"
          sx={{
            height: "440px",
            width: "400px",
            bgcolor: "hsl(240, 58%, 4%)",
            color: "white",
            padding: 2,
            margin: "auto",
            border: "1px solid hsla(60, 100%, 80%, 0.62)",
          }}
        >
          <Grid container sx={{ padding: "50px" }} gap={8}>
            <Grid item>
              <label htmlFor="Email">Email</label> <br />
              <TextField
                fullWidth
                variant="outlined"
                name="Email"
                size="small"
                sx={{
                  border: "3px solid yellow",
                  borderRadius: "4px",
                  input: { color: "white" },
                }}
              />
            </Grid>
            <Grid item>
              <label htmlFor="Password">Password</label>
              <br />
              <TextField
                fullWidth
                variant="outlined"
                name="Password"
                size="small"
                sx={{
                  border: "3px solid yellow",
                  borderRadius: "4px",
                  input: { color: "white" },
                }}
              />
            </Grid>
          </Grid>
          <div className="signin-button">
            <Button
              variant="outlined"
              sx={{
                border: "2px solid yellow",
                padding: "8px 10px ",
                color: "yellow",
              }}
            >
              Login
            </Button>
          </div>
          <p>
            New User? <a href="">Sign-Up</a>
          </p>
        </Paper>
      </div>
    </Stack>
  );
}

export default SignIn;
