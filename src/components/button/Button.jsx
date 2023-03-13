import React from 'react';
import '../button/button.css';

function Button({ text }) {
    return (
        <button className="br--btn" >{text}</button>
    )
}

export default Button