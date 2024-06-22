import React from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItem,
  List,
  Paper,
} from "@mui/material";
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
import "./sidebar.css";
function Sidebar() {
  return (
    <Paper
      variant="elevation"
      elevation={4}
      sx={{
        width: "100%",
        maxWidth: "50px",
        borderRadius: "10px",
      }}
    >
      <nav className="side-bar">
        <IconButton>
          <AcUnitIcon fontSize="small" />
        </IconButton>
        <p>Weather</p>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GridViewIcon fontSize="small" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MapIcon fontSize="small" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocationOnOutlinedIcon fontSize="small" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonthOutlinedIcon fontSize="small" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsOutlinedIcon fontSize="small" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CircleNotificationsIcon fontSize="small" />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <Avatar
              src={profilePic.src}
              sx={{ height: "40px", width: "40px" }}
            />
          </ListItem>
        </List>
      </nav>
    </Paper>
  );
}

export default Sidebar;
