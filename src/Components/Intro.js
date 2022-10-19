import React from 'react'

const Intro = (props) => {
  const {startHandler,display} =props;
 console.log(display)
  
 if(display) return (
    <div  className="card" id="info">
    <h2>Coding Quiz Challenge</h2>
    <p className="description">Try to answer to following code-related questions within the limit time. <br/>
        Keep in mind that incorrect answers will penalize your score/time by ten seconds!</p>
    <button className="startButton" onClick={startHandler}>Start Quiz</button>
    </div>
    )
else return null
}

export default Intro