import { createBrowserRouter } from "react-router-dom"

import App from "../App"
import { Home } from "../pages/home/Home"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "signin",
        element: <p>signin</p>,
      },
      {
        path: "signup",
        element: <p>signup</p>,
      },
      {
        path: "dogs/:id",
        element: <p>dogs</p>,
      },
      {
        path: "search",
        element: <p>search</p>,
      },
      {
        path: "history",
        element: <p>history</p>,
      },
      {
        path: "favorites",
        element: <p>favorites</p>,
      },
    ],
  },
])
