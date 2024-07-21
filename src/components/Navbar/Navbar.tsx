import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"

import { ThemeContext } from "../../context/ThemeContext"
import { useIsLoggedIn } from "../../hooks/useIsLoggedIn"
import moon from "../../icons/moon.svg"
import paw from "../../icons/paw.svg"
import sun from "../../icons/sun.svg"
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
      <div className="navlink logout-button" onClick={handleClickLogout}>
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
        <NavLink className="navlink" to={"/"}>
          <img src={paw} alt="logo" />
          DogSearch
        </NavLink>
      </div>
      <div className="navbar-menu">
        <div className="dark-mode" onClick={toggleTheme}>
          <img src={isDarkMode ? sun : moon} alt="theme" />
        </div>
        {navigation}
      </div>
    </nav>
  )
}
