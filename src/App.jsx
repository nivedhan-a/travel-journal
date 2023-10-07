import React from "react"
import data from "./data"
import Navbar from "../components/Navbar"
import Card from "../components/Card"


function App() {
    const cards = data.map((item) => {
        return (
        	<Card
				key = {item.key}
				item = {item}
            />
        )
    })

  return (
    <div>
    	<Navbar />
		
		<section className = "card-list">
			{cards}
		</section>
		
    </div>
  )
}

export default App
