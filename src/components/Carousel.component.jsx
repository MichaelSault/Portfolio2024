import '../App.css';
import '../styleSheets/carousel.css';

import React, {useState} from "react";

import CarouselItem from './CarouselItem.component';
import MotionData from '../images/MDV.png';
import MotionEmotion from '../images/MaE.png';
import Dog from '../images/daftd.png';
import Wedding from '../images/Wedding.png';

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
            title: "Motion Data Visualizer",
            image: MotionData,
            description: "A hierarchical model of a human skeleton capable of visualizing motion data. [JAVA] [JS]"
        },
        {
            title: "Motion and Emotion",
            image: MotionEmotion,
            description: "A web based animation software using p5.js"
        },
        {
            title: "Did Anyone Feed the Dog?",
            image: Dog,
            description: "This is a full stack application that uses react and mssql to simply track if anyone has fed the dog today."
        },
        {
            title: "Wedding Website",
            image: Wedding,
            description: "A wedding website built in React."
        }
    ]

    return (
        <div className='carousel'>
            <div className='carousel-inner'>
                {items.map((item, index)=>{
                    return (
                        <div>
                            {
                                index===activeIndex
                                ? <CarouselItem item={item} />
                                : <></>
                            }
                            
                        </div>
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