import { WeatherApiResponse } from "@/components/types/weather/weather";

export default async function getWeatherData(city: string) {
  // parameter must be defined with declaration of types
  console.log("3", process.env.weather_url);
  console.log("4", process.env.app_id);
  // http {get,request}

  const response = await fetch(
    `${process.env.weather_url}London,uk&APPID=${process.env.app_id}`,
    {
      method: "GET",
    }
  );
  const data = await response.json();

  console.log(data);
}
