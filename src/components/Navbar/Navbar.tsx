import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"

import { ThemeContext } from "../../context/ThemeContext"
import { useIsLoggedIn } from "../../hooks/useIsLoggedIn"
import { useAppDispatch } from "../../store/hooks"
import { removeUser } from "../../store/userSlice"
import "./Navbar.scss"

export const Navbar = () => {
  let dispatch = useAppDispatch()
  let isAuthed = useIsLoggedIn()
  let navigate = useNavigate()
  let { isDarkMode, toggleTheme } = useContext(ThemeContext)

  function handleClickLogout() {
    dispatch(removeUser())
    navigate("/")
  }

  let navigation = isAuthed ? (
    <>
      <NavLink className="navlink" to={"favorites"}>
        Favorites
      </NavLink>
      <NavLink className="navlink" to={"history"}>
        History
      </NavLink>
      <div className="logout-button" onClick={handleClickLogout}>
        Logout
      </div>
    </>
  ) : (
    <>
      <NavLink className="navlink" to={"signin"}>
        Signin
      </NavLink>
      <NavLink className="navlink" to={"signup"}>
        Signup
      </NavLink>
    </>
  )
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <p>icon</p>
        <NavLink className="navlink" to={"/"}>
          DogSearch
        </NavLink>
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
