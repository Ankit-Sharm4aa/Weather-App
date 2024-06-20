import React from "react";
import "../styles/signUp.css";
import { Button, Paper, TextField, Icon } from "@mui/material";
function SignUp() {
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
        <h1>Create an Account</h1>
        <div>
          <TextField
            id="outlined-basic"
            label="Enter your Name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Enter your Username"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Enter your Email"
            variant="outlined"
          />
        </div>
        <div>
          <TextField id="outlined-basic" label="Password" variant="outlined" />
        </div>
      </Paper>
    </>
  );
}

export default SignUp;
