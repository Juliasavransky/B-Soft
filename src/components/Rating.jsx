import React from 'react'
import Star from '../img/star-empty-darkBlue.svg'

const ratingArray = [
    {
        text: "שירות מקצועי ",
        dataRate: "5",
        src: Star,
        starNum: [1, 2, 3, 4, 5]
    },
    {
        text: " מחיר ממוצע ",
        dataRate: "4",
        src: Star,
        starNum: [1, 2, 3, 4, 5]

    }, {
        text: "  מקצועיות הצוות ",
        dataRate: "3",
        src: Star,
        starNum: [1, 2, 3, 4, 5]

    }, {
        text: " זמינות בעל העסק  ",
        dataRate: "2",
        src: Star,
        starNum: [1, 2, 3, 4, 5]

    }, {
        text: " התרשמות כללית ",
        dataRate: "1",
        src: Star,
        starNum: [1, 2, 3, 4, 5]

    },
]
function Rating() {
    return (
        <div className="br--rating">
            <div className="br--rating__title">עד כמה היית מרוצה מהעסק?</div>

            <div>
                {ratingArray.map((rating, index) => (
                    <div key={index} className="br--rating__category">
                        <div data-rate={rating.dataRate}>  {rating.text} </div>
                        {rating.starNum.map((num) => (
                            <div key={num} className=".br--rating__star" >
                                <img src={rating.src} alt="rating star" />
                                <div>{num}</div>
                            </div>
                        ))
                        }


                    </div>

                ))}

                {/* <img src={rating.src} alt="rating star" />{index + 1}
                        <img src={rating.src} alt="rating star" />{index + 1}
                        <img src={rating.src} alt="rating star" />{index + 1}
                        <img src={rating.src} alt="rating star" />{index + 1}
                        <img src={rating.src} alt="rating star" />{index + 1} */}
            </div>

        </div >
    )
}

export default Rating