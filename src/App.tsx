import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { Outlet } from "react-router-dom"

import { Footer } from "./components/Footer/Footer"
import { Navbar } from "./components/Navbar/Navbar"

const App = () => {
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
