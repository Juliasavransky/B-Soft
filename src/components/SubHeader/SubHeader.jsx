import React from 'react'
import '../SubHeader/SubHeader.css'

function SubHeader({ text }) {
  return (
    <div className="br--subheader">{text}</div>
  )
}

export default SubHeader;