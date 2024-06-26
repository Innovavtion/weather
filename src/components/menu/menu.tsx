import { useState } from 'react';

import Icons from '../icons/icons';

interface IModal {
  modal: boolean;
  setModal(modal: boolean): void;
}

function Menu({ modal, setModal }: IModal) {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <div className="menu-container">
      <input type="checkbox" className="menu-checkbox" checked={check} readOnly />
      <div className="menu">
        <button onClick={() => setCheck(!check)} className="button-icon">
          <Icons name="setting" color="#111827" size="75" className="menu-icon" />
        </button>
        <div className="menu-functional">
          <button onClick={() => setModal(!modal)} className="button-icon">
            <Icons name={`location`} color="#ffffff" size={'50'} className="icons-card" />
          </button>
        </div>
        <div className="menu-background" />
      </div>
    </div>
  );
}

export default Menu;
