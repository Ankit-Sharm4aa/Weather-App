import React, { useState } from "react";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import GridViewIcon from "@mui/icons-material/GridView";
import MapIcon from "@mui/icons-material/Map";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
// import CrisisAlertOutlinedIcon from "@mui/icons-material/CrisisAlertOutlined";
import Avatar from "@mui/material/Avatar";
import profilePic from "./images/alex-suprun-ZHvM3XIOHoE-unsplash.jpg";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import "./sidebar.css";

function Sidebar() {
  const [activeButton, setActiveButton] = useState<string>("button1");

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };
  return (
    <Box className="sidebar-main">
      <Stack gap={3}>
        <div className="sidebar-top-container">
          <div className="sidebar-top">
            <IconButton>
              <AcUnitIcon fontSize="medium" sx={{ color: "aqua" }} />
            </IconButton>
            <p className="weather-text">Weather</p>
          </div>
        </div>
        <Divider flexItem variant="middle" className="sidebar-divider" />
        <List disablePadding>
          <ListItem disablePadding>
            <ListItemButton
              className={`button ${activeButton === "button1" ? "active" : ""}`}
              onClick={() => handleClick("button1")}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <GridViewIcon fontSize="medium" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              className={`button ${activeButton === "button2" ? "active" : ""}`}
              onClick={() => handleClick("button2")}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <MapIcon fontSize="medium" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Stack>
      <Stack className="sidebar-bottom">
        <Divider flexItem variant="middle" className="sidebar-divider" />
        <IconButton>
          <Avatar src={profilePic.src} />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default Sidebar;
