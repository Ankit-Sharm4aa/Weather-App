import { WeatherApiResponse } from "@/components/types/weather/weather";

export default async function getWeatherData(
  city: string
): Promise<WeatherApiResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WEATHER_URL}${city}&APPID=${process.env.NEXT_PUBLIC_APPID}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();

  return { ...data };
}
