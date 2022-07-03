import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './playButton.css';

function PlayButton(){
    return(
        <button className='play-button'>
            <PlayArrowIcon fontSize='large'/>
        </button>
    )
}

export default PlayButton;