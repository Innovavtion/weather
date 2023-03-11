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
          <Icons name="cloud-shtil" color="#ffffff" size="75" className="icons-card" />
        </div>
        <div className="weather-card weather-card-active active-day">
          <div className="day">Суббота, 11 марта</div>
          <Icons name="cloud-rain-storm" color="#ffffff" size="100" className="icons-card" />
          <div className="temperature">11°С</div>
          <div className="description">Облачно</div>
        </div>
        <div className="weather-card right-card">
          <Icons name="sun" color="#ffffff" size="75" className="icons-card" />
        </div>
      </div>
      <Icons name="setting" color="000000" size="64" className="icon-setting" />
    </div>
  );
}

export default App;
