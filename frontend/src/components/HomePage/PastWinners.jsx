import React, {useEffect, useRef} from 'react';

const PastWinners = () => {
    const ref = useRef();

    useEffect(()=>{
        window.M.Carousel.init(ref.current, {});
    }, [])

    return (
        <section className="transparent-section center-align">
            <h1 className="heading">OUR PREVIOUS WINNERS</h1>
            <div class="carousel" ref={ ref }>
                <span class="carousel-item"><img src={ require("../../img/p1.jpeg")}/></span>
                <span class="carousel-item"><img src={ require("../../img/p2.jpeg")}/></span>
                <span class="carousel-item"><img src={ require("../../img/p3.jpeg")}/></span>
                <span class="carousel-item"><img src={ require("../../img/p4.jpeg")}/></span>
                <span class="carousel-item"><img src={ require("../../img/p5.jpeg")}/></span>
            </div>
        </section>
    )
}

export default PastWinners;