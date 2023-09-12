import { createContext } from "react";

//definição do contexto
export const QuizContext = createContext();

//definição do privider
export const QuizProvider = ({children})=>{
	const value = {nome:'Edson'}
	return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}