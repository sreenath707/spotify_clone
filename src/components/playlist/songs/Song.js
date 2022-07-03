import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './song.css';

function Song({ songData }) {
  return (
    <div className="song">
      <div className="song-no">1</div>
      <div className="song-title">
        <img src={songData.logo} alt="song-logo" />
        <div className="song-data">
          <h4 className="song-name">{songData.name}</h4>
          <ul className="song-artists">
            {songData.artists.map((name) => (
              <li>{name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="song-album">
        <h4>{songData.album}</h4>
      </div>
      <div className="song-date-added">
        <h4>{songData.date} days ago</h4>
      </div>
      <div className="song-heart">
        <FavoriteBorderOutlinedIcon />
      </div>
      <div className="song-time">
        <h4>{songData.duration}</h4>
      </div>
      <div className="song-more">
        <MoreHorizIcon />
      </div>
    </div>
  );
}

export default Song;
