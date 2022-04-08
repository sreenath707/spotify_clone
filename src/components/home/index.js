import { useState } from "react";
import "./home.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AddBoxIcon from '@mui/icons-material/AddBox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MainPage from "./mainpage";

function HomePage(){

    const [playlists,setPlaylists] = useState(['telugu','twenty one pilots',"Today's Top Hits", "one direction", "Eminem", "Nial Horam"]);

    return(
        <div className="home">
            <div className="top-home">
                <div className="side-menu">
                    <img className="main-logo" src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"></img>
                    <div className="side-bar-top">
                        <div className="side-bar-tags">
                            <div className="side-bar-tag">
                                <HomeIcon/>
                                <div className="side-bar-tag-name">Home</div>
                            </div>
                            <div className="side-bar-tag">
                                <SearchIcon/>
                                <div className="side-bar-tag-name">Search</div>
                            </div>
                            <div className="side-bar-tag">
                                <LibraryBooksIcon/>
                                <div className="side-bar-tag-name">Your Library</div>
                            </div>

                        </div>
                        <div className="side-bar-tag">
                            <AddBoxIcon/>
                            <div className="side-bar-tag-name">Create Playlist</div>
                        </div>
                        <div className="side-bar-tag">
                            <FavoriteIcon/>
                            <div className="side-bar-tag-name">Liked Songs</div>
                        </div>

                    </div>
                    <div className="side-bar-bottom">
                        {
                            playlists.map(playlist=>(
                                <div className="side-bar-playlist">{playlist}</div>
                            ))
                        }
                    </div>
                </div>
                <MainPage/>
            </div>
            <div className="bottom-home">
            </div>
        </div>
    )
}

export default HomePage;