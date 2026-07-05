import React from "react";

export default function Question({question , dispatch , answer}){
console.log(question);
        const hasAnswered= answer !== null; 
    return(
        <div>
                <h4>{question.question}</h4>
                <div className="options">
                    {question.options.map((option , index)=>(
                        <button className={`btn btn-option  ${index===answer ? "answer" : ""} 
                           ${hasAnswered ? index===question.correctOption ? "correct" : "wrong" : ""}`}
                          disabled={hasAnswered}    onClick={()=>dispatch({type:"newAnswer" , payload:index})}
                        >
                         {option}
                         </button>
                    ))}
                </div>
        </div>
    )
}