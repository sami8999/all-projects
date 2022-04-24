import React from "react"

export default function Question(props){
        
    let answers = props.answers.map(answer =>{
        let styles = {
            background:  
                !props.score ? 
                    answer===props.selected ? "#D6DBF5" : "transparent" 
                :
                answer === props.correctAnswer ? 
                    "#94D7A2" 
                : 
                answer===props.selected ? "#F8BCBC"
                : "transparent"
        }    
        return <button 
                    onClick = {() =>{
                        if (!props.score){
                            props.toggleSelected(props.question, answer)
                        }
                    }} 
                    key ={answer} 
                    style = {styles}
                    className = "answers-button">
                        {answer}
                </button>   
    })
    
    return(
        <div className = "question-container">
            <h2 className = "question">{props.question}</h2>
            {answers}
        </div>
    )
}