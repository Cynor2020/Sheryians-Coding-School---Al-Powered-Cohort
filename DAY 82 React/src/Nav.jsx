import { Link, NavLink } from "react-router-dom"

function Nav() {
  return (
    <div className="flex justify-center gap-10 p-10">
      <NavLink to="/" className={(e) => (e.isActive ? "text-red-400" : "")}>Home</NavLink>
      <NavLink to="about" className={(e) => (e.isActive ? "text-pink-600" : "")}>About</NavLink>
      <NavLink to="services" className={(e) => (e.isActive ? "text-red-800" : "")}>Services</NavLink>
      <NavLink to="product" className={(e) => (e.isActive ? "text-red-900" : "")}>Products</NavLink>
    </div>
  )
}

export default Nav



