export default function Progress({index , numQuestion , maxPoints , points , answer}) {
    return(
         <header className="progress">
            <progress max={numQuestion} value={index + Number(answer !== null)}></progress>
           <p>Question <strong>{index + 1}</strong> / {numQuestion } </p>  
           <p>Points: <strong>{points}</strong> / {maxPoints}</p>
         </header>
    )
}