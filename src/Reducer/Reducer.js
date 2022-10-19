import data from "../Components/Data"


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


const reducer = (state,action) => {
    switch (action.type) {
        case "start": return{...state,questionDisplay:action.payload,introDisplay:false}   
        case "next":
            if(state.counter<4) {
                if(data[state.counter].answer===data[state.counter].options[action.payload]){
                    return{...state,counter:state.counter+1,score:state.score+10,result:"Correct!"}
            }            
                return{...state,counter:state.counter+1,result:state.result+"Incorrect! "}}
            else {
                if(data[state.counter].answer===data[state.counter].options[action.payload]){
                    return{...state,showFinalScore:true,questionDisplay:false,score:state.score+10,time:0,result:"Correct!"}
            }
                return {...state,showFinalScore:true,questionDisplay:false,time:0,result:"Incorrect!"}}
        
        case "submit": return{...state,showFinalScore:false,showHighScore:true,scores:writeScore()}
        
        case "showscore": return {...state,showHighScore:true,introDisplay: false,showFinalScore:false,questionDisplay:false}
        
        case "closeScore": return{ counter:0,showHighScore:false,introDisplay: true,showFinalScore:false,questionDisplay:false,time:0,score:0,scores:writeScore(),result:""}
        case "timer": return {...state,time:action.payload}

    default:
        break;
  }


}

export {reducer,writeScore}
