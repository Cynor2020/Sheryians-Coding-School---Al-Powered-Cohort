import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Nav from "./Nav"
import Services from "./Services"
import Product from "./Product";
import Mainrouts from "./Mainrouts"


function App() {
  return(
    <div className="w-screen h-screen bg-gray-800 text-white">
      <Nav/>
      <Mainrouts />
    </div>
  )
}

export default App
