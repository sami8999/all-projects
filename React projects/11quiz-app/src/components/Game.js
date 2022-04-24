import React from "react"
import Question from "./Question.js"
import randomArrayShuffle from "../utils.js"


export default function Game(props){
    
    let [trivia, setTrivia] = React.useState()
    let [score, setScore] = React.useState("")
    let [playAgain, setPlayAgain] = React.useState(false)
    
    React.useEffect(() =>{    
        fetch("https://opentdb.com/api.php?amount=7&category=17&type=multiple&encode=base64")
            .then(res =>res.json())
            .then(data => {
                let newData = data.results.map(eachQuestion => {
                    let allAnswers = eachQuestion.incorrect_answers.map(element => atob(element))
                    allAnswers.push(atob(eachQuestion.correct_answer))
                    allAnswers = randomArrayShuffle(allAnswers)
                    return {
                        question: atob(eachQuestion.question), 
                        correctAnswer: atob(eachQuestion.correct_answer), 
                        answers: allAnswers,
                        selected: null
                    }
                })
                setTrivia(newData) 
            })
        
    },[playAgain])
    
    
    function toggleSelected(questionPicked, chosenAnswer){
        setTrivia(prevTrivia => {
            let newTrivia = [...prevTrivia]
            let index = newTrivia.findIndex(eachQuestion => eachQuestion.question === questionPicked)
            newTrivia[index].selected = chosenAnswer
            return newTrivia
        })
    }
    
    let questionElements = trivia ? trivia.map(eachQuestion => {
        return <Question 
            key = {eachQuestion.question}
            question ={eachQuestion.question} 
            answers = {eachQuestion.answers}
            toggleSelected = {toggleSelected}
            selected = {eachQuestion.selected}
            correctAnswer = {eachQuestion.correctAnswer}
            score = {score}
        />
    }) : []
    
    function checkAnswers(){
        let score = 0
        let totalScore = trivia.length 
        for (const eachQuestion of trivia){
            if (eachQuestion.correctAnswer === eachQuestion.selected)
            {++score}  
        }
        setScore(`You scored ${score}/${totalScore} correct answers`)
    }
    
    function reset(){
        setScore("")
        setPlayAgain(switchvalue => !switchvalue)
    }
    
    
    return(
        <div className = "game-page">
            {questionElements[0] === undefined ? <h1>Loading...</h1> : <div className="game-grid">

                <div className = "all-questions">
                    {questionElements}
                </div>

                {score ? 
                <div className = "results">
                    <h2 className ="score">{score}</h2> 
                    <button className = "check-answers" onClick = {reset}>Play again</button>
                </div>
                : <button className = "check-answers" onClick = {checkAnswers}>Check answers</button>
                }

            </div>}
        </div>
        
    )
    
    
}