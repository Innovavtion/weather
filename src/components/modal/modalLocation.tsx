import React, { useState } from 'react';

import Icons from '../icons/icons';

interface IModal {
  modal: boolean;
  setModal: any;
  city: string[];
  deleteCity: any;
  addCity: any;
}
export default function modalLocation({ modal, setModal, city, deleteCity, addCity }: IModal) {
  const [text, setText] = useState('');
  const [limitCity, setLimitCity] = useState(false);
  const [existCity, setExistCity] = useState(false);
  const [symbolText, setSymbolText] = useState(false);

  function changeText(currentText: string) {
    if (currentText.length <= 25) {
      setText(currentText);
    }
  }

  function isValid(currentText: string) {
    const regexp = /^[а-яА-ЯЁё-]+$/;
    return !regexp.test(currentText);
  }

  function textPrettier(currentText: string) {
    currentText = currentText.trim().toLowerCase();
    setText('');
    if (!currentText) return currentText;
    return currentText[0].toUpperCase() + currentText.slice(1);
  }

  function addNewCity(currentText: string) {
    currentText = textPrettier(currentText);
    setLimitCity(false);
    setExistCity(false);
    setSymbolText(false);
    let result: boolean = false;
    const symbolCheck: boolean = isValid(currentText);

    city.map((item) => {
      result = item === currentText ? true : false;
    });

    if (city.length >= 3) {
      setLimitCity(true);
    } else if (result) {
      setExistCity(true);
    } else if (symbolCheck) {
      setSymbolText(true);
    } else if (currentText) {
      return addCity(currentText);
    }
  }

  return (
    <>
      <div className="fixed z-10 bg-black/50 top-0 left-0 right-0 bottom-0" onClick={() => setModal(!modal)} />
      <div className="w-[500px] z-10 p-7 bg-gray-900 absolute top-1/3 left-1/2 -translate-x-1/2 drop-shadow-lg rounded-lg">
        <div className="">
          <button onClick={() => setModal(!modal)} className="button-icon icons-close-modal">
            <Icons name="close" color="#ffffff" size="20" />
          </button>
          <div className="flex justify-center text-white font-bold mb-5 text-xl">Настройки отображаемых городов</div>
          <div className="flex mb-3">
            <input
              className="w-full rounded px-3 py-1 border-0"
              placeholder="Введите название города"
              value={text}
              onKeyDown={(e) => e.key === 'Enter' && addNewCity(text) && setText('')}
              onChange={(e) => changeText(e.target.value)}
            />
            <button
              className="flex justify-center bg-gray-700 text-white rounded p-2 ml-0.5"
              onClick={() => {
                addNewCity(text);
                setText('');
              }}
            >
              Добавить
            </button>
          </div>
          {limitCity && (
            <p className="text-center text-red-500 text-xs">{`Введено максимальное колличество городов (больше 3 нельзя)`}</p>
          )}
          {existCity && <p className="text-center text-red-500 text-xs">{`Нельзя добавлять одинаковые города`}</p>}
          {symbolText && (
            <p className="text-center text-red-500 text-xs mb-2">{`Только на кирилице, а также тере для городов с пробелом`}</p>
          )}
          <div className="flex justify-center text-white font-bold">Список добавленных городов</div>
          <div className="flex justify-center text-white text-xs mb-2">Максимум 3 города</div>
          <div className="text-white">
            {city.map((item: string, index) => {
              return (
                <div className="city-modal" key={index}>
                  <p>{item}</p>
                  <button onClick={() => deleteCity(index)} className="icon-modal-delete">
                    <Icons name="delete" color="#ffffff" size="20" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
