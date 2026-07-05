import React, { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import Starter from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";

const initialState = {
    questions:[],
    status: "loading",
    index:0,
    answer:null,
    points:0,
}

function reducer(state, action) {
    switch(action.type) {
        case "dataReceived":
            return{
                ...state,
                questions:action.payload,
                status:"Ready"
            };
            case "dataFailed":
                return{
                    ...state, status:"error"
                };
                case "start":
                    return {
                        ...state , status:"Active"
                    }
                    case "newAnswer":
                        const question = state.questions.at(state.index);
                        return{
                            ...state , 
                            answer: action.payload,
                            points: action.payload === question.correctOption ? state.points + question.points : state.points,
                        }
                         case "nextQuestion":
                         return {
                             ...state, index:state.index +1 , answer:null,
                         }
            default:
                throw new Error("Action unKnown")
    }
}

function App(){

    const [{questions , status , index , answer , points} , dispatch] = useReducer(reducer ,  initialState) ;
    const numquestions= questions.length;
    const maxPoints = questions.reduce((prev , cur)=> prev + cur.points , 0);

    useEffect(function () {
        fetch("http://localhost:8000/questions")
        .then((res) =>res.json())
        .then((data)=>dispatch({type: "dataReceived" , payload:data}))
        .catch((err)=>dispatch({type:"dataFailed"}))
        
    },[]);
 return <div className="app"> 
    <Header />
    <Main>
        {status==="loading" && <Loader />}
        {status==="error" && <Error />}
        {status==="Ready" && <Starter numQuestions={numquestions} dispatch={dispatch}/>}
        {status==="Active" && (
            <>
            <Progress index={index} numQuestion={numquestions} maxPoints={maxPoints} points={points} answer={answer}/>
            <Question question={questions[index]} dispatch={dispatch} answer={answer}/>
             <NextButton dispatch={dispatch} answer={answer} />
            </>
)}
    </Main>
 </div>
}


export default App;
