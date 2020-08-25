import React from 'react';
import $ from 'jquery';

const TopBar = () => {
    const handleMenuClick = ()=>{
        console.log("clicked")
        $(".navigation-section").toggleClass('show')
    }

    return (
        <div className="top-bar">
            <img src={ require("../img/classic beauty.png")} alt="logo"/>
            <div className="socials">
                <a href="https://wa.me/2349014544829 "><img src={ require("../img/whatsapp.svg")} alt="icon"/> </a>
                <a href="http://www.instagram.com/theclassicbeautynigeria"><img src={ require("../img/instagram.svg")} alt="icon"/> </a>
                <a href="mailto:theclassicbeautynigeria@gmail.com"><img src={ require("../img/mail.svg")} alt="icon"/> </a>
            </div>
            <div id="menu">
                <img src={ require("../img/menu.svg") } alt="menu"  onClick={handleMenuClick}/>
            </div>
        </div>
    )
}

export default TopBar
