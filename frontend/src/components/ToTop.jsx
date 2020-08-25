import React from 'react';
import { animateScroll as Scroll } from 'react-scroll';
import Scrollspy from 'react-scrollspy';

export const ToTop = () => {
    return (
        <Scrollspy items={ ['nav'] } currentClassName="hide">
            <div id="to-top" onClick={()=>{
                Scroll.scrollToTop();
            }}>
                <img src={ require("../img/arrow-up.svg")} alt="up-arrow"/>
            </div>
        </Scrollspy>
    )
}
