import type React from "react"
import { useState } from "react"
import { NavLink } from "react-router-dom"

import paw from "../../icons/paw-white.svg"
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
      <h2 className="header">{authHeader}</h2>
      <div className="auth-form">
        <form onSubmit={handleSubmitForm} className="form">
          <label>
            <p>Email</p>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              required
            />
          </label>
          <label>
            <p>Password</p>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              minLength={8}
              required
            />
          </label>
          <button className="auth-button" type="submit">
            {authHeader}
            <img src={paw} className="paw" alt="paw"></img>
          </button>
          {authError ? <p className="auth-error">{authError}</p> : null}
          <p className="question">
            {questionText}
            <NavLink to={questionLink}>{questionTextLink}</NavLink>
          </p>
        </form>
      </div>
    </div>
  )
}
