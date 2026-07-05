


export default function NextButton({dispatch , answer}) {
    if(answer === null) return null;
    return (
        <button className="btn brtn-ui" onClick={()=>dispatch({type:"nextQuestion"})}>
            Next Question
        </button>
    )
}