import React from "react";
import { Card, Stack } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import "./weeklyForecasts.css";
import { Water } from "@mui/icons-material";

function WeeklyForecasts() {
  return (
    <div className="weeklyForecast-container">
      <h5 className="weeklyForecast-heading">Weekly Forecasts</h5>
      <Card className="weeklyForecast">
        <List className="weeklyForecast-list" disablePadding>
          {/* {loop} */}
          <ListItem>
            <ListItemIcon>
              <img className="weeklyForecast-icon" alt="img"></img>
            </ListItemIcon>
            <Stack direction="column" style={{ marginRight: "120px" }}>
              <div>
                <span>Dayname</span>
              </div>
              <div className="weather-prediction">Cloudy</div>
            </Stack>
            <Stack direction="row" gap={10} className="weeklyweather-forecasts">
              <div className="temp">
                <ThermostatIcon fontSize="small" className="temp-icon" />
                <div>
                  22 <sup>o</sup>
                </div>
              </div>
              <div className="wind">
                <AirIcon fontSize="small" className="wind-icon" />
                <div> 4.5 m/s</div>
              </div>
              <div className="humid">
                <WaterDropIcon fontSize="small" className="humid-icon" />
                <div> 45%</div>
              </div>
              <div className="precipitation">
                <ThunderstormIcon
                  fontSize="small"
                  className="precipitation-icon"
                />
                <div>22%</div>
              </div>
            </Stack>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img className="weeklyForecast-icon" alt="img"></img>
            </ListItemIcon>
            <Stack direction="column" style={{ marginRight: "120px" }}>
              <div>
                <span>Dayname</span>
              </div>
              <div className="weather-prediction">Cloudy</div>
            </Stack>
            <Stack direction="row" gap={10} className="weeklyweather-forecasts">
              <div className="temp">
                <ThermostatIcon fontSize="small" className="temp-icon" />
                <div>
                  22 <sup>o</sup>
                </div>
              </div>
              <div className="wind">
                <AirIcon fontSize="small" className="wind-icon" />
                <div> 4.5 m/s</div>
              </div>
              <div className="humid">
                <WaterDropIcon fontSize="small" className="humid-icon" />
                <div> 45%</div>
              </div>
              <div className="precipitation">
                <ThunderstormIcon
                  fontSize="small"
                  className="precipitation-icon"
                />
                <div>22%</div>
              </div>
            </Stack>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img className="weeklyForecast-icon" alt="img"></img>
            </ListItemIcon>
            <Stack direction="column" style={{ marginRight: "120px" }}>
              <div>
                <span>Dayname</span>
              </div>
              <div className="weather-prediction">Cloudy</div>
            </Stack>
            <Stack direction="row" gap={10} className="weeklyweather-forecasts">
              <div className="temp">
                <ThermostatIcon fontSize="small" className="temp-icon" />
                <div>
                  22 <sup>o</sup>
                </div>
              </div>
              <div className="wind">
                <AirIcon fontSize="small" className="wind-icon" />
                <div> 4.5 m/s</div>
              </div>
              <div className="humid">
                <WaterDropIcon fontSize="small" className="humid-icon" />
                <div> 45%</div>
              </div>
              <div className="precipitation">
                <ThunderstormIcon
                  fontSize="small"
                  className="precipitation-icon"
                />
                <div>22%</div>
              </div>
            </Stack>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img className="weeklyForecast-icon" alt="img"></img>
            </ListItemIcon>
            <Stack direction="column" style={{ marginRight: "120px" }}>
              <div>
                <span>Dayname</span>
              </div>
              <div className="weather-prediction">Cloudy</div>
            </Stack>
            <Stack direction="row" gap={10} className="weeklyweather-forecasts">
              <div className="temp">
                <ThermostatIcon fontSize="small" className="temp-icon" />
                <div>
                  22 <sup>o</sup>
                </div>
              </div>
              <div className="wind">
                <AirIcon fontSize="small" className="wind-icon" />
                <div> 4.5 m/s</div>
              </div>
              <div className="humid">
                <WaterDropIcon fontSize="small" className="humid-icon" />
                <div> 45%</div>
              </div>
              <div className="precipitation">
                <ThunderstormIcon
                  fontSize="small"
                  className="precipitation-icon"
                />
                <div>22%</div>
              </div>
            </Stack>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img className="weeklyForecast-icon" alt="img"></img>
            </ListItemIcon>
            <Stack direction="column" style={{ marginRight: "120px" }}>
              <div>
                <span>Dayname</span>
              </div>
              <div className="weather-prediction">Cloudy</div>
            </Stack>
            <Stack direction="row" gap={10} className="weeklyweather-forecasts">
              <div className="temp">
                <ThermostatIcon fontSize="small" className="temp-icon" />
                <div>
                  22 <sup>o</sup>
                </div>
              </div>
              <div className="wind">
                <AirIcon fontSize="small" className="wind-icon" />
                <div> 4.5 m/s</div>
              </div>
              <div className="humid">
                <WaterDropIcon fontSize="small" className="humid-icon" />
                <div> 45%</div>
              </div>
              <div className="precipitation">
                <ThunderstormIcon
                  fontSize="small"
                  className="precipitation-icon"
                />
                <div>22%</div>
              </div>
            </Stack>
          </ListItem>
        </List>
      </Card>
    </div>
  );
}

export default WeeklyForecasts;
