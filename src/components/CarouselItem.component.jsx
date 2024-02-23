import React from "react";
import '../App.css';
import '../styleSheets/carousel.css';

function CarouselItem({item}){

    return (
        <div>
            <div className="carousel-item">
                <div></div>
                <img className="carousel-image" src={item.image}/>
                <div className="carousel-item-description">{item.description}</div>
            </div>            
        </div>
            
        
        
    )
}

export default CarouselItem;