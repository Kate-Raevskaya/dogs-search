import { Suspense, useEffect } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { Outlet } from "react-router-dom"

import { isAuthenticated } from "./api/user-api"
import { Footer } from "./components/Footer/Footer"
import { Navbar } from "./components/Navbar/Navbar"
import { useAppDispatch } from "./store/hooks"
import { setUser } from "./store/userSlice"

const App = () => {
  let dispatch = useAppDispatch()

  useEffect(() => {
    let userEmail = isAuthenticated()

    if (userEmail) {
      dispatch(setUser({ email: userEmail }))
    }
  }, [dispatch])

  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorBoundary fallback={<div>Something went wrong...</div>}>
          <Outlet />
        </ErrorBoundary>
      </Suspense>

      <Footer />
    </>
  )
}

export default App
