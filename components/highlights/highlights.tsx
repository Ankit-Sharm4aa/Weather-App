import React from "react";
import { Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import SparkLine from "@/components/sparkline-chart/";
import GaugeChart from "@/components/gauge-chart";
import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import "./highlights.css";

function Highlights() {
  return (
    <>
      <Paper className="highlights-container" variant="elevation" elevation={4}>
        <h5 className="highlights-heading">Today's Highlights</h5>
        <Grid container gap={2} sx={{ justifyContent: "center" }}>
          <Grid item>
            <Card className="highlights-wind">
              <h5 className="wind-heading">Wind Status</h5>
              <SparkLine />
              <div className="wind-time-container">
                <div className="windspeed">
                  7.90<div className="wind-unit">km/h</div>
                </div>
                <div className="wind-time">Time</div>
              </div>
            </Card>
          </Grid>
          <Grid item>
            <Card className="highlights-uv">
              <h5 className="uv-heading">UV Index</h5>
              <GaugeChart />
              <div className="uv-unit-container">
                <div className="uv-value">5.50</div>
                <div className="uv-unit">UV</div>
              </div>
            </Card>
          </Grid>
          <Grid item>
            <Card className="highlights-sun">
              <h5 className="sun-heading">Sunrise & Sunset</h5>
              <div className="sun-time-container">
                <div className="sunrise-time-container">
                  <div className="sunrise-time">5:00</div>
                  <div className="time-unit">AM</div>
                </div>
                <div className="sunset-time-container">
                  <div className="sunset-time">6:30</div>
                  <div className="time-unit">PM</div>
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item>
            <Card className="highlights-humidity">
              <Stack gap={1} direction="column">
                <h6 className="humidity-heading">Humidity</h6>
                <div className="humidity">
                  <div className="humidity-value">
                    84
                    <span className="humidity-percent">%</span>
                  </div>
                </div>
              </Stack>
              <div className="humidity-info">
                <WaterDropOutlinedIcon fontSize="small" />
                <div className="humidity-text">
                  The dew point is 27<sup>o</sup> right now
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item>
            <Card className="highlights-visibility">
              <Stack gap={1} direction="column">
                <h6 className="visibility-heading">Visibility</h6>
                <div className="visibility">
                  <div className="visibility-value">
                    03
                    <span className="visibility-unit">lm</span>
                  </div>
                </div>
              </Stack>
              <div className="visibility-info">
                <VisibilityOutlinedIcon fontSize="small" />
                <div className="visibility-text">
                  Haze is affecting visibility
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item>
            <Card className="highlights-feelslike">
              <Stack gap={1} direction="column">
                <h6 className="feelslike-heading">Feels like</h6>
                <div className="temperature">
                  <DeviceThermostatOutlinedIcon />
                  <div className="temperature-value">
                    42<sup>o</sup>
                  </div>
                </div>
              </Stack>
              <div className="temperature-info">
                Humidity is making things hotter
              </div>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default Highlights;
