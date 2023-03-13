import React from 'react'
import '../confirmation/confirmation.css';

const Confirmation = () => {
    return (
        <div className="br--confirmation">
            <input type="checkbox" id="box" className="br--confirmation__box" />
            <label
                htmlFor="box"
                className="br--confirmation">קראתי את
                <a href="https://www.b144.co.il/TermsOfService/" > תנאי השימוש  </a>והם מקובלים עלי</label>
        </div>
    )
}

export default Confirmation