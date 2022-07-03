import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import { Link } from "react-router-dom";
import './sidebar.css'

function Sidebar( {setIsHome} ) {
  const [playlists, setPlaylists] = useState([
    "telugu",
    "twenty one pilots",
    "Today's Top Hits",
    "one direction",
    "Eminem",
    "Nial Horam",
  ]);

  return (
    <div className="sidebar_menu">
      <Link to="*"><img
        className="main_logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"
        alt="logo"
      ></img></Link>
      <div className="sidebar_top">
        <div className="sidebar_tags">
          <div className="sidebar_tag" onClick={() => {
            setIsHome(true)
          }}>
            <HomeIcon />
            <div className="sidebar_tagname">Home</div>
          </div>
          <div className="sidebar_tag">
            <SearchIcon />
            <div className="sidebar_tagname">Search</div>
          </div>
          <div className="sidebar_tag">
            <LibraryBooksIcon />
            <div className="sidebar_tagname">Your Library</div>
          </div>
          <div className="sidebar_tag">
            <AddBoxIcon />
            <div className="sidebar_tagname" onClick={() => {
              setIsHome(false)
            }}>Create Playlist</div>
          </div>
          <div className="sidebar_tag">
            <FavoriteIcon />
            <div className="sidebar_tagname">Liked Songs</div>
          </div>
        </div>
      </div>
      <div className="sidebar_bottom">
        {playlists.map((playlist) => (
          <div className="side-bar-playlist">{playlist}</div>
        ))}
      </div>
    </div>
  );
}
export default Sidebar;