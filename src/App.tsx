import React from 'react';
import Icons from './components/icons/icons';

//Надо будет переписать компонент
function App() {
  const hello: string = 'Weather App';

  return (
    <div className="weather-app-container">
      <h1 className="title-text">{hello}</h1>
      <div className="weather-card-container">
        <div className="weather-card left-card">
          <div className="day">Суббота, 10 марта</div>
          <Icons name="cloud-shtil" color="#ffffff" size="85" className="icons-card" />
          <div className="temperature">11°С</div>
          <div className="description">Облачно</div>
          <div className="description-info">
            <div className="humidity">
              <Icons name="humidity" color="#ffffff" size="27" className="mini-icons-card"></Icons>
              <div className="description-text">
                <div>80%</div>
                <div>Humidity</div>
              </div>
            </div>
            <div className="wind-speed">
              <Icons name="wind" color="#ffffff" size="30" className="mini-icons-card"></Icons>
              <div className="description-text">
                <div>3Km/h</div>
                <div>Wind Speed</div>
              </div>
            </div>
          </div>
        </div>
        <div className="weather-card weather-card-active active-day">
          <div className="day">Суббота, 11 марта</div>
          <Icons name="cloud-rain-storm" color="#ffffff" size="115" className="icons-card" />
          <div className="temperature">11°С</div>
          <div className="description">Облачно</div>
          <div className="description-info">
            <div className="humidity">
              <Icons name="humidity" color="#ffffff" size="35" className="mini-icons-card"></Icons>
              <div className="description-text">
                <div>80%</div>
                <div>Humidity</div>
              </div>
            </div>
            <div className="wind-speed">
              <Icons name="wind" color="#ffffff" size="38" className="mini-icons-card"></Icons>
              <div className="description-text">
                <div>3Km/h</div>
                <div>Wind Speed</div>
              </div>
            </div>
          </div>
        </div>
        <div className="weather-card right-card">
          <div className="day">Суббота, 12 марта</div>
          <Icons name="sun" color="#ffffff" size="85" className="icons-card" />
          <div className="temperature">11°С</div>
          <div className="description">Солнечно</div>
          <div className="description-info">
            <div className="humidity">
              <Icons name="humidity" color="#ffffff" size="27" className="mini-icons-card"></Icons>
              <div className="description-text">
                <div>80%</div>
                <div>Humidity</div>
              </div>
            </div>
            <div className="wind-speed">
              <Icons name="wind" color="#ffffff" size="30" className="mini-icons-card"></Icons>
              <div className="description-text">
                <div>3Km/h</div>
                <div>Wind Speed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu">
        <Icons name="setting" color="000000" size="64" className="menu-icon" />
        <div className="menu-background"></div>
        <div className="menu-functional">
          <div>Выбрать город</div>
          <div>Выбрать город</div>
        </div>
      </div>
    </div>
  );
}

export default App;
