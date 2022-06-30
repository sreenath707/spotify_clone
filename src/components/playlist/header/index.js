import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './header.css';

function index() {
  return (
    <div className="header">
      <div className="header-left">
        <div className="header-icon">
          <ArrowBackIosIcon />
        </div>
        <div className="header-icon">
          <ArrowForwardIosIcon />
        </div>
      </div>
      <div className="header-right">
        <button>Upgrade</button>
        <button>Sreenath</button>
      </div>
    </div>
  );
}

export default index;
