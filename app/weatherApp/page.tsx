"use client";
import React, { useCallback, useState, useEffect } from "react";
import "./weatherApp.css";
import Navbar from "@/components/navbar";
import CurrentWeather from "@/components/current-weather";
import Highlights from "@/components/highlights";
import WeeklyForecasts from "@/components/weeklyForecasts";
import DailyForecast from "@/components/dailyForecasts";
import getWeatherData from "../../components/services/networking/weather-data";
import { WeatherApiResponse } from "@/components/types/weather/weather";
import { Grid } from "@mui/material";

const WeatherApp: React.FC = () => {
  const [city, setcity] = useState("London,uk");
  const [data, setData] = useState<WeatherApiResponse>();
  const fetchData = useCallback(
    async (city: string) => {
      const weatherDataFromApi = await getWeatherData(city);
      setData(weatherDataFromApi);
    },
    [city]
  );

  useEffect(() => {
    fetchData(city);
  }, [city]);

  return (
    <div className="weather-app">
      {/* <div className="Bg-image"></div> */}
      <div className="weather-app-container">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="grid-wrapper">
          <Grid container spacing={2} className="grid-container">
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={6}
              className="currentWeather"
            >
              <CurrentWeather
                dt={data?.dt}
                weather={data?.weather}
                main={data?.main}
                city={city}
                timezone={data?.timezone}
                setcity={setcity}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              lg={8}
              xl={6}
              className="Highlights"
            >
              <Highlights
                main={data?.main}
                sys={data?.sys}
                wind={data?.wind}
                vis={data?.visibility}
                dt={data?.dt}
                timezone={data?.timezone}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={6}
              className="daily-forecasts"
            >
              <DailyForecast
                lon={data?.coord.lon}
                lat={data?.coord.lat}
                dt={data?.dt}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              lg={8}
              xl={6}
              className="weekly-forecasts"
            >
              <WeeklyForecasts
                lon={data?.coord.lon}
                lat={data?.coord.lat}
                dt={data?.dt}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
