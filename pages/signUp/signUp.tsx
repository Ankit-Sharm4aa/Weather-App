// "use client";
import React from "react";
import "./signUp.css";
import {
  Button,
  Paper,
  Grid,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { yellow } from "@mui/material/colors";
import image from "./images/valentin-muller-bWtd1ZyEy6w-unsplash.jpg";
import Stack from "@mui/material/Stack";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Email, Visibility, VisibilityOff } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";

function SignUp() {
  const label = ["Name", "Username", "Email"];
  const icons = ["AccountCircleIcon", "AccountCircleIcon", "Email"];

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <div className="signup">
      <img src="" className="bg-image"></img>
      <div className="icons">
        <WbSunnyIcon fontSize="large" sx={{ color: yellow[500] }} />
        <NightsStayIcon fontSize="large" color="secondary" />
      </div>
      <h1 className="signUp-heading">Create an Account</h1>
      <div className="signUpForm-wrapper">
        <Paper
          square={false}
          variant="elevation"
          elevation={5}
          className="signUpForm-container"
          sx={{
            bgcolor: "hsl(240, 58%, 6%)",
            border: "1px solid hsla(60, 41%, 89%, 0.59)",
            color: "white",
          }}
        >
          <Grid
            container
            direction="column"
            gap={3.5}
            className="signUp-grid-container"
          >
            {label.map((Textfield, index) => (
              <Grid item>
                <InputLabel
                  htmlFor={`outlined-adornment-${label[index]}`}
                  style={{
                    color: "white",
                  }}
                >
                  {label[index]}
                </InputLabel>
                <OutlinedInput
                  className={`outlined-adornment-${label[index]}`}
                  size="small"
                  sx={{
                    input: { color: "white" },
                    border: "2px solid yellow",
                    width: "100%",
                  }}
                />
              </Grid>
            ))}
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
          <Link to="/Weather/Dashboard" className="create-button">
            <Button
              variant="outlined"
              style={{ padding: "8px 10px", border: "1px solid yellow" }}
            >
              <ArrowForwardIosIcon style={{ color: yellow[800] }} />
            </Button>
          </Link>
          <span className="signUpText-wrapper">
            Already a user?
            <Link className="signIn-link" to="/signin">
              Sign-In
            </Link>
          </span>
        </Paper>
      </div>
    </div>
  );
}

export default SignUp;
