import './card.css';

function Card({cardData}){
    console.log(cardData);
    return(
        <div className='card'>
            <img className="card-image" src={cardData.image}></img>
            <div className='card-title'>{cardData.title}</div>
            <div className='card-content'>{cardData.content}</div>
        </div>
    )
}

export default Card;