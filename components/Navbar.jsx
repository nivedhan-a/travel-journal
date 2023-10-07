import React from "react"
import globeLogo from "../src/assets/globe.svg"

export default function Navbar() {
    return (
        <nav>
            <img className="nav--logo" src={globeLogo} alt="globe" />
            <h1 className="nav--title">My Travel Journal</h1>
        </nav>
    )
}