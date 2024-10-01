import React from "react";
import "./sunChart.css";
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";
import { sysDTO } from "../types/weather/weather";

type Props = {
  sys: sysDTO | undefined;
  dt: number | undefined;
};

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </g>
  );
}
function SunChart({ sys, dt }: Props) {
  const sunrise = (sys?.sunrise ?? 0) * 1000;
  const sunset = (sys?.sunset ?? 0) * 1000;
  const difference = sunset - sunrise;
  const hourly_difference = Math.floor(difference / 1000 / 60 / 60);
  const time_elapsed = Math.min(
    Math.floor(((dt ?? 0) * 1000 - sunrise) / 1000 / 60 / 60),
    hourly_difference
  );
  return (
    <GaugeContainer
      width={230}
      height={90}
      startAngle={-110}
      endAngle={110}
      valueMin={0}
      value={time_elapsed}
      valueMax={hourly_difference}
    >
      <GaugeReferenceArc />
      <GaugeValueArc />
      <GaugePointer />
    </GaugeContainer>
  );
}

export default SunChart;
