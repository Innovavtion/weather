import React, { useEffect, useState } from 'react'; // Можно убрать, так как с 18 верси React это можно не указывать. Оставлю если нужно будет добавить хуки.
import axios from 'axios';

import Menu from './components/menu/menu';
import Cards from './components/cards/cards';

import { IWeatherModels } from './models';

//Надо будет переписать компонент
function App() {
  // Start - Что нужно переписать
  const [weather, setWeather] = useState<IWeatherModels[]>([]);

  async function fetchProduct() {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Tomsk&units=metric&appid=8148180ec3c81e66e5f364f1980b484e`,
    );
    setWeather([...weather, response.data]);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  console.log(weather);
  // End

  // Не очень хороший способ добавления парметра key (надо хотябы поставить значение index)
  return (
    <div className="weather-app-container">
      <h1 className="title-text">Weather App</h1>
      <div className="weather-card-container">
        {weather.map((weather) => (
          <Cards weather={weather} key="" />
        ))}
      </div>
      <Menu />
    </div>
  );
}

export default App;
