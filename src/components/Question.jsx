import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

const Question = () => {
	const [quizState,dispatch] = useContext(QuizContext)
	const currentQuestion = quizState.questions[quizState.currentQuestion]
	console.log(currentQuestion.questions)
	console.log(quizState)
		return <div className='question'>
			<p>Pergunta de {quizState.currentQuestion  + 1} a {quizState.questions.length}</p>
			<h2>{currentQuestion.question}</h2>
			<div id="option-container">
				<p>Opções</p>
			</div>
			<button>Continuar</button>
		</div>
	}

export default Question