import React, { useCallback, useEffect, useState } from "react";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import "./dailyForecast.css";
import getForecastData from "../services/networking/forecast-data";
import { ForecastApiResponse, listDTO } from "../types/weather/forecast";

type Props = {
  dt: number;
  lat: number;
  lon: number;
};

function DailyForecast({ dt, lat, lon }: Props) {
  let formatted_forecast_data;
  const date = new Date(dt ? dt * 1000 : 0);
  const formatted_date = date?.toISOString().slice(0, 10);
  const [data, setData] = useState<ForecastApiResponse>();
  // const [formatted_forecast_data, setForecastData] = useState<listDTO[]>();

  // console.log("data 123", data);

  if (data && data?.list && data?.list.length > 0) {
    // console.log(data?.list);
    formatted_forecast_data = data?.list.filter((list) =>
      list.dt_txt.includes(formatted_date)
    );
    console.log("formatted_forecast_data", formatted_forecast_data);
  }
  console.log("formatted_forecast_data", formatted_forecast_data);
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
    <div className="forecast-container">
      <h5 className="forecast-heading">Daily Forecasts</h5>
      <Box className="box-main">
        {formatted_forecast_data && (
          <List className="forecast-list" disablePadding>
            {formatted_forecast_data?.map((item, i) => {
              return (
                <ListItem>
                  <ListItemIcon>
                    <img
                      src={`https://openweathermap.org/img/w/${formatted_forecast_data[i]?.weather[0]?.icon}.png`}
                      className="forecast1-weather-img"
                    ></img>
                  </ListItemIcon>
                  <ListItemText>
                    <div className="forecast-1">
                      <span className="forecast1-temp">
                        <span className="forecast1-temp1">
                          {(
                            formatted_forecast_data[i].main.temp - 273.15
                          ).toFixed(2)}
                          <sup>o</sup>C
                        </span>
                      </span>
                      <span className="forecast1-date">
                        {formatted_forecast_data[i]?.dt_txt
                          .split(" ")[1]
                          .slice(0, 5)}
                      </span>
                    </div>
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
        )}
      </Box>
    </div>
  );
}

export default DailyForecast;
