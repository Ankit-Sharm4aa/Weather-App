import React from "react";
import { Gauge } from "@mui/x-charts";
import { mainDTO } from "../types/weather/weather";
import { GaugeContainer, GaugeValueArc } from "@mui/x-charts/Gauge";
// 1hpa -> 100hpa // value 1020 barend *100

type Props = {
  main: mainDTO;
};

function AtmPressureChart({ main }: Props) {
  const atm_pressure = main?.pressure;
  console.log("atm_pressure", atm_pressure);
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
