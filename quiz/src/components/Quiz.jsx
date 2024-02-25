import React, { useState } from "react";
import Question from "./Question";
const Quiz = () => {
    const [cq,setcq] = useState(0);
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
    )
}
export default Quiz