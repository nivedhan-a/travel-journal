import React from "react"
import locationLogo from "../src/assets/location.svg"

export default function Card(props) {
    console.log(props)
    return (
        <div className="card-content">
            <img src= {props.item.img} alt="There should be an image here" className = "card--img"/>
            <div className="card--info">
                <div className="card--loc__maps">
                    <span><img src= {locationLogo}  className="card--location__icon"/></span>
                    <span className="card--location">{props.item.location}</span>
                    <span className="card--maps"><a href={props.item.gmapsLink}>View on Google Maps</a></span>
                </div>
                <h1 className="card--title">{props.item.title}</h1>
                <div className="card--dates"> {`${props.item.startDate} - ${props.item.endDate}`}</div>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    )
}



/* title: "Maui",
location: "Hawaii",
gmapsLink: "https://maps.app.goo.gl/c1tnVLsW6zmnhYYq9",
startDate: "June 8, 2023",
endDate: "June 15, 2023",
description: "Escape to the pristine beaches of Maui, Hawaii, for a rejuvenating beach retreat. Relax in luxury resorts, soak up the sun, and explore the natural beauty of the island.",
img: "https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" */