import React from "react";
import { Card } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import Image from "./images/rainy.png";
import "./currentWeather.css";

function CurrentWeather() {
  return (
    <>
      <Card
        sx={{
          height: "330px",
          width: "280px",
          borderRadius: "20px",
          backgroundColor: "black",
          paddingLeft: "10px",
        }}
      >
        <div className="search-icon">
          <IconButton>
            <SearchIcon fontSize="small" style={{ color: "white" }} />
          </IconButton>
        </div>
        <img src={Image.src} className="current-weather-img"></img>
        <div className="current-temp">
          28<sup>o</sup>C
        </div>
        <div className="temp-caption">
          <ThunderstormIcon fontSize="small" />
          <div>Rainy Storm Clouds</div>
        </div>
        <Divider variant="middle" sx={{ backgroundColor: "white" }} />
        <List sx={{ color: "white" }}>
          <ListItem disablePadding>
            <ListItemIcon>
              <LocationOnOutlinedIcon
                fontSize="small"
                sx={{ color: "white" }}
              />
            </ListItemIcon>
            <ListItemText primary="Location" sx={{ marginLeft: "-25px" }} />
          </ListItem>
          <ListItem disablePadding>
            <ListItemIcon>
              <CalendarMonthOutlinedIcon
                fontSize="small"
                sx={{ color: "white" }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Date and Time"
              sx={{ marginLeft: "-25px" }}
            />
          </ListItem>
        </List>
      </Card>
    </>
  );
}

export default CurrentWeather;
