export type ForecastApiResponse = {
  city: cityDTO;
  cnt: number;
  cod: string;
  list: listDTO[];
  message: number;
};

type cityDTO = {
  country: string;
  coord: coordDTO;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
};

type coordDTO = {
  lat: number;
  lon: number;
};

type cloudDTO = {
  all: number;
};

type rainDTO = {
  "3h": number;
};

type sysDTO = {
  pod: string;
};

type windDTO = {
  deg: number;
  gust: number;
  speed: number;
};

type weather_obgDTO = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

type weatherDTO = {
  weather_obj: weather_obgDTO;
  length: number;
};

type mainDTO = {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
};

export type listDTO = {
  cloud: cloudDTO;
  dt: number;
  dt_txt: string;
  main: mainDTO;
  pop: number;
  rain: rainDTO;
  sys: sysDTO;
  visibility: number;
  weather: weatherDTO[];
  wind: windDTO;
};
