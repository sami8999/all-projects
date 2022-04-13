import React from "react"
import image from "../images/react-icon-small.png"

export default function Navbar() {
    return (
        <nav>
            <img src={image} className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">Welcome to React</h4>
        </nav>
    )
}