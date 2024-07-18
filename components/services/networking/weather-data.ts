import { WeatherApiResponse } from "@/components/types/weather/weather";

export default async function getWeatherData(
  city: string
): Promise<WeatherApiResponse> {
  // parameter must be defined with declaration of types
  // http {get,request}

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WEATHER_URL}London,uk&APPID=${process.env.NEXT_PUBLIC_APPID}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();

  return { ...data };
}
