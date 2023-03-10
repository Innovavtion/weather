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
          <Icons name="sun" color="#111827" size="70" className="icons-card" />
        </div>
        <div className="weather-card weather-card-active active-day">
          <Icons name="sun" color="#111827" size="85" className="icons-card" />
        </div>
        <div className="weather-card right-card">
          <Icons name="sun" color="#111827" size="70" className="icons-card" />
        </div>
      </div>
      <Icons name="setting" color="000000" size="64" className="icon-setting" />
    </div>
  );
}

export default App;
