import { useReducer, useRef} from "react";
import { reducer } from "./Reducer/Reducer";
import "./App.css";
import Header from "./Components/Header";
import data from "./Components/Data"
import Intro from "./Components/Intro";
import Highscore from "./Components/Highscore";
import Finalscore from "./Components/Finalscore";
import Questions from "./Components/Questions";

let timer;


function App() {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
    showHighScore: false,
    introDisplay: true,
    showFinalScore: false,
    questionDisplay: false,
    time: 50,
    score: 0,
    scores: writeScore(),
    result:""
  });
  
  const timeRef = useRef(50)
 

  const answerHandler = (option) =>{
    if(data[state.counter].answer===data[state.counter].options[option]){}
    else { timeRef.current = timeRef.current-10}
    if(state.counter===4){ timeRef.current=0}
    dispatch({type:"next",payload:option,payload2:timeRef.current})
  }
  const startHandler =()=>{ setTimer();return dispatch({ type: "start", payload: true })}
  


  return (
  <>
  <Header viewScore={()=>dispatch({type:"showscore"})} time={state.time}/>
  <div className="cardholder">
    <Intro display={state.introDisplay} startHandler={startHandler} />
    <Questions display={state.questionDisplay} result={state.result} counter={state.counter} answerHandler={answerHandler}/>
    <Highscore display={state.showHighScore} scores={state.scores} closeScore={() => dispatch({ type: "closeScore" })}/>
    <Finalscore display={state.showFinalScore} showHighScore={() => dispatch({ type: "submit" })} score={state.score} />
  </div>
  </>
  );


  
  function writeScore() {
    let scores =[]
    for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
          let p = key + ": " + localStorage.getItem(key)
         scores.push(p)
      }
    }
    return scores
  }

  function setTimer() {
    timer = setInterval(() => {
      switch (true) {
        case timeRef.current<1:
            clearInterval(timer)
            dispatch({type:"next"})
            timeRef.current=50
          break;
        default: 
            dispatch({type:"timer",payload:--timeRef.current})
          break;
      }
    }, 1000);

  }

}

export default App;
