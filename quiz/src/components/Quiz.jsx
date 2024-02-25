import React, { useContext, useState } from "react";
import Question from "./Question";
import { useReducer } from "react";
import { QuizContext } from "../contexts";

//make it global so moved to contexts.js
/*const initialState ={
    cq: 0,
    questions:[],
}

const reducer = (state, action) =>{
    if(action.type=== 'NEXT_QUESTION'){
        return {...state, cq: state.cq+1};
    }
    return state;
}*/
const Quiz = () => {
    const [quizState, dispatch]= useContext(QuizContext);
    console.log("quizState", quizState)
    //moved it to context.js 
 /*const [state, dispatch] = useReducer(reducer, initialState);
 console.log("render",state);*/
    //useReducerHOOK
   
    const testclick = () => {
        console.log("clicked");
        dispatch({type: "NEXT_QUESTION"});
        
    }
    return (
        <div className="quiz">
            <div>
                <div className="score">Question 1/8</div>
                {/*pass props of here*/}
                <Question  />
                <div className="next-button" onClick={testclick}>
                    Next Question </div>
            </div>
        </div>
    )


    //simple useStatehook
    /*const [cq,setcq] = useState(0);
    const testclick = () =>{
        console.log("clicked");
        setcq(cq+1);
    }
    return (
        <div className="quiz">
            <div>
                <div className="score">Question 1/8</div>
                <Question />
                <div className="next-button" onClick={testclick}>
                    Next Question {cq}</div>
            </div>
        </div>
    )*/
}
export default Quiz