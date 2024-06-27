import React from "react";
import { Card } from "@mui/material";
import "./map.css";

function Map() {
  return (
    <div className="map-container">
      <h5 className="map-heading">Weather Condition Map</h5>
      <Card className="map"></Card>
    </div>
  );
}

export default Map;
