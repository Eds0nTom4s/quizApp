import { createContext,useReducer} from "react";
import questions from '../data/questions'

const STAGES = ["Start","Playing","End"]

const initialState = {
	gameStage: STAGES[0],
	questions
}

const quizReducer = (state,action)=>{
	console.log(state,action)
	switch(action.type){
		case "CHANGE_STATE":
			return {
				...state,
				gameStage:STAGES[1],
			};
		default:
			return state;
	}
}
//definição do contexto
export const QuizContext = createContext();

//definição do privider
export const QuizProvider = ({children})=>{
	const value = useReducer(quizReducer,initialState)
	return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}