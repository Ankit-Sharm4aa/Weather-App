"use client";
import * as React from "react";
import { Gauge } from "@mui/x-charts/Gauge";

export default function GaugeChart() {
  return (
    <Gauge
      width={240}
      height={80}
      startAngle={-90}
      endAngle={90}
      sx={{ fill: "blue", backgroundColor: "white" }}
    />
  );
}
