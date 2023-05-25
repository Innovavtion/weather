import React from 'react'; // Можно убрать, так как с 18 верси React это можно не указывать. Оставлю если нужно будет добавить хуки.

import Icons from '../icons/icons';

import { WeatherModels } from '../../models';

interface CardProps {
  weather: WeatherModels;
}

function Card({ weather }: CardProps) {
  // Кастыльное решение для размеров иконок
  const iconSizeWeather: string = weather.position === 'weather-card-active' ? '115' : '85';
  const iconSizeHumidity: string = weather.position === 'weather-card-active' ? '35' : '27';
  const iconSizeWindSpeed: string = weather.position === 'weather-card-active' ? '38' : '30';

  return (
    <div className={`weather-card ${weather.position}`}>
      <div className="day">{weather.day}</div>
      <Icons name={`${weather.weather}`} color="#ffffff" size={iconSizeWeather} className="icons-card" />
      <div className="temperature">{weather.temperature}</div>
      <div className="description">{weather.description}</div>
      <div className="description-info">
        <div className="humidity">
          <Icons name="humidity" color="#ffffff" size={iconSizeHumidity} className="mini-icons-card" />
          <div className="description-text">
            <div>{weather.humidity}</div>
            <div>Humidity</div>
          </div>
        </div>
        <div className="wind-speed">
          <Icons name="wind" color="#ffffff" size={iconSizeWindSpeed} className="mini-icons-card" />
          <div className="description-text">
            <div>{weather.windSpeed}</div>
            <div>Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
