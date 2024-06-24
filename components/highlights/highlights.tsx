import React from "react";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import "./highlights.css";

function Highlights() {
  return (
    <>
      <h4>Today's Highlight</h4>
      <Paper
        variant="elevation"
        elevation={4}
        sx={{ height: "330px", width: "700px", backgroundColor: "grey" }}
      >
        <Grid container gap={3} sx={{ padding: "20px" }}>
          <Grid item>
            <Card
              sx={{ backgroundColor: "black", height: "200px", width: "200px" }}
            >
              <span>Wind Status</span>
            </Card>
          </Grid>
          <Grid item>
            <Card
              sx={{ backgroundColor: "black", height: "200px", width: "200px" }}
            >
              <span>UV Index</span>
            </Card>
          </Grid>
          <Grid item>
            <Card
              sx={{ backgroundColor: "black", height: "200px", width: "200px" }}
            >
              <span>Sunrise and Sunset</span>
            </Card>
          </Grid>
          <Grid item>
            <Card
              sx={{ backgroundColor: "black", height: "60px", width: "200px" }}
            >
              <span>Humidity</span>
            </Card>
          </Grid>
          <Grid item>
            <Card
              sx={{ backgroundColor: "black", height: "60px", width: "200px" }}
            >
              <span>Visibility</span>
            </Card>
          </Grid>
          <Grid item>
            <Card
              sx={{ backgroundColor: "black", height: "60px", width: "200px" }}
            >
              <span>Feels like </span>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default Highlights;
