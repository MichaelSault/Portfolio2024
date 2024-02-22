import '../App.css';
import '../styleSheets/carousel.css';

import React, {useState} from "react";

import CarouselItem from './CarouselItem.component';
import FujiImage from '../images/fuji_rainbow.jpg';
import FujiDark from '../images/fuji_dark.jpg';
import Pikachu from '../images/Ash_and_Pikachu_Spearow.png';

function Carousel() {

    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0){
            newIndex = items.length-1
        } else if (newIndex > items.length) {
            newIndex = items.length -1;
        } else if (newIndex == items.length) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
        console.log(activeIndex);
    }


    const items = [
        {
            title: "Rainbow on Mt.Fuji",
            image: FujiImage,
            description: "A photo of a double rainbow from mt. fuji"
        },
        {
            title: "Night Hike down Mt.Fuji",
            image: FujiDark,
            description: "Hiking down mt.fuji after dark"
        },
        {
            title: "Ash, Pikachu and 41 Spearow",
            image: Pikachu,
            description: "Ash and Pikachu get chased by a 41 spearow in episode 1."
        }
    ]

    return (
        <div className='carousel'>
            <div className='carousel-inner'>
                {items.map((item, index)=>{
                    return (
                        <CarouselItem item={item} active={`${index===activeIndex? true: false}`}/>
                    )  
                })}
            </div>

            <div className='carousel-buttons'>
                <button onClick={()=> {updateIndex(activeIndex - 1)}} className='button-arrow'>
                    &#60;
                </button>
                <div className='indicators'>
                    {items.map((item, index)=> {
                        return (
                            <button 
                                onClick={()=> {updateIndex(index)}} className="button-indicators">
                                    <span  className={`${index===activeIndex? "indicator-symbol-active": "indicator-symbol"}`}></span>
                                    {index}
                            </button>)
                    })}
                </div>
                <button onClick={()=> {updateIndex(activeIndex + 1)}} className='button-arrow'>
                    &#62;
                </button>
            </div>
            
        </div>
    )
}

export default Carousel;