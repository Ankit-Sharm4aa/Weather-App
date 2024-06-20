import React from "react";
import "../styles/signIn.css";
import { Button, Paper, Grid, TextField } from "@mui/material";
function SignIn() {
  return (
    <>
      <Paper
        square={false}
        variant="outlined"
        sx={{
          height: "600px",
          width: "600px",
          bgcolor: "hsl(0, 1%, 45%)",
          color: "white",
          padding: 2,
          margin: "auto",
        }}
      >
        <h1>Sign in to your Account</h1>
        <TextField
          id="outlined-basic"
          label="Enter your Email"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
      </Paper>
    </>
  );
}

export default SignIn;
