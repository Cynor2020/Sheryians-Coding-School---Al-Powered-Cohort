import { Routes, Route } from "react-router-dom"
import Mainroutes from "./routes/Mainroutes"
import Navbar from "./components/Navbar"


function App() {
  return(
    <div className="py-10 px-[10%] w-screen h-screen bg-gray-800 text-white font-thin">
      <Navbar/>
      <Mainroutes />
    </div>
  )
}

export default App
