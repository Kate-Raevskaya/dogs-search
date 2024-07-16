import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { signin } from "../../api/user-api"
import { AuthForm } from "../../components/AuthForm/AuthForm"
import { useAppDispatch } from "../../store/hooks"
import { setUser } from "../../store/userSlice"

const SigninPage = () => {
  let [isSigninError, setIsSigninError] = useState(false)

  let dispatch = useAppDispatch()
  let navigate = useNavigate()

  let authError = isSigninError ? "Login or password isn't correct" : null

  function handleSignin(email: string, password: string) {
    if (signin(email, password)) {
      dispatch(setUser({ email }))
      navigate("/")
    } else {
      setIsSigninError(true)
    }
  }

  return (
    <div className="signin-container">
      <AuthForm
        handleForm={handleSignin}
        authHeader="Sign in"
        questionText="You don't have an account?"
        questionLink="../signup"
        questionTextLink="Sign up"
        authError={authError}
      />
    </div>
  )
}

export default SigninPage
