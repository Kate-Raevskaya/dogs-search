import { NavLink } from "react-router-dom"

import "./Navbar.scss"

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <p>icon</p>
        <NavLink to={"/"}>DogSearch</NavLink>
      </div>
      <div className="navbar-menu">
        <p>darkmode</p>
        <NavLink to={"signin"}>Login</NavLink>
        <NavLink to={"signup"}>Singup</NavLink>
      </div>
    </nav>
  )
}
