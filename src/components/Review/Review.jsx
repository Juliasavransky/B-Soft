import React from 'react'
import './Review.css';
import SubHeader from '../SubHeader/SubHeader';

const Review = () => {
    return (
        <div className="br--review">
            <SubHeader text={"כמה מילים על החוויה שלך עם העסק"} />
            <textarea
                rows={5}
                className="br--review__input"
                placeholder="יש להקליד כאן..."
            />
        </div>
    )
}

export default Review