import React from 'react'; // Можно убрать, так как с 18 верси React это можно не указывать. Оставлю если нужно будет добавить хуки.

import Icons from '../icons/icons';

import { IWeatherModels } from '../../models';

interface CardProps {
  weather: IWeatherModels;
}

function Card({ weather }: CardProps) {
  return (
    <div className={`weather-card weather-card-active`}>
      <div className="day">{weather.name}</div>
      <Icons name={weather.weather[0].main} color="#ffffff" size={'115'} className="icons-card" />
      <div className="temperature">{`${Math.round(weather.main.temp)}°С`}</div>
      <div className="description">{weather.weather[0].main}</div>
      <div className="description-additionally">{weather.weather[0].description}</div>
      <div className="description-info">
        <div className="humidity">
          <Icons name="humidity" color="#ffffff" size={'35'} className="mini-icons-card" />
          <div className="description-text">
            <div>{`${weather.main.humidity}%`}</div>
            <div>Humidity</div>
          </div>
        </div>
        <div className="wind-speed">
          <Icons name="wind" color="#ffffff" size={'38'} className="mini-icons-card" />
          <div className="description-text">
            <div>{`${weather.wind.speed} Km/h`}</div>
            <div>Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
