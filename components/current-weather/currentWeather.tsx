import React from "react";
import { Card } from "@mui/material";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import Image from "./images/rainy.png";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import "./currentWeather.css";

function CurrentWeather() {
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
        <img src={Image.src} className="current-weather-img"></img>
        <div className="current-temp">
          <span className="currentTemp-value">28</span>
          <sup>o</sup>
          <span className="currentTemp-unit">C</span>
        </div>
        <div className="temp-caption">
          <ThunderstormIcon fontSize="small" />
          <div className="caption-text">Rainy Storm Clouds</div>
        </div>
        <Divider variant="middle" sx={{ backgroundColor: "white" }} />
        <div className="locationTime-container">
          <div className="currentLocation-container">
            <LocationOnOutlinedIcon fontSize="small" />
            <div className="current-location">Kanpur, India</div>
          </div>
          <div className="currentDateTime-container">
            <CalendarMonthOutlinedIcon fontSize="small" />
            <div className="timeDate-container">
              <div className="date-current">24 July, 2024</div>
              <div className="time-current">6:00 AM</div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}

export default CurrentWeather;
