import "./home.css";
import Player from "../Player";
import MainPage from "./mainpage";
import Playlist from "../playlist";
import Sidebar from '../sidebar';
import { useState } from "react";
function HomePage() {

  const [isHome,setIsHome]=useState(true);

  return (
    <div className="home">
      <div className="top-home">
        {/* <Playlist /> */}
        <Sidebar setIsHome={setIsHome} />
        {
          isHome ? <MainPage /> : <Playlist /> 
        }
        
        <div className="bottom-home">
          <Player />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
