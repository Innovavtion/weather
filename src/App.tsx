import React from 'react'; // Можно убрать, так как с 18 верси React это можно не указывать. Оставлю если нужно будет добавить хуки.

import Menu from './components/menu/menu';
import Cards from './components/cards/cards';

import WeatherDatas from './data/Wethears';

//Надо будет переписать компонент
function App() {
  const hello: string = 'Weather App';

  return (
    <div className="weather-app-container">
      <h1 className="title-text">{hello}</h1>
      <div className="weather-card-container">
        <Cards weather={WeatherDatas[0]} />
        <Cards weather={WeatherDatas[1]} />
        <Cards weather={WeatherDatas[2]} />
      </div>
      <Menu />
    </div>
  );
}

export default App;
