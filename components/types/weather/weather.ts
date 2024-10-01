type coordDataDTO = {
  lon: number;
  lat: number;
};
export type mainDTO = {
  temp: number | 0;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};
export type windDTO = {
  speed: number;
  deg: number;
  gust: number;
};
export type weatherDTO = {
  id: 804;
  main: "Clouds";
  description: "overcast clouds";
  icon: "04d";
};
type cloudsDTO = {
  all: string;
};

export type sysDTO = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

export type WeatherApiResponse = {
  coord: coordDataDTO;
  weather: weatherDTO[];
  base: string;
  main: mainDTO;
  visibility: number;
  wind: windDTO;
  clouds: cloudsDTO;
  dt: number;
  sys: sysDTO;
  timezone: number;
  name: string;
  cod: number;
};
