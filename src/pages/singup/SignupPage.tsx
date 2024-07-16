import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { signup } from "../../api/user-api"
import { AuthForm } from "../../components/AuthForm/AuthForm"
import { useAppDispatch } from "../../store/hooks"
import { setUser } from "../../store/userSlice"

const SignupPage = () => {
  let [alreadySigned, setAlreadySigned] = useState(false)

  let dispatch = useAppDispatch()
  let navigate = useNavigate()

  let authError = alreadySigned
    ? "User with this e-mail is already registered"
    : null

  function handleSignup(email: string, password: string) {
    if (signup(email, password)) {
      dispatch(setUser({ email }))
      navigate("/")
    } else {
      setAlreadySigned(true)
    }
  }

  return (
    <div className="signup-container">
      <AuthForm
        handleForm={handleSignup}
        authHeader="Sign up"
        questionText="Already have an account?"
        questionLink="../signin"
        questionTextLink="Sign in"
        authError={authError}
      />
    </div>
  )
}

export default SignupPage
