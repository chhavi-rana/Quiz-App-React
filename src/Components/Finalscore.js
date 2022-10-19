import React, { useState } from 'react'

const Finalscore = (props) => {
  const {score,showHighScore,display} = props
  const [initials,setInitials] = useState("")
  const submitScore =()=>{
    showHighScore()  
    localStorage.setItem(initials,score)
  }
if(display) return (
    <div className="card" id="finalScore">
                <h2>All Done!</h2>
                <p className="description">Your final score is  &nbsp;<span id="scoreValue">{score}</span> </p>
                <span><label htmlFor="initials">Enter Initials:</label>
                <input type="text" id="initials" value={initials} onChange={(e)=>setInitials(e.target.value)}/>   
                &nbsp; &nbsp;<button className="startButton" onClick={submitScore}>Submit</button></span> 
            </div>
  )
else return null;  
}

export default Finalscore