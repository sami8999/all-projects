import React from "react"
import world from "../images/world.png"
export default function Header(){
    
    return (
        <div className = "header">
            <img className = "header--img" src = {world}/>
            <p className="header--title">My travel journal</p>
        </div>
        
    )
    
}