import { ErrorBoundary } from "react-error-boundary"
import { Outlet } from "react-router-dom"

import { Footer } from "./components/Footer/Footer"
import { Navbar } from "./components/Navbar/Navbar"

const App = () => {
  return (
    <>
      <Navbar />
      <ErrorBoundary fallback={<div>Something went wrong...</div>}>
        <Outlet />
      </ErrorBoundary>
      <Footer />
    </>
  )
}

export default App
