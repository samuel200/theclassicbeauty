import React from 'react'

const Footer = () => {
    return (
        <footer>
            <p>Copyright { (new Date()).getFullYear() }</p>
            <div className="socials">
                <a href="https://wa.me/2349014544829 "><img src={ require("../img/whatsapp.svg")} alt="icon"/> </a>
                <a href="http://www.instagram.com/theclassicbeautynigeria"><img src={ require("../img/instagram.svg")} alt="icon"/> </a>
                <a href="mailto:theclassicbeautynigeria@gmail.com"><img src={ require("../img/mail.svg")} alt="icon"/> </a>
            </div>
        </footer>
    )
}

export default Footer
