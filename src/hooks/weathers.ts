import React, { useEffect, useState } from 'react'; // Можно убрать, так как с 18 верси React это можно не указывать. Оставлю если нужно будет добавить хуки.
import { IWeatherModels } from '../models';
import axios, { AxiosError } from 'axios';

// Логика app.tsx / Кастомный хук app.tsx

export function useWeathers(city: Array<string>) {
  const [weather, setWeather] = useState<IWeatherModels[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchProduct() {
    try {
      setError('');
      setLoading(true);
      const weatherResponse: Array<IWeatherModels> = [];

      // Выглядит тупо, но через цикл асинхронные запросы не работают, тупо не рендерит компоненты, хотя данные есть
      if (city[0] !== '') {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city[0]}&units=metric&appid=8148180ec3c81e66e5f364f1980b484e`,
        );
        weatherResponse.push(data);
      }

      if (city[1] !== '') {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city[1]}&units=metric&appid=8148180ec3c81e66e5f364f1980b484e`,
        );
        weatherResponse.push(data);
      }

      if (city[2] !== '') {
        const { data } = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city[2]}&units=metric&appid=8148180ec3c81e66e5f364f1980b484e`,
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

  return { weather, error, loading };
}
