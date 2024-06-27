import React from "react";
import { Card } from "@mui/material";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import ThunderStormDay from "./images/thunder storm day.png";
import cloudy from "./images/cloudy.svg";
import foggy from "./images/foggy.svg";
import sunnystorm from "./images/sunny storm.svg";
import sunny from "./images/sunny.svg";
import "./forecast.css";

function Forecast() {
  return (
    <div className="forecast-container">
      <h5 className="forecast-heading">7 days Forecast</h5>
      <Card className="card-main">
        <List className="forecast-list">
          <Stack>
            <ListItem>
              <ListItemIcon>
                <img
                  src={ThunderStormDay.src}
                  className="forecast1-weather-img"
                ></img>
              </ListItemIcon>
              <ListItemText>
                <div className="forecast-1">
                  <span className="forecast1-temp">
                    <span className="forecast1-temp1">Tmp1/</span>
                    <span className="forecast1-temp2">Tmp2</span>
                  </span>
                  <span className="forecast1-date">Date</span>
                  <span className="forecast1-dayname">Dayname</span>
                </div>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <img className="forecast2-weather-img" src={cloudy.src}></img>
              </ListItemIcon>
              <ListItemText>
                <div className="forecast-2">
                  <span className="forecast2-temp">
                    <span className="forecast2-temp1">Tmp1/</span>
                    <span className="forecast2-temp2">Tmp2</span>
                  </span>
                  <span className="forecast2-date">Date</span>
                  <span className="forecast2-dayname">Dayname</span>
                </div>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <img className="forecast3-weather-img" src={foggy.src}></img>
              </ListItemIcon>
              <ListItemText>
                <div className="forecast-3">
                  <span className="forecast3-temp">
                    <span className="forecast3-temp1">Tmp1/</span>
                    <span className="forecast3-temp2">Tmp2</span>
                  </span>
                  <span className="forecast3-date">Date</span>
                  <span className="forecast3-dayname">Dayname</span>
                </div>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <img
                  className="forecast4-weather-img"
                  src={sunnystorm.src}
                ></img>
              </ListItemIcon>
              <ListItemText>
                <div className="forecast-4">
                  <span className="forecast4-temp">
                    <span className="forecast4-temp1">Tmp1/</span>
                    <span className="forecast4-temp2">Tmp2</span>
                  </span>
                  <span className="forecast4-date">Date</span>
                  <span className="forecast4-dayname">Dayname</span>
                </div>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <img className="forecast5-weather-img" src={sunny.src}></img>
              </ListItemIcon>
              <ListItemText>
                <div className="forecast-5">
                  <span className="forecast5-temp">
                    <span className="forecast5-temp1">Tmp1/</span>
                    <span className="forecast5-temp2">Tmp2</span>
                  </span>
                  <span className="forecast5-date">Date</span>
                  <span className="forecast5-dayname">Dayname</span>
                </div>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon></ListItemIcon>
              <ListItemText>
                <div className="forecast-6">
                  <span className="forecast6-temp">
                    <span className="forecast6-temp1">Tmp1/</span>
                    <span className="forecast6-temp2">Tmp2</span>
                  </span>
                  <span className="forecast6-date">Date</span>
                  <span className="forecast6-dayname">Dayname</span>
                </div>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon></ListItemIcon>
              <ListItemText>
                <div className="forecast-7">
                  <span className="forecast7-temp">
                    <span className="forecast7-temp1">Tmp1/</span>
                    <span className="forecast7-temp2">Tmp2</span>
                  </span>
                  <span className="forecast7-date">Date</span>
                  <span className="forecast7-dayname">Dayname</span>
                </div>
              </ListItemText>
            </ListItem>
          </Stack>
        </List>
        <Card className="card-secondary">
          <Stack direction="row">
            <img
              src={ThunderStormDay.src}
              className="forecast-weather-img"
            ></img>
            <div className="forecast-dayname">
              <div>Tomorrow</div>
              <div className="forecast-temp">
                23 <sup>o</sup>
              </div>
              <div className="forecast-prediction">Thunder Storm Day</div>
            </div>
            <img></img>
          </Stack>
        </Card>
      </Card>
    </div>
  );
}

export default Forecast;
