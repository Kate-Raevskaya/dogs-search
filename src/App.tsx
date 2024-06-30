import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"

import "./App.css"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Outlet></Outlet>,
      children: [
        {
          index: true,
          element: <p>home</p>,
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
  ],
  { basename: "/aston-react" },
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
