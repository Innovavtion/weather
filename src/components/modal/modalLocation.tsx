import React, { useState } from 'react';

import Icons from '../icons/icons';

interface IModal {
  modal: boolean;
  city: string[];
  setModal(modal: boolean): void;
  deleteCity(id: number): void;
  addCity(textCity: string): void;
}

export default function modalLocation({ modal, city, setModal, deleteCity, addCity }: IModal) {
  const [text, setText] = useState('');
  const [limitCity, setLimitCity] = useState(false);
  const [existCity, setExistCity] = useState(false);
  const [symbolText, setSymbolText] = useState(false);

  function changeText(currentText: string): void {
    if (currentText.length <= 25) {
      setText(currentText);
    }
  }

  function isValid(currentText: string): boolean {
    const regexp = /^[а-яА-ЯЁё-]+$/;
    return !regexp.test(currentText);
  }

  function textPrettier(currentText: string): string {
    currentText = currentText.trim().toLowerCase();
    setText('');
    if (!currentText) return currentText;
    return currentText[0].toUpperCase() + currentText.slice(1);
  }

  function addNewCity(currentText: string): void {
    currentText = textPrettier(currentText);
    setLimitCity(false);
    setExistCity(false);
    setSymbolText(false);
    setText('');
    let result: boolean = false;
    const symbolCheck: boolean = isValid(currentText);

    // Проходимся по массиву и ищем одинаковый элемент, если есть возвращает false
    result = city.some((item) => item === currentText);

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
      <div className="modal-container">
        <div className="">
          <button onClick={() => setModal(!modal)} className="button-icon icons-close-modal">
            <Icons name="close" color="#ffffff" size="20" />
          </button>
          <div className="flex justify-center text-white font-bold mb-5 text-xl">Настройки отображаемых городов</div>
          <div className="flex flex-wrap sm:flex-nowrap mb-3 justify-center">
            <input
              className="w-full rounded px-3 py-2 border-0 focus:outline-none"
              placeholder="Введите название города"
              value={text}
              onKeyDown={(e) => e.key === 'Enter' && addNewCity(text)}
              onChange={(e) => changeText(e.target.value)}
            />
            <button
              className="flex justify-center bg-gray-700 text-white rounded p-2 sm:ml-0.5 mt-1 w-full sm:w-auto sm:mt-0"
              onClick={() => {
                addNewCity(text);
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
          <div className="flex justify-center text-white font-bold mt-5">Список добавленных городов</div>
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
