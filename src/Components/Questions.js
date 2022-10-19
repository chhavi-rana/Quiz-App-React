import React from 'react'
import data from "./Data"

const Questions = (props) => {
  const{answerHandler,counter,display,result} = props
   
  if (display) return (
   <div className="card question"  id="question">
    <h2>{data[counter].questionText}</h2>
    <button className="btn" onClick={()=>answerHandler(0)}>{data[counter].options[0]}</button>
    <button className="btn" onClick={()=>answerHandler(1)}>{data[counter].options[1]}</button>
    <button className="btn" onClick={()=>answerHandler(2)}>{data[counter].options[2]}</button>
    <button className="btn" onClick={()=>answerHandler(3)}>{data[counter].options[3]}</button>
    {counter>0?<hr className="ruler"/>:""}
    <span >{result}</span>
    <span ></span>
    
</div>
  )
  else return null
}

export default Questions