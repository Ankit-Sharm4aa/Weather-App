import React from "react";
import { Card } from "@mui/material";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import "./currentWeather.css";
import { weatherDTO, mainDTO } from "../types/weather/weather";
import CircularProgress from "@mui/material/CircularProgress";
import Moment from "react-moment";
import "moment-timezone";

type Props = {
  dt: number | undefined;
  main: mainDTO;
  weather: weatherDTO[];
  city: string | undefined;
  timezone: number | undefined;
};

function CurrentWeather({ city, main, dt, weather, timezone }: Props) {
  const temprature = (main?.temp - 273.15).toFixed(2);
  const weather_message = weather ? weather[0].main : "";
  const date = dt ? dt * 1000 : 0;
  const timezone_value = timezone ? timezone * 1000 : 0;
  const current_date = new Date(date + timezone_value).toUTCString();

  return (
    <>
      <Card className="currentWeather-container">
        <div className="searchbar-container">
          <FormControl variant="standard" size="small" className="searchbar">
            <Input
              className="searchbar-input"
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        {weather && (
          <img
            src={`http://openweathermap.org/img/w/${weather[0]?.icon}.png`}
            className="current-weather-img"
          ></img>
        )}

        <div className="current-temp">
          <span className="currentTemp-value">
            {temprature ? temprature : <CircularProgress />}
          </span>
          <sup>o</sup>
          <span className="">C</span>
        </div>
        <div className="temp-caption">
          <ThunderstormIcon fontSize="small" />
          <div className="caption-text">{weather_message}</div>
        </div>
        <Divider variant="middle" sx={{ backgroundColor: "white" }} />
        <div className="locationTime-container">
          <div className="currentLocation-container">
            <LocationOnOutlinedIcon fontSize="small" />
            <div className="current-location">{city}</div>
          </div>
          <div className="currentDateTime-container">
            <CalendarMonthOutlinedIcon fontSize="small" />
            <div className="timeDate-container">{current_date}</div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default CurrentWeather;
