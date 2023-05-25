import React from 'react'; // Можно убрать, так как с 18 верси React это можно не указывать. Оставлю если нужно будет добавить хуки.

import Icons from '../icons/icons';

import { WeatherModels } from '../../models';

interface CardProps {
  weather: WeatherModels;
}

function Card({ weather }: CardProps) {
  return (
    <div className={`weather-card ${weather.position}`}>
      <div className="day">{weather.day}</div>
      <Icons name={`${weather.weather}`} color="#ffffff" size="85" className="icons-card" />
      <div className="temperature">{weather.temperature}</div>
      <div className="description">{weather.description}</div>
      <div className="description-info">
        <div className="humidity">
          <Icons name="humidity" color="#ffffff" size="27" className="mini-icons-card" />
          <div className="description-text">
            <div>{weather.humidity}</div>
            <div>Humidity</div>
          </div>
        </div>
        <div className="wind-speed">
          <Icons name="wind" color="#ffffff" size="30" className="mini-icons-card" />
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
