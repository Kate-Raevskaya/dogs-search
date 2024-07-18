import { lazy } from "react"
import { createBrowserRouter } from "react-router-dom"

import App from "../App"
import { PrivateRoute } from "../components/PrivateRoute/PrivateRoute"
import { NotFound } from "../pages/NotFound/NotFound"

let Home = lazy(() => import("../pages/home/Home"))
let SignupPage = lazy(() => import("../pages/singup/SignupPage"))
let SigninPage = lazy(() => import("../pages/signin/SigninPage"))
let DogPage = lazy(() => import("../pages/dog-page/DogPage"))
let SearchPage = lazy(() => import("../pages/search/SearchPage"))
let HistoryPage = lazy(() => import("../pages/history/HistoryPage"))
let FavoritesPage = lazy(() => import("../pages/favorites/FavoritesPage"))

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "signin",
        element: <SigninPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "dogs/:idParam",
        element: <DogPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "history",
        element: (
          <PrivateRoute>
            <HistoryPage />
          </PrivateRoute>
        ),
      },
      {
        path: "favorites",
        element: (
          <PrivateRoute>
            <FavoritesPage />
          </PrivateRoute>
        ),
      },
    ],
  },
])
