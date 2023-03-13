import React from 'react'
import '../review/review-style.css';
import SubHeader from '../sub-header/SubHeader';

const Review = () => {
    return (
        <div className="br--review">
            <SubHeader text={"כמה מילים על החוויה שלך עם העסק"} />
            <textarea
                rows={6}
                className="br--review__input"
                placeholder="יש להקליד כאן..."
            />
        </div>
    )
}

export default Review