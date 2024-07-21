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
  dt: number;
  timezone: number;
};

function Highlights({ main, sys, wind, vis, dt, timezone }: Props) {
  const windDirection = 180;
  const Humidity = main?.humidity;
  const Feels_like = (main?.feels_like - 273).toFixed(2);
  const Sunset = new Date(sys?.sunset).toUTCString();
  const Wind_Speed = wind?.speed;
  const Gust_Speed = wind?.gust;
  const Visibility = vis ? vis / 1000 : 0;
  const timezone1 = timezone * 1000;
  const sunrise: number = sys?.sunrise * 1000 + timezone1;
  const sunset: number = sys?.sunset * 1000 + timezone1;
  function formatTimestampToAMPM(timestamp: number): string {
    let date: Date = new Date(timestamp);
    function pad(number: number): string {
      if (number < 10) {
        return "0" + number;
      }
      return "" + number;
    }

    let year: number = date.getUTCFullYear();
    let month: string = pad(date.getUTCMonth() + 1);
    let day: string = pad(date.getUTCDate());

    let hours: number = date.getUTCHours();
    let minutes: string = pad(date.getUTCMinutes());
    let seconds: string = pad(date.getUTCSeconds());

    let period: string = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    let formattedDateTime: string = `${hours}:${minutes} ${period}`;

    return formattedDateTime;
  }

  const sunrise_time: string = formatTimestampToAMPM(sunrise);
  const sunset_time: string = formatTimestampToAMPM(sunset);
  const Atm_Pressure = main?.pressure;
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
                  {Gust_Speed ? Gust_Speed : "NA"}
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
                  <div className="sunrise-time">{sunrise_time}</div>
                  <WiSunrise fontSize="35px" />
                </Stack>
                <Stack className="sunset-time-container">
                  <div className="sunset-time">{sunset_time}</div>
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
