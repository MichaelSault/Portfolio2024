import React from "react";
import '../App.css';
import '../styleSheets/carousel.css';

function CarouselItem({item}){

    console.log(item.image.default);
    return (
        <div className="carousel-item">
            <div></div>
            <img className="carousel-image" src={item.image} width='500px' height='500px'/>
            <div className="carousel-item-description">{item.title}</div>
        </div>
    )
}

export default CarouselItem;