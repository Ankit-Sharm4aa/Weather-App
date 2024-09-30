import React from "react";
import { Gauge } from "@mui/x-charts";
import { mainDTO } from "../types/weather/weather";
import { GaugeContainer, GaugeValueArc } from "@mui/x-charts/Gauge";

type Props = {
  main: mainDTO;
};

function AtmPressureChart({ main }: Props) {
  const atm_pressure = main?.pressure;
  return (
    <GaugeContainer
      width={230}
      height={90}
      startAngle={-110}
      endAngle={110}
      valueMin={0}
      value={atm_pressure}
      valueMax={2500}
    >
      <GaugeValueArc />
    </GaugeContainer>
  );
}

export default AtmPressureChart;
