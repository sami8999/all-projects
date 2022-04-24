import React from "react"

export default function OpenPage(props){
    
    return (
        <div className="open-page" >

            <div className ="open-page-content">
                <h1>Quizzical</h1>
                <h2>Welcome to my quiz app</h2>
                <button onClick ={props.onChange}>Start quiz</button>    
            </div>
        </div>
        
    )
    
}