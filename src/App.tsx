import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
    children: [
      {
        index: true, element: <></>
      },
      {
        path: "signin",
        element: <></>,
      },
      {
        path: "signup",
        element: <></>,
      },
      {
        path: "dogs/:id",
        element: <></>,
      },
      {
        path: "search",
        element: <></>,
      },
      {
        path: "history",
        element: <></>,
      },
      {
        path: "favorites",
        element: <></>,
      },
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
