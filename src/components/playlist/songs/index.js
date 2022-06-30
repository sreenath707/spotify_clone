import React, { useState } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './songs.css';
import Song from './Song';

function PlayList() {
  const songData = {
    logo: 'https://t2.genius.com/unsafe/213x213/https%3A%2F%2Fimages.genius.com%2Fd09483e981a419df1cd4489c926e0ebe.640x640x1.jpg',
    name: 'Ma Ma Mahesha',
    artists: ['Thaman S', 'Sri Krishna', 'Jonita Gandhi'],
    album: 'Sarkaru Vari Paata',
    date: 7,
    duration: '3:57',
  };

  const [songs, setSongs] = useState([
    songData,
    songData,
    songData,
    songData,
    songData,
    songData,
    songData,
    songData,
    songData,
    songData,
    songData,
    songData,
    songData,
    songData,
    songData,
  ]);

  return (
    <div className="songs">
      <div className="songs-top">
        <div className="no">#</div>
        <div className="title">TITLE</div>
        <div className="album">ALBUM</div>
        <div className="date-added">DATE ADDED</div>
        <div className="time">
          <AccessTimeIcon fontSize="small" />
        </div>
      </div>
      <hr />
      <div className="songs-list">
        {songs.map((song) => (
          <Song key={song.date} songData={song} />
        ))}
      </div>
    </div>
  );
}

export default PlayList;
