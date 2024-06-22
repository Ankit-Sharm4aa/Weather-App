import React from "react";
import "./signUp.css";
import { Button, Paper, TextField, Icon, Grid } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { yellow } from "@mui/material/colors";
import image from "./images/valentin-muller-bWtd1ZyEy6w-unsplash.jpg";
import Stack from "@mui/material/Stack";

function SignUp() {
  return (
    <Stack direction="row" spacing={20}>
      <div>
        <img src={image.src} className="bg-image"></img>
      </div>
      <div>
        <div className="icon">
          <WbSunnyIcon fontSize="large" sx={{ color: yellow[500] }} />
          <NightsStayIcon fontSize="large" color="secondary" />
        </div>
        <br />
        <h1>Create an Account</h1>
        <Paper
          square={false}
          variant="elevation"
          elevation={5}
          sx={{
            height: "550px",
            width: "500px",
            bgcolor: "hsl(240, 58%, 6%)",
            color: "white",
            padding: 2,
            margin: "auto",
            border: "1px solid hsla(60, 41%, 89%, 0.59);",
          }}
        >
          <Grid container gap={4} style={{ padding: "40px" }}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <label htmlFor="name">Name</label>
              <br />
              <TextField
                name="name"
                variant="outlined"
                size="small"
                sx={{
                  border: "2px solid yellow",
                  borderRadius: "4px",
                  input: { color: "white" },
                }}
                fullWidth
                type="text"
              />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <label htmlFor="user-name">Username</label>
              <br />
              <TextField
                name="user-name"
                variant="outlined"
                size="small"
                sx={{
                  border: "2px solid yellow",
                  borderRadius: "4px",
                  input: { color: "white" },
                }}
                fullWidth
                type="text"
              />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <label htmlFor="user-email">Email</label>
              <br />
              <TextField
                name="user-email"
                variant="outlined"
                size="small"
                sx={{
                  border: "2px solid yellow",
                  borderRadius: "4px",
                  input: { color: "white" },
                }}
                fullWidth
                type="Email"
              />
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <label htmlFor="password">Password</label>
              <br />
              <TextField
                name="password"
                variant="outlined"
                size="small"
                sx={{
                  border: "2px solid yellow",
                  borderRadius: "4px",
                  input: { color: "white" },
                }}
                fullWidth
                type="password"
              />
            </Grid>
          </Grid>
          <div className="create-button">
            <Button
              variant="outlined"
              style={{ padding: "8px 10px", border: "1px solid yellow" }}
            >
              <ArrowForwardIosIcon style={{ color: yellow[800] }} />
            </Button>
          </div>
          <br />
          <p>
            Already a user? <a href="">Sign-In</a>
          </p>
        </Paper>
      </div>
    </Stack>
  );
}

export default SignUp;
