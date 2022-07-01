import React from 'react';
import './header.css';
import NavButtons from '../../atoms/navButtons';

function index() {
  return (
    <div className="header">
      <div className="header-left">
        <NavButtons />
      </div>
      <div className="header-right">
        <button>Upgrade</button>
        <button>Sreenath</button>
      </div>
    </div>
  );
}

export default index;
