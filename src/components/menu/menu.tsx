import React from 'react'; // Можно убрать, так как с 18 верси React это можно не указывать. Оставлю если нужно будет добавить хуки.

import Icons from '../icons/icons';

function Menu() {
  //Вот и хук собственна.
  const [check, setCheck] = React.useState<boolean>(false);

  return (
    <div className="menu-container">
      <input type="checkbox" className="menu-checkbox" checked={check} readOnly />
      <div className="menu">
        <button onClick={() => setCheck(!check)} className="button-icon">
          <Icons name="setting" color="000000" size="64" className="menu-icon" />
        </button>
        <div className="menu-background"></div>
        <div className="menu-functional">
          <select>
            <option value="Tomsk">Томск</option>
            <option value="Novosibirsk">Новосибирск</option>
            <option value="Tomsk">Томск</option>
            <option value="Novosibirsk">Новосибирск</option>
            <option value="Tomsk">Томск</option>
            <option value="Novosibirsk">Новосибирск</option>
            <option value="Tomsk">Томск</option>
            <option value="Novosibirsk">Новосибирск</option>
            <option value="Tomsk">Томск</option>
            <option value="Novosibirsk">Новосибирск</option>
            <option value="Tomsk">Томск</option>
            <option value="Novosibirsk">Новосибирск</option>
            <option value="Tomsk">Томск</option>
            <option value="Novosibirsk">Новосибирск</option>
            <option value="Tomsk">Томск</option>
            <option value="Novosibirsk">Новосибирск</option>
            <option value="Tomsk">Томск</option>
            <option value="Novosibirsk">Новосибирск</option>
            <option value="Tomsk">Томск</option>
            <option value="Novosibirsk">Новосибирск</option>
            <option value="Tomsk">Томск</option>
            <option value="Novosibirsk">Новосибирск</option>
            <option value="Tomsk">Томск</option>
            <option value="Novosibirsk">Новосибирск</option>
            <option value="Tomsk">Томск</option>
            <option value="Novosibirsk">Новосибирск</option>
            <option value="Tomsk">Томск</option>
            <option value="Novosibirsk">Новосибирск</option>
            <option value="Tomsk">Томск</option>
            <option value="Novosibirsk">Новосибирск</option>
            <option value="Tomsk">Томск</option>
            <option value="Novosibirsk">Новосибирск</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Menu;
