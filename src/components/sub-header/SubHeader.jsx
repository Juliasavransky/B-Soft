import React from 'react'
import '../sub-header/sub-header.css';

function SubHeader({ text }) {
  return (
    <div className="br--subheader">{text}</div>
  )
}

export default SubHeader;