import React from 'react'
import './ExpCard.css';

const ExpCard = ({details}) => {
  return (
    <div className='workExpcard'>
        <h6>{details.title}</h6>
        <div className='work-dur'>{details.Date}</div>
        <ul>
            {details.res.map((item)=>(
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default ExpCard