import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"

import { isAuthenticated } from "../../api/user-api"
import { ThemeContext } from "../../context/ThemeContext"
import { useAppDispatch } from "../../store/hooks"
import { removeUser } from "../../store/userSlice"
import "./Navbar.scss"

export const Navbar = () => {
  let dispatch = useAppDispatch()
  let isAuthed = isAuthenticated()
  let navigate = useNavigate()
  let { isDarkMode, toggleTheme } = useContext(ThemeContext)

  function handleClickLogout() {
    dispatch(removeUser())
    navigate("/")
  }

  let navigation = isAuthed ? (
    <>
      <NavLink to={"favorites"}>Favorites</NavLink>
      <NavLink to={"history"}>History</NavLink>
      <button onClick={handleClickLogout}>Logout</button>
    </>
  ) : (
    <>
      <NavLink to={"signin"}>Signin</NavLink>
      <NavLink to={"signup"}>Signup</NavLink>
    </>
  )
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <p>icon</p>
        <NavLink to={"/"}>DogSearch</NavLink>
      </div>
      <div className="navbar-menu">
        <div className="dark-mode" onClick={toggleTheme}>
          {isDarkMode ? "Light mode" : "Dark mode"}
        </div>
        {navigation}
      </div>
    </nav>
  )
}
