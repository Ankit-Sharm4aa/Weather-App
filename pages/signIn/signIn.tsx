"use client";
import React from "react";
import "./signIn.css";
import Box from "@mui/material/Box";
import WbSunny from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { yellow } from "@mui/material/colors";
import SigninForm from "@/components/signinForm";

const SignIn: React.FC = () => {
  return (
    <div className="signin">
      <div className="signin-icon">
        <WbSunny fontSize="large" sx={{ color: yellow[500] }} />
        <NightsStayIcon fontSize="large" color="secondary" />
      </div>
      <h1 className="signIn-heading">Login to your Account</h1>
      <div className="signInForm-wrapper">
        <Box className="signIn-form">
          <SigninForm />
        </Box>
      </div>
    </div>
  );
};

export default SignIn;
