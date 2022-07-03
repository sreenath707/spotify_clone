import PlayButton from '../../atoms/playButton';
import './mainCard.css';

function MainCard({data}){

    return(
        <div>
           <div className="main-card">
               <div className='main-card-container'>
                    <div className='main-card-img-container'>
                        <img src={data.image}></img>
                    </div>
                    <div className='main-card-title'>{data.title}</div>
                </div>
                <div>
                    <PlayButton/>
                </div>
            </div> 
        </div>
    )
}

export default MainCard;