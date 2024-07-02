import React, { useCallback, useState, useEffect } from "react";
import "./weatherApp.css";
import Sidebar from "@/components/sidebar";
import CurrentWeather from "@/components/current-weather";
import Highlights from "@/components/highlights";
import Forecast from "@/components/forecasts/";
import Map from "@/components/map";
import getWeatherData from "../../components/services/networking/weather-data";

type Props = {
  city: string;
};

function WeatherApp({ city }: Props) {
  //understand why useCallback useEffect and check how useState is used so tht we can fetch the data in this component
  const fetchData = useCallback(
    async (city: string) => {
      const weatherDataFromApi = await getWeatherData(city);
      console.log("use this data to update state using use state" , weatherDataFromApi);
    },
    [city]
  );

  useEffect(() => {
    fetchData(city);
  }, [city, fetchData]);

  return (
    <>
      <div className="Bg-image"></div>
      <div className="weather-app">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="flex-container">
          <div className="currentWeather">
            <CurrentWeather />
          </div>
          <div className="Highlights">
            <Highlights />
          </div>
          <div className="Forecast">
            <Forecast />
          </div>
          <div className="Map">
            <Map />
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherApp;
