import React from 'react';
import Icons from './components/icons/icons';

//Надо будет переписать компонент
function App() {
  const hello: string = 'Weather App';
  return (
    <div className="weather-app-container">
      <h1 className="title-text">{hello}</h1>
      <div className="weather-card-container">
        <div className="weather-card left-card">Left Card</div>
        <div className="weather-card weather-card-active active-day">
          <Icons name="sun" color="000000" size="49" />
        </div>
        <div className="weather-card right-card">Right Card</div>
      </div>
      <Icons
        name="setting"
        color="000000"
        size="64"
        className="duration-300 hover:scale-110 w-14 h-14 md:w-14 md:h-14"
      />
    </div>
  );
}

export default App;
