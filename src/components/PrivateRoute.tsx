import type React from "react"
import { Navigate } from "react-router-dom"

import { useIsLoggedIn } from "../hooks/useIsLoggedIn"

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  let isAuthed = useIsLoggedIn()

  return (
    <div className="privat-section-container">
      {isAuthed ? children : <Navigate to="../signin" />}
    </div>
  )
}
