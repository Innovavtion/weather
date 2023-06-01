import React from 'react';

interface IModal {
  modal: boolean;
  setModal: any;
}

export default function modalLocation({ modal, setModal }: IModal) {
  return (
    <>
      <div className="fixed z-10 bg-black/50 top-0 left-0 right-0 bottom-0" onClick={() => setModal(!modal)} />
      <div className="w-[500px] z-10 p-7 bg-gray-900 absolute top-1/3 left-1/2 -translate-x-1/2 drop-shadow-lg rounded-lg">
        <div className="">
          <div className="flex justify-center text-white font-bold mb-5 text-xl">Настройки отображаемых городов</div>
          <div className="flex mb-5">
            <input className="w-full rounded px-3 py-1 border-0" placeholder="Введите название города" />
            <button className="flex justify-center bg-gray-700 text-white rounded p-2 ml-0.5">Добавить</button>
          </div>
          <div className="flex justify-center text-white font-bold">Список добавленных городов</div>
          <div className="flex justify-center text-white text-xs mb-2">Максимум 3 города</div>
          <div className="text-white">
            <div className="bg-gray-700 my-0.5 px-3 py-1 rounded">Томск</div>
            <div className="bg-gray-700 my-0.5 px-3 py-1 rounded">Новосибирск</div>
            <div className="bg-gray-700 my-0.5 px-3 py-1 rounded">Москва</div>
          </div>
        </div>
      </div>
    </>
  );
}
