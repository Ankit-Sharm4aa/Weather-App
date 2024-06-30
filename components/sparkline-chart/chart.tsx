"use client";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";

export default function SparkLine() {
  return (
    <Stack direction="column" sx={{ width: "240px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart
          data={[
            1, 4, 2, 5, 7, 2, 4, 6, 1, 4, 2, 5, 7, 2, 4, 6, 1, 4, 2, 5, 7, 2, 4,
          ]}
          height={45}
        />
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <SparkLineChart
          plotType="bar"
          data={[
            1, 4, 2, 5, 7, 2, 4, 6, 1, 4, 2, 5, 7, 2, 4, 6, 1, 4, 2, 5, 7, 2, 4,
            6, 1, 4, 2, 5, 7, 2, 4, 6, 6, 1, 4, 2, 5, 7, 2, 4, 6,
          ]}
          height={45}
        />
      </Box>
    </Stack>
  );
}
