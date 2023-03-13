import React from 'react'
import './headline-style.css';

const Headline = ({ text }) => {
    return (
        <div className="br--headline">
            <div className="br--headline__text"> {text}</div>
            <div className="br--headline__btn" >&#9932;</div>
        </div>
    )
}

export default Headline;