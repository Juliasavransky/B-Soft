import React from 'react'
import Star from '../img/star-empty-darkBlue.svg'

function Rating() {
    return (
        <div className="br--rating">
            <div className="br--rating__title">עד כמה היית מרוצה מהעסק?</div>

            <div>
                <div className="br--rating__category" >שירות מקצועי  </div>
                <img src={Star} alt="rating star" />
            </div>




            {/* <div className="br--rating__category"> שירות מקצועי </div>
            <div className="br--rating__category">מחיר ממוצע</div>
            <div className="br--rating__category"> מקצועיות הצוות</div>
            <div className="br--rating__category">זמינות בעל העסק </div>
            <div className="br--rating__category">התרשמות כללית</div> */}
        </div>
    )
}

export default Rating