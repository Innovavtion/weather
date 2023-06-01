import React from 'react'; // Можно убрать, так как с 18 верси React это можно не указывать. Оставлю если нужно будет добавить хуки.

import Icons from './components/icons/icons';
import Menu from './components/menu/menu';
import Cards from './components/cards/cards';

// Вынес логику в кастомный hooks
import { useWeathers } from './hooks/weathers';

function App() {
  // Использование хука
  const { weather, error, loading } = useWeathers();

  // Не очень хороший способ добавления парметра key (надо хотябы поставить значение index)
  return (
    <div className="weather-app-container">
      <h1 className="title-text">Weather App</h1>
      <div className="weather-card-container">
        {/* Простенький лоадер start */}
        {loading && <Icons name={`loader`} color="#ffffff" size={'50'} className="icons-card loader" />}

        {/* Простенький вывод error */}
        {error && <p className="text-center text-red-500">{error}</p>}

        {weather.map((weather) => (
          <Cards weather={weather} key="" />
        ))}
      </div>
      <Menu />
    </div>
  );
}

export default App;
