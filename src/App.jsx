import { useState } from "react"
import Navbar from "./Components/Navbar"
import NewsSection from "./Components/NewsSection"


const App = () => {
  const [category, setCategory]= useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsSection category={category}/>
    </div>
  )
}

export default App;