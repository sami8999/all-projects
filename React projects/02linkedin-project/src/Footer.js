import React from "react"
import twitter from "./images/twitter.png"
import facebook from "./images/facebook.png"
import instagram from "./images/instagram.png"
import github from "./images/github.png"

export default function Footer(){
    
    return(
        
        <div className="footer">
            <div className = "icons">
            <img src={twitter}/>
            <img src={facebook}/>
            <img src={instagram}/>
            <img src={github}/>
            </div>
        </div>
        
    )
    
}