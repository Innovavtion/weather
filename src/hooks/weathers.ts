import { useEffect, useState } from 'react'; // Можно убрать, так как с 18 верси React это можно не указывать. Оставлю если нужно будет добавить хуки.
import { IWeatherModels } from '../models';
import axios, { AxiosError } from 'axios';

// Логика app.tsx / Кастомный хук app.tsx

export function useWeathers(city: Array<string>, setCity: any) {
  const [weather, setWeather] = useState<IWeatherModels[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function deleteCity(id: number) {
    const newCity = [...city.filter((_, i) => i !== id)];
    const weatherCity = [...weather.filter((_, i) => i !== id)];

    // Обновляем список городов (название городов, погодная информация, обновление локально хранилища городов)
    setCity(newCity);
    setWeather(weatherCity);
    localStorage.setItem('city', JSON.stringify(newCity));
  }

  async function addCity(textCity: string) {
    const weatherResponse: Array<IWeatherModels> = [];
    if (textCity !== '') {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${textCity}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`,
      );
      weatherResponse.push(data);
    }

    // Обновляем список городов (название городов, погодная информация, обновление локально хранилища городов)
    setCity([...city, textCity]);
    setWeather([...weather, ...weatherResponse]);
    localStorage.setItem('city', JSON.stringify([...city, textCity]));
  }

  async function fetchProduct() {
    try {
      setError('');
      setLoading(true);
      const weatherResponse: Array<IWeatherModels> = [];

      // Выглядит тупо, но через цикл асинхронные запросы не работают, тупо не рендерит компоненты, хотя данные есть
      if (city[0] !== undefined) {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city[0]}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`,
        );
        weatherResponse.push(data);
      }

      if (city[1] !== undefined) {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city[1]}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`,
        );
        weatherResponse.push(data);
      }

      if (city[2] !== undefined) {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city[2]}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`,
        );
        weatherResponse.push(data);
      }

      setWeather([...weatherResponse]);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return { weather, error, loading, deleteCity, addCity };
}
