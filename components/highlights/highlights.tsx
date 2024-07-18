import React from "react";
import { Paper, createTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import AtmPressureChart from "../atmPressure-chart/atmPressure-Chart";
import SunChart from "../sunChart/sunChart";
import WindCompass from "../windCompass/windCompass";
import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined";
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Divider from "@mui/material/Divider";
import { WiSunrise } from "react-icons/wi";
import { TbSunset2 } from "react-icons/tb";
import { mainDTO, sysDTO, windDTO } from "../types/weather/weather";
import Moment from "react-moment";
import "./highlights.css";

type Props = {
  main: mainDTO;
  sys: sysDTO;
  wind: windDTO;
  vis: number;
  dt: Date;
  timezone: number;
};

function Highlights({ main, sys, wind, vis, dt, timezone }: Props) {
  const windDirection = 180;
  const Humidity = main?.humidity;
  const Feels_like = (main?.feels_like - 273).toFixed(2);
  const Sunrise = new Date(sys?.sunrise).toUTCString();
  const Sunset = new Date(sys?.sunset).toUTCString();
  const Wind_Speed = wind?.speed;
  const Gust_Speed = wind?.gust;
  const Visibility = vis ? vis / 1000 : 0;
  const highlights_date = dt?.valueOf() * 1000;
  const timezone1 = timezone * 1000;
  const c = new Date(highlights_date).toLocaleString();
  const Atm_Pressure = main?.pressure;
  console.log("highlights_date", highlights_date);
  console.log("timezone1", timezone1);
  console.log("Gust_Speed", Gust_Speed);
  console.log("c", c);
  return (
    <>
      <Paper className="highlights-container" variant="elevation" elevation={4}>
        <h5 className="highlights-heading">Today's Highlights</h5>
        <Grid container gap={2} sx={{ justifyContent: "center" }}>
          <Grid item>
            <Card className="highlights-wind">
              {/* <WindCompass direction={windDirection} /> */}
              <h5 className="wind-heading">Wind</h5>
              <Stack direction="column" gap={1}>
                <div className="windspeed">
                  {Wind_Speed}
                  <Stack className="wind-info" direction={"column"}>
                    <div className="wind-unit">KPH</div>
                    <div className="wind-text">Wind</div>
                  </Stack>
                </div>
                <Divider
                  flexItem
                  style={{ backgroundColor: "white" }}
                  variant="middle"
                />
                <div className="windgust" style={{ display: "flex" }}>
                  {Gust_Speed}
                  <Stack className="wind-info" direction={"column"}>
                    <div className="wind-unit">KPH</div>
                    <div className="wind-text">Gust</div>
                  </Stack>
                </div>
              </Stack>
            </Card>
          </Grid>
          <Grid item>
            <Card className="highlights-atmPressure">
              <h5 className="atmPressure-heading">Atmospheric Pressure</h5>
              <div className="atmPressure-chart">
                <AtmPressureChart main={main} />
              </div>
              <div className="atmPressure-indicator">
                <div className="indicator-low">Low</div>
                <div className="indicator-high">High</div>
              </div>
              <div className="atmPressure-unit-container">
                <div className="atmPressure-value">{Atm_Pressure}</div>
                <div className="atmPressure-unit">hPA</div>
              </div>
            </Card>
          </Grid>
          <Grid item>
            <Card className="highlights-sun">
              <h5 className="sun-heading">Sunrise & Sunset</h5>
              <div className="sun-Chart">
                <SunChart sys={sys} dt={dt} />
              </div>
              <div className="sun-time-container">
                <Stack className="sunrise-time-container">
                  <div className="sunrise-time">
                    <Moment date={Sunrise} format="hh:mm a"></Moment>
                  </div>
                  <WiSunrise fontSize="35px" />
                </Stack>
                <Stack className="sunset-time-container">
                  <div className="sunset-time">
                    <Moment date={Sunset} format="hh:mm a"></Moment>
                  </div>
                  <TbSunset2 fontSize="30px" />
                </Stack>
              </div>
            </Card>
          </Grid>
          <Grid item>
            <Card className="highlights-humidity">
              <div style={{ display: "flex", gap: "5px" }}>
                <WaterDropOutlinedIcon fontSize="medium" />
                <div className="humidity-heading">Humidity</div>
              </div>
              <div className="humidity-value">
                {Humidity}
                <span className="humidity-percent">%</span>
              </div>
            </Card>
          </Grid>
          <Grid item>
            <Card className="highlights-visibility">
              <div style={{ display: "flex", gap: "5px" }}>
                <VisibilityOutlinedIcon fontSize="medium" />
                <div className="visibility-heading">Visibility</div>
              </div>
              <div className="visibility-value">
                {Visibility}
                <span className="visibility-unit">km</span>
              </div>
            </Card>
          </Grid>
          <Grid item>
            <Card className="highlights-feelslike">
              <div style={{ display: "flex" }}>
                <DeviceThermostatOutlinedIcon fontSize="medium" />
                <div className="feelslike-heading">Feels like</div>
              </div>
              <div className="temperature-value">
                {Feels_like}
                <sup>o</sup>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default Highlights;
