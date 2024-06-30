import React from "react";
import "./weatherApp.css";
import Sidebar from "@/components/sidebar";
import CurrentWeather from "@/components/current-weather";
import Highlights from "@/components/highlights";
import Forecast from "@/components/forecasts/";
import Map from "@/components/map";

function WeatherApp() {
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
