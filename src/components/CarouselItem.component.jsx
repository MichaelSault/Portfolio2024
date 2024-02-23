import React from "react";
import '../App.css';
import '../styleSheets/carousel.css';

function CarouselItem({item, active}){

    console.log(item.image.default);
    console.log(item.title, active);
    return (
        <div>
            {active = true
                ? <div className="carousel-item">
                    <div></div>
                    <img className="carousel-image" src={item.image}/>
                    <div className="carousel-item-description">{item.description}</div>
                    <div>{active}</div>
                </div>
                : <div>this should be hidden</div>
            }
            
        </div>
            
        
        
    )
}

export default CarouselItem;