import React from 'react'
import welcome from '../components/welcome.css'
import Quiz from '../img/quiz.svg'
const Welcome = () => {
  return (
	<div className='welcome'>
		<h2>Seja bem vindo</h2>
		<p>Clique no botão abaixo para começar.</p>
		<button>Iniciar</button>
		<img src={Quiz} alt="inicio do quiz" />
	</div>
  )
}

export default Welcome