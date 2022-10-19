import React from 'react'
import Timer from './Timer'

const Header = (props) => {
  const {time,viewScore} = props
    return (
    <header className="header">
    <p id="leaderboard" onClick={viewScore}>View Highscores <i className="fas fa-hand-point-left fa-lg"></i>
        </p>
        <Timer time={time}/>
</header>
  )
}

export default Header
