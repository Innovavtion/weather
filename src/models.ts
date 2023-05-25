// Интерфейс для типизации данных погоды
export interface WeatherModels {
  id: number;
  position: string;
  day: string;
  weather: string;
  temperature: string;
  description: string;
  humidity: string;
  windSpeed: string;
}
