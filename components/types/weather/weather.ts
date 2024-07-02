type coordDataDTO = {
  lon: number;
  lat: number;
};
type mainDTO = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};
type windDTO = {
  speed: number;
  deg: number;
};
type weatherDTO = {
  id: 804;
  main: "Clouds";
  description: "overcast clouds";
  icon: "04d";
};
type cloudsDTO = {
  all: string;
};

type sysDTO = {
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
  dt: Date;
  sys: sysDTO;
  timezone: Date;
  name: string;
  cod: number;
};
