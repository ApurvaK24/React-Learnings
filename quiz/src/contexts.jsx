import { createContext } from "react";
import { useReducer } from "react";


const initialState ={
    cq: 0,
    questions:[],
}

const reducer = (state, action) =>{
    if(action.type=== 'NEXT_QUESTION'){
        return {...state, cq: state.cq+1};
    }
    return state;
}


export const QuizContext = createContext();

export const QuizProvider = ({ children})=>{

    const value = useReducer(reducer, initialState);
 console.log("render",value);

 return <QuizContext.Provider value={value}>
        {children}
    </QuizContext.Provider>;

   /* return <QuizContext.Provider value="foo">
        {children}
    </QuizContext.Provider>;*/
};


//for global state in react
//global property foo is now accessible everywhere
//wrapped Quiz component in QuizProvider in index.js