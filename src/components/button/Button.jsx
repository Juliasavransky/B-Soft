import React, { useEffect, useState } from 'react';
import '../button/button.css';

function Button({ text }) {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });
    return (
        <button className="br--btn">{windowSize > 767 ? text : "המשך"}</button>
    )
}

export default Button