import React from 'react'

const Timer = (props) => {
  const {time} = props
    
    return (
    <p id="timer" className="">Time:&nbsp; <span id="time"></span>{time}</p>
  )
}

export default Timer