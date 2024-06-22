import React from "react";
import { Card } from "@mui/material";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import "./currentWeather.css";

function CurrentWeather() {
  return (
    <>
      <Card
        sx={{
          height: "300px",
          width: "300px",
          borderRadius: "10px",
        }}
      >
        <div className="search-icon">
          <IconButton sx={{ backgroundColor: "black" }}>
            <SearchIcon style={{ color: "white" }} />
          </IconButton>
        </div>
        <br />
        <Divider variant="middle" />
      </Card>
    </>
  );
}

export default CurrentWeather;
