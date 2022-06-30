import "./home.css";
import Player from "../Player";
import MainPage from "./mainpage";
import SideBar from "./sideBar";
import Playlist from "../playlist";
function HomePage() {
  return (
    <div className="home">
      <div className="top-home">
        <SideBar />
        <MainPage />
        {/* <Playlist /> */}
        <div className="bottom-home">
          <Player />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
