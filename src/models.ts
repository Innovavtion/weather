// Интерфейс для типизации данных погоды

// Надо будет переписать
export interface IWeatherModels {
  coord?: any;
  weather?: any;
  base?: any;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  visibility?: number;
  wind?: any;
  clouds?: any;
  dt?: number;
  sys?: any;
  timezone?: number;
  id?: number;
  name?: string;
  cod?: number;
}
