import React from "react";
import '../App.css';

function CarouselItem({item}){

    console.log(item.image.default);
    return (
        <div className="carousel-item">
            <div></div>
            <img className="carousel-image" src={item.image} width='500px' height='500px'/>
            <div className="carousel-item-title">{item.title}</div>
            <div className="carousel-item-description">{item.description}</div>
        </div>
    )
}

export default CarouselItem;