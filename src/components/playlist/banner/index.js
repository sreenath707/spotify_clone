import React from 'react';
import './banner.css';

function index() {
  return (
    <div className="banner">
      <div className="banner-left">
        <img
          src="https://t2.genius.com/unsafe/213x213/https%3A%2F%2Fimages.genius.com%2Fd09483e981a419df1cd4489c926e0ebe.640x640x1.jpg"
          alt="playlist-logo"
        />
      </div>
      <div className="banner-right">
        <h3>PUBLIC PLAYLIST</h3>
        <h1>Latest Telugu</h1>
        <p>New Music From Bollywood! cover: The Warrior</p>
        <div className="playlist-data">
          <img
            src="https://imgs.search.brave.com/Uvz_aVxnWcbEnsLHUhKhk2adQBq6umzS6aw2mV403as/rs:fit:545:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5N/V2lGRE11bXR0aEFW/MFpqUmJfYmF3SGFH/YyZwaWQ9QXBp"
            alt="spotify-logo"
            className="spotify-logo"
          />
          <p>
            Spotify <span className='dot'> . </span>243,869 Likes <span className='dot'> . </span>84 songs, <span>5hr 23min</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;
