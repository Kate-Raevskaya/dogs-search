import type React from "react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

import "./AuthForm.scss"

type Props = {
  onAuthorizationRequested: (email: string, password: string) => void
  authHeader: string
  questionText: string
  questionLink: string
  questionTextLink: string
  authError: string | null
}

export const AuthForm = ({
  onAuthorizationRequested,
  authHeader,
  questionText,
  questionLink,
  questionTextLink,
  authError,
}: Props) => {
  let [email, setEmail] = useState<string>("")
  let [password, setPassword] = useState<string>("")

  function handleSubmitForm(e: React.FormEvent) {
    e.preventDefault()
    onAuthorizationRequested(email, password)
  }

  return (
    <div className="auth-form-container">
      <h2>{authHeader}</h2>
      <p>Enter your email and password</p>
      <form onSubmit={handleSubmitForm} className="auth-form">
        <label>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            required
          />
          Email
        </label>
        <label>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            minLength={8}
            required
          />
          Password
        </label>
        <button className="auth-button" type="submit">
          {authHeader}
        </button>
      </form>
      {authError ? <p className="auth-error">{authError}</p> : null}
      <p>
        {questionText}
        <NavLink to={questionLink}>{questionTextLink}</NavLink>
      </p>
    </div>
  )
}
