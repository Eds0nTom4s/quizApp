import { useContext, useEffect } from 'react'
//react , components, arquivos estaticos

import Welcome from './components/Welcome.jsx';
import Question from './components/Question.jsx';
import './App.css';
import { QuizContext } from './context/quiz.jsx';

function App() {
const [quizState,dispatch] = useContext(QuizContext)
useEffect(()=>{
  dispatch({type:"REORDER_QUESTIONS"})
},[])
  return (
    <div className="app">
      <h1>Quiz de programação</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Question/>}
      
    </div>
  )
}

export default App
