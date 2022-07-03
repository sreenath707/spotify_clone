import { useState } from "react";
import './Player.css'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import LoopIcon from '@mui/icons-material/Loop';
import MenuIcon from '@mui/icons-material/Menu';
import SpeakerIcon from '@mui/icons-material/Speaker';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

function Player(){
    const [song,setSong] = useState({
        title : 'Positions',
        img: 'https://upload.wikimedia.org/wikipedia/en/9/93/Vikram_2022_poster.jpg',
        singer: 'Ariyana Grande',
        isLiked: true,
    })
    return (
        <div className="player-container">
            <div className="player-left">
                <img className="player-img" src={song.img}></img>
                <div className="player-content">
                    <div className="player-song-title">{song.title}</div>
                    <div className="player-song-singer">{song.singer}</div>
                </div>
            </div>
            <div className="player-middle">
                <div className="player-icons-container">
                    <ShuffleIcon className="player-icon" fontSize="large"/>
                    <SkipPreviousIcon className="player-icon" fontSize="large"/>
                    <PlayCircleFilledWhiteIcon className="player-icon" fontSize="large"/> 
                    <SkipNextIcon className="player-icon" fontSize="large"/>
                    <LoopIcon className="player-icon" fontSize="large"/>
                </div>
                <div className="player-bar-container">
                    <div className="start-time">2.31</div>
                    <div className="player-bar">
                        <div className="player-bar-fill"></div>
                    </div>
                    <div className="end-time">4.19</div>
                </div>
            </div>
            <div className="player-right">
                <MenuIcon className="player-icon"/>
                <SpeakerIcon className="player-icon"/>
                <div className="player-volume-bar">
                    <div className="player-volume-bar-fill"></div>
                </div>
                <VolumeUpIcon className="player-icon"/>
                <OpenInFullIcon className="player-icon"/>
            </div>
       </div>
    )
}

export default Player;