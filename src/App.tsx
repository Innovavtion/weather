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
        <div className="weather-card-container">
          <div className="flex flex-col justify-center">
            {/* Простенький лоадер start */}
            {loading && <Icons name={`loader`} color="#ffffff" size={'50'} className="icons-card loader" />}

            {/* Простенький вывод error */}
            {error && <p className="text-center text-red-500 fixed right-[35.8%]">{error}</p>}

            {city.length === 0 && (
              <p className="text-center text-cyan-300 fixed right-[38.5%]">Добавте город в настройках</p>
            )}
          </div>
          <Swiper
            effect={'cards'}
            autoplay={true}
            grabCursor={true}
            cardsEffect={{ slideShadows: false, perSlideOffset: 7.5 }}
            modules={[EffectCards]}
          >
            {weather.map((weather, index) => (
              <SwiperSlide key={index}>
                <Cards weather={weather} key={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Menu modal={modal} setModal={setModal} />
      </div>
    </>
  );
}

export default App;
