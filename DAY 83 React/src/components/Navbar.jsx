import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex justify-center items-center gap-x-10 text-sm mb-10">
        <NavLink className={`px-4 py-2 bg-red-900 rounded ${(e) => e.isActive && "text-red-300"}`} to="/">Home</NavLink>
        <NavLink className={`px-4 py-2 bg-red-900 rounded ${(e) => e.isActive && "text-red-300"}`} to="/recipes">Recipe</NavLink>
        <NavLink className={`px-4 py-2 bg-red-900 rounded ${(e) => e.isActive && "text-red-300"}`} to="/About">About</NavLink>
        <NavLink className={`px-4 py-2 bg-red-900 rounded ${(e) => e.isActive && "text-red-300"}`} to="/Create">Create</NavLink>
    </div>
  )
}

export default Navbar
