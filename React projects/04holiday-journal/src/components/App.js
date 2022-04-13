import React from "react"
import Header from "./Header.js"
import Article from "./Article.js"
import data from "../data.js"

export default function App(){
    
    let components = data.map(function(holiday){
        return <Article 
            key ={holiday.title}
            {...holiday}
            />
    })
    
    return(
        <div>
            <Header />
            {components}
        </div>    
    )
    
}