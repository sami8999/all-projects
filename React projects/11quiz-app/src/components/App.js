import React from "react"
import OpenPage from "./OpenPage.js"
import Game from "./Game.js"

export default function App(){
    
    const [gameStarted, setGameStarted] = React.useState(false)
    
    function startGame(){   
        setGameStarted(true)
    }
    
    return (
        <main>
            {gameStarted?
                <Game />
                :<OpenPage onChange = {startGame} />
            }
        </main>
        
    )
    
    
}