import { useState } from "react";
import Card from "../../atoms/card";
import './homeList.css';

function HomeList(){
    const [cardData,setCardData] = useState([
        {title: "Today's Top List", image: "https://t2.genius.com/unsafe/213x213/https%3A%2F%2Fimages.genius.com%2Fd09483e981a419df1cd4489c926e0ebe.640x640x1.jpg", content: "Ariyana grande's top list is here"},
        {title: "Today's Top List", image: "https://t2.genius.com/unsafe/213x213/https%3A%2F%2Fimages.genius.com%2Fd09483e981a419df1cd4489c926e0ebe.640x640x1.jpg", content: "Ariyana grande's top list is here"},
        {title: "Today's Top List", image: "https://t2.genius.com/unsafe/213x213/https%3A%2F%2Fimages.genius.com%2Fd09483e981a419df1cd4489c926e0ebe.640x640x1.jpg", content: "Ariyana grande's top list is here"},
        {title: "Today's Top List", image: "https://t2.genius.com/unsafe/213x213/https%3A%2F%2Fimages.genius.com%2Fd09483e981a419df1cd4489c926e0ebe.640x640x1.jpg", content: "Ariyana grande's top list is here"},
        {title: "Today's Top List", image: "https://t2.genius.com/unsafe/213x213/https%3A%2F%2Fimages.genius.com%2Fd09483e981a419df1cd4489c926e0ebe.640x640x1.jpg", content: "Ariyana grande's top list is here"},
        {title: "Today's Top List", image: "https://t2.genius.com/unsafe/213x213/https%3A%2F%2Fimages.genius.com%2Fd09483e981a419df1cd4489c926e0ebe.640x640x1.jpg", content: "Ariyana grande's top list is here"},
    ]);
    return(
        <div>
            <h2>Recently Played</h2>
            <div className="homelist-container">
                {
                    cardData.map(ele=>(
                        <Card cardData={ele} />
                    ))
                }
            </div>
        </div>
    )
}

export default HomeList;