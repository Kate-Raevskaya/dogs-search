import { NavLink, useNavigate } from "react-router-dom"

import { useIsLoggedIn } from "../hooks/useIsLoggedIn"
import { useAppDispatch } from "../store/hooks"
import { removeUser } from "../store/userSlice"
import "./Navbar.scss"

export const Navbar = () => {
  let dispatch = useAppDispatch()
  let isAuthed = useIsLoggedIn()
  let navigate = useNavigate()

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
        <p>darkmode</p>
        {navigation}
      </div>
    </nav>
  )
}
