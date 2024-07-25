"use client";
import React, { useCallback, useState } from "react";
import "./signIn.css";
import {
  Button,
  Paper,
  Grid,
  TextField,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import WbSunny from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import image from "./images/valentin-muller-bWtd1ZyEy6w-unsplash.jpg";
import Stack from "@mui/material/Stack";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import { yellow } from "@mui/material/colors";

const SignIn: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="signin">
      <img src="" className="weather-image"></img>
      <div className="signin-icon">
        <WbSunny fontSize="large" sx={{ color: yellow[500] }} />
        <NightsStayIcon fontSize="large" color="secondary" />
      </div>
      <h1 className="signIn-heading">Login to your Account</h1>
      <div className="signInForm-wrapper">
        <Paper
          square={false}
          variant="outlined"
          className="signIn-form"
          sx={{
            backgroundColor: "hsl(240, 68%, 5%)",
            border: "1px solid hsla(60, 100%, 80%, 0.62)",
          }}
        >
          <Grid
            container
            className="signInForm-container"
            direction={"column"}
            gap={8}
          >
            <Grid item>
              <InputLabel
                htmlFor="outlined-adornment-email"
                style={{ color: "white", fontSize: "1rem" }}
              >
                Email
              </InputLabel>
              <OutlinedInput
                className="outlined-adornment-email"
                type={"Email"}
                size="small"
                sx={{
                  input: { color: "white" },
                  border: "2px solid yellow",
                  width: "100%",
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Email icon"
                      edge="end"
                      style={{ color: "white" }}
                    >
                      <EmailIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item>
              <InputLabel
                htmlFor="outlined-adornment-password"
                style={{
                  color: "white",
                }}
              >
                Password
              </InputLabel>
              <OutlinedInput
                className="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                size="small"
                sx={{
                  input: { color: "white" },
                  border: "2px solid yellow",
                  width: "100%",
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      style={{ color: "white" }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Grid>
          </Grid>
          <div className="signin-button">
            <Link to="/Weather/Dashboard">
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
            </Link>
          </div>
          <div>
            <span className="login-options-text"> Or continue with :</span>
          </div>
          <span className="text-wrapper">
            <div className="" style={{ color: "white" }}>
              New User?
            </div>
            <Link to="/Signup" className="link-wrapper">
              Sign-Up
            </Link>
          </span>
        </Paper>
      </div>
    </div>
  );
};

export default SignIn;
