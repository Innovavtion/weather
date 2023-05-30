import React from 'react'; // Можно убрать, так как с 18 верси React это можно не указывать. Оставлю если нужно будет добавить хуки.

import Icons from '../icons/icons';

import { IWeatherModels } from '../../models';

interface CardProps {
  weather: IWeatherModels;
}

// Пока так, но надо будет убрать (сделать отдельный файл)
const dataDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dataMonth = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

function Card({ weather }: CardProps) {
  // Кастыльное решение для размеров иконок
  // const iconSizeWeather: string = weather.position === 'weather-card-active' ? '115' : '85';
  // const iconSizeHumidity: string = weather.position === 'weather-card-active' ? '35' : '27';
  // const iconSizeWindSpeed: string = weather.position === 'weather-card-active' ? '38' : '30';

  // Пока так, но надо будет убрать (сделать отдельный файл)
  const date = new Date();
  const dateWeek: number = Number(date.getDay());
  const dateMonth: number = Number(date.getMonth());
  const day = `${dataDay[dateWeek]}, ${date.getDate()} ${dataMonth[dateMonth]}`;

  return (
    <div className={`weather-card weather-card-active`}>
      <div className="day">{day}</div>
      <Icons name={`sun`} color="#ffffff" size={'115'} className="icons-card" />
      <div className="temperature">{`${Math.round(weather.main.temp)}°С`}</div>
      <div className="description">{weather.weather[0].main}</div>
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
