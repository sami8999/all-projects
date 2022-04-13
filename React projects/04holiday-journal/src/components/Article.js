import React from "react"
import location from "../images/location.png"

export default function Article(props){
    
    return (
        <div className = "container">
            <img className = "holiday-image"src = {props.imageUrl}/>    
            <div className = "text-content">
                <div className ="location-title">
                    <img className = "location-image" src={location}/>
                    <p className = "location">{props.location}</p>
                    <a className = "google-maps" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <div className ="main-text">
                <p className ="attraction-title">{props.title}</p>
                <p className = "date">{props.startDate + " - " + props.endDate}</p>
                <p className = "description">{props.description}</p>
                </div>
            </div>
        </div>
    )
    
}

// startDate: "12 Jan, 2021",
//         endDate: "24 Jan, 2021",
//         description: "