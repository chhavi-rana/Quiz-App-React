import React from 'react'

const Highscore = (props) => {
  const{closeScore,scores,display} = props

  if(display) return (
    <div className="card" id="highScore">
    <button id="closeScore" onClick={closeScore}>X</button>
    <h2 className="scoreNav">Highscores:</h2>  
    <div id="scoreDiv">
   
  {scores?.map(e=>{
    return(<p>{e}</p> )
  })}
   </div>
    </div>  
    
  )
  else return null
}

export default Highscore