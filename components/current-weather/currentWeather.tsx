import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import "./currentWeather.css";
import { weatherDTO, mainDTO } from "../types/weather/weather";
import CircularProgress from "@mui/material/CircularProgress";
import "moment-timezone";
import Fuse from "fuse.js";
import { city_data } from "../assets/citydata";
import { cities } from "../types/citySearch/citySearch";

type Props = {
  dt: number | undefined;
  main: mainDTO | undefined;
  weather: weatherDTO[] | undefined;
  city: string;
  timezone: Date | undefined;
  setcity: Dispatch<SetStateAction<string>>;
};

function CurrentWeather({ city, main, dt, weather, timezone, setcity }: Props) {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState<cities>();
  const fuse = new Fuse(city_data, { keys: ["city"], threshold: 0.3 });

  function handlesuggestion(city: string, country: string) {
    setcity(`${city},${country}`);
    setQuery("");
  }
  useEffect(() => {
    const filterData = fuse.search(query).map((result) => result.item);
    setFilteredData(filterData.slice(0, 5));
  }, [query]);

  const temprature = (main?.temp - 273.15).toFixed(2);
  const weather_message = weather ? weather[0].main : "";
  const date = dt ? dt * 1000 : 0;
  const timezone_value = timezone ? timezone * 1000 : 0;
  let timestamp: number = date + timezone_value;
  let date1: Date = new Date(timestamp);
  function pad(number: number): string {
    if (number < 10) {
      return "0" + number;
    }
    return "" + number;
  }

  let year: number = date1.getUTCFullYear();
  let month: string = pad(date1.getUTCMonth() + 1);
  let day: string = pad(date1.getUTCDate());
  let day_value: number = date1.getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayname = days[day_value];
  let hours: number = date1.getUTCHours();
  let minutes: string = pad(date1.getUTCMinutes());
  let seconds: string = pad(date1.getUTCSeconds());

  let period: string = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;

  let formattedDateTime: string = `${dayname.slice(0, 3)},${
    " " + day
  }-${month}-${year} ${hours}:${minutes}:${seconds} ${period}`;

  return (
    <>
      <Box className="currentWeather-container">
        <div className="searchbar-container">
          <FormControl variant="standard" size="small" className="searchbar">
            <Input
              className="searchbar-input"
              id="input-with-icon-adornment"
              style={{ color: "white" }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon style={{ color: "white" }} />
                </InputAdornment>
              }
            />
            {filteredData && filteredData?.length > 0 && (
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {filteredData?.map((suggestion, index) => (
                  <li
                    key={index}
                    style={{
                      border: "1px solid #ccc",
                      padding: "8px",
                      cursor: "pointer",
                      backgroundColor: "hsla(240, 65%, 3%, 0.549)",
                    }}
                    onClick={() =>
                      handlesuggestion(suggestion.city, suggestion.country)
                    }
                  >
                    {suggestion.city}, {suggestion.country}
                  </li>
                ))}
              </ul>
            )}
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
        <div className="caption-text">{weather_message}</div>
        <Divider variant="middle" sx={{ backgroundColor: "white" }} />
        <div className="locationTime-container">
          <div className="currentLocation-container">
            <LocationOnOutlinedIcon fontSize="small" />
            <div className="current-location">{city}</div>
          </div>
          <div className="currentDateTime-container">
            <CalendarMonthOutlinedIcon fontSize="small" />
            <div className="timeDate-container">{formattedDateTime}</div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default CurrentWeather;
