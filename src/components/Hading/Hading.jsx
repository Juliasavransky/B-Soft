import React from 'react'
import './HadingStyle.css';

const Hading = ({ text }) => {
    return (
        <div className="br--hading">
            <div className="br--hading__text"> {text}</div>
            <div className="br--hading__btn" >&#9932;</div>
        </div>
    )
}

export default Hading;