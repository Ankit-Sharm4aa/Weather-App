import { ForecastApiResponse } from "@/components/types/weather/forecast";

export default async function getForecastData(
  lat: number,
  lon: number
): Promise<ForecastApiResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_FORECAST_URL}lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_APPID}`,
    {
      method: "GET",
    }
  );
  const forecast_data = await response.json();

  return { ...forecast_data };
}
