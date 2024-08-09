"use client";
import React, { useCallback, useState, useEffect } from "react";
import "./weatherApp.css";
// import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import CurrentWeather from "@/components/current-weather";
import Highlights from "@/components/highlights";
import WeeklyForecasts from "@/components/weeklyForecasts";
import DailyForecast from "@/components/dailyForecasts";
import getWeatherData from "../../components/services/networking/weather-data";
import { WeatherApiResponse } from "@/components/types/weather/weather";
import { ForecastApiResponse } from "@/components/types/weather/forecast";
import { Visibility } from "@mui/icons-material";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

type Props = {
  city: string;
};

const WeatherApp = async ({ city }: Props) => {
  //understand why useCallback useEffect and check how useState is used so tht we can fetch the data in this component

  const session = await auth();

  if (!session?.user) redirect("/");

  const fetchData = useCallback(
    async (city: string) => {
      const weatherDataFromApi = await getWeatherData(city);

      setData(weatherDataFromApi);
    },
    [city]
  );

  useEffect(() => {
    fetchData(city);
  }, [city, fetchData]);

  const [data, setData] = useState<WeatherApiResponse>();

  console.log(data, "hello1");

  return (
    <div className="weather-app">
      {/* <div className="Bg-image"></div> */}
      <div className="weather-app-container">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="flex-container">
          <div className="currentWeather">
            <CurrentWeather
              dt={data?.dt}
              weather={data?.weather}
              main={data?.main}
              city={city}
              timezone={data?.timezone}
            />
          </div>
          <div className="Highlights">
            <Highlights
              main={data?.main}
              sys={data?.sys}
              wind={data?.wind}
              vis={data?.visibility}
              dt={data?.dt}
              timezone={data?.timezone}
            />
          </div>
          <div className="daily-forecasts">
            <DailyForecast
              lon={data?.coord.lon}
              lat={data?.coord.lat}
              dt={data?.dt}
            />
          </div>
          <div className="weekly-forecasts">
            <WeeklyForecasts
              lon={data?.coord.lon}
              lat={data?.coord.lat}
              dt={data?.dt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
