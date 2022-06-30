import React from 'react';
import PlayButton from '../../atoms/playButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SearchIcon from '@mui/icons-material/Search';
import './navbar.css';

function index() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <PlayButton />
        <FavoriteIcon className="heart" fontSize="large" />
        <ArrowCircleDownIcon fontSize="large" />
        <MoreHorizIcon fontSize="large" />
      </div>
      <div className="navbar-right">
        <SearchIcon fontSize="medium" />
        <div className="custom-order">
          <div>Custom Order</div>
          <ArrowDropDownIcon fontSize="medium" />
        </div>
      </div>
    </div>
  );
}

export default index;
