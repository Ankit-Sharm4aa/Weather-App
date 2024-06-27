import React from "react";
import "./weatherApp.css";
import Sidebar from "@/components/sidebar";
import CurrentWeather from "@/components/current-weather";
import Highlights from "@/components/highlights";
import Forecast from "@/components/forecasts/";
import Map from "@/components/map";

function WeatherApp() {
  return (
    <div className="weather-app">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="flex-container">
        <CurrentWeather />
        <Highlights />
        <Forecast />
        <Map />
      </div>
    </div>
  );
}

export default WeatherApp;
