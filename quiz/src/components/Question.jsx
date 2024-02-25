import React from "react";
import Answer from "./Answer";
//props
const Question = ({questions}) => {
  console.log("Question",questions);
    return (
        <div>
            <div className="question">Text of Question</div>
            <div className="answers">
                <Answer />
                <Answer />
                <Answer />
                <Answer />
            </div>
        </div>
    )
}
export default Question