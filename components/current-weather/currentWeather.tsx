import React from "react";
import { Card } from "@mui/material";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import Image from "./images/rainy.png";
import "./currentWeather.css";

function CurrentWeather() {
  return (
    <>
      <Card className="currentWeather-container">
        <div className="search-icon">
          <IconButton>
            <SearchIcon fontSize="small" style={{ color: "white" }} />
          </IconButton>
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
