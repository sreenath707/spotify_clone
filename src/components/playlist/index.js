import React from "react";
import Header from "./header";
import "./playlist.css";
import Banner from "./banner";
import NavBar from "./navbar";
import PlayListSongs from "./songs";
import Player from "../Player";
import Sidebar from "../sidebar";

function index() {
  return (
    <div className="playlist">
      <div className="playlist-top">
        <Header />
        <Banner />
      </div>
      <div className="playlist-bottom">
        <NavBar />
        <PlayListSongs />
      </div>
    </div>
  );
}

export default index;
