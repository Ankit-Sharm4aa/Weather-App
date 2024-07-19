import React, { useCallback, useEffect, useState } from "react";
import { Card, Stack } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { IoRainy } from "react-icons/io5";
import "./weeklyForecasts.css";
import getForecastData from "../services/networking/forecast-data";
import { ForecastApiResponse, listDTO } from "../types/weather/forecast";

type Props = {
  dt: number;
  lat: number;
  lon: number;
};

function WeeklyForecasts({ dt, lat, lon }: Props) {
  const [data, setData] = useState<ForecastApiResponse>();
  let weekly_forecast_data;
  function dayName(weekday: number) {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const t = days[weekday];
    return t;
  }
  if (data && data?.list && data?.list.length > 0) {
    weekly_forecast_data = data?.list.filter((date, index, self) => {
      const datekey = new Date(date.dt * 1000).toISOString().slice(0, 10);
      console.log("datekey", datekey);
      return (
        self.findIndex(
          (d) => new Date(d.dt * 1000).toISOString().slice(0, 10) === datekey
        ) === index
      );
    });
    console.log("weekly_forecast_data", weekly_forecast_data);
  }
  const fetchData = useCallback(
    async (lat: number, lon: number) => {
      const forecastDataFromApi = await getForecastData(lat, lon);
      // console.log("forecastDataFromApi", forecastDataFromApi);
      setData(forecastDataFromApi);
    },
    [lat, lon]
  );

  useEffect(() => {
    fetchData(lat, lon);
  }, [lat, lon, fetchData]);

  return (
    <div className="weeklyForecast-container">
      <h5 className="weeklyForecast-heading">Weekly Forecasts</h5>
      <Card className="weeklyForecast">
        {weekly_forecast_data && (
          <List className="weeklyForecast-list" disablePadding>
            {/* {loop} */}
            {weekly_forecast_data?.map((item, index) => {
              if (index === 0) {
                return null;
              }
              return (
                <ListItem>
                  <div style={{ display: "flex", flex: 1 }}>
                    <ListItemIcon>
                      <img
                        className="weeklyForecast-icon"
                        src={`https://openweathermap.org/img/w/${weekly_forecast_data[index]?.weather[0]?.icon}.png`}
                      ></img>
                    </ListItemIcon>
                    <Stack direction="column">
                      <div>
                        <span id="dayname">
                          {dayName(
                            new Date(
                              weekly_forecast_data[index].dt * 1000
                            ).getDay()
                          )}
                        </span>
                      </div>
                      <div className="weather-prediction">
                        {weekly_forecast_data[index]?.weather[0]?.main}
                      </div>
                    </Stack>
                  </div>
                  <Stack
                    direction="row"
                    gap={10}
                    className="weeklyweather-forecasts"
                    style={{ flex: 3 }}
                  >
                    <div className="temp">
                      <ThermostatIcon fontSize="small" className="temp-icon" />
                      <div>
                        {(
                          weekly_forecast_data[index]?.main.temp - 273.15
                        ).toFixed(2)}{" "}
                        <sup>o</sup>
                      </div>
                    </div>
                    <div className="wind">
                      <AirIcon fontSize="small" className="wind-icon" />
                      <div> {weekly_forecast_data[index]?.wind?.speed} m/s</div>
                    </div>
                    <div className="humid">
                      <WaterDropIcon fontSize="small" className="humid-icon" />
                      <div> {weekly_forecast_data[index]?.main.humidity}%</div>
                    </div>
                    <div className="precipitation">
                      <IoRainy className="precipitation-icon" />
                      <div>{weekly_forecast_data[index]?.pop * 100}%</div>
                    </div>
                  </Stack>
                </ListItem>
              );
            })}
          </List>
        )}
      </Card>
    </div>
  );
}

export default WeeklyForecasts;
