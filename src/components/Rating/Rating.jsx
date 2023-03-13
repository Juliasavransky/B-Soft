import React, { useState } from 'react'
import '../rating/rating-styles.css';
import FullStar from '../../img/star-full-darkBlue.svg';
import EmptyStar from '../../img/star-empty-darkBlue.svg';
import HalfStar from '../../img/star-half-darkBlue.svg';


const Rating = ({ title }) => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
        <>
            {
                <div className="br--rating__category">
                    <div className="br--rating__title">{title} </div>
                    <div className="br--rating__stars">
                        {[...Array(5)].map((star, index) => (
                            <div key={index} className="br--rating__star" >
                                <label>
                                    <input type="radio"
                                        name={`rating ${star}`}
                                        onClick={() => setRating(index + 1)}
                                    />
                                    <span className="br--rating__label">{index + 1}</span>
                                    <img
                                        onMouseEnter={() => setHover(index + 1)}
                                        onMouseLeave={() => setHover(null)}
                                        src={`${(hover || rating) < index + 1 ? (EmptyStar) : (FullStar || HalfStar)}`}
                                        alt="rating star" />
                                </label>
                            </div>
                        ))
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default Rating

