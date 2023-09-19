//contexto para gerenciar o compartilhamento de dados do app
import { createContext,useReducer} from "react";
import questions from '../data/questions'

const STAGES = ["Start","Playing","End"]

const initialState = {
	gameStage: STAGES[0],
	questions,
	currentQuestion: 0,
}

const quizReducer = (state,action)=>{
	console.log(state,action)
	switch(action.type){
		case "CHANGE_STATE":
			return {
				...state,
				gameStage:STAGES[1],
			};
		case "REORDER_QUESTIONS":
			const reoarderedQuestion = questions.sort(()=>{
				return Math.random() - 0.5;
			})
			return {
				...state,
				questions: reoarderedQuestion,
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