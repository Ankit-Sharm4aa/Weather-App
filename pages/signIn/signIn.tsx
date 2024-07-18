import React from "react";
import "./signIn.css";
import { Button, Paper, Grid, TextField } from "@mui/material";
import WbSunny from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import image from "./images/valentin-muller-bWtd1ZyEy6w-unsplash.jpg";
import Stack from "@mui/material/Stack";
import Link from "next/link";

function SignIn() {
  return (
    <div className="signin">
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
          <Paper square={false} variant="outlined" className="signIn-form">
            <Grid container className="signInForm-container" gap={8}>
              <Grid item>
                <label htmlFor="Email">Email</label> <br />
                <TextField
                  fullWidth
                  variant="outlined"
                  name="Email"
                  size="small"
                  type="email"
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
                  type="password"
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
              New User? <Link href="/signup">Sign-Up</Link>
            </p>
          </Paper>
        </div>
      </Stack>
    </div>
  );
}

export default SignIn;
