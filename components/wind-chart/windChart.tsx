"use client";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { windDTO } from "../types/weather/weather";

type Props = {
  wind: windDTO;
};

export default function WindChart({ wind }: Props) {
  return (
    <Stack direction="column" sx={{ width: "240px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart data={[wind?.speed]} height={45} />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart plotType="bar" data={[wind?.speed]} height={45} />
      </Box>
    </Stack>
  );
}
