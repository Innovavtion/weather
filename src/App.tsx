import React, { useState } from 'react'; // Можно убрать, так как с 18 верси React это можно не указывать. Оставлю если нужно будет добавить хуки.

import Icons from './components/icons/icons';
import Menu from './components/menu/menu';
import Cards from './components/cards/cards';
import ModalLocation from './components/modal/modalLocation';

// Вынес логику в кастомный hooks
import { useWeathers } from './hooks/weathers';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards } from 'swiper';

function App() {
  const getCity = JSON.parse(localStorage.getItem('city')!) || [];
  localStorage.setItem('city', JSON.stringify(getCity.slice(0, 3)));

  const [city, setCity] = useState(getCity);
  const [modal, setModal] = useState(false);

  // Использование хука
  const { weather, error, loading, deleteCity, addCity } = useWeathers(city, setCity);

  // Не очень хороший способ добавления парметра key (надо хотябы поставить значение index)
  return (
    <>
      {/* Модалка пока будет здесь */}
      {modal && (
        <ModalLocation modal={modal} setModal={setModal} city={city} deleteCity={deleteCity} addCity={addCity} />
      )}

      <div className="weather-app-container">
        <h1 className="title-text">Weather App</h1>
        <Swiper
          effect={'cards'}
          autoplay={true}
          grabCursor={true}
          cardsEffect={{ slideShadows: false, perSlideOffset: 15 }}
          initialSlide={1}
          modules={[EffectCards]}
          id="swiper"
          className="weather-card-container relative"
        >
          {weather.map((weather, index) => (
            <SwiperSlide key={index}>
              <Cards weather={weather} key={index} />
            </SwiperSlide>
          ))}
          <div className="absolute w-full h-5 min-h-3 max-h-50 flex flex-col justify-center items-center top-2/4">
            {/* Простенький лоадер start */}
            {loading && <Icons name={`loader`} color="#ffffff" size={'50'} className="icons-card loader" />}

            {/* Простенький вывод error */}
            {error && <p className="text-red-500 fixed">{error}</p>}

            {city.length === 0 && <p className="text-cyan-300">Добавте город в настройках</p>}
          </div>
          <Menu modal={modal} setModal={setModal} />
        </Swiper>
      </div>
    </>
  );
}

export default App;
