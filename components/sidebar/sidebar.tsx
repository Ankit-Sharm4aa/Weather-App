import React from "react";
import { Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import GridViewIcon from "@mui/icons-material/GridView";
import MapIcon from "@mui/icons-material/Map";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import Avatar from "@mui/material/Avatar";
import profilePic from "./images/alex-suprun-ZHvM3XIOHoE-unsplash.jpg";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import "./sidebar.css";

function Sidebar() {
  return (
    <Paper variant="elevation" elevation={4} className="sidebar-main">
      <Stack spacing={4}>
        <IconButton>
          <AcUnitIcon fontSize="small" sx={{ color: "aqua" }} />
        </IconButton>
        <p className="weather-text">Weather</p>
        <Divider flexItem variant="middle" sx={{ backgroundColor: "white" }} />
        <IconButton>
          <GridViewIcon fontSize="small" sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <MapIcon fontSize="small" sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <LocationOnOutlinedIcon fontSize="small" sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <CalendarMonthOutlinedIcon fontSize="small" sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon fontSize="small" sx={{ color: "white" }} />
        </IconButton>
      </Stack>
      <Stack className="bottom-sidebar">
        <IconButton>
          <CircleNotificationsIcon fontSize="small" sx={{ color: "white" }} />
        </IconButton>
        <IconButton>
          <Avatar src={profilePic.src} />
        </IconButton>
      </Stack>
    </Paper>
  );
}

export default Sidebar;
