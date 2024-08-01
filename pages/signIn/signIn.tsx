"use client";
import React from "react";
import "./signIn.css";
import {
  Button,
  Grid,
  TextField,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { doSocialLogin } from "@/app/actions";
import Box from "@mui/material/Box";
import Component from "@/components/login-btn/login-btn";
import WbSunny from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Stack from "@mui/material/Stack";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import { yellow } from "@mui/material/colors";
import { SessionProvider } from "next-auth/react";
import googleIcon from "./images/icons8-google-48.svg";
import githubIcon from "./images/github-mark.svg";

const SignIn: React.FC = () => {
  const buttonData = [
    {
      id: 1,
      name: "Google",
      icon: googleIcon,
    },
    {
      id: 2,
      name: "Github",
      icon: githubIcon,
    },
  ];
  return (
    <div className="signin">
      <div className="signin-icon">
        <WbSunny fontSize="large" sx={{ color: yellow[500] }} />
        <NightsStayIcon fontSize="large" color="secondary" />
      </div>
      <h1 className="signIn-heading">Login to your Account</h1>
      <div className="signInForm-wrapper">
        <Box className="signIn-form">
          <form action={doSocialLogin}>
            <Stack direction={"column"} gap={2} className="signin-Options">
              {buttonData.map((button) => {
                return (
                  <button
                    type="submit"
                    name="action"
                    value={`${button.name}`}
                    key={button.id}
                    className={`${button.name}-btn`}
                  >
                    <img
                      src={button.icon.src}
                      alt={`${button.name} icon`}
                      className="signin-options-icon"
                    />
                    Sign in with {button.name}
                  </button>
                );
              })}
              <Link to="/Weather/Dashboard">
                <button>Next page</button>
              </Link>
            </Stack>
          </form>
        </Box>
      </div>
    </div>
  );
};

export default SignIn;
