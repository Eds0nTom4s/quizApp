import React from 'react'
import { useContext } from 'react'
import '../components/Welcome.css';
import { QuizContext } from '../context/quiz'

import Quiz from '../img/quiz.svg'


const Welcome = () => {
	const [quizState,dispatch] = useContext(QuizContext);

	
  return (
	<div className='welcome'>
		<h2>Seja bem vindo</h2>
		<p>Clique no botão abaixo para começar.</p>
		<button onClick={()=>dispatch({type:"CHANGE_STATE"})}>Iniciar</button>
		<img src={Quiz} alt="inicio do quiz" />
	</div>
  )
}

export default Welcome