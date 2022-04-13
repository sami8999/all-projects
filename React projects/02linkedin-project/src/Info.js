import React from "react"
import photo from "./images/photo.png"

export default function Info(){
    
    return (
            <div className="info">
                <img src={photo}/>
                <div className = "name">Laura Smith</div>
                <div className = "profession">Frontend Developer</div>
                <div className = "website">laurasmith.website</div>
                <div className = "buttons">
                    <button className = "email">Email</button>
                    <button className = "linkedIn">Linkedln</button>
                </div>
            </div>
        )
}