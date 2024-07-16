import type React from "react"
import { Navigate } from "react-router-dom"

import { isAuthenticated } from "../api/user-api"

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  let isAuthed = isAuthenticated()

  return (
    <div className="privat-section-container">
      {isAuthed ? children : <Navigate to="../signin" />}
    </div>
  )
}
