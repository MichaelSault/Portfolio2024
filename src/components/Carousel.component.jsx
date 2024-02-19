import '../App.css';
import '../styleSheets/carousel.css';

import React, {useState} from "react";

import CarouselItem from './CarouselItem.component';
import FujiImage from '../images/fuji_rainbow.jpg';
import FujiDark from '../images/fuji_dark.jpg';
import Pikachu from '../images/Ash_and_Pikachu_Spearow.png';

function Carousel() {

    const [activeIndex, setActiveIndex] = useState(0);

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
            <div className='carousel-inner' style={{transform: `translate:(-${activeIndex * 100})`}}>
                {items.map((item)=>{
                    return <CarouselItem item={item}/>
                })}
            </div>
            <div className='carousel-buttons'>
                <button>
                    arrow_left
                </button>
                <div className='indicators'>
                    {items.map((item, index)=> {
                        return <button>{index}</button>
                    })}
                </div>
                <button>
                    arrow_right
                </button>
            </div>
            
        </div>
    )
}

export default Carousel;