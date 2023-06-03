import React, { useState } from 'react'; // Можно убрать, так как с 18 верси React это можно не указывать. Оставлю если нужно будет добавить хуки.

import Icons from './components/icons/icons';
import Menu from './components/menu/menu';
import Cards from './components/cards/cards';
import ModalLocation from './components/modal/modalLocation';

// Вынес логику в кастомный hooks
import { useWeathers } from './hooks/weathers';

const CityAll: Array<string> = ['Томск', 'Новосибирск', 'Уфа'];

function App() {
  // Использование хука
  const { weather, error, loading } = useWeathers(CityAll);
  const [modal, setModal] = useState(false);

  // Не очень хороший способ добавления парметра key (надо хотябы поставить значение index)
  return (
    <>
      {/* Модалка пока будет здесь */}
      {modal && <ModalLocation modal={modal} setModal={setModal} />}

      <div className="weather-app-container">
        <h1 className="title-text">Weather App</h1>
        <div className="weather-card-container">
          {/* Простенький лоадер start */}
          {loading && <Icons name={`loader`} color="#ffffff" size={'50'} className="icons-card loader" />}

          {/* Простенький вывод error */}
          {error && <p className="text-center text-red-500">{error}</p>}

          {weather.map((weather, index) => (
            <Cards weather={weather} key={index} />
          ))}
        </div>
        <Menu modal={modal} setModal={setModal} />
      </div>
    </>
  );
}

export default App;
